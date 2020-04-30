/*------------------------------------------------------------------------------

80SP4-TOOLS.SQL

THIS SCRIPT TAKES THE TOOLS STORED PROCS FROM 8.0, SP1, SP2, AND SP3 TO SP4.

Changes in this file reflects changes in the following files:
	INSTMSDB.SQL
	SQLDMO.SQL
	XPSTAR.SQL
	SQLTRACE.SQL
	WEB.SQL

Notes:
80SP1-TOOLS.SQL, 80SP2-TOOLS.SQL AND 80SP3-TOOLS.SQL
WILL *NOT* RUN WHEN APPLYING SP4
------------------------------------------------------------------------------*/

PRINT N''
PRINT N'Updating database objects, executing 80SP3-TOOLS.SQL'
PRINT N'Started at ' + convert(nvarchar(25), getdate())
PRINT N''
go

--------------------------------------------------------------------------------
-- VERIFY Server is started in single-user-mode (catalog-updates enabled), 
-- and start marking of system-objects.
--------------------------------------------------------------------------------
use master
go

exec dbo.sp_configure 'allow updates',1
go

reconfigure with override
go

exec sp_MS_upd_sysobj_category 1
go



--------------------------------------------------------------------------------
-- BEGIN OF CHANGE SECTION:
-- Add change sprocs between here and the END OF CHANGE SECTION comment.
--------------------------------------------------------------------------------

/**************************************************************/
/* sp_MSobjectprivs                                           */
/**************************************************************/
if exists (select * from master..sysobjects where (OBJECTPROPERTY(id, N'IsProcedure') = 1 or OBJECTPROPERTY(id, N'IsExtendedProc') = 1) and name = N'sp_MSobjectprivs')
    drop procedure dbo.sp_MSobjectprivs
go

print N''
print N'Creating procedure sp_MSobjectprivs...'
go

create proc sp_MSobjectprivs
	@objname nvarchar(776) = null,
	@mode nvarchar(10) = N'object',	
	@objid int = null,				
	@srvpriv int = null,			
	@prottype int = null,			
	@grantee nvarchar(258) = null,		
   @flags int = 0,
   @rollup int = 0
as

	create table #objs(
		id  int NOT NULL
	)

	/* Temp table will hold output for final select */
	create table #output (
		action      int  NOT NULL,
		colid       int  NULL,
		uid         int  NOT NULL,
		protecttype int  NOT NULL,
		id          int  NOT NULL,
		grantor     int
	)

	create table #tmp(
		action   int   NOT NULL,
		uid      int   NOT NULL,
		protecttype int  NOT NULL,
	)

   /* mode    : 'object', 'user' or 'column'*/
   /*
    * Note:  This was expanded for 6.5 due to changes in sysprotects.columns usage, affecting
    * CPermission::ListPrivilegeColumns.  The following additional parameters are for this.
    */
   /* objid   : ID of the object we're querying */
   /* srvpriv : privilege that we're querying for (e.g. select) */
   /* prottype: Protect type, e.g. GRANT/REVOKE */
   /* grantee : Grantee name. */

   /*** @flags added for DaVinci uses.  If the bit isn't set, use 6.5 ***/
   /*** sp_MSobjectprivs '%s'                                         ***/

   /* 8.0: mode 'column', and grantee != null, we want user column level permissions for CTable/CView::ListUserColumnPermissions */
   /*      @rollup added to indicate special rollup result set for column level permission, set to 1 to roll up */

	/* @flags is for daVinci */
	if (@flags is null)
		select @flags = 0

	/* If @objid is not null, this is for the new query for perm cols. */
	if (@objid is not null) begin
		select u.name, o.name, a = col_name(p.id, a.number), a.low, a.high, a.number
			from master.dbo.spt_values a, dbo.sysprotects p, dbo.sysobjects o, dbo.sysusers u
			where p.id = @objid and p.action = @srvpriv and p.protecttype = @prottype
			and p.uid = user_id(@grantee)
			and p.columns != 0x01 and o.id = p.id and u.uid = o.uid
				and convert(tinyint, substring(isnull(p.columns, 0x01), a.low, 1)) &
					-- 6.5 changed so that the bit 0 position is an "invert the bits" indicator:
					--		when 0, behaviour is the same as in prior versions, and other bits
					--			indicate columns with the specified privilege
					--		when 1, the other bits are indicate columns lacking the specified privilege
					a.high <> (case when (substring(isnull(p.columns, 0x00), 1, 1) & 1 = 0) then 0 else a.high end)
					and col_name(p.id, a.number) is not null
					and a.type = N'P' and a.number <= (select count(*) from dbo.syscolumns where id = @objid) order by a
		return 0
	end

	set nocount on

	/*
	 * To get around a 4.21 subquery bug where returning count(*) of 0 (for proc cols)
	 * causes the result set to return no rows, we need two passes; one to get the
	 * objects, and another to explicitly use a value (@cols) instead of a subquery.
	 */
	declare @id int, @uid int, @cols int
	select @id = null, @uid = null
	if (@mode like N'us%') begin
	   select @uid = user_id(@objname)
   end else if (@mode like N'col%') and (@objname is null) and (@grantee is not null) begin
      /* 8.0, special path to get column level permissions from all objects on the specified user */
      select @uid = user_id(@grantee)
	end else begin
      select @id = object_id(@objname)
   end
	if (@id is null and @uid is null) begin
		RAISERROR (15001, -1, -1, @objname)
		return 1
	end

	/* Get a temp list of objects we're interested in.  Do not include repl_* users. */
   /* This is the original code */
   insert #objs select distinct p.id from dbo.sysprotects p
	   where (@id is null or p.id = @id)
  		and (@uid is null or p.uid = @uid)
   	and p.action in (193, 195, 196, 197, 224, 26) and p.uid not in (16382, 16383)

	/* Use a "fake cursor" by deleting successive id's from #objs, as this must run on 4.21 */
	select @id = min(id) from #objs
	while (@id is not null) begin
		select @cols = count(*) from dbo.syscolumns c where c.id = @id
      /* sysprotects.columns is for SELECT and UPDATE, NULL if it is INSERT or DELETE, since INSERT and DELETE can not be applied to column level */
      insert #output select p.action, (case when p.columns is null then -1 else a.number end), p.uid, p.protecttype, p.id, p.grantor
         from master.dbo.spt_values a, dbo.sysprotects p
         where convert(tinyint, substring( isnull(p.columns, 0x01), a.low, 1)) & a.high !=0
         and (p.id = @id)
         and (@uid is null or p.uid = @uid)
         and a.number <= @cols
         and a.type = N'P'

      declare @count int, @whataction int, @whatid int, @dup int, @whatprot int

      /* First pass to correct duplicates */
      select @count = count(*) from #output where id = @id and colid in (0, -1) and protecttype in (205, 204)
      if ( @count > 0 ) begin
         /* We might have duplicate rows for permission on single coulmn(s) at this point */
         /* Use a fake cursor to remove the duplicates first. */
         insert #tmp select action, uid, protecttype from #output where id = @id and colid in (0, -1) and protecttype in (205, 204)
         select @whataction = min(action) from #tmp
         select @whatid = uid from #tmp where action = @whataction
         while (@whataction is not null) begin
            if (@mode like N'col%') and (@objname is null) and (@grantee is not null) begin
               /* Special case for column level permissions on ALL objects for the specified user, we don't want the row(s) on the entire table */
               /* and we don't want the possible duplicate rows in single column(s) */
               delete #output where (@whatid = uid) and (colid not in (0, -1)) and (protecttype in (205, 204)) and action = @whataction
                      and (exists (select * from #output where (@whatid = uid) and (colid in (0, -1)) and action = @whataction) and (id = @id))
               delete #output where (@whatid = uid) and (colid in (0, -1)) and (action = @whataction) and (id = @id)
            end else if (@mode like N'use%') and (@objname is not null) begin
               /* Special case for the user mode, we do want to keep the entire table permissions */
               delete #output where (@whatid = uid) and (colid not in (0, -1)) and (protecttype in (205, 204)) and action = @whataction and (id = @id)
            end else begin
               /* Other cases */
               delete #output where (@whatid = uid) and (colid not in (0, -1)) and (protecttype in (205, 204)) and action = @whataction
            end

            delete #tmp where @whatid = uid
            select @whataction = min(action) from #tmp
            select @whatid = uid from #tmp where action = @whataction
         end
         delete #tmp
      end

      /* Second pass to correct protect type */
      select @count = count(*) from #output where id = @id and colid in (0, -1)
      if ( @count > 0 ) begin
         /* use another fake cursor to correct the protecttype */
         /* if there are multiple rows in #output for the same id and action, and if colid = 0 exist */
         /* then other rows should have different protecttype from the one in colid = 0 row */
         insert #tmp select action, uid, protecttype from #output where id = @id and colid in (0, -1)
         select @whataction = min(action) from #tmp
         select @whatid = uid from #tmp where action = @whataction
         select @whatprot = protecttype from #tmp where uid = @whatid and action = @whataction
         while (@whataction is not null) begin
               delete #output where id = @id and colid not in (0, -1) and @whataction = action and @whatid = uid and @whatprot = protecttype
               delete #tmp where action = @whataction and @whatid = uid
               select @whataction = min(action) from #tmp
               select @whatid = uid from #tmp where action = @whataction
               select @whatprot = protecttype from #tmp where uid = @whatid and action = @whataction
         end
         delete #tmp
      end

		/* Increment our "fake cursor" column and get the next one. */
		delete #objs where id = @id
		select @id = min(id) from #objs
	end

	/*
	 * Organize so that the non-collist privileges are returned first.. this allows
	 * scripting to combine them.  sysprotects.action is tinyint, so the hibyte won't conflict.
	 */

	update #output set action = action | 0x10000000 where colid <> 0

	/*
	 *  BUG 235637  
	 *  Delete the columns that was droped
	 */
	delete from #output where colid not in (0, -1) and col_name(id, colid) is null

	/*
	 * Order output by uid so Public will script before other groups (we need to script privs for public before
	 * other groups, before users; otherwise sysprotects doesn't hold onto things right).  Sub-order is by object id
	 * so we know when we're done with one object and onto the next, then by protecttype to group all GRANTs and
	 * REVOKEs together, and lastly by action (including ORDER_ACTION_BIT so scripting can be more efficient)
	 * because we may have multiple rows for columns.
	 */

	set nocount off
   if (@mode not like N'col%') begin
      /* Mode is not 'column', do the regular stuff */
	   select p.action & ~convert(int, 0x10000000), N'column' = col_name(p.id, p.colid), p.uid, N'username' = user_name(p.uid),
		       p.protecttype, o.name, N'owner' = user_name(o.uid), p.id, N'grantor' = user_name(p.grantor)
             from #output p, dbo.sysobjects o
             where o.id = p.id
             order by p.uid, p.id, p.protecttype, p.action
   end else
   /* Below are spcial cases for column level permissions */
   if (@objname is null) and (@grantee is not null) and (@rollup = 0) begin
      /* 8.0, special path to get column level permissions from all objects on the specified user */
      select N'ObjectName' = o.name, N'Owner' = user_name(o.uid), N'ColumnName' = col_name(p.id, p.colid), o.sysstat & 0x0f, p.id,
             p.action & ~convert(int, 0x10000000), p.protecttype
             from #output p, dbo.sysobjects o
             where p.id = o.id and p.uid = user_id(@grantee) and col_name(p.id, p.colid) is not null
             order by p.uid, p.id, p.protecttype, p.action
	end else if (@objname is not null) and (@grantee is not null) and (@rollup = 0) begin
      /* 8.0, mode 'column', and grantee != null, we want column level permissions on this object for this user */
      select N'column' = col_name(p.id, p.colid), N'owner' = user_name(o.uid), N'username' = user_name(p.uid), o.sysstat & 0x0f, p.id,
             p.action & ~convert(int, 0x10000000), p.protecttype
             from #output p, dbo.sysobjects o
             where o.id = p.id and p.uid = user_id(@grantee) and col_name(p.id, p.colid) is not null
             order by p.uid, p.id, p.protecttype, p.action
   end else if (@objname is not null) and (@grantee is null) and (@rollup = 0) begin
      /* 8.0, mode 'column', and grantee = null, we want column level permissions on this object for all users */
      select N'column' = col_name(p.id, p.colid), N'owner' = user_name(o.uid), N'username' = user_name(p.uid), o.sysstat & 0x0f, p.id,
             p.action & ~convert(int, 0x10000000), p.protecttype
             from #output p, dbo.sysobjects o
             where o.id = p.id and col_name(p.id, p.colid) is not null
             order by p.uid, p.id, p.protecttype, p.action
   end else if (@objname is null) and (@grantee is not null) and (@rollup <> 0) begin
      /* 8.0, roll up version of the special path to get column level permissions from all objects on the specified user */
      select distinct N'ObjectName' = o.name, N'owner' = user_name(o.uid),
             N'Select' = (case when ((p.action & ~convert(int, 0x10000000))=193) then 1 else 0 end),
             N'Update' = (case when ((p.action & ~convert(int, 0x10000000))=197) then 1 else 0 end),
             N'Type' = p.protecttype
             from #output p, dbo.sysobjects o
             where p.id = o.id and p.uid = user_id(@grantee) and col_name(p.id, p.colid) is not null
             order by o.name
   end else if (@objname is not null) and (@grantee is null) and (@rollup <> 0) begin
      /* 8.0, roll up version of the special path to return column level permissions on this object for all users */
      select distinct N'UserName' = user_name(p.uid),
             N'Select' = (case when ((p.action & ~convert(int, 0x10000000))=193) then 1 else 0 end),
             N'Update' = (case when ((p.action & ~convert(int, 0x10000000))=197) then 1 else 0 end),
             N'Type' = p.protecttype
             from #output p, dbo.sysobjects o
             where o.id = p.id and col_name(p.id, p.colid) is not null
             order by user_name(p.uid)
   end else begin
      raiserror 55555 N'Invalid parameter combinations.'
		return 1
   end
go
/* End sp_MSobjectprivs */

exec sp_MS_marksystemobject sp_MSobjectprivs
go

grant execute on sp_MSobjectprivs to public
go

/**************************************************************/
/* sp_MSloginmappings                                           */
/**************************************************************/
if exists (select * from master..sysobjects where (OBJECTPROPERTY(id, N'IsProcedure') = 1 or OBJECTPROPERTY(id, N'IsExtendedProc') = 1) and name = N'sp_MSloginmappings')
    drop procedure dbo.sp_MSloginmappings
go

print N''
print N'Creating procedure sp_MSloginmappings...'
go

create proc sp_MSloginmappings
	@loginname nvarchar(258) = null, @flags int = 0
as

	create table #loginmappings(
		LoginName  nvarchar(128) NULL,
		DBName     nvarchar(128) NULL,
		UserName   nvarchar(128) NULL,
		AliasName  nvarchar(128) NULL
	)

	/*
	 * @flags bits:
	 *		0x01	- current db only
	 */
	/*
	 * Added @dbname so dbo can see everyone in current database.
	 * Use hacky 4.21 syntax so it will run there, instead of a case..when.
	 */
	declare @checkmultilogin int
	select @checkmultilogin = 1
	if ((@flags & 0x01 <> 0) and user_id() = 1)
		select @checkmultilogin = 0

	declare @logincount int
	select @logincount = 0
	if (@loginname is not null)
		select @logincount = count(*) from dbo.syslogins where loginname = @loginname

	/* Gotta be sa or dbo to see other than just current login. */
	declare @numlogins int, @whereloginname nvarchar(258), @name nvarchar(258), @retval int
	if (@loginname is null)
		select @numlogins = 2
	else
		select @numlogins = count(*) from dbo.syslogins where loginname = @loginname

	if (@numlogins = 0) begin
		RAISERROR (15007, -1, -1, @loginname)		/* Login not found */
		return 1
	end
	if (@checkmultilogin <> 0) begin
      /* We do not want to allow everybody to execute this SP */
		if (is_member(N'db_ddladmin') <> 1 and is_member(N'db_owner') <> 1 and is_member(N'db_accessadmin') <> 1 and is_member(N'db_securityadmin') <> 1 and (@numlogins > 1 or suser_sid() <> suser_sid(@loginname))) begin
			RAISERROR (14301, -1, -1, N'')				/* Only sa can see other than the current login */
			return 1
		end
	end
	if (@loginname is not null)
		select @whereloginname = N' and loginname = ' + QUOTENAME(@loginname, '''')
	else
		select @whereloginname = N' '

	/*
	 * This proc returns a result set with one or more rows for each database for which a login is a user or aliased to one.
	 * If loginname is specified, the results are limited to that login.  First load a temp table with all logins that are
	 * in a db, then add those which aren't mapped to any db.
	 */
	if (@flags & 0x01 <> 0) begin
		INSERT #loginmappings select l.loginname, db_name(), u.name, null from master.dbo.syslogins l, dbo.sysusers u where l.sid = u.sid and l.loginname is not NULL
		/*
		 * We only allow multi-db on a 6.x server because dynamic exec() didn't exist before then,
		 * hence there is no way to loop thru every database.  This is caught in SQLDMO so no
		 * need for error message here; we'll just return no result sets.
		 */
	end else begin
		exec @retval = sp_MSforeachdb
			N'use [?] INSERT #loginmappings select l.loginname, db_name(), u.name, null from master.dbo.syslogins l, dbo.sysusers u where l.sid = u.sid and l.loginname is not NULL'
		if (@retval <> 0)
			return 1
		insert #loginmappings select l.loginname, null, null, null from master.dbo.syslogins l where l.loginname not in (select LoginName from #loginmappings) and l.loginname is not NULL
	end

	/*
	 * Now bring them out by loginname, each in its own result set.
	 * If this is for all logins, we'll return all logins; if for curdb,
	 * only those in #loginmappings (i.e. only those mapped in curdb).
	 */
	exec(N'declare hCForEachLogin cursor global for select loginname from master.dbo.syslogins where loginname is not NULL ' + @whereloginname + N' order by loginname')
	if (@@error = 0)
		open hCForEachLogin
	if (@@error <> 0)
		return @@error
	fetch hCForEachLogin into @name
	while (@@fetch_status >= 0) begin
      /* Use '=' instead of 'LIKE' in comparision, so we can handle wide card character correctly */
		if ((@flags & 0x01 = 0) or exists (select * from #loginmappings where LoginName = @name))
			select * from #loginmappings where LoginName = @name
		fetch hCForEachLogin into @name
	end /* FETCH_SUCCESS */
	close hCForEachLogin
	deallocate hCForEachLogin
	return @@error
go
/* End sp_MSloginmappings */

exec sp_MS_marksystemobject sp_MSloginmappings
go

grant execute on sp_MSloginmappings to public
go

/**************************************************************/
/* sp_resolve_logins                                          */
/**************************************************************/
if exists (select * from master.dbo.sysobjects where name = N'sp_resolve_logins' and type = N'P')
	drop procedure sp_resolve_logins
go

print N''
print N'Creating procedure sp_resolve_logins...'
go

create procedure sp_resolve_logins
    @dest_db         sysname
   ,@dest_path       nvarchar(255)
   ,@filename        nvarchar(255)
as
   -- SETUP RUNTIME OPTIONS AND 
   -- DECLARE VARIABLES
   SET NOCOUNT ON
   
   DECLARE   @retcode         int            -- return value of xp call
            ,@datafiletype    varchar(255)
            ,@command         nvarchar(512)
            ,@lgnname         sysname
            ,@lgnsid          varbinary(85)
            ,@usrname         sysname
            ,@file_path       nvarchar(512)
            ,@database_name   nvarchar(512)

   -- CHECK PERMISSIONS
   IF (ISNULL(IS_SRVROLEMEMBER(N'sysadmin'), 0) <> 1)
   BEGIN
     RAISERROR(15247, 16, 1)
     RETURN(1) -- Failure
   END

   -- ERROR IF IN USER TRANSACTION
   IF @@trancount > 0
   BEGIN
        raiserror(15289,-1,-1)
        RETURN (1)
   END

   -- Validate the directory the dat file is in.
   -- Remove heading and trailing spaces
   SELECT @dest_path = RTRIM(LTRIM(@dest_path))
   
   -- If the last char is '\', remove it.
   IF substring(@dest_path, len(@dest_path),1) = '\'
      SELECT @dest_path = substring(@dest_path, 1, len(@dest_path)-1)

   -- Don't do validation if it is a UNC path due to security problem.
   -- If the server is started as a service using local system account, we
   -- don't have access to the UNC path.
   IF substring(@dest_path, 1,2) <> '\\'
   BEGIN
       SELECT @command = 'dir ' + QUOTENAME(@dest_path, '"')
       exec @retcode = master..xp_cmdshell @command, 'no_output'
       IF @@error <> 0
          RETURN (1)
       IF @retcode <> 0 
       BEGIN
          raiserror (14430, 16, -1, @dest_path)              
          RETURN (1)
       END
   END


   -- CREATE the temp table for the datafile
   -- This method ensures we are always getting the
   -- real table definition of the syslogins table.
   SELECT   *
   INTO     #sysloginstemp
   FROM     syslogins
   WHERE    sid = 0x00

   truncate TABLE #sysloginstemp

   -- BULK INSERT the file into the temp table.

   -- build file path and properly escape the string
   SET      @file_path = @dest_path + '\' + @filename
   SET      @file_path = QUOTENAME(@file_path, '''')
   SET      @datafiletype   =  '''widenative'''

   EXEC('
        BULK INSERT #sysloginstemp 
        FROM ' + @file_path + '
        WITH (
                DATAFILETYPE = ' + @datafiletype + '
               ,KEEPNULLS)
       ')

   -- UPDATE the SID in the destination database to the value in the current server's 
   -- syslogins table ensuring that the names match between the source and destination 
   -- syslogins tables.  Do this by cursoring through each login and executing
   -- sp_change_users_login for each login that require a SID resynch.

   -- DECLARE & OPEN CURSOR over old login names
	DECLARE loginmapping CURSOR LOCAL FOR SELECT name, sid FROM #sysloginstemp
	OPEN loginmapping

	FETCH loginmapping INTO @lgnname, @lgnsid
	WHILE (@@fetch_status >= 0)
	BEGIN

      -- GET NAME OF USER THAT NEEDS TO BE RE-MAPPED FOR THIS LOGIN
		SELECT @usrname = NULL		-- INIT TO NULL IN CASE OF NO MATCH
		SELECT @usrname = u.name
	     FROM dbo.sysusers u
            ,master.dbo.syslogins l
		 WHERE u.sid = @lgnsid 
         AND l.loginname = @lgnname 
         AND l.sid <> u.sid
			 
		-- IF WE HAVE A USER NAME, DO THE REMAPPING
		SET @database_name = QUOTENAME(@dest_db, N'[')
		IF @usrname IS NOT NULL
			EXEC ('EXEC ' + @database_name + '.dbo.sp_change_users_login Update_One, ' + @usrname + ',' + @lgnname)

		-- GET NEXT LOGIN-MAPPING
		FETCH loginmapping INTO @lgnname, @lgnsid
	END

   CLOSE loginmapping
   DEALLOCATE loginmapping

   -- RETURN SUCCESS/FAILURE
   IF @@ERROR <> 0
      RETURN (1)
   RETURN  (0)
go
/* End sp_resolve_logins */

EXEC dbo.sp_MS_marksystemobject sp_resolve_logins
go


--------------------------------------------------------------------------------
-- SQLDMO stored procedures added after release into sqldmo.sql file
--
-- sp_MStablekeys
--------------------------------------------------------------------------------
if exists (select * from master.dbo.sysobjects where (OBJECTPROPERTY(id, N'IsProcedure') = 1 or OBJECTPROPERTY(id, N'IsExtendedProc') = 1) and name = N'sp_MStablekeys')
	drop procedure sp_MStablekeys
go

create procedure sp_MStablekeys
@tablename nvarchar(776) = null, @colname nvarchar(258) = null, @type int = null, @keyname nvarchar(517) = null, @flags int = null
as



	create table #tempID
	   (
      cName nvarchar(132) COLLATE database_default NOT NULL,      /* Index name */
      cPK1  int, cPK2  int, cPK3  int, cPK4  int, cPK5  int, cPK6  int, cPK7  int, cPK8  int,
      cPK9  int, cPK10 int, cPK11 int, cPK12 int, cPK13 int, cPK14 int, cPK15 int, cPK16 int    /* 1 if DESC  */
      )

   create table #tempID2
      (
      cPKName  nvarchar(132) COLLATE database_default NOT NULL,      /* PK name */
      cPK      int                                   /* Combined info for PK */
      )

	create table #spkeys
	(
		cType          tinyint NOT NULL, /* key Type */
		cName          nvarchar(258) COLLATE database_default NOT NULL, /* key Name */
		cFlags         int  NULL,  /* e.g., 1 = clustered for PK/Unique */
		cColCount      int  NULL,  /* number of columns (or column pairs) in the key */
		cFillFactor    tinyint NULL, /* Fill factor of index creation */
		cRefTable      nvarchar(520) COLLATE database_default NULL,		/* owner-qual Referenced table name for FKs */
		cRefKey        nvarchar(260)  COLLATE database_default NULL,		/* name of referenced key in referenced table */
			-- Note:  cConstID replaces the column list used in 6.0, for speed.
			-- The output set MUST replace this with either index_col(@tablename, cIndexID, 1-16) and NULL * 16
			-- (for PK/UQ) UNION col_name(r.fkeyid, r.fkey1-16) and col_name(r.rkeyid, r.rkey1-16), for SQLDMO,
			-- and these MUST BE nvarchar(132) for alignment in the SQLDMO cache structure!
		cConstID       int  NULL, /* Reference constraint ID, if Foreign Key  */
		cIndexID       int  NULL, /* ID of this key's index, if PK/UQ */
		cGroupName     sysname COLLATE database_default  NULL,  /* FileGroup name of this key, if PK/UQ */
		cDisabled      int  NULL,  /* 0 if enabled, 1 if disabled */
		cPrimaryFG     int  NULL,  /* 1 if primary FG, 0 otherwise */
      cDeleteCascade int  NULL,    /* 1 if it is a foreign key constraint with a cascade delete */
      cUpdateCascade int  NULL     /* 1 if it is a foreign key constraint with a cascade update */
	)

	/* This proc returns the table's DRI keys.  @type is the type(s) of key(s) to return. */
	/* Make sure @type is only the key types (DRI_PRIMARYKEY, DRI_UNIQUE, DRI_REFERENCE). */
	if (@type is null)
		select @type = 0x000e
	else
		select @type = @type & 0x000e

	/* Flags usage:  For daVinci, to pass call thru to sp_MStablerefs. */
	if (@flags is null)
		select @flags = 0

	set nocount on
	declare @cType int, @cName nvarchar(258), @cFlags int, @cRefTable nvarchar(520), @fillfactor tinyint
	declare @objid int, @constid int, @indid int, @keycnt int, @q1 nvarchar(2000), @q2 nvarchar(2000), @objtype int, @groupname sysname
	declare @haskeytypes int, @wantkeytypes int
   declare @cDisabled int, @PrimaryFG int, @cDeleteCascade int, @cUpdateCascade int

	/* First see if @keyname was defined, and override @tablename and @type if so. */
	if (@keyname is not null)
	begin
         select @objid = id, @type = power(2, status & 0x0f) from dbo.sysconstraints where constid = object_id(@keyname)
         if (@objid is null)	begin
            RAISERROR (15001, -1, -1, @keyname)
            return 1
         end
         /* Now get the tablename for the index_col below */
         select @tablename = N'[' + REPLACE(user_name(uid), N']', N']]') + N']' + N'.' + N'[' + REPLACE(name, N']', N']]') + N']' from dbo.sysobjects where id = @objid
	end else begin
		/* Want all keys for this table (of @type type). */
		select @objid = id, @objtype = (case when OBJECTPROPERTY(id, N'IsTable') = 1 then 1 else 0 end), @haskeytypes = category & 0x0604
			from dbo.sysobjects where id = object_id(@tablename)
		if (@objid is null)	begin
			RAISERROR (15001, -1, -1, @tablename)
			return 1
		end
		if (@objtype <> 1)	begin
			RAISERROR (15218, -1, -1, @tablename)
			return 1
		end
		if @colname is not null and not exists (select * from dbo.syscolumns where id = @objid and name = @colname) begin
			RAISERROR (15253, -1, -1, @colname, @tablename)
			return 1
		end

		/* Skip cursor opening if we don't have any keys (of the type wanted); return a set anyway, for the cache. */
		if (@haskeytypes = 0)
			goto ReturnSet

		/* Map from the input bitmask to the category bitmask */
		select @wantkeytypes = 0
		if ((@type & power(2, 1)) <> 0)
			select @wantkeytypes = @wantkeytypes | 0x200
		if ((@type & power(2, 2)) <> 0)
			select @wantkeytypes = @wantkeytypes | 0x400
		if ((@type & power(2, 3)) <> 0)
			select @wantkeytypes = @wantkeytypes | 0x4
		if ((@haskeytypes & @wantkeytypes) = 0)
			goto ReturnSet
	end

	/* Preprocessor won't replace within quotes so have to use str(). */
	declare @sysgenname nvarchar(12), @pkstr nvarchar(12), @uqstr nvarchar(12), @fkstr nvarchar(12), @objtypebits nvarchar(12)
	select @sysgenname = ltrim(str(convert(int, 0x00020000)))
	select @pkstr = ltrim(str(convert(int, 1)))
	select @uqstr = ltrim(str(convert(int, 2)))
	select @fkstr = ltrim(str(convert(int, 3)))
	select @objtypebits = ltrim(str(convert(int, 0x0f)))

	/* Other ints we need strings for */
	declare @objidstr nvarchar(12), @typestr nvarchar(12)
	select @objidstr = ltrim(str(@objid))
	select @typestr = ltrim(str(@type))

	/* Qualifying key name. */
	declare @qualkeyname nvarchar(100)
	select @qualkeyname = null
	if (@keyname is not null) begin
      select @qualkeyname = N' and constid = object_id(''' + @keyname + N''')'
   end

	/*********************/
	/* Main cursor loop. */
	/*********************/
/*	exec(N'declare hC insensitive cursor for select constid, status & ' + @objtypebits + N', status & ' + @sysgenname + */
	exec(N'declare hC cursor global for select constid, status & ' + @objtypebits + N', status & ' + @sysgenname +
			N' from dbo.sysconstraints where id = ' + @objidstr + N' and (' + @typestr + N' & power(2, status & 0x0f) != 0) ' + @qualkeyname)
	open hC
	fetch hC into @constid, @cType, @cFlags
	while (@@fetch_status >= 0) begin
		if (object_name(@constid) is null) begin
			raiserror 55555 N'Assert failed:  object_name(@constid) is null in sp_MStablekeys (pk/uq)'
			return 1
		end

		/* DRI_PRIMARYKEY, DRI_UNIQUE */
		if (@cType in (1, 2)) begin
			/* Get the index id enforcing this constraint. */
			select @indid = i.indid, @cName = o.name, @fillfactor = i.OrigFillFactor,
					@cFlags = @cFlags | (case indid when 1 then 0x00000001 else 0 end),		/* test for clustered index */
               /* clustered index keys are part of non-clustered index key list, which cause incorrect sysindexes.keycnt */
					@keycnt = case indid when 1 then keycnt else (select count(x.id) from dbo.sysindexkeys x where i.indid = x.indid and x.id = @objid) end,
               @groupname = f.groupname,
               @PrimaryFG = FILEGROUPPROPERTY( f.groupname, N'IsPrimaryFG' )
				from dbo.sysindexes i, dbo.sysobjects o, dbo.sysfilegroups f
            /* Use '=' instead of 'LIKE' in comparision, so we can handle wide card character correctly */
				where o.id = @constid and i.name = o.name and i.id = @objid and i.status & 0x1800 <> 0 and i.groupid = f.groupid
			if (@indid is null) begin
				raiserror 77777 N'Assert failed:  @indid is null in sp_MStablekeys (pk/uq)'
				return 1
			end

			insert #spkeys values (@cType, @cName, @cFlags, @keycnt, @fillfactor, null, null, null, @indid, @groupname, 0, @PrimaryFG, 0, 0)
		end

		/* DRI_REFERENCE */
		else if (@cType in (3)) begin
			/* Get the key column information from sysreferences. */
         select @keycnt = r.keycnt, @cName = object_name(r.constid), @cRefTable = N'[' + user_name(o.uid) + N']' + N'.' + N'[' + o.name + N']',
               @cDisabled = OBJECTPROPERTY( r.constid, N'CnstIsDisabled' ),
               @cDeleteCascade = OBJECTPROPERTY( r.constid, N'CnstIsDeleteCascade'),
               @cUpdateCascade = OBJECTPROPERTY( r.constid, N'CnstIsUpdateCascade')
            from dbo.sysreferences r, dbo.sysobjects o where r.constid = @constid and o.id = r.rkeyid

			/* Follow r.rkeyindid back to sysindexes to get the ref key name. */
			declare @cRefKey nvarchar(132)
			select @cRefKey = i.name, @cFlags = c.status from dbo.sysreferences r, dbo.sysindexes i, dbo.sysconstraints c
				where c.constid = r.constid and r.constid = @constid
				and i.id = r.rkeyid and i.indid = r.rkeyindid and i.status & 0x1800 <> 0

			/* Load our temp table. */
			insert #spkeys values (@cType, @cName, @cFlags, @keycnt, null, @cRefTable, @cRefKey, @constid, null, null, @cDisabled, 0, @cDeleteCascade, @cUpdateCascade)
		end		/* Key type */

		/* Get the next row. */
		fetch hC into @constid, @cType, @cFlags
	end			/* PRIMARY/UNIQUE */
	deallocate hC

   /* Work on the descending information */
   set nocount on
   insert #tempID
      select cName,
      indexkey_property(object_id(@tablename), cIndexID, 1, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 2, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 3, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 4, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 5, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 6, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 7, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 8, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 9, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 10, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 11, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 12, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 13, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 14, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 15, N'isdescending'),
      indexkey_property(object_id(@tablename), cIndexID, 16, N'isdescending')
      from #spkeys
		order by cType, cName

   /* Construct the bit */
   declare @idx int
   declare @Name nvarchar(132)
   declare @Inx_1 int, @Inx_2 int, @Inx_3 int, @Inx_4 int, @Inx_5 int, @Inx_6 int, @Inx_7 int, @Inx_8 int
   declare @Inx_9 int, @Inx_10 int, @Inx_11 int, @Inx_12 int, @Inx_13 int, @Inx_14 int, @Inx_15 int, @Inx_16 int

   declare hCur cursor global for select * from #tempID
   open hCur
   fetch next from hCur into @Name, @Inx_1, @Inx_2, @Inx_3, @Inx_4, @Inx_5, @Inx_6, @Inx_7, @Inx_8,
                             @Inx_9, @Inx_10, @Inx_11, @Inx_12, @Inx_13, @Inx_14, @Inx_15, @Inx_16
   while (@@FETCH_STATUS = 0)
      begin
      select @idx = 0x0000
      select @idx = (case when (@Inx_1 = 1) then @idx | 0x0001 else @idx end), @idx = (case when (@Inx_2 = 1) then @idx | 0x0002 else @idx end), @idx = (case when (@Inx_3 = 1) then @idx | 0x0004 else @idx end), @idx = (case when (@Inx_4 = 1) then @idx | 0x0008 else @idx end), @idx = (case when (@Inx_5 = 1) then @idx | 0x0010 else @idx end), @idx = (case when (@Inx_6 = 1) then @idx | 0x0020 else @idx end), @idx = (case when (@Inx_7 = 1) then @idx | 0x0040 else @idx end), @idx = (case when (@Inx_8 = 1) then @idx | 0x0080 else @idx end),
             @idx = (case when (@Inx_9 = 1) then @idx | 0x0100 else @idx end), @idx = (case when (@Inx_10 = 1) then @idx | 0x0200 else @idx end), @idx = (case when (@Inx_11 = 1) then @idx | 0x0400 else @idx end), @idx = (case when (@Inx_12 = 1) then @idx | 0x0800 else @idx end), @idx = (case when (@Inx_13 = 1) then @idx | 0x1000 else @idx end), @idx = (case when (@Inx_14 = 1) then @idx | 0x2000 else @idx end), @idx = (case when (@Inx_15 = 1) then @idx | 0x4000 else @idx end), @idx = (case when (@Inx_16 = 1) then @idx | 0x8000 else @idx end)
      insert #tempID2 select @Name, @idx

      fetch next from hCur into @Name, @Inx_1, @Inx_2, @Inx_3, @Inx_4, @Inx_5, @Inx_6, @Inx_7, @Inx_8,
                                @Inx_9, @Inx_10, @Inx_11, @Inx_12, @Inx_13, @Inx_14, @Inx_15, @Inx_16
      end
   close hCur
   deallocate hCur
   set nocount off


	/* Now output the data */
ReturnSet:
	set nocount off
	select cType, cName, cFlags, cColCount, cFillFactor, cRefTable, cRefKey,
			cKeyCol1 = convert(nvarchar(132), index_col(@tablename, cIndexID, 1)),
			cKeyCol2 = convert(nvarchar(132), index_col(@tablename, cIndexID, 2)),	
			cKeyCol3 = convert(nvarchar(132), index_col(@tablename, cIndexID, 3)),
			cKeyCol4 = convert(nvarchar(132), index_col(@tablename, cIndexID, 4)),
			cKeyCol5 = convert(nvarchar(132), index_col(@tablename, cIndexID, 5)),
			cKeyCol6 = convert(nvarchar(132), index_col(@tablename, cIndexID, 6)),	
			cKeyCol7 = convert(nvarchar(132), index_col(@tablename, cIndexID, 7)),
			cKeyCol8 = convert(nvarchar(132), index_col(@tablename, cIndexID, 8)),
			cKeyCol9 = convert(nvarchar(132), index_col(@tablename, cIndexID, 9)),
			cKeyCol10 = convert(nvarchar(132), index_col(@tablename, cIndexID, 10)),
			cKeyCol11 = convert(nvarchar(132), index_col(@tablename, cIndexID, 11)),
			cKeyCol12 = convert(nvarchar(132), index_col(@tablename, cIndexID, 12)),
			cKeyCol13 = convert(nvarchar(132), index_col(@tablename, cIndexID, 13)),
			cKeyCol14 = convert(nvarchar(132), index_col(@tablename, cIndexID, 14)),	
			cKeyCol15 = convert(nvarchar(132), index_col(@tablename, cIndexID, 15)),
			cKeyCol16 = convert(nvarchar(132), index_col(@tablename, cIndexID, 16)),
			cRefCol1 = convert(nvarchar(132), null),
			cRefCol2 = convert(nvarchar(132), null),
			cRefCol3 = convert(nvarchar(132), null),
			cRefCol4 = convert(nvarchar(132), null),
			cRefCol5 = convert(nvarchar(132), null),
			cRefCol6 = convert(nvarchar(132), null),
			cRefCol7 = convert(nvarchar(132), null),
			cRefCol8 = convert(nvarchar(132), null),
			cRefCol9 = convert(nvarchar(132), null),
			cRefCol10 = convert(nvarchar(132), null),
			cRefCol11 = convert(nvarchar(132), null),
			cRefCol12 = convert(nvarchar(132), null),
			cRefCol13 = convert(nvarchar(132), null),
			cRefCol14 = convert(nvarchar(132), null),
			cRefCol15 = convert(nvarchar(132), null),
			cRefCol16 = convert(nvarchar(132), null),
			cIndexID,
			cGroupName,
         cDisabled,
	      cPrimaryFG,
         cDeleteCascade,
         cUpdateCascade,
         Descending = t.cPK
		from #spkeys, #tempID2 t where cType in (1, 2)
         and cName = t.cPKName
			and (@colname is null or
				index_col(@tablename, cIndexID, 1) = @colname or
				index_col(@tablename, cIndexID, 2) = @colname or
				index_col(@tablename, cIndexID, 3) = @colname or
				index_col(@tablename, cIndexID, 4) = @colname or
				index_col(@tablename, cIndexID, 5) = @colname or
				index_col(@tablename, cIndexID, 6) = @colname or
				index_col(@tablename, cIndexID, 7) = @colname or
				index_col(@tablename, cIndexID, 8) = @colname or
				index_col(@tablename, cIndexID, 9) = @colname or
				index_col(@tablename, cIndexID, 10) = @colname or
				index_col(@tablename, cIndexID, 11) = @colname or
				index_col(@tablename, cIndexID, 12) = @colname or
				index_col(@tablename, cIndexID, 13) = @colname or
				index_col(@tablename, cIndexID, 14) = @colname or
				index_col(@tablename, cIndexID, 15) = @colname or
				index_col(@tablename, cIndexID, 16) = @colname
			)
		UNION
		select c.cType, c.cName, c.cFlags, c.cColCount, c.cFillFactor, c.cRefTable, c.cRefKey,
			cKeyCol1 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey1)),
			cKeyCol2 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey2)),
			cKeyCol3 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey3)),
			cKeyCol4 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey4)),
			cKeyCol5 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey5)),
			cKeyCol6 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey6)),
			cKeyCol7 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey7)),
			cKeyCol8 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey8)),
			cKeyCol9 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey9)),
			cKeyCol10 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey10)),
			cKeyCol11 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey11)),
			cKeyCol12 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey12)),
			cKeyCol13 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey13)),
			cKeyCol14 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey14)),
			cKeyCol15 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey15)),
			cKeyCol16 = convert(nvarchar(132), col_name(r.fkeyid, r.fkey16)),
			cRefCol1 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey1)),
			cRefCol2 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey2)),	
			cRefCol3 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey3)),
			cRefCol4 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey4)),
			cRefCol5 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey5)),
			cRefCol6 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey6)),
			cRefCol7 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey7)),
			cRefCol8 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey8)),
			cRefCol9 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey9)),
			cRefCol10 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey10)),
			cRefCol11 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey11)),
			cRefCol12 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey12)),
			cRefCol13 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey13)),
			cRefCol14 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey14)),
			cRefCol15 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey15)),
			cRefCol16 = convert(nvarchar(132), col_name(r.rkeyid, r.rkey16)),
			cIndexID,
			cGroupName,
         cDisabled,
	      cPrimaryFG,
         cDeleteCascade,
         cUpdateCascade,
         0
		from #spkeys c, dbo.sysreferences r where c.cType = 3 and r.constid = c.cConstID
			and (@colname is null or
				col_name(r.fkeyid, r.fkey1) = @colname or
				col_name(r.fkeyid, r.fkey2) = @colname or
				col_name(r.fkeyid, r.fkey3) = @colname or
				col_name(r.fkeyid, r.fkey4) = @colname or
				col_name(r.fkeyid, r.fkey5) = @colname or
				col_name(r.fkeyid, r.fkey6) = @colname or
				col_name(r.fkeyid, r.fkey7) = @colname or
				col_name(r.fkeyid, r.fkey8) = @colname or
				col_name(r.fkeyid, r.fkey9) = @colname or
				col_name(r.fkeyid, r.fkey10) = @colname or
				col_name(r.fkeyid, r.fkey11) = @colname or
				col_name(r.fkeyid, r.fkey12) = @colname or
				col_name(r.fkeyid, r.fkey13) = @colname or
				col_name(r.fkeyid, r.fkey14) = @colname or
				col_name(r.fkeyid, r.fkey15) = @colname or
				col_name(r.fkeyid, r.fkey16) = @colname
			)
		order by cType, cName

	if (@flags & 1 <> 0)
		exec sp_MStablerefs @tablename, N'actualkeycols', N'foreign'

go
/* End sp_MStablekeys */


exec sp_MS_marksystemobject sp_MStablekeys
go

grant execute on sp_MStablekeys to public
--------------------------------------------------------------------------------
-- END SQLDMO SECTION
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
-- SP ACTIVE DIRECTORY SECTION
--------------------------------------------------------------------------------

/**************************************************************/
/* sp_ActiveDirectory_SCP                                              */
/**************************************************************/
if exists (select * from sysobjects where name = N'sp_ActiveDirectory_SCP' and type = N'P')
	drop procedure sp_ActiveDirectory_SCP
go
print N'Creating stored procedure sp_ActiveDirectory_SCP'
go
create proc sp_ActiveDirectory_SCP
       @Action  nvarchar(20) = N'create',    -- create_noupdate, create_with_db, create, update, delete, shutdown
       @Startup int = 0                      -- 0 for non-startup, non-zero if called from server startup
as
begin
   /* create_noupdate         : create the SCP object, if it exists already, update it.                                     */
   /*                           create the DB objects only if they don't exists yet.  Do not update the existig DB objects. */
   /* create_with_db          : create the SCP object, if it exsits already, update it.                                     */
   /*                           Create all the DB objects under the SCP object.  If a DB object exists already, update it.  */
   /* create (DEFAULT)        : create the SCP object, if it exists already, update it.                                     */
   /* update                  : update the SCP object.                                                                      */
   /* shutdown                : mark the SCP object to indicate not running, but don't delete it.                           */
   /* delete                  : delete the SCP object and all the objects below it.                                         */

   SET NOCOUNT ON

   DECLARE @retval int
   DECLARE @SQLADSI_COM_ERROR int
   DECLARE @SQLADSI_UNEXP_ERROR int
   DECLARE @SQLADSI_SCP_NOT_FOUND int
   DECLARE @SQLADSI_SVC_ACCT_ERROR int
   DECLARE @SQLADSI_CANNOT_START_HLP int
   DECLARE @SQLADSI_TIMEOUT_WAIT_HLP int
   DECLARE @SQLADSI_AD_NOT_INSTALLED int
   DECLARE @SQLADSI_PROXY_ACCT_ERROR int

   SELECT @SQLADSI_COM_ERROR = 536870913
   SELECT @SQLADSI_UNEXP_ERROR = 536870914
   SELECT @SQLADSI_SCP_NOT_FOUND = 536870915
   SELECT @SQLADSI_SVC_ACCT_ERROR = 536870916
   SELECT @SQLADSI_CANNOT_START_HLP = 536870917
   SELECT @SQLADSI_TIMEOUT_WAIT_HLP = 536870918
   SELECT @SQLADSI_AD_NOT_INSTALLED = 536870919
   SELECT @SQLADSI_PROXY_ACCT_ERROR = 536870920

   /* check permissions */
   IF (not is_srvrolemember(N'sysadmin') = 1)
   begin
      raiserror(15003,-1,-1, N'sysadmin')
      return 1
   end

   /* check parameters */
   if (@Action is null OR UPPER(@Action) not in (N'CREATE', N'UPDATE', N'DELETE', N'SHUTDOWN', N'CREATE_WITH_DB', N'CREATE_NOUPDATE'))
   begin
      raiserror(14266, -1, -1, N'@Action', N'CREATE, UPDATE, DELETE, SHUTDOWN, CREATE_WITH_DB, CREATE_NOUPDATE')
      return 1
   end

   declare @nAction nvarchar(3)
   declare @Tmp nvarchar(10)
   select @Tmp = UPPER(@Action)
   if (UPPER(@Tmp) like N'CRE%')
      select @nAction = N'1'
   else if (UPPER(@Tmp) like N'UPD%')
      select @nAction = N'2'
   else if (UPPER(@Tmp) like N'DEL%')
      select @nAction = N'3'
   else if (UPPER(@Tmp) like N'SHU%')
      select @nAction = N'4'

   /* are we running on Windows 2000 or NT4 SP5 with AD enabled?  continue only if TRUE */
   EXECUTE @retval = master.dbo.xp_MSADEnabled
   if (@retval = 0)
   begin
      /* Gather information */
      declare @InstanceName sysname
      declare @ServerName sysname
      select @InstanceName = convert(sysname, serverproperty(N'InstanceName'))
      select @ServerName = convert(sysname, serverproperty(N'ServerName'))
      if (@InstanceName is NULL)
         select @InstanceName = N'MSSQLSERVER'

      /* Need to create registry values only if create or update.  Delete registry when delete */
	  if (@nAction <> N'3')
	  begin
          EXECUTE @retval = master.dbo.xp_MSADSIReg @InstanceName, @nAction, @ServerName
     end

     if (@retval = 0)
     begin
         /* call xp with the valid parameters */
         DECLARE @args NVARCHAR(512)
         DECLARE @nStartup NVARCHAR(5)
         if (@Startup = 0)
            select @nStartup = N'0'
         else
            select @nStartup = N'1'
         
         SELECT @args = @InstanceName + N' ' + @nAction +  N' 1 ' + @nStartup

		   EXECUTE @retval = master.dbo.xp_adsirequest @args
         if (@retval = 0)
         begin
		    /* we successfully delete the SCP and all its children,  let's remove the registry keys/values for them */
	        if (@nAction = N'3')
		     begin
               EXECUTE @retval = master.dbo.xp_MSADSIReg @InstanceName, @nAction, @ServerName
				   if (@retval <> 0)
				   begin
			        raiserror(14303, -1, -1, N'sp_ActiveDirectory_SCP')
				     return 1
				   end
			  end
           /* Get in only if caller asked for create with DB objects */
           if (UPPER(@Action) like N'CREATE_WITH%') or (UPPER(@Action) like N'CREATE_NOU%')
           begin
               /* After we created the SCP object, we create all the database objects */
   
               /* Note that for performance reason, we want to create all the registry entries in one connection */
               EXECUTE @retval = master.dbo.xp_MSADSIObjRegDB @InstanceName, @ServerName
   
               if (UPPER(@Action) like N'CREATE_WITH%')
               begin
                  declare hC cursor for select name from master.dbo.sysdatabases
               end else begin
                  declare hC cursor for select * from msdb.dbo.ADSINewDBs
               end
   
               declare @DBname sysname
                 open hC
               fetch next from hC into @DBname
               

               while (@@FETCH_STATUS = 0)
               begin
                  /* Do the AD part, continue even if we got error from one create */
                  
                  SELECT @args = @InstanceName + N' 1 2 ' + N'"' + quotename(@DBname, N'"') + N'"'
                  EXECUTE master.dbo.xp_adsirequest @args
   
                  fetch next from hC into @DBname
               end
   
               close hC
               deallocate hC
   
               /* Get rid of the worker table, which was created by master.dbo.xp_MSADSIObjRegDB */
               drop table msdb.dbo.ADSINewDBs
            end
            return 0
         end else
         begin
            if @retval = @SQLADSI_COM_ERROR 
                RAISERROR(14350, -1, -1)
            else if @retval = @SQLADSI_UNEXP_ERROR 
                RAISERROR(14351, -1, -1)
            else if @retval = @SQLADSI_SCP_NOT_FOUND 
                RAISERROR(14352, -1, -1)
            else if @retval = @SQLADSI_SVC_ACCT_ERROR 
                RAISERROR(14353, -1, -1)
            else if @retval = @SQLADSI_CANNOT_START_HLP 
                RAISERROR(14354, -1, -1)
            else if @retval = @SQLADSI_TIMEOUT_WAIT_HLP 
                RAISERROR(14355, -1, -1)
            else if @retval = @SQLADSI_AD_NOT_INSTALLED 
                RAISERROR(14356, -1, -1)
            else if @retval = @SQLADSI_PROXY_ACCT_ERROR 
                RAISERROR(14358, -1, -1)
            /* Failed */
            return 1
         end
      end else
      begin
         raiserror(14303, -1, -1, N'sp_ActiveDirectory_SCP')
         return 1
      end
   end else
   begin
      raiserror(14359, -1, -1)
      return 1
   end
end
go
grant execute on sp_ActiveDirectory_SCP to public
go

/**************************************************************/
/* sp_ActiveDirectory_Obj                                              */
/**************************************************************/
if exists (select * from sysobjects where name = N'sp_ActiveDirectory_Obj' and type = N'P')
	drop procedure sp_ActiveDirectory_Obj
go
print N'Creating stored procedure sp_ActiveDirectory_Obj'
go
create proc sp_ActiveDirectory_Obj
       @Action          nvarchar(10) = N'create',    -- create, update, delete
       @ObjType         nvarchar(15) = N'database',    -- database, publication
       @ObjName         sysname  = null,        -- object name
       @DatabaseName    sysname = null,         -- database name for publication object
       @GUIDName        sysname = null          -- GUID for publication update and delete
as
begin
   /* cerate : create the object under the current SCP object. */
   /* update : update the object under the SCP object.         */
   /* delete : delete the object under the SCP object.         */

   SET NOCOUNT ON

   DECLARE @isdbowner int
   DECLARE @cmd nvarchar(255)
   DECLARE @commonname nvarchar(300)
   DECLARE @retcode int
   DECLARE @nAction nvarchar(3)
   DECLARE @Tmp nvarchar(10)
   DECLARE @dbname sysname

   DECLARE @retval int
   DECLARE @SQLADSI_COM_ERROR int
   DECLARE @SQLADSI_UNEXP_ERROR int
   DECLARE @SQLADSI_SCP_NOT_FOUND int
   DECLARE @SQLADSI_SVC_ACCT_ERROR int
   DECLARE @SQLADSI_CANNOT_START_HLP int
   DECLARE @SQLADSI_TIMEOUT_WAIT_HLP int
   DECLARE @SQLADSI_AD_NOT_INSTALLED int
   DECLARE @SQLADSI_PROXY_ACCT_ERROR int

   SELECT @SQLADSI_COM_ERROR = 536870913
   SELECT @SQLADSI_UNEXP_ERROR = 536870914
   SELECT @SQLADSI_SCP_NOT_FOUND = 536870915
   SELECT @SQLADSI_SVC_ACCT_ERROR = 536870916
   SELECT @SQLADSI_CANNOT_START_HLP = 536870917
   SELECT @SQLADSI_TIMEOUT_WAIT_HLP = 536870918
   SELECT @SQLADSI_AD_NOT_INSTALLED = 536870919
   SELECT @SQLADSI_PROXY_ACCT_ERROR = 536870920

   /* check permissions
   IF (not is_srvrolemember(N'sysadmin') = 1)
   begin
      raiserror(15003,-1,-1, N'sysadmin')
      return 1
   end
   */

   /* If publication object, we need both object name and database name */
   if ((UPPER(@ObjType) in (N'PUBLICATION')) and ((@ObjName is null) or (@DatabaseName is null)))
   begin
      raiserror(14200, -1, -1, N'@ObjName or @DatabaseName')
      return 1
   end


   /* check parameters */
   if (@Action is null OR UPPER(@Action) not in (N'CREATE', N'UPDATE', N'DELETE'))
   begin
      raiserror(14266, -1, -1, N'@Action', N'CREATE, UPDATE, DELETE')
      return 1
   end
   if (@ObjType is null OR UPPER(@ObjType) not in (N'DATABASE', N'REPOSITORY', N'PUBLICATION'))
   begin
      raiserror(14266, -1, -1, N'@ObjType', N'DATABASE, REPOSITORY, PUBLICATION')
      return 1
   end
   if (@ObjName is null)
   begin
      raiserror(14200, -1, -1, N'@ObjName')
      return 1
   end

   /* If publication object update or delete, we need GUID also */
   if ((UPPER(@ObjType) in (N'PUBLICATION')) and UPPER(@Action) in (N'UPDATE', N'DELETE') and (@GUIDName is null))
   begin
      raiserror(14200, -1, -1, N'@GUIDNName')
      return 1
   end

   if (UPPER(@ObjType) in (N'PUBLICATION'))
      select @dbname = @DatabaseName
   else
      select @dbname = @ObjName

-- Make sure the database exists
--
   if not exists (select * from master.dbo.sysdatabases where name = @dbname)
   begin
      raiserror(15010,-1,-1,@dbname)
      return (1)
   end

   /* Check permissions.  */
   SELECT @cmd = 'USE ' + quotename(@dbname) + ' SELECT @isdbowner = is_member(''db_owner'')'

   EXEC @retcode = sp_executesql @cmd, N'@isdbowner int output', @isdbowner output
   IF @@error <> 0 or @retcode <> 0
      return 1

   IF (is_srvrolemember('sysadmin') <> 1 and isnull(@isdbowner, 0) <> 1)
   BEGIN
      raiserror(21050, 14, -1)
      return 1
   END

   /* common name length check */ 
   if (UPPER(@ObjType) in (N'PUBLICATION'))
       SELECT @commonname = @ObjName + N':' + @DatabaseName
   else
       SELECT @commonname = @ObjName
  
   IF (LEN(@commonname) > 64)
      RAISERROR(14357, -1, -1, @commonname)
       
   select @Tmp = UPPER(@Action)
   if (UPPER(@Tmp) like N'CRE%')
      select @nAction = N'1'
   else if (UPPER(@Tmp) like N'UPD%')
      select @nAction = N'2'
   else if (UPPER(@Tmp) like N'DEL%')
      select @nAction = N'3'

   declare @nObjType nvarchar(3)
   select @Tmp = UPPER(@ObjType)
   if (UPPER(@Tmp) like N'DATAB%')
      select @nObjType = N'2'
   else if (UPPER(@Tmp) like N'REPOS%')
      select @nObjType = N'3'
   else if (UPPER(@Tmp) like N'PUBL%')
      select @nObjType = N'4'

   /* are we running on Windows 2000 or NT4 SP5 with AD enabled?  continue only if TRUE */
   EXECUTE @retval = master.dbo.xp_MSADEnabled
   if (@retval = 0)
   begin
      /* prepare parameters */
      declare @InstanceName sysname
      declare @ServerName sysname
      select @InstanceName = convert(sysname, serverproperty(N'InstanceName'))
      select @ServerName = convert(sysname, serverproperty(N'ServerName'))
      if (@InstanceName is NULL)
         select @InstanceName = N'MSSQLSERVER'

      /* Need to create registry values only if create or update. */
	  if (@nAction <> N'3')
	  begin
	      EXECUTE @retval = master.dbo.xp_MSADSIObjReg @InstanceName, @nAction, @nObjType, @ObjName, @DatabaseName, @ServerName
      end
      if (@retval = 0)
      begin
         /* call xp with the valid parameters, xp_cmdshell expects double quote begin and end */
         DECLARE @args NVARCHAR(512)
         if ((@nObjType like N'4') and (@nAction like N'1'))
         begin
            /* PUBLICATION creation */
            SELECT @args = @InstanceName + N' ' + @nAction +  N' ' + @nObjType + N' '  + quotename(@ObjName, N'"') + N' ' + quotename(@DatabaseName, N'"') 
         end else if ((@nObjType like N'4') and (@nAction not like N'1'))
         begin
            /* PUBLICATION update or delete */
            SELECT @args = @InstanceName + N' ' + @nAction +  N' ' + @nObjType + N' ' + quotename(@ObjName, N'"') + N' ' + quotename(@DatabaseName, N'"') + N' ' + @GUIDName
         end else
         begin
            /* Non PUBLICATION objects */
            SELECT @args = @InstanceName + N' ' + @nAction +  N' ' + @nObjType + N' ' + quotename(@ObjName, N'"')
         end

		 EXECUTE @retval = master.dbo.xp_adsirequest @args
		 if (@retval = 0)
		 begin
	        if (@nAction = N'3')
		    begin
				EXECUTE @retval = master.dbo.xp_MSADSIObjReg @InstanceName, @nAction, @nObjType, @ObjName, @DatabaseName, @ServerName
				if (@retval <> 0)
				begin
                    raiserror(14303, -1, -1, N'sp_ActiveDirectory_Obj')
					return 1
				end
			end
		 end
         else
         begin
            if @retval = @SQLADSI_COM_ERROR 
                RAISERROR(14350, -1, -1)
            else if @retval = @SQLADSI_UNEXP_ERROR 
                RAISERROR(14351, -1, -1)
            else if @retval = @SQLADSI_SCP_NOT_FOUND 
                RAISERROR(14352, -1, -1)
            else if @retval = @SQLADSI_SVC_ACCT_ERROR 
                RAISERROR(14353, -1, -1)
            else if @retval = @SQLADSI_CANNOT_START_HLP 
                RAISERROR(14354, -1, -1)
            else if @retval = @SQLADSI_TIMEOUT_WAIT_HLP 
                RAISERROR(14355, -1, -1)
            else if @retval = @SQLADSI_AD_NOT_INSTALLED 
                RAISERROR(14356, -1, -1)
            else if @retval = @SQLADSI_PROXY_ACCT_ERROR 
                RAISERROR(14358, -1, -1)
   
            /* Failed */
            return 1
         end
      end else
      begin
         raiserror(14303, -1, -1, N'sp_ActiveDirectory_Obj')
         return 1
      end
   end else
   begin
      raiserror(14304, -1, -1, N'sp_ActiveDirectory_Obj')
      return 1
   end
end
go
grant execute on sp_ActiveDirectory_Obj to public
go

--------------------------------------------------------------------------------
-- END ACTIVE DIRECTORY SECTION
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
-- AGENT stored procedures added or altered after release into instmsdb.sql file
--
-- sp_enlist_tsx
--------------------------------------------------------------------------------

use msdb
go

/**************************************************************/
/* SP_ENLIST_TSX                                              */
/**************************************************************/
PRINT ''
PRINT 'Creating procedure sp_enlist_tsx' 
go

IF EXISTS (SELECT name FROM sysobjects 
         WHERE name = 'sp_enlist_tsx' AND type = 'P')
   DROP PROCEDURE sp_enlist_tsx
GO

print N'Creating stored procedure sp_enlist_tsx'
go
create proc sp_enlist_tsx
	@Action int,			-- 0 - enlist; 1 - defect; 2 - update
	@ServerName  nvarchar(30),	-- tsx server name
	@Location  nvarchar(200),	-- tsx server location
	@TimeZoneAdjustment int,	-- tsx server time zone adjustment
	@LocalTime datetime,		-- tsx server local time
	@NTUserName nvarchar(100),	-- name of the user performing the enlistment
	@PollInterval int		-- polling interval
as
begin
   SET NOCOUNT ON

   /* check permissions */
   IF ((ISNULL(IS_MEMBER(N'TargetServersRole'), 0) = 0) AND
       (ISNULL(IS_SRVROLEMEMBER(N'sysadmin'), 0) = 0))
   begin
	raiserror(15003,-1,-1, N'TargetServersRole')
	return 1
   end

   /* check input parameters */
   if @ServerName is null
   begin
	raiserror(14043, -1, -1, '@ServerName')
	return 2
   end

   select @ServerName = LTRIM(@ServerName)
   select @ServerName = RTRIM(@ServerName)
   if @ServerName = ''
   begin
	raiserror(21263, -1, -1, '@ServerName')
	return 3
   end

   if @Action <> 1 And @Action <> 2
   begin
	/* default action is to enlist */
	select @Action = 0
   end

  if @Action = 0 /* enlisting */
  begin
	/* check input parameters */
	if @NTUserName is null
	begin
	   raiserror(14043, -1, -1, '@NTUserName')
	   return 4
	end

	select @NTUserName = LTRIM(@NTUserName)
	select @NTUserName = RTRIM(@NTUserName)
	if @NTUserName = ''
	begin
	  raiserror(21263, -1, -1, '@NTUserName')
	  return 5
	end

	/* check if local server is already configured as TSX machine */
	declare @msx_server_name NVARCHAR(128)
	select @msx_server_name = N''

	execute master.dbo.xp_instance_regread 
		N'HKEY_LOCAL_MACHINE',
		N'Software\Microsoft\MSSQLServer\SQLServerAgent',
		N'MSXServerName',
		@msx_server_name OUTPUT

	select @msx_server_name = LTRIM(@msx_server_name)
	select @msx_server_name = RTRIM(@msx_server_name)
	if @msx_server_name <> N''
	begin
	   raiserror(14360, -1, -1, @@SERVERNAME)
	   return 6
	end

	/* 
	* check that local server is not running a desktop SKU, 
	* i.e. Win9x, Office, or MSDE
	*/
	if( PLATFORM() & 0x100 = 0x100 )
	begin
	   raiserror(14362, -1, -1)
	   return 8
	end

	/* check if we have any MSXOperators defined */
	if not exists (SELECT * FROM msdb.dbo.sysoperators WHERE name = N'MSXOperator')
	begin
	   raiserror(14363, -1, -1)
	   return 9
	end

	/* all checks have passed, insert new row into systargetservers table */
	INSERT INTO msdb.dbo.systargetservers 
	(
	server_name, 
	location, 
	time_zone_adjustment, 
	enlist_date, 
	last_poll_date, 
	status, 
	local_time_at_last_poll, 
	enlisted_by_nt_user, 
	poll_interval
	) 
	VALUES 
	(
	@ServerName, 
	@Location, 
	@TimeZoneAdjustment, 
	GETDATE(), 
	GETDATE(), 
	1, 
	@LocalTime, 
	@NTUserName, 
	@PollInterval
	)

	/* delete hanging rows from sysdownloadlist */
	DELETE FROM msdb.dbo.sysdownloadlist 
	WHERE target_server = @ServerName
   end

   if @Action = 2 /* updating existing enlistment */
   begin
	/* check if we have any MSXOperators defined */
	if not exists (SELECT * FROM msdb.dbo.sysoperators WHERE name = N'MSXOperator')
	begin
	   raiserror(14363, -1, -1)
	   return 10
	end

	/* check if TSX machine is already enlisted */
	If not exists (SELECT * FROM msdb.dbo.systargetservers WHERE server_name =@ServerName)
	begin
	   raiserror(14364, -1, -1)
	   return 11
	end

	if @Location is null /* don't update the location if it is not supplied */
	begin
		UPDATE msdb.dbo.systargetservers SET 
		time_zone_adjustment = @TimeZoneAdjustment, 
		poll_interval = @PollInterval
		WHERE (server_name = @ServerName)
	end
	else
	begin
		UPDATE msdb.dbo.systargetservers SET 
		location = @Location, 
		time_zone_adjustment = @TimeZoneAdjustment, 
		poll_interval = @PollInterval
		WHERE (server_name = @ServerName)
	end
   end

  if @Action = 1 /* defecting */
  begin
	if (exists (SELECT * FROM msdb.dbo.systargetservers WHERE server_name = @ServerName)) 
	begin
		execute msdb.dbo.sp_delete_targetserver 
			@server_name = @ServerName, 
			@post_defection = 0 
	end
	else
	begin
		DELETE FROM msdb.dbo.sysdownloadlist 
		WHERE (target_server = @ServerName)
	end
  end

  if @Action = 0 Or @Action = 2 /* enlisting or updating existing enlistment */
  begin
	/* select resultset to return to the caller */
	SELECT 
	id,
	name, 
	enabled, 
	email_address, 
	pager_address, 
	netsend_address, 
	weekday_pager_start_time, 
	weekday_pager_end_time, 
	saturday_pager_start_time, 
	saturday_pager_end_time, 
	sunday_pager_start_time, 
	sunday_pager_end_time, 
	pager_days 
	FROM 
	msdb.dbo.sysoperators WHERE (name = N'MSXOperator')
   end
end
go

grant execute on sp_enlist_tsx to public
go


use msdb
go

/**************************************************************/
/* SP_SQLAGENT_GET_PERF_COUNTERS                              */
/**************************************************************/

PRINT ''
PRINT 'Creating procedure sp_sqlagent_get_perf_counters...'
go
IF (EXISTS (SELECT *
            FROM msdb.dbo.sysobjects
            WHERE (name = N'sp_sqlagent_get_perf_counters')
              AND (type = 'P')))
  DROP PROCEDURE sp_sqlagent_get_perf_counters
go
CREATE PROCEDURE sp_sqlagent_get_perf_counters
  @all_counters BIT = 0
AS
BEGIN
  SET NOCOUNT ON

  CREATE TABLE #temp
  (
  performance_condition NVARCHAR(1024) COLLATE database_default NOT NULL
  )

  INSERT INTO #temp VALUES (N'dummy')

  IF (@all_counters = 0)
  BEGIN
    INSERT INTO #temp
    SELECT DISTINCT SUBSTRING(performance_condition, 1, CHARINDEX('|', performance_condition, PATINDEX('%_|_%', performance_condition) + 2) - 1)
    FROM msdb.dbo.sysalerts
    WHERE (performance_condition IS NOT NULL)
      AND (enabled = 1)
  END

  SELECT 'object_name' = RTRIM(SUBSTRING(spi1.object_name, 1, 50)),
         'counter_name' = RTRIM(SUBSTRING(spi1.counter_name, 1, 50)),
         'instance_name' = CASE spi1.instance_name
                             WHEN N'' THEN NULL
                             ELSE RTRIM(spi1.instance_name)
                           END,
         'value' = CASE 
                     WHEN (spi1.cntr_type = 537003008) -- A ratio
                       THEN CONVERT(FLOAT, spi1.cntr_value) / (SELECT CASE spi2.cntr_value WHEN 0 THEN 1 ELSE spi2.cntr_value END
                                                               FROM master.dbo.sysperfinfo spi2
                                                               WHERE (spi1.counter_name + ' ' = SUBSTRING(spi2.counter_name, 1, PATINDEX('% Base%', spi2.counter_name)))
                                                                 AND (spi1.instance_name = spi2.instance_name)
                                                                 AND (spi2.cntr_type = 1073939459))
					 WHEN (spi1.cntr_value < 0) 
					   THEN CONVERT(FLOAT, CONVERT(bigint, spi1.cntr_value) + convert(bigint, 0x100000000))
                     ELSE spi1.cntr_value
                   END,
		 'type' = spi1.cntr_type
		 
  FROM master.dbo.sysperfinfo spi1,
       #temp tmp
  WHERE (spi1.cntr_type <> 1073939459) -- Divisors
    AND ((@all_counters = 1) OR
         (tmp.performance_condition = RTRIM(spi1.object_name) + '|' + RTRIM(spi1.counter_name)))
END
go

  DECLARE @sysadmin_only               INT
  SELECT  @sysadmin_only = 1 -- assume the most secure case, proxy is not enabled
  EXECUTE master.dbo.xp_instance_regread N'HKEY_LOCAL_MACHINE',
                                         N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                         N'SysAdminOnly',
                                         @sysadmin_only OUTPUT,
                                         N'no_output'
  IF @sysadmin_only = 0 -- proxy enabled
	EXEC master.dbo.xp_sqlagent_proxy_account 'UPD'
go

/**************************************************************/
/* sp_log_shipping_in_sync                                    */
/**************************************************************/
PRINT ''
PRINT 'Creating procedure sp_log_shipping_in_sync...'
go
IF (EXISTS (SELECT * from msdb.dbo.sysobjects WHERE name = N'sp_log_shipping_in_sync' AND type = N'P')  )
  drop procedure sp_log_shipping_in_sync
go
CREATE PROCEDURE sp_log_shipping_in_sync
  @last_updated        DATETIME,
  @compare_with        DATETIME,
  @threshold           INT,
  @outage_start_time   INT,
  @outage_end_time     INT,
  @outage_weekday_mask INT,
  @enabled             BIT = 1,
  @delta               INT = NULL OUTPUT
AS BEGIN
  SET NOCOUNT ON
  DECLARE @cur_time INT

  SELECT @delta = DATEDIFF (mi, @last_updated, @compare_with)
  -- in sync
  IF (@delta <= @threshold)
    RETURN (0) -- in sync

  IF (@enabled = 0) 
    RETURN(0) -- in sync

  DECLARE  @daybitmask int
  DECLARE  @normalized_datefirst int
  SELECT @normalized_datefirst = (@@DATEFIRST + DATEPART(dw, GETDATE ())) % 7
  SELECT @daybitmask = POWER (2, @normalized_datefirst-1)
  IF ((@outage_weekday_mask & @daybitmask) > 0) -- in outage window
  BEGIN
    SELECT @cur_time = DATEPART (hh, GETDATE()) * 10000 +
                       DATEPART (mi, GETDATE()) * 100 + 
                       DATEPART (ss, GETDATE())
	  -- outage doesn't span midnight
    IF (@outage_start_time < @outage_end_time)
    BEGIN
      IF (@cur_time >= @outage_start_time AND @cur_time < @outage_end_time)
        RETURN(1) -- in outage
    END
	  -- outage does span midnight
	ELSE IF (@outage_start_time > @outage_end_time)
	BEGIN
	  IF (@cur_time >= @outage_start_time OR @cur_time < @outage_end_time)
	    RETURN(1) -- in outage
	END
  END
  RETURN(-1 ) -- not in outage, not in sync
END
go

/**************************************************************/
/* sp_get_log_shipping_monitor_info                           */
/**************************************************************/
PRINT ''
PRINT 'Creating procedure sp_get_log_shipping_monitor_info...'
go
IF (EXISTS (SELECT * from msdb.dbo.sysobjects WHERE name = N'sp_get_log_shipping_monitor_info' AND type = N'P')  )
  drop procedure sp_get_log_shipping_monitor_info
go
CREATE PROCEDURE sp_get_log_shipping_monitor_info
  @primary_server_name     sysname = N'%',
  @primary_database_name   sysname = N'%',
  @secondary_server_name   sysname = N'%',
  @secondary_database_name sysname = N'%'
AS BEGIN
  SET NOCOUNT ON
  CREATE TABLE #lsp (
    primary_server_name            sysname       COLLATE database_default NOT NULL,
    primary_database_name          sysname       COLLATE database_default NOT NULL,
    secondary_server_name          sysname       COLLATE database_default NOT NULL,
    secondary_database_name        sysname       COLLATE database_default NOT NULL,
    backup_threshold               INT           NOT NULL,
    backup_threshold_alert         INT           NOT NULL,
    backup_threshold_alert_enabled BIT           NOT NULL,
    last_backup_filename           NVARCHAR(500) COLLATE database_default NOT NULL,
    last_backup_last_updated       DATETIME      NOT NULL,
    backup_outage_start_time       INT           NOT NULL,
    backup_outage_end_time         INT           NOT NULL,
    backup_outage_weekday_mask     INT           NOT NULL,
    backup_in_sync                 INT           NULL, -- 0 = in sync, -1 = out of sync, 1 = in outage window
    backup_delta                   INT           NULL,
    last_copied_filename           NVARCHAR(500) COLLATE database_default NOT NULL,
    last_copied_last_updated       DATETIME      NOT NULL,
    last_loaded_filename           NVARCHAR(500) COLLATE database_default NOT NULL,
    last_loaded_last_updated       DATETIME      NOT NULL,
    copy_delta                     INT           NULL,
    copy_enabled                   BIT           NOT NULL,
    load_enabled                   BIT           NOT NULL,
    out_of_sync_threshold          INT           NOT NULL,
    load_threshold_alert           INT           NOT NULL,
    load_threshold_alert_enabled   BIT           NOT NULL,
    load_outage_start_time         INT           NOT NULL,
    load_outage_end_time           INT           NOT NULL,
    load_outage_weekday_mask       INT           NOT NULL,
    load_in_sync                   INT           NULL, -- 0 = in sync, -1 = out of sync, 1 = in outage window
    load_delta                     INT           NULL,
    maintenance_plan_id		         UNIQUEIDENTIFIER NULL,
    secondary_plan_id              UNIQUEIDENTIFIER NOT NULL)

  INSERT INTO #lsp

 SELECT
    primary_server_name,
    primary_database_name,
    secondary_server_name,
    secondary_database_name,
    backup_threshold,
    p.threshold_alert,
    p.threshold_alert_enabled,
    last_backup_filename,
    p.last_updated,
    p.planned_outage_start_time,
    p.planned_outage_end_time,
    p.planned_outage_weekday_mask,
    NULL,
    NULL,
    last_copied_filename,
    last_copied_last_updated,
    last_loaded_filename,
    last_loaded_last_updated,
    NULL,
    copy_enabled,
    load_enabled,
    out_of_sync_threshold,
    s.threshold_alert,
    s.threshold_alert_enabled,
    s.planned_outage_start_time,
    s.planned_outage_end_time,
    s.planned_outage_weekday_mask,
    NULL,
    NULL,
    maintenance_plan_id,
    secondary_plan_id
  FROM msdb.dbo.log_shipping_primaries p, msdb.dbo.log_shipping_secondaries s
  WHERE 
    p.primary_id = s.primary_id AND
    primary_server_name LIKE @primary_server_name AND
    primary_database_name LIKE @primary_database_name AND
    secondary_server_name LIKE @secondary_server_name AND
    secondary_database_name LIKE @secondary_database_name

  DECLARE @load_in_sync                   INT
  DECLARE @backup_in_sync                 INT
  DECLARE @_primary_server_name           sysname 
  DECLARE @_primary_database_name         sysname 
  DECLARE @_secondary_server_name         sysname
  DECLARE @_secondary_database_name       sysname
  DECLARE @last_loaded_last_updated       DATETIME
  DECLARE @last_loaded_filename           NVARCHAR (500)
  DECLARE @last_copied_filename           NVARCHAR (500)
  DECLARE @last_backup_last_updated       DATETIME
  DECLARE @last_backup_filename           NVARCHAR (500)
  DECLARE @backup_outage_start_time       INT
  DECLARE @backup_outage_end_time         INT
  DECLARE @backup_outage_weekday_mask     INT
  DECLARE @backup_threshold               INT
  DECLARE @backup_threshold_alert_enabled BIT
  DECLARE @load_outage_start_time         INT
  DECLARE @load_outage_end_time           INT
  DECLARE @load_outage_weekday_mask       INT
  DECLARE @load_threshold                 INT
  DECLARE @load_threshold_alert_enabled   BIT
  DECLARE @backupdt                       DATETIME
  DECLARE @restoredt                      DATETIME
  DECLARE @copydt                         DATETIME
  DECLARE @rv                             INT
  DECLARE @dt                             DATETIME
  DECLARE @copy_delta                     INT
  DECLARE @load_delta                     INT
  DECLARE @backup_delta                   INT
  DECLARE @last_copied_last_updated       DATETIME

  SELECT @dt = GETDATE ()

  DECLARE sync_update CURSOR FOR
    SELECT 
      primary_server_name, 
      primary_database_name, 
      secondary_server_name, 
      secondary_database_name,
      last_backup_filename,
      last_backup_last_updated,
      last_loaded_filename,
      last_loaded_last_updated,
      backup_outage_start_time,
      backup_outage_end_time,
      backup_outage_weekday_mask,
      backup_threshold,
      backup_threshold_alert_enabled,
      load_outage_start_time,
      load_outage_end_time,
      out_of_sync_threshold,
      load_outage_weekday_mask,
      load_threshold_alert_enabled,
      last_copied_filename,
      last_copied_last_updated
    FROM #lsp
    FOR READ ONLY

  OPEN sync_update

loop:
  FETCH NEXT FROM sync_update INTO
    @_primary_server_name, 
    @_primary_database_name, 
    @_secondary_server_name, 
    @_secondary_database_name,
    @last_backup_filename,
    @last_backup_last_updated,
    @last_loaded_filename,
    @last_loaded_last_updated,
    @backup_outage_start_time,
    @backup_outage_end_time,
    @backup_outage_weekday_mask,
    @backup_threshold,
    @backup_threshold_alert_enabled,
    @load_outage_start_time,
    @load_outage_end_time,
    @load_threshold,
    @load_outage_weekday_mask,
    @load_threshold_alert_enabled,
    @last_copied_filename,
    @last_copied_last_updated

  IF @@fetch_status <> 0
    GOTO _loop

  EXECUTE @rv = sp_log_shipping_get_date_from_file @_primary_database_name, @last_backup_filename, @backupdt OUTPUT
  IF (@rv <> 0)
    SElECT @backupdt = @last_backup_last_updated
  EXECUTE @rv = sp_log_shipping_get_date_from_file @_primary_database_name, @last_loaded_filename, @restoredt OUTPUT
  IF  (@rv <> 0)
    SElECT @restoredt = @last_loaded_last_updated
  EXECUTE @rv = sp_log_shipping_get_date_from_file @_primary_database_name, @last_copied_filename, @copydt OUTPUT
  IF  (@rv <> 0)
    SElECT @copydt = @last_copied_last_updated
  
  EXECUTE @load_in_sync = msdb.dbo.sp_log_shipping_in_sync
    @restoredt,
    @backupdt,
    @load_threshold,
    @load_outage_start_time,
    @load_outage_end_time,
    @load_outage_weekday_mask,
    @load_threshold_alert_enabled,
    @load_delta OUTPUT

  EXECUTE @backup_in_sync = msdb.dbo.sp_log_shipping_in_sync
    @last_backup_last_updated,
    @dt,
    @backup_threshold,
    @backup_outage_start_time,
    @backup_outage_end_time,
    @backup_outage_weekday_mask,
    @backup_threshold_alert_enabled,
    @backup_delta OUTPUT

  EXECUTE msdb.dbo.sp_log_shipping_in_sync
    @copydt,
    @backupdt,
    1,0,0,0,0,
    @copy_delta OUTPUT

  UPDATE #lsp 
  SET backup_in_sync = @backup_in_sync, load_in_sync  = @load_in_sync, 
    copy_delta = @copy_delta, load_delta = @load_delta, backup_delta = @backup_delta
  WHERE primary_server_name = @_primary_server_name AND
    secondary_server_name = @_secondary_server_name AND
    primary_database_name = @_primary_database_name AND
    secondary_database_name = @_secondary_database_name 
  GOTO loop
_loop:
  CLOSE sync_update
  DEALLOCATE sync_update
  SELECT * FROM #lsp
END
go

/**************************************************************/
/* sp_update_log_shipping_monitor_info                        */
/**************************************************************/
PRINT ''
PRINT 'Creating procedure sp_update_log_shipping_monitor_info...'
go
IF (EXISTS (SELECT * from msdb.dbo.sysobjects WHERE name = N'sp_update_log_shipping_monitor_info' AND type = N'P')  )
  DROP PROCEDURE sp_update_log_shipping_monitor_info
go
CREATE PROCEDURE sp_update_log_shipping_monitor_info
  @primary_server_name                 sysname,
  @primary_database_name               sysname,
  @secondary_server_name               sysname,
  @secondary_database_name             sysname,
  @backup_threshold                    INT = NULL,
  @backup_threshold_alert              INT = NULL,
  @backup_threshold_alert_enabled      BIT = NULL,
  @backup_outage_start_time            INT = NULL,
  @backup_outage_end_time              INT = NULL,
  @backup_outage_weekday_mask          INT = NULL,
  @copy_enabled                        BIT = NULL,
  @load_enabled                        BIT = NULL,
  @out_of_sync_threshold               INT = NULL,
  @out_of_sync_threshold_alert         INT = NULL,
  @out_of_sync_threshold_alert_enabled BIT = NULL,
  @out_of_sync_outage_start_time       INT = NULL,
  @out_of_sync_outage_end_time         INT = NULL,
  @out_of_sync_outage_weekday_mask     INT = NULL
AS BEGIN
  SET NOCOUNT ON
  DECLARE @_backup_threshold                    INT
  DECLARE @_backup_threshold_alert              INT
  DECLARE @_backup_threshold_alert_enabled      BIT
  DECLARE @_backup_outage_start_time            INT
  DECLARE @_backup_outage_end_time              INT
  DECLARE @_backup_outage_weekday_mask          INT
  DECLARE @_copy_enabled                        BIT
  DECLARE @_load_enabled                        BIT
  DECLARE @_out_of_sync_threshold               INT
  DECLARE @_out_of_sync_threshold_alert         INT
  DECLARE @_out_of_sync_threshold_alert_enabled BIT
  DECLARE @_out_of_sync_outage_start_time       INT
  DECLARE @_out_of_sync_outage_end_time         INT
  DECLARE @_out_of_sync_outage_weekday_mask     INT

  -- check that the primary exists
  IF (NOT EXISTS (SELECT * FROM msdb.dbo.log_shipping_primaries WHERE primary_server_name = @primary_server_name AND primary_database_name = @primary_database_name))
  BEGIN
    DECLARE @pp sysname
    SELECT @pp = @primary_server_name + N'.' + @primary_database_name
    RAISERROR (14262, 16, 1, N'primary_server_name.primary_database_name', @pp)
    RETURN (1) -- error
  END

  -- check that the secondary exists
  IF (NOT EXISTS (SELECT * FROM msdb.dbo.log_shipping_secondaries WHERE secondary_server_name = @secondary_server_name AND secondary_database_name = @secondary_database_name))
  BEGIN
    DECLARE @sp sysname
    SELECT @sp = @secondary_server_name + N'.' + @secondary_database_name
    RAISERROR (14262, 16, 1, N'secondary_server_name.secondary_database_name', @sp)
    RETURN (1) -- error
  END

  -- load the original variables

 SELECT
    @_backup_threshold                    = backup_threshold,
    @_backup_threshold_alert              = p.threshold_alert,
    @_backup_threshold_alert_enabled      = p.threshold_alert_enabled,
    @_backup_outage_start_time            = p.planned_outage_start_time,
    @_backup_outage_end_time              = p.planned_outage_end_time,
    @_backup_outage_weekday_mask          = p.planned_outage_weekday_mask,
    @_copy_enabled                        = copy_enabled,
    @_load_enabled                        = load_enabled,
    @_out_of_sync_threshold               = out_of_sync_threshold,
    @_out_of_sync_threshold_alert         = s.threshold_alert,
    @_out_of_sync_threshold_alert_enabled = s.threshold_alert_enabled,
    @_out_of_sync_outage_start_time       = s.planned_outage_start_time,
    @_out_of_sync_outage_weekday_mask     = s.planned_outage_weekday_mask,
    @_out_of_sync_outage_end_time         = s.planned_outage_end_time
  FROM msdb.dbo.log_shipping_primaries p, msdb.dbo.log_shipping_secondaries s
  WHERE 
    p.primary_id            = s.primary_id           AND
    primary_server_name     = @primary_server_name   AND
    primary_database_name   = @primary_database_name AND
    secondary_server_name   = @secondary_server_name AND
    secondary_database_name = @secondary_database_name

  SELECT @_backup_threshold                    = ISNULL (@backup_threshold,                    @_backup_threshold)
  SELECT @_backup_threshold_alert              = ISNULL (@backup_threshold_alert,              @_backup_threshold_alert)
  SELECT @_backup_threshold_alert_enabled      = ISNULL (@backup_threshold_alert_enabled,      @_backup_threshold_alert_enabled)
  SELECT @_backup_outage_start_time            = ISNULL (@backup_outage_start_time,            @_backup_outage_start_time)
  SELECT @_backup_outage_end_time              = ISNULL (@backup_outage_end_time,              @_backup_outage_end_time)
  SELECT @_backup_outage_weekday_mask          = ISNULL (@backup_outage_weekday_mask,          @_backup_outage_weekday_mask)
  SELECT @_copy_enabled                        = ISNULL (@copy_enabled,                        @_copy_enabled)
  SELECT @_load_enabled                        = ISNULL (@load_enabled,                        @_load_enabled)
  SELECT @_out_of_sync_threshold               = ISNULL (@out_of_sync_threshold,               @_out_of_sync_threshold)
  SELECT @_out_of_sync_threshold_alert         = ISNULL (@out_of_sync_threshold_alert,         @_out_of_sync_threshold_alert)
  SELECT @_out_of_sync_threshold_alert_enabled = ISNULL (@out_of_sync_threshold_alert_enabled, @_out_of_sync_threshold_alert_enabled)
  SELECT @_out_of_sync_outage_start_time       = ISNULL (@out_of_sync_outage_start_time,       @_out_of_sync_outage_start_time)
  SELECT @_out_of_sync_outage_end_time         = ISNULL (@out_of_sync_outage_end_time,         @_out_of_sync_outage_end_time)
  SELECT @_out_of_sync_outage_weekday_mask     = ISNULL (@out_of_sync_outage_weekday_mask,     @_out_of_sync_outage_weekday_mask)

  -- updates
  UPDATE msdb.dbo.log_shipping_primaries SET
    backup_threshold            = @_backup_threshold,
    threshold_alert             = @_backup_threshold_alert,
    threshold_alert_enabled     = @_backup_threshold_alert_enabled,
    planned_outage_start_time   = @_backup_outage_start_time,
    planned_outage_end_time     = @_backup_outage_end_time,
    planned_outage_weekday_mask = @_backup_outage_weekday_mask
  WHERE primary_server_name = @primary_server_name AND primary_database_name = @primary_database_name

  UPDATE msdb.dbo.log_shipping_secondaries SET
    copy_enabled                = @_copy_enabled,
    load_enabled                = @_load_enabled,
    out_of_sync_threshold       = @_out_of_sync_threshold,
    threshold_alert             = @_out_of_sync_threshold_alert,
    threshold_alert_enabled     = @_out_of_sync_threshold_alert_enabled,
    planned_outage_start_time   = @_out_of_sync_outage_start_time,
    planned_outage_end_time     = @_out_of_sync_outage_end_time,
    planned_outage_weekday_mask = @_out_of_sync_outage_weekday_mask
  WHERE secondary_server_name = @secondary_server_name AND secondary_database_name = @secondary_database_name
RETURN(0)
END
go

/**************************************************************/
/* sp_delete_log_shipping_monitor_info                        */
/**************************************************************/
PRINT ''
PRINT 'Creating procedure sp_delete_log_shipping_monitor_info...'
go
IF (EXISTS (SELECT * from msdb.dbo.sysobjects WHERE name = N'sp_delete_log_shipping_monitor_info' AND type = N'P')  )
  DROP PROCEDURE sp_delete_log_shipping_monitor_info
go
CREATE PROCEDURE sp_delete_log_shipping_monitor_info
  @primary_server_name                 sysname,
  @primary_database_name               sysname,
  @secondary_server_name               sysname,
  @secondary_database_name             sysname
AS BEGIN
  -- check that the primary exists
  IF (NOT EXISTS (SELECT * FROM msdb.dbo.log_shipping_primaries WHERE primary_server_name = @primary_server_name AND primary_database_name = @primary_database_name))
  BEGIN
    DECLARE @pp sysname
    SELECT @pp = @primary_server_name + N'.' + @primary_database_name
    RAISERROR (14262, 16, 1, N'primary_server_name.primary_database_name', @pp)
    RETURN (1) -- error
  END

  -- check that the secondary exists
  IF (NOT EXISTS (SELECT * FROM msdb.dbo.log_shipping_secondaries WHERE secondary_server_name = @secondary_server_name AND secondary_database_name = @secondary_database_name))
  BEGIN
    DECLARE @sp sysname
    SELECT @sp = @secondary_server_name + N'.' + @secondary_database_name
    RAISERROR (14262, 16, 1, N'secondary_server_name.secondary_database_name', @sp)
    RETURN (1) -- error
  END

  BEGIN TRANSACTION

  -- delete the secondary
  DELETE FROM msdb.dbo.log_shipping_secondaries WHERE secondary_server_name = @secondary_server_name AND secondary_database_name = @secondary_database_name
  IF (@@error <> 0)
    goto rollback_quit

  -- if there are no more secondaries for this primary then delete it
  IF (NOT EXISTS (SELECT * FROM msdb.dbo.log_shipping_primaries p, msdb.dbo.log_shipping_secondaries s WHERE p.primary_id = s.primary_id AND primary_server_name = @primary_server_name AND primary_database_name = @primary_database_name))
  BEGIN
    DELETE FROM msdb.dbo.log_shipping_primaries WHERE primary_server_name = @primary_server_name AND primary_database_name = @primary_database_name
    IF (@@error <> 0)
      goto rollback_quit
  END
 COMMIT TRANSACTION
 RETURN (0)

rollback_quit:
  ROLLBACK TRANSACTION
  RETURN(1) -- Failure
END
go 
/**************************************************************/
/* SP_SET_SQLAGENT_PROPERTIES                                 */
/**************************************************************/
IF EXISTS (SELECT * FROM msdb.dbo.sysobjects WHERE name = N'sp_set_sqlagent_properties' AND type = 'P')
BEGIN
  DROP PROCEDURE dbo.sp_set_sqlagent_properties
END
go

PRINT ''
PRINT 'Create procedure sp_set_sqlagent_properties...'
go

CREATE PROCEDURE dbo.sp_set_sqlagent_properties
  @auto_start                  INT           = NULL, -- 1 or 0
  -- Non-SQLDMO exposed properties
  @sqlserver_restart           INT           = NULL, -- 1 or 0
  @jobhistory_max_rows         INT           = NULL, -- No maximum = -1, otherwise must be > 1
  @jobhistory_max_rows_per_job INT           = NULL, -- 1 to @jobhistory_max_rows
  @errorlog_file               NVARCHAR(255) = NULL, -- Full drive\path\name of errorlog file
  @errorlogging_level          INT           = NULL, -- 1 = error, 2 = warning, 4 = information
  @error_recipient             NVARCHAR(30)  = NULL, -- Network address of error popup recipient
  @monitor_autostart           INT           = NULL, -- 1 or 0
  @local_host_server           NVARCHAR(30)  = NULL, -- Alias of local host server
  @job_shutdown_timeout        INT           = NULL, -- 5 to 600 seconds
  @cmdexec_account             VARBINARY(64) = NULL, -- CmdExec account information
  @regular_connections         INT           = NULL, -- 1 or 0
  @host_login_name             sysname       = NULL, -- Login name (if regular_connections = 1)
  @host_login_password         VARBINARY(512) = NULL, -- Login password (if regular_connections = 1)
  @login_timeout               INT           = NULL, -- 5 to 45 (seconds)
  @idle_cpu_percent            INT           = NULL, -- 1 to 100
  @idle_cpu_duration           INT           = NULL, -- 20 to 86400 seconds
  @oem_errorlog                INT           = NULL, -- 1 or 0
  @sysadmin_only               INT           = NULL, -- 1 or 0
  @email_profile               NVARCHAR(64)  = NULL, -- Email profile name
  @email_save_in_sent_folder   INT           = NULL, -- 1 or 0
  @cpu_poller_enabled          INT           = NULL  -- 1 or 0
AS
BEGIN
  -- NOTE: We set all SQLServerAgent properties at one go for performance reasons.
  -- NOTE: You cannot set the value of the properties msx_server_name, is_msx or
  --       startup_account - they are all read only.

  DECLARE @res_valid_range           NVARCHAR(100)
  DECLARE @existing_core_engine_mask INT

  SET NOCOUNT ON

  -- Remove any leading/trailing spaces from parameters
  SELECT @errorlog_file     = LTRIM(RTRIM(@errorlog_file))
  SELECT @error_recipient   = LTRIM(RTRIM(@error_recipient))
  SELECT @local_host_server = LTRIM(RTRIM(@local_host_server))
  SELECT @host_login_name   = LTRIM(RTRIM(@host_login_name))
  SELECT @email_profile     = LTRIM(RTRIM(@email_profile))

  -- Make sure values (if supplied) are good
  IF (@auto_start IS NOT NULL)
  BEGIN
    -- NOTE: When setting the the services start value, 2 == auto-start, 3 == Don't auto-start
    SELECT @auto_start = CASE @auto_start
                           WHEN 0 THEN 3
                           WHEN 1 THEN 2
                           ELSE 3 -- Assume non auto-start if passed a junk value
                          END
  END

  -- Non-SQLDMO exposed properties
  IF ((@sqlserver_restart IS NOT NULL) AND (@sqlserver_restart <> 0))
    SELECT @sqlserver_restart = 1

  IF (@jobhistory_max_rows IS NOT NULL)
  BEGIN
    SELECT @res_valid_range = FORMATMESSAGE(14207)
    IF ((@jobhistory_max_rows < -1) OR (@jobhistory_max_rows = 0))
    BEGIN
      RAISERROR(14266, -1, -1, '@jobhistory_max_rows', @res_valid_range)
      RETURN(1) -- Failure
    END
  END
  ELSE
  BEGIN
    EXECUTE master.dbo.xp_instance_regread N'HKEY_LOCAL_MACHINE',
                                           N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                           N'JobHistoryMaxRows',
                                           @jobhistory_max_rows OUTPUT,
                                           N'no_output'
    SELECT @jobhistory_max_rows = ISNULL(@jobhistory_max_rows, -1)
  END

  IF (@jobhistory_max_rows_per_job IS NOT NULL)
  BEGIN
    IF (@jobhistory_max_rows = -1)
      SELECT @jobhistory_max_rows_per_job = 0
    ELSE
    BEGIN
      IF ((@jobhistory_max_rows_per_job < 1) OR (@jobhistory_max_rows_per_job > @jobhistory_max_rows))
      BEGIN
        SELECT @res_valid_range = N'1..' + CONVERT(NVARCHAR, @jobhistory_max_rows)
        RAISERROR(14266, -1, -1, '@jobhistory_max_rows', @res_valid_range)
        RETURN(1) -- Failure
      END
    END
  END

  IF (@errorlogging_level IS NOT NULL) AND ((@errorlogging_level < 1) OR (@errorlogging_level > 7))
  BEGIN
    RAISERROR(14266, -1, -1, '@errorlogging_level', '1..7')
    RETURN(1) -- Failure
  END

  IF (@monitor_autostart IS NOT NULL) AND ((@monitor_autostart < 0) OR (@monitor_autostart > 1))
  BEGIN
    RAISERROR(14266, -1, -1, '@monitor_autostart', '0, 1')
    RETURN(1) -- Failure
  END

  IF (@job_shutdown_timeout IS NOT NULL) AND ((@job_shutdown_timeout < 5) OR (@job_shutdown_timeout > 600))
  BEGIN
    RAISERROR(14266, -1, -1, '@job_shutdown_timeout', '5..600')
    RETURN(1) -- Failure
  END

  IF (@regular_connections IS NOT NULL) AND ((@regular_connections < 0) OR (@regular_connections > 1))
  BEGIN
    RAISERROR(14266, -1, -1, '@regular_connections', '0, 1')
    RETURN(1) -- Failure
  END

  IF (@login_timeout IS NOT NULL) AND ((@login_timeout < 5) OR (@login_timeout > 45))
  BEGIN
    RAISERROR(14266, -1, -1, '@login_timeout', '5..45')
    RETURN(1) -- Failure
  END

  IF ((@idle_cpu_percent IS NOT NULL) AND ((@idle_cpu_percent < 1) OR (@idle_cpu_percent > 100)))
  BEGIN
    RAISERROR(14266, -1, -1, '@idle_cpu_percent', '10..100')
    RETURN(1) -- Failure
  END

  IF ((@idle_cpu_duration IS NOT NULL) AND ((@idle_cpu_duration < 20) OR (@idle_cpu_duration > 86400)))
  BEGIN
    RAISERROR(14266, -1, -1, '@idle_cpu_duration', '20..86400')
    RETURN(1) -- Failure
  END

  IF (@oem_errorlog IS NOT NULL) AND ((@oem_errorlog < 0) OR (@oem_errorlog > 1))
  BEGIN
    RAISERROR(14266, -1, -1, '@oem_errorlog', '0, 1')
    RETURN(1) -- Failure
  END

  IF (@sysadmin_only IS NOT NULL) AND ((@sysadmin_only < 0) OR (@sysadmin_only > 1))
  BEGIN
    RAISERROR(14266, -1, -1, '@sysadmin_only', '0, 1')
    RETURN(1) -- Failure
  END

  IF (@email_save_in_sent_folder IS NOT NULL) AND ((@email_save_in_sent_folder < 0) OR (@email_save_in_sent_folder > 1))
  BEGIN
    RAISERROR(14266, -1, -1, 'email_save_in_sent_folder', '0, 1')
    RETURN(1) -- Failure
  END

  IF (@cpu_poller_enabled IS NOT NULL) AND ((@cpu_poller_enabled < 0) OR (@cpu_poller_enabled > 1))
  BEGIN
    RAISERROR(14266, -1, -1, 'cpu_poller_enabled', '0, 1')
    RETURN(1) -- Failure
  END

  -- Write out the values
  IF (@auto_start IS NOT NULL)
  BEGIN
    IF ((PLATFORM() & 0x1) = 0x1) -- NT
    BEGIN
      DECLARE @key NVARCHAR(200)

      SELECT @key = N'SYSTEM\CurrentControlSet\Services\'
      IF (SERVERPROPERTY('INSTANCENAME') IS NOT NULL)
        SELECT @key = @key + N'SQLAgent$' + CONVERT (sysname, SERVERPROPERTY('INSTANCENAME'))
      ELSE
        SELECT @key = @key + N'SQLServerAgent'

      EXECUTE master.dbo.xp_regwrite N'HKEY_LOCAL_MACHINE',
                                     @key,
                                     N'Start',
                                     N'REG_DWORD',
                                     @auto_start
    END
    ELSE
      RAISERROR(14546, 16, 1, '@auto_start')
  END

  -- Non-SQLDMO exposed properties
  IF (@sqlserver_restart IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'RestartSQLServer',
                                            N'REG_DWORD',
                                            @sqlserver_restart
  IF (@jobhistory_max_rows IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'JobHistoryMaxRows',
                                            N'REG_DWORD',
                                            @jobhistory_max_rows
  IF (@jobhistory_max_rows_per_job IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'JobHistoryMaxRowsPerJob',
                                            N'REG_DWORD',
                                            @jobhistory_max_rows_per_job
  IF (@errorlog_file IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'ErrorLogFile',
                                            N'REG_SZ',
                                            @errorlog_file
  IF (@errorlogging_level IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'ErrorLoggingLevel',
                                            N'REG_DWORD',
                                            @errorlogging_level
  IF (@error_recipient IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'ErrorMonitor',
                                            N'REG_SZ',
                                            @error_recipient
  IF (@monitor_autostart IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'MonitorAutoStart',
                                            N'REG_DWORD',
                                            @monitor_autostart
  IF (@local_host_server IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'ServerHost',
                                            N'REG_SZ',
                                            @local_host_server
  IF (@job_shutdown_timeout IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'JobShutdownTimeout',
                                            N'REG_DWORD',
                                            @job_shutdown_timeout
  IF (@cmdexec_account IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'CmdExecAccount',
                                            N'REG_BINARY',
                                            @cmdexec_account
  IF (@regular_connections IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'RegularConnections',
                                            N'REG_DWORD',
                                            @regular_connections

  DECLARE @OS int
  EXECUTE master.dbo.xp_MSplatform @OS OUTPUT

  IF (@regular_connections = 0)
  BEGIN
    IF (@OS = 2)
    BEGIN
      EXECUTE master.dbo.xp_instance_regdeletevalue N'HKEY_LOCAL_MACHINE', N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent', N'HostLoginID'
      EXECUTE master.dbo.xp_instance_regdeletevalue N'HKEY_LOCAL_MACHINE', N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent', N'HostPassword'
    END
    ELSE
    BEGIN
      EXECUTE master.dbo.xp_sqlagent_param    2, N'HostLoginID'
      EXECUTE master.dbo.xp_sqlagent_param    2, N'HostPassword'
    END
  END

  IF (@host_login_name IS NOT NULL)
  BEGIN
    IF (@OS = 2)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'HostLoginID',
                                            N'REG_SZ',
                                            @host_login_name
    ELSE
    EXECUTE master.dbo.xp_sqlagent_param    1,
                                            N'HostLoginID',
                                            @host_login_name
  END

  IF (@host_login_password IS NOT NULL)
  BEGIN
    IF (@OS = 2)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'HostPassword',
                                            N'REG_BINARY',
                                            @host_login_password
    ELSE
    EXECUTE master.dbo.xp_sqlagent_param    1,
                                            N'HostPassword',
                                            @host_login_password
  END

  IF (@login_timeout IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'LoginTimeout',
                                            N'REG_DWORD',
                                            @login_timeout
  IF (@idle_cpu_percent IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'IdleCPUPercent',
                                            N'REG_DWORD',
                                            @idle_cpu_percent
  IF (@idle_cpu_duration IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'IdleCPUDuration',
                                            N'REG_DWORD',
                                            @idle_cpu_duration
  IF (@oem_errorlog IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'OemErrorLog',
                                            N'REG_DWORD',
                                            @oem_errorlog
  IF (@sysadmin_only IS NOT NULL)
    BEGIN
    IF (@sysadmin_only = 1)
      BEGIN
	EXECUTE master.dbo.xp_sqlagent_proxy_account N'DEL'
      END
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'SysAdminOnly',
                                            N'REG_DWORD',
                                            @sysadmin_only
    END

  IF (@email_profile IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'EmailProfile',
                                            N'REG_SZ',
                                            @email_profile
  IF (@email_save_in_sent_folder IS NOT NULL)
    EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                            N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                            N'EmailSaveSent',
                                            N'REG_DWORD',
                                            @email_save_in_sent_folder
  IF (@cpu_poller_enabled IS NOT NULL)
  BEGIN
    EXECUTE master.dbo.xp_instance_regread N'HKEY_LOCAL_MACHINE',
                                           N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                           N'CoreEngineMask',
                                           @existing_core_engine_mask OUTPUT,
                                           N'no_output'
    IF ((@existing_core_engine_mask IS NOT NULL) OR (@cpu_poller_enabled = 1))
    BEGIN
      IF (@cpu_poller_enabled = 1)
        SELECT @cpu_poller_enabled = (ISNULL(@existing_core_engine_mask, 0) & ~32)
      ELSE
        SELECT @cpu_poller_enabled = (ISNULL(@existing_core_engine_mask, 0) | 32)

      IF ((@existing_core_engine_mask IS NOT NULL) AND (@cpu_poller_enabled = 32))
        EXECUTE master.dbo.xp_instance_regdeletevalue N'HKEY_LOCAL_MACHINE',
                                                      N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                                      N'CoreEngineMask'
      ELSE
        EXECUTE master.dbo.xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
                                                N'SOFTWARE\Microsoft\MSSQLServer\SQLServerAgent',
                                                N'CoreEngineMask',
                                                N'REG_DWORD',
                                                @cpu_poller_enabled
    END
  END

  RETURN(0) -- Success
END
go

IF (EXISTS (SELECT *
            FROM msdb.dbo.sysobjects
            WHERE (name = N'sp_verify_subsystem')
              AND (type = 'P')))
  DROP PROCEDURE sp_verify_subsystem
go
CREATE PROCEDURE sp_verify_subsystem
  @subsystem NVARCHAR(40)
AS
BEGIN
  SET NOCOUNT ON

  -- Remove any leading/trailing spaces from parameters
  SELECT @subsystem = LTRIM(RTRIM(@subsystem))

  -- NOTE: We don't use the results of sp_enum_sqlagent_subsystems for performance reasons
  IF (UPPER(@subsystem collate SQL_Latin1_General_CP1_CS_AS) IN 
                           (N'ACTIVESCRIPTING',
                            N'CMDEXEC',
                            N'DISTRIBUTION',
                            N'SNAPSHOT',
                            N'LOGREADER',
                            N'MERGE',
                            N'TSQL',
                            N'QUEUEREADER'))
    RETURN(0) -- Success
  ELSE
  BEGIN
    RAISERROR(14234, -1, -1, '@subsystem', 'sp_enum_sqlagent_subsystems')
    RETURN(1) -- Failure
  END
END
go

/**************************************************************/
/* SP_VERIFY_JOB                                              */
/**************************************************************/

PRINT ''
PRINT 'Creating procedure sp_verify_job...'
go
IF (EXISTS (SELECT *
            FROM msdb.dbo.sysobjects
            WHERE (name = N'sp_verify_job')
              AND (type = 'P')))
  DROP PROCEDURE sp_verify_job
go
CREATE PROCEDURE sp_verify_job
  @job_id                       UNIQUEIDENTIFIER,
  @name                         sysname,
  @enabled                      TINYINT,
  @start_step_id                INT,
  @category_name                sysname,
  @owner_sid                    VARBINARY(85) OUTPUT, -- Output since we may modify it
  @notify_level_eventlog        INT,
  @notify_level_email           INT           OUTPUT, -- Output since we may reset it to 0
  @notify_level_netsend         INT           OUTPUT, -- Output since we may reset it to 0
  @notify_level_page            INT           OUTPUT, -- Output since we may reset it to 0
  @notify_email_operator_name   sysname,
  @notify_netsend_operator_name sysname,
  @notify_page_operator_name    sysname,
  @delete_level                 INT,
  @category_id                  INT           OUTPUT, -- The ID corresponding to the name
  @notify_email_operator_id     INT           OUTPUT, -- The ID corresponding to the name
  @notify_netsend_operator_id   INT           OUTPUT, -- The ID corresponding to the name
  @notify_page_operator_id      INT           OUTPUT, -- The ID corresponding to the name
  @originating_server           NVARCHAR(30)  OUTPUT  -- Output since we may modify it
AS
BEGIN
  DECLARE @job_type           INT
  DECLARE @retval             INT
  DECLARE @current_date       INT
  DECLARE @local_machine_name NVARCHAR(30)
  DECLARE @res_valid_range    NVARCHAR(200)

  SET NOCOUNT ON

  -- Remove any leading/trailing spaces from parameters
  SELECT @name                       = LTRIM(RTRIM(@name))
  SELECT @category_name              = LTRIM(RTRIM(@category_name))
  SELECT @originating_server         = LTRIM(RTRIM(@originating_server))

  -- Make sure that input/output strings - if NULL - are initialized to NOT null
  EXECUTE @retval = master.dbo.xp_getnetname @local_machine_name OUTPUT
  IF (@retval <> 0)
    RETURN(1) -- Failure
  SELECT @originating_server = ISNULL(@originating_server, ISNULL(@local_machine_name, UPPER(CONVERT(NVARCHAR(30), SERVERPROPERTY('ServerName')))))

  -- Replace the local server name with local server name
  IF (UPPER(@originating_server) = UPPER(@local_machine_name))
    SELECT @originating_server = UPPER(CONVERT(NVARCHAR(30), SERVERPROPERTY('ServerName')))

  -- Check originating server (only the SQLServerAgent can add jobs that originate from a remote server)
  IF (UPPER(@originating_server) <> UPPER(CONVERT(NVARCHAR(30), SERVERPROPERTY('ServerName')))) AND
     (PROGRAM_NAME() NOT LIKE N'SQLAgent%')
  BEGIN
    RAISERROR(14275, -1, -1, @local_machine_name)
    RETURN(1) -- Failure
  END

  -- Make sure that the local server is always referred to as local server name (ie. lower-case)
  IF (UPPER(@originating_server) = UPPER(CONVERT(NVARCHAR(30), SERVERPROPERTY('ServerName'))))
    SELECT @originating_server = LOWER(@originating_server)

  -- NOTE: We allow jobs with the same name (since job_id is always unique) but only if
  --       they originate from different servers.  Thus jobs can flow from an MSX to a TSX
  --       without having to worry about naming conflicts.
  IF (EXISTS (SELECT *
              FROM msdb.dbo.sysjobs
              WHERE (name = @name)
                AND (originating_server = @originating_server)
                AND (job_id <> ISNULL(@job_id, 0x911)))) -- When adding a new job @job_id is NULL
  BEGIN
    RAISERROR(14261, -1, -1, '@name', @name)
    RETURN(1) -- Failure
  END

  -- Check enabled state
  IF (@enabled <> 0) AND (@enabled <> 1)
  BEGIN
    RAISERROR(14266, -1, -1, '@enabled', '0, 1')
    RETURN(1) -- Failure
  END

  -- Check start step
  IF (@job_id IS NULL)
  BEGIN
    -- New job
    -- NOTE: For [new] MSX jobs we allow the start step to be other than 1 since
    --       the start step was validated when the job was created at the MSX
    IF (@start_step_id <> 1) AND (UPPER(@originating_server) = UPPER(CONVERT(NVARCHAR(30), SERVERPROPERTY('ServerName'))))
    BEGIN
      RAISERROR(14266, -1, -1, '@start_step_id', '1')
      RETURN(1) -- Failure
    END
  END
  ELSE
  BEGIN
    -- Existing job
    DECLARE @max_step_id INT
    DECLARE @valid_range VARCHAR(50)

    -- Get current maximum step id
    SELECT @max_step_id = ISNULL(MAX(step_id), 0)
    FROM msdb.dbo.sysjobsteps
    WHERE (job_id = @job_id)

    IF (@start_step_id < 1) OR (@start_step_id > @max_step_id + 1)
    BEGIN
      SELECT @valid_range = '1..' + CONVERT(VARCHAR, @max_step_id + 1)
      RAISERROR(14266, -1, -1, '@start_step_id', @valid_range)
      RETURN(1) -- Failure
    END
  END

  -- Check category
  SELECT @job_type = NULL

  IF (EXISTS (SELECT *
              FROM msdb.dbo.sysjobservers
              WHERE (job_id = @job_id)
                AND (server_id = 0)))
    SELECT @job_type = 1 -- LOCAL

  IF (EXISTS (SELECT *
              FROM msdb.dbo.sysjobservers
              WHERE (job_id = @job_id)
                AND (server_id <> 0)))
    SELECT @job_type = 2 -- MULTI-SERVER

  -- A local job cannot be added to a multi-server job_category
  IF (@job_type = 1) AND (EXISTS (SELECT *
                                  FROM msdb.dbo.syscategories
                                  WHERE (category_class = 1) -- Job
                                    AND (category_type = 2) -- Multi-Server
                                    AND (name = @category_name)))
  BEGIN
    RAISERROR(14285, -1, -1)
    RETURN(1) -- Failure
  END

  -- A multi-server job cannot be added to a local job_category
  IF (@job_type = 2) AND (EXISTS (SELECT *
                                  FROM msdb.dbo.syscategories
                                  WHERE (category_class = 1) -- Job
                                    AND (category_type = 1) -- Local
                                    AND (name = @category_name)))
  BEGIN
    RAISERROR(14286, -1, -1)
    RETURN(1) -- Failure
  END

  -- Get the category_id, handling any special-cases as appropriate
  SELECT @category_id = NULL
  IF (@category_name = N'[DEFAULT]') -- User wants to revert to the default job category
  BEGIN
    SELECT @category_id = CASE ISNULL(@job_type, 1)
                            WHEN 1 THEN 0 -- [Uncategorized (Local)]
                            WHEN 2 THEN 2 -- [Uncategorized (Multi-Server)]
                          END
  END
  ELSE
  IF (@category_name IS NULL) -- The sp_add_job default
  BEGIN
    SELECT @category_id = 0
  END
  ELSE
  BEGIN
    SELECT @category_id = category_id
    FROM msdb.dbo.syscategories
    WHERE (category_class = 1) -- Job
      AND (name = @category_name)
  END

  IF (@category_id IS NULL)
  BEGIN
    RAISERROR(14234, -1, -1, '@category_name', 'sp_help_category')
    RETURN(1) -- Failure
  END

  -- Only SQLServerAgent may add jobs to the 'Jobs From MSX' category
  IF (@category_id = 1) AND
     (PROGRAM_NAME() NOT LIKE N'SQLAgent%')
  BEGIN
    RAISERROR(14267, -1, -1, @category_name)
    RETURN(1) -- Failure
  END

  -- Check owner
  -- If a non-sa is [illegally] trying to create a job for another user then default the owner
  -- to be the calling user.
  IF ((ISNULL(IS_SRVROLEMEMBER(N'sysadmin'), 0) = 0) AND (@owner_sid <> SUSER_SID()))
    SELECT @owner_sid = SUSER_SID()

  -- Now just check that the login id is valid (ie. it exists and isn't an NT group)
  IF ((@owner_sid <> 0x010100000000000512000000) AND
     (@owner_sid <> 0x010100000000000514000000)) 
  BEGIN
     IF (@owner_sid IS NULL) OR (EXISTS (SELECT *
                                      FROM master.dbo.syslogins
                                      WHERE (sid = @owner_sid)
                                        AND (isntgroup <> 0)))
     BEGIN
       -- NOTE: In the following message we quote @owner_login_name instead of @owner_sid
       --       since this is the parameter the user passed to the calling SP (ie. either
       --       sp_add_job or sp_update_job)
       SELECT @res_valid_range = FORMATMESSAGE(14203)
       RAISERROR(14234, -1, -1, '@owner_login_name', @res_valid_range)
       RETURN(1) -- Failure
     END
  END

  -- Check notification levels (must be 0, 1, 2 or 3)
  IF (@notify_level_eventlog & 0x3 <> @notify_level_eventlog)
  BEGIN
    RAISERROR(14266, -1, -1, '@notify_level_eventlog', '0, 1, 2, 3')
    RETURN(1) -- Failure
  END
  IF (@notify_level_email & 0x3 <> @notify_level_email)
  BEGIN
    RAISERROR(14266, -1, -1, '@notify_level_email', '0, 1, 2, 3')
    RETURN(1) -- Failure
  END
  IF (@notify_level_netsend & 0x3 <> @notify_level_netsend)
  BEGIN
    RAISERROR(14266, -1, -1, '@notify_level_netsend', '0, 1, 2, 3')
    RETURN(1) -- Failure
  END
  IF (@notify_level_page & 0x3 <> @notify_level_page)
  BEGIN
    RAISERROR(14266, -1, -1, '@notify_level_page', '0, 1, 2, 3')
    RETURN(1) -- Failure
  END

  -- If we're at a TSX, only SQLServerAgent may add jobs that notify 'MSXOperator'
  IF (NOT EXISTS (SELECT *
                  FROM msdb.dbo.systargetservers)) AND
     ((@notify_email_operator_name = N'MSXOperator') OR
      (@notify_page_operator_name = N'MSXOperator') OR
      (@notify_netsend_operator_name = N'MSXOperator')) AND
     (PROGRAM_NAME() NOT LIKE N'SQLAgent%')
  BEGIN
    RAISERROR(14251, -1, -1, 'MSXOperator')
    RETURN(1) -- Failure
  END

  -- Check operator to notify (via email)
  IF (@notify_email_operator_name IS NOT NULL)
  BEGIN
    SELECT @notify_email_operator_id = id
    FROM msdb.dbo.sysoperators
    WHERE (name = @notify_email_operator_name)

    IF (@notify_email_operator_id IS NULL)
    BEGIN
      RAISERROR(14234, -1, -1, '@notify_email_operator_name', 'sp_help_operator')
      RETURN(1) -- Failure
    END
    -- If a valid operator is specified the level must be non-zero
    IF (@notify_level_email = 0)
    BEGIN
      RAISERROR(14266, -1, -1, '@notify_level_email', '1, 2, 3')
      RETURN(1) -- Failure
    END
  END
  ELSE
  BEGIN
    SELECT @notify_email_operator_id = 0
    SELECT @notify_level_email = 0
  END

  -- Check operator to notify (via netsend)
  IF (@notify_netsend_operator_name IS NOT NULL)
  BEGIN
    SELECT @notify_netsend_operator_id = id
    FROM msdb.dbo.sysoperators
    WHERE (name = @notify_netsend_operator_name)

    IF (@notify_netsend_operator_id IS NULL)
    BEGIN
      RAISERROR(14234, -1, -1, '@notify_netsend_operator_name', 'sp_help_operator')
      RETURN(1) -- Failure
    END
    -- If a valid operator is specified the level must be non-zero
    IF (@notify_level_netsend = 0)
    BEGIN
      RAISERROR(14266, -1, -1, '@notify_level_netsend', '1, 2, 3')
      RETURN(1) -- Failure
    END
  END
  ELSE
  BEGIN
    SELECT @notify_netsend_operator_id = 0
    SELECT @notify_level_netsend = 0
  END

  -- Check operator to notify (via page)
  IF (@notify_page_operator_name IS NOT NULL)
  BEGIN
    SELECT @notify_page_operator_id = id
    FROM msdb.dbo.sysoperators
    WHERE (name = @notify_page_operator_name)

    IF (@notify_page_operator_id IS NULL)
    BEGIN
      RAISERROR(14234, -1, -1, '@notify_page_operator_name', 'sp_help_operator')
      RETURN(1) -- Failure
    END
    -- If a valid operator is specified the level must be non-zero
    IF (@notify_level_page = 0)
    BEGIN
      RAISERROR(14266, -1, -1, '@notify_level_page', '1, 2, 3')
      RETURN(1) -- Failure
    END
  END
  ELSE
  BEGIN
    SELECT @notify_page_operator_id = 0
    SELECT @notify_level_page = 0
  END

  -- Check delete level (must be 0, 1, 2 or 3)
  IF (@delete_level & 0x3 <> @delete_level)
  BEGIN
    RAISERROR(14266, -1, -1, '@delete_level', '0, 1, 2, 3')
    RETURN(1) -- Failure
  END

  RETURN(0) -- Success
END
go

/**************************************************************/
/* SP_HELP_ALERT                                              */
/**************************************************************/

PRINT ''
PRINT 'Creating procedure sp_help_alert...'
go
IF (EXISTS (SELECT *
            FROM msdb.dbo.sysobjects
            WHERE (name = N'sp_help_alert')
              AND (type = 'P')))
  DROP PROCEDURE sp_help_alert
go
CREATE PROCEDURE sp_help_alert
  @alert_name    sysname = NULL,
  @order_by      sysname = N'name',
  @alert_id      INT     = NULL,
  @category_name sysname = NULL
AS
BEGIN
  DECLARE @alert_id_as_char NVARCHAR(10)

  SET NOCOUNT ON

  -- Remove any leading/trailing spaces from parameters
  SELECT @alert_name    = LTRIM(RTRIM(@alert_name))
  SELECT @order_by      = LTRIM(RTRIM(@order_by))
  SELECT @category_name = LTRIM(RTRIM(@category_name))

  -- Turn [nullable] empty string parameters into NULLs
  IF (@category_name = N'') SELECT @category_name = NULL
  IF (@alert_name = N'')    SELECT @alert_name = NULL

  -- Check alert name
  IF (@alert_name IS NOT NULL)
  BEGIN
    IF (NOT EXISTS (SELECT *
                    FROM msdb.dbo.sysalerts
                    WHERE (name = @alert_name)))
    BEGIN
      RAISERROR(14262, -1, -1, '@alert_name', @alert_name)
      RETURN(1) -- Failure
    END
  END

  -- Check alert id
  IF (@alert_id IS NOT NULL)
  BEGIN
    IF (NOT EXISTS (SELECT *
                    FROM msdb.dbo.sysalerts
                    WHERE (id = @alert_id)))
    BEGIN
      SELECT @alert_id_as_char = CONVERT(VARCHAR, @alert_id)
      RAISERROR(14262, -1, -1, '@alert_id', @alert_id_as_char)
      RETURN(1) -- Failure
    END
  END

  IF (@alert_id IS NOT NULL)
    SELECT @alert_id_as_char = CONVERT(VARCHAR, @alert_id)
  ELSE
    SELECT @alert_id_as_char = N'NULL'

  -- Double up any single quotes in @alert_name
  IF (@alert_name IS NOT NULL)
    SELECT @alert_name = REPLACE(@alert_name, N'''', N'''''')

  -- Double up any single quotes in @category_name
  IF (@category_name IS NOT NULL)
    SELECT @category_name = REPLACE(@category_name, N'''', N'''''')

  -- @order_by parameter validation. 
  IF  ( (@order_by IS NOT NULL) AND 
        (EXISTS(SELECT so.id FROM msdb.dbo.sysobjects so 
                   JOIN msdb.dbo.syscolumns sc ON (so.id = sc.id) 
                WHERE so.xtype='U' AND so.name='sysalerts' AND LOWER(sc.name)=LOWER(@order_by)
               )
       ) )
  BEGIN
    SELECT @order_by = N'sa.' + @order_by
  END
  ELSE 
  BEGIN
     IF (LOWER(@order_by) NOT IN (N'job_name', N'category_name', N'type' ) )
        AND --special "order by" clause used only by sqlagent. if you change it you need to change agent too
        (@order_by <> N'severity ASC, message_id ASC, database_name DESC')     
     BEGIN
	      RAISERROR(18750, -1, -1, 'sp_help_alert', '@order_by')
        RETURN(1) -- Failure
     END
  END

  EXECUTE (N'SELECT sa.id,
                    sa.name,
                    sa.event_source,
                    sa.event_category_id,
                    sa.event_id,
                    sa.message_id,
                    sa.severity,
                    sa.enabled,
                    sa.delay_between_responses,
                    sa.last_occurrence_date,
                    sa.last_occurrence_time,
                    sa.last_response_date,
                    sa.last_response_time,
                    sa.notification_message,
                    sa.include_event_description,
                    sa.database_name,
                    sa.event_description_keyword,
                    sa.occurrence_count,
                    sa.count_reset_date,
                    sa.count_reset_time,
                    sjv.job_id,
                    job_name = sjv.name,
                    sa.has_notification,
                    sa.flags,
                    sa.performance_condition,
                    category_name = sc.name,
                    type = CASE ISNULL(performance_condition, ''!'')
                             WHEN ''!'' THEN
                               CASE event_source
                                 WHEN ''MSSQLSERVER'' THEN 1 -- SQL Server event alert
                                 ELSE 3                      -- Non SQL Server event alert
                               END
                             ELSE 2                          -- SQL Server performance condition alert
                           END
             FROM msdb.dbo.sysalerts                     sa
                  LEFT OUTER JOIN msdb.dbo.sysjobs_view  sjv ON (sa.job_id = sjv.job_id)
                  LEFT OUTER JOIN msdb.dbo.syscategories sc  ON (sa.category_id = sc.category_id)
             WHERE ((N''' + @alert_name + N''' = N'''') OR (sa.name = N''' + @alert_name + N'''))
               AND ((' + @alert_id_as_char + N' IS NULL) OR (sa.id = ' + @alert_id_as_char + N'))
               AND ((N''' + @category_name + N''' = N'''') OR (sc.name = N''' + @category_name + N'''))
             ORDER BY ' + @order_by)

  RETURN(@@error) -- 0 means success
END
go

/**************************************************************/
/* SP_CHECK_FOR_OWNED_JOBS                                    */
/**************************************************************/

PRINT ''
PRINT 'Creating procedure sp_check_for_owned_jobs...'
go
IF (EXISTS (SELECT *
            FROM msdb.dbo.sysobjects
            WHERE (name = N'sp_check_for_owned_jobs')
              AND (type = 'P')))
  DROP PROCEDURE sp_check_for_owned_jobs
go
CREATE PROCEDURE sp_check_for_owned_jobs
  @login_name sysname,
  @table_name sysname
AS
BEGIN
  SET NOCOUNT ON

  -- This procedure is called by sp_droplogin to check if the login being dropped
  -- still owns jobs.  The return value (the number of jobs owned) is passed back
  -- via the supplied table name [this cumbersome approach is necessary because
  -- sp_check_for_owned_jobs is invoked via an EXEC() and because we always want
  -- sp_droplogin to work, even if msdb and/or sysjobs does not exist].

  IF (EXISTS (SELECT *
              FROM msdb.dbo.sysobjects
              WHERE (name = N'sysjobs')
                AND (type = 'U')))
  BEGIN
    DECLARE @sql NVARCHAR(1024)
    SET @sql = N'INSERT INTO ' + QUOTENAME(@table_name, N'[') + N' SELECT COUNT(*) FROM msdb.dbo.sysjobs WHERE (owner_sid = SUSER_SID(N' + QUOTENAME(@login_name, '''') + '))'
    EXEC sp_executesql @statement = @sql  
  END
END
go

GRANT EXECUTE ON sp_check_for_owned_jobs TO PUBLIC
go

/**************************************************************/
/* sp_makewebtask                                             */
/**************************************************************/

USE master
go

IF EXISTS (SELECT * FROM sysobjects WHERE id = object_id(N'dbo.sp_makewebtask') AND type = 'P')
   DROP PROCEDURE dbo.sp_makewebtask
go


--====================================================================================
-- Add extended stored procedures for Web Server support.
--
-- sp_makewebtask: Creates and defines the Web Page Task

CREATE PROCEDURE sp_makewebtask
@outputfile		nvarchar(255),
@query			ntext,
@fixedfont		tinyint = 1,				-- 0/1 
@bold			tinyint = 0,				-- 0/1 
@italic			tinyint = 0,				-- 0/1 
@colheaders		tinyint = 1,				-- 0/1 
@lastupdated	tinyint = 1,				-- 0/1 
@HTMLheader		tinyint = 1,				-- 1-6 
@username		nvarchar(128) = NULL,
@dbname			nvarchar(128) = NULL,
@templatefile	nvarchar(255) = NULL,
@webpagetitle	nvarchar(255) = NULL,
@resultstitle	nvarchar(255) = NULL,
@URL			nvarchar(255) = NULL,
@reftext		nvarchar(255) = NULL,
@table_urls		tinyint = 0,				-- 0/1; 1=use table of URLs 
@url_query		nvarchar(255) = NULL,   
@whentype		tinyint = 1,				-- 1=now, 2=later, 3=every xday 
											-- 4=every n units of time 
@targetdate		int = 0,					-- yyyymmdd as int
@targettime		int = 0,					-- hhnnss as int
@dayflags		tinyint = 1,				-- powers of 2 for days of week 
@numunits		tinyint = 1,
@unittype		tinyint = 1,				-- 1=hours, 2=days, 3=weeks, 4=minutes
@procname		nvarchar(128) = NULL,		-- name to use when making the
											-- task and the wrapper/condenser
											-- stored procs
@maketask		int = 2,					-- 0=create unencrypted sproc, no task
											-- 1=encrypted sproc and task
											-- 2=unencrypted sproc and task
@rowcnt			int = 0,					-- max no of rows to display
@tabborder		tinyint = 1,				-- borders around the results table
@singlerow		tinyint = 0,				-- Single row per page
@blobfmt		ntext = NULL,				-- Formatting for text and image fields
@nrowsperpage	int = 0,					-- Results displayed in multiple pages of n rows per page
@datachg		ntext = NULL,				-- Table and column names for a trigger
@charset		nvarchar(25) = N'utf-8',	-- Universal character set is the default
@codepage		int = 65001					-- utf-8 (universal) code page is the default

AS
BEGIN

   DECLARE @suid smallint
   DECLARE @yearchar nvarchar(4)
   DECLARE @monthchar nvarchar(2)
   DECLARE @daychar nvarchar(2)
   DECLARE @hourchar nvarchar(2)
   DECLARE @minchar nvarchar(2)
   DECLARE @secchar nvarchar(2)
   DECLARE @currdate datetime
   DECLARE  @retval int


-- Check for valid @dbname if supplied
   IF (@dbname is NOT NULL)
      IF (NOT(exists(SELECT * FROM master..sysdatabases WHERE name = @dbname)))
      BEGIN
		 RAISERROR(16854,11,1)
         RETURN (9)
      END

-- Make sure that it's the SA executing this.
   IF ( NOT ( is_srvrolemember('sysadmin') = 1 ) )
   BEGIN
      RAISERROR( 15003, -1, -1, 'sysadmin' )
      RETURN(1)	
   END

-- If username is not supplied, set it to dbo
-- This is a special value that will prevent calling setuser
   IF (@username is NULL)
   BEGIN
		SET @username = N'dbo'
   END


-- If not supplied, determine the database currently active
   IF (@dbname is NULL)
   BEGIN
	  SELECT @dbname = d.name FROM
	   master..sysdatabases d, master..sysprocesses p
	   WHERE d.dbid = p.dbid AND spid = @@spid

   END

-- Generate @procname if not supplied
   IF (@procname is NULL)
      BEGIN

         SET @currdate = getdate()

		 SET @yearchar = convert(nvarchar(4),year(@currdate))
         SET @monthchar = right('0'+ rtrim(convert(nvarchar(2),month(@currdate))),2)
         SET @daychar = right('0'+rtrim(convert(nvarchar(2),day(@currdate))),2)
         SET @hourchar = right('0'+rtrim(convert(nvarchar(2),datepart(hh,@currdate))),2)
         SET @minchar = right('0'+rtrim(convert(nvarchar(2),datepart(mi,@currdate))),2)
         SET @secchar = right('0'+rtrim(convert(nvarchar(2),datepart(ss,@currdate))),2)

		 -- Get default procname if not supplied
         SET @procname = N'web_'+convert(nchar(14),@yearchar+@monthchar+@daychar+@hourchar+@minchar+@secchar)+convert(nvarchar(20),@@spid)+right(rtrim(convert( VARCHAR(25),RAND() )),4)

      END

   SET @retval = 0

-- Create the Web task
   EXECUTE @retval = master..xp_makewebtask  @outputfile, @query, @username, @procname, @dbname,
	    @fixedfont, @bold, @italic, @colheaders, @lastupdated, @HTMLheader,
	    @templatefile, @webpagetitle, @resultstitle, @URL, @reftext,
	    @table_urls, @url_query, @whentype, @targetdate, @targettime,
	    @dayflags, @numunits, @unittype, @rowcnt, @maketask, @tabborder,
	    @singlerow, @blobfmt, @nrowsperpage, @datachg, @charset, @codepage
    
	IF (@retval <> 0)
	BEGIN
	    SET @procname = 'xp_makewebtask'
	    RAISERROR(@retval, 11, 1, @procname)
	END

   RETURN @retval

END
go


--------------------------------------------------------------------------------
--bug 360849
use master
go
REVOKE ALL ON sp_MSSharedFixedDisk                 FROM PUBLIC
--------------------------------------------------------------------------------
-- END OF CHANGE SECTION:
-- Turn off marking of system objects.
-- DO NOT ADD ANYTHING AFTER THIS POINT
--------------------------------------------------------------------------------
print N''
go

exec sp_MS_upd_sysobj_category 2
go

exec sp_configure 'allow updates',0
go

reconfigure with override
go
