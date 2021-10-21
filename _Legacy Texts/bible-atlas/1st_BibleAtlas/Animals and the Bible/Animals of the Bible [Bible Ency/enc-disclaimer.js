document.write( '<p style="font-size:10pt">This encyclopedia is a continuing work in progress. More cross-references, words, illustrations, updates and other improvements are continually being added.</p>\n' );

document.write( '<form method="get" action="/cgi-bin/search/search.cgi" class="zoom_searchform" style="margin:0">\n' );
document.write( '<input type="text" name="zoom_query" size="25" class="zoom_searchbox" value=" Title or keywords search…" onfocus="if(this.value==\' Title or keywords search…\')this.value=\'\'" onblur="if(this.value==\'\')this.value=\'\'" style="width:250px; font-size:12px; padding:3px" />\n' );
document.write( '<input type="image" src="/htdig/btn-search.gif" value="Submit" align="absmiddle" />\n' );
document.write( '<input type="hidden" name="zoom_per_page" value="20" /><input type="hidden" name="zoom_cat[]" value="4" /><input type="hidden" name="zoom_and" value="1" /><input type="hidden" name="zoom_sort" value="0" />\n' );
document.write( '</form>\n' );


