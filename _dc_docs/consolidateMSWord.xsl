<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
<xsl:output indent="no"/>

<xsl:template match="/" >
<html>
	<body>
		<xsl:apply-templates/>
	</body>
	</html>
</xsl:template>



<xsl:template match="wt">
	&lt;text id=&quot;&quot; class=&quot;&quot;&gt;&lt;eng&gt;<xsl:apply-templates/>&lt;/eng&gt;&lt;swa/&gt;&lt;/text&gt;<br />
</xsl:template>

</xsl:stylesheet>