function st_go(a){var i,u=document.location.protocol+'//stats.wordpress.com/g.gif?host='+escape(document.location.host)+'&rand='+Math.random();for(i in a){u=u+'&'+i+'='+escape(a[i]);}u=u+'&ref='+escape(document.referrer);document.open();document.write("<img id=\"wpstats\" src=\""+u+"\" alt=\"\" />");document.close();}
function ex_go(a){var i,u=document.location.protocol+'//stats.wordpress.com/g.gif?v=wpcom2&rand='+Math.random();for(i in a){u=u+'&'+i+'='+escape(a[i]);}document.open();document.write("<img id=\"wpstats2\" src=\""+u+"\" alt=\"\" style=\"display:none\" />");document.close();}
function re_go(a){var i,u=document.location.protocol+'//stats.wordpress.com/g.gif?rand='+Math.random();for(i in a){u=u+'&'+i+'='+escape(a[i]);}document.open();document.write("<img id=\"wpstats\" src=\""+u+"\" alt=\"\" style=\"display:none\" />");document.close();}

function clicktrack(e){var t;if(e){t=e.target;}else{t=window.event.srcElement;}linktrack(t,500);}
function contexttrack(e){var t;if(e){t=e.target;}else{t=window.event.srcElement;}linktrack(t,0);}
function linktracker_init(b,p){
	_blog=b;
	_post=p;
	_host=document.location.host?document.location.host:document.location.toString().replace(/^[^\/]*\/+([^\/]*)(\/.*)?/,'$1');
	if(document.body){document.body.onclick=clicktrack;document.body.oncontextmenu=contexttrack;}else if(document){document.onclick=clicktrack;document.oncontextmenu=contexttrack;}else{}
}
function linktrack(a,d){/*try{*/
	if (!a||a==null) return;
	while (a.nodeName != "A") {
		if ( typeof a.parentNode == 'undefined' ) return;
		a = a.parentNode;
		if ( !a ) return;
	}
	if(a.href.match(eval('/^(http(s)?:\\/\\/)?'+_host+'/'))) return;
	var bh=a.href;
	var pr=document.location.protocol||'http:';
	var r=(typeof a.rel != 'undefined')?escape(a.rel):'0';
	var b=(typeof _blog != 'undefined')?_blog:'0';
	var p=(typeof _post != 'undefined')?_post:'0';
	//var x=document.createElement('IMG');
	var src=pr+'//stats.wordpress.com/c.gif?b='+b+'&p='+p+'&r='+r+'&u='+escape(bh)+"&rand="+Math.random();
	if ( a.className.match('flaptor') ) {
		var fx=function(c){return c.replace(/flaptor\s*/, '')};
		var f='b'+_blog+'p'+_post+' '+fx(a.className);
		var links=document.getElementsByTagName('A');
		for ( i=0; i<links.length; i++ ) {
			if ( links[i].className.match('flaptor') )
				f=f+' '+fx(links[i].className);
		}
		src=src+'&f='+f;
	}
	var x=new Image(1,1);
	x.src = src;
	if(d){var now=new Date();var end=now.getTime()+d;while(true){now=new Date();if(now.getTime()>end){break}}}
/*}catch(e){}*/}
