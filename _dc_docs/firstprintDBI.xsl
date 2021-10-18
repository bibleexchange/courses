<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output indent="no"/>
<xsl:template match="/">
<html>
<head>
<?php header('Content-Type: application/xslt+xml'); ?>
<link rel="stylesheet" type="text/css" href="../../../public/dbio/xml_assets/dbio_style.css"/>
</head>
<body class="textbook">
<xsl:apply-templates/>
</body>
</html>
</xsl:template>
<xsl:template match="div">
<div id="{@id}" class="{@class}">
<xsl:apply-templates/>
</div>
</xsl:template>
<xsl:template match="div[@class='table']">
<table id="{@id}">
<xsl:apply-templates/>
</table>
</xsl:template>
<xsl:template match="div[@class='tr']">
<tr id="{@id}">
<xsl:apply-templates/>
</tr>
</xsl:template>
<xsl:template match="div[@class='ul']">
<ul>
<xsl:apply-templates/>
</ul>
</xsl:template>
<xsl:template match="a">
<a href="{@url}">
<xsl:apply-templates/>
</a>
</xsl:template>
<xsl:template match="b">
<b>
<xsl:apply-templates/>
</b>
</xsl:template>
<xsl:template match="div[@id='toc']/text/a">
<a href="set_session_section.php?section={@url}">
<xsl:apply-templates/>
</a>
</xsl:template>
<xsl:template match="text">
<xsl:element name="{@class}">
<xsl:attribute name="id">
<xsl:value-of select="@id"/>
</xsl:attribute>
<xsl:apply-templates/>
</xsl:element>
</xsl:template>
<xsl:template match="text[@class='th']">
<th id="{@id}" colspan="{@colspan}" rowspan="{@rowspan}">
<xsl:apply-templates/>
</th>
</xsl:template>
<xsl:template match="text[@class='td']">
<td id="{@id}" colspan="{@colspan}" rowspan="{@rowspan}">
<xsl:apply-templates/>
</td>
</xsl:template>
<xsl:template match="image">
<img src="../../../public/dbio/{@src}" style="{@style}" usemap="{@usemap}" id="{@id}"/>
</xsl:template>
<xsl:template match="video">
<iframe id="{@id}" src="{@src}?listType=playlist&list=PLfHSt4V-mwsiv_Jd3sETk8we7FSy39o58" width="640" height="390" frameborder="0"/>
</xsl:template>
<xsl:template match="div[@class='questions-page']">
<image id="passTest" alt="Philippians 4:13" src="images/passTest.gif"/>
<div class="questions-page">
<xsl:apply-templates/>
</div>
</xsl:template>
<xsl:template match="div[@class='image-map']">
<map name="{@name}">
<xsl:for-each select="area">
<area shape="{@shape}" coords="{@coords}" title="{@title}" alt="{@alt}"/>
</xsl:for-each>
</map>
</xsl:template>
<xsl:template match="eng">
<span class="english">
<xsl:apply-templates/>
</span>
</xsl:template>
</xsl:stylesheet>