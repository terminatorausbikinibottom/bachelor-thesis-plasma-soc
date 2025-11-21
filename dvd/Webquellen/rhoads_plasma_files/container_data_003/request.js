var tpEnjavanateString = '';

tpEnjavanateString += '<'+'div style="position:absolute;visibility:hidden;display:none';
tpEnjavanateString += '"><'+'iframe src="https://www.zanox-affiliate.de/tpv/?21001372C';
tpEnjavanateString += '1642810354T&zpar0=79720500053907400029790010504008" framebor';
tpEnjavanateString += 'der="0" width="1" height="1"><'+'/iframe><'+'img src="https://ad.d';
tpEnjavanateString += 'oubleclick.net/ddm/activity/src=5441743;type=invmedia;cat=ij';
tpEnjavanateString += 'iz4dtf;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;or';
tpEnjavanateString += 'd=1?" border="0" width="1" height="1"><'+'/div>';

if ( ( typeof( tpAdtag2d9122f288.container ) !== 'undefined' ) && ( tpAdtag2d9122f288.container != '' ) && document.getElementById( tpAdtag2d9122f288.container ) ) {
if (typeof document.createRange === 'function' && typeof document.createRange().createContextualFragment === 'function'){
var tpRange2d9122f288 = document.createRange();
tpRange2d9122f288.setStart( document.getElementById( tpAdtag2d9122f288.container ), 0);
var tpDocFrag2d9122f288 = tpRange2d9122f288.createContextualFragment(tpEnjavanateString);
document.getElementById( tpAdtag2d9122f288.container ).appendChild ( tpDocFrag2d9122f288 );
} else {
var tpContainerAppend = document.createElement('div');
tpContainerAppend.innerHTML = tpEnjavanateString;
document.getElementById( tpAdtag2d9122f288.container ).appendChild( tpContainerAppend );
}} else {
document.write( tpEnjavanateString );
}
document.write('<div style="width:234px; height:60px; border:0px; margin:0px; padding:0px; text-align:left; vertical-align:top; position:static; display:block; visibility:visible; overflow:hidden;">');											function js10962726_set_url(count) {
												if ( document.getElementById('e140618') && ( document.getElementById('e140618').src != js10962726_request_url ) ) {
													document.getElementById('e140618').src = js10962726_request_url;
												} else if ( count <= 20 ) {
													window.setTimeout('js10962726_set_url('+(count+1)+')', 50);
												} else if ( count <= 80 ) {
													window.setTimeout('js10962726_set_url('+(count+1)+')', 500);
												}
											}
											var js10962726_request_url = 'https://ad8.ad-srv.net/request_content.php?s=79720500053907400029790010504008&a=f8c27379';
											document.write('<iframe id="e140618" name="e140618" src="about:blank" style=" width:234px; height:60px; border:0px; margin:0px; padding:0px; position:static; display:block; visibility:visible;" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>');
											window.setTimeout('js10962726_set_url(0)', 100);
											document.write('</div>');