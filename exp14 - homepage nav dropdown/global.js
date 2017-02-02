var css = document.createElement('style');
css.type = 'text/css';
css.id = 'ABCSS';
var styles = '@media screen and (min-width: 1180px){' +
'	body .global-primary-nav-r3.show-nav {visibility: hidden; opacity: 0;}' +
'	.nav-item.careers .sub-nav, .nav-item.about .sub-nav {display: none; visibility: hidden;}' +
'}</style>';
if (css.styleSheet) css.styleSheet.cssText = styles;
else css.appendChild(document.createTextNode(styles));
document.getElementsByTagName("head")[0].appendChild(css);


var abcss = '<style id="ABCSS">' +
'@media screen and (min-width: 1180px){' +
'	body .global-primary-nav-r3.show-nav {' +
'		visibility: hidden;' +
'		opacity: 0;' +
'	}' +
'}' +
'</style>';
$('head').append(abcss);


$(function() {

});