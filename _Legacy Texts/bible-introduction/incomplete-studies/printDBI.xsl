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

  <xsl:template match="text">
	<xsl:element name="{@class}">
		<xsl:apply-templates/>
    </xsl:element>
 </xsl:template>
 
 <xsl:template match="div[@class='questions-page']">
	<h3 style="color:white;"></h3>
		<xsl:apply-templates/>
  </xsl:template>
  
   <xsl:template match="div[@class='questions-page']/text[@class='h2']">
	<xsl:element name="h4">
		<xsl:attribute name="style">margin-left:-.5in;</xsl:attribute>
		<xsl:apply-templates/>
    </xsl:element>
  </xsl:template>
 
   <xsl:template match="div[@class='questions-page']/text[@class='h3']">
	<xsl:element name="p">
		<xsl:attribute name="style">color:white;</xsl:attribute>
		<xsl:apply-templates/>
    </xsl:element>
 </xsl:template>
 
   <xsl:template match="text[@class='p']">
	<p style="margin-top:0; margin-bottom:0; text-indent:.5in;">
		<xsl:apply-templates/>
    </p>
 </xsl:template>

 
 
 
</xsl:stylesheet>