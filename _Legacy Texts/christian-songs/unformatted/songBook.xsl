<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 <xsl:output indent="no"/>
 <xsl:template match="/">
 <html>
 <head>
	<link href='dbi.css' rel='stylesheet' type='text/css'/>
		<style>
	</style>
 </head>
 <body>
<xsl:apply-templates/>
</body>
 </html>
 </xsl:template>
 
 <xsl:template match="title">
	  <h2><xsl:apply-templates/></h2>
</xsl:template>
<xsl:template match="line">
	  <h4><xsl:apply-templates/></h4>
</xsl:template>

<xsl:template match="verse">
	  <h3>Verse:</h3><xsl:apply-templates/>
</xsl:template>

<xsl:template match="chorus">
	  <h3>Chorus:</h3><xsl:apply-templates/>
</xsl:template>

 </xsl:stylesheet>