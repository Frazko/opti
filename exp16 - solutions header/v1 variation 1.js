var abcss = '<style>' +
'#form1 .outer {' +
'	margin-top: 0;' +
'}' +
'#form1 .wrapper .universal-hero {' +
'	margin-top: 0;' +
'}' +
'#form1 .outer header section.up .btn {' +
'	border-radius: 2px;' +
'}' +
'#form1 .wrapper .universal-hero .image > h1 {' +
'	position: absolute;' +
'	text-align: center;' +
'	z-index: 9999;' +
'	top: 40%;' +
'	width: 100%;' +
'	color: #fff;' +
'	font-size: 45px;' +
'}' +
'#main_0_universal_0_universal_area_a_0_titleAndDek {' +
'	background: #fff;' +
'	margin: -12% 10% -10%;' +
'	z-index: 9999;' +
'	padding: 40px 6% 10px;' +
'	position: relative;' +
'	box-shadow: 0px 2px 10px #ccc;' +
'	text-align: center;' +
'}' +
'#main_0_universal_header_1_headline {' +
'	font-size: 38px;' +
'}' +
'#main_0_universal_0_universal_area_a_0_dekContainer {' +
'	font-size: 18px;' +
'	padding: 30px 0;' +
'}' +
'#form1 .wrapper .universal-hero .image {' +
'	position: relative;' +
'}' +
'body .ABstore {' +
'	display: none;' +
'}' +
'@media screen and (max-width: 1179px){' +

'}' +
'@media screen and (min-width: 1180px){' +
'	#form1 .outer {' +
'		margin-top: 0;' +
'	}' +
'	#form1 .wrapper.universal-hero-wrapper,' +
'	#form1 .wrapper.universal-page {' +
'		top: 0;' +
'	}' +
'	#main_0_universal_0_universal_area_a_0_titleAndDek {' +
'		margin: -5% 20%;' +
'	}' +
'}' +

'.ABddbtn {' +
'    background: #eff3f7;' +
'    color: #00306e;' +
'	 font-family: "Chronicle SSm";' +
'	 font-size: 14px;' +
'	 line-height: 23px;' +
'	 min-width: 400px;' +
'	 border: 1px solid transparent;' +
'	 border-radius: 4px;' +
'	 text-transform: none;' +
'	 justify-content: initial;' +
'	 margin-bottom: 50px;' +
'	 padding: 14px 21px 14px 18px;' +
'	 transition: background 120ms linear, color 120ms linear;' +
'	 box-shadow: 0 4px 4px 0 #d0d7e1;' +
'}' +
'.ABddbtn:hover {' +
'    background: #eef2f6;' +
'	 color: #044292;' +
'	 border-color: transparent;' +
'}' +
'.ABddbtn:after {' +
'	 padding: 0 0 0 10px;' +
' 	 position: absolute;' +
'	 top: 15px;' +
' 	 right: 14px;' +
'    font-family: r2-icons!important;' +
'    font-weight: 800;' +
'	 font-size: 17px;' +
'	 content: \'\\e900\';' +
'}' +
'.ABddbtn.on {' +
'	 box-shadow: 0px -2px 10px 0 #d0d7e1;' +
' 	 border-radius: 4px 4px 0 0;' +
'	 border-bottom: 1px solid #888;' +
'	 z-index: 999;' +
'}' +
'.ABdd {' +
'    position: relative;' +
'    display: inline-block;' +
'}' +
'.ABdd-content {' +
'    display: none;' +
'    position: absolute;' +
'	 top: 74px;' +
'    padding: 12px 0;' +
'	 background: #eff3f7;' +
'    min-width: 399px;' +
'    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);' +
'	 z-index: 998;' +
'}' +
'.ABdd-content.on {' +
'    display: block;' +
'}' +
'.ABdd-content a {' +
'	 background: #eff3f7;' +
'    padding: 11px 20px 11px 20px;' +
'    text-decoration: none;' +
'    display: block;' +
'	 font-size: 15px;' +
'}' +
'.ABdd-content a:hover {background-color: #eaeff4}' +
'#main_0_universal_1_sectionHeader a {' +
'    float: right;' +
'    color: #2bafe9;' +
'    text-decoration: none;' +
'	 text-transform: initial;' +
'    display: block;' +
'	 font-family: "Chronicle SSm";' +
'	 font-size: 16px;' +
' 	 font-weight: 100;' +
'	 transition: color 120ms linear;' +
'}' +
'#main_0_universal_1_sectionHeader a:hover {' +
'	 color: #f6f8f8;' +
'}' +
'</style>';

$(function() {
	$('head').append(abcss);
	$('.wrapper .universal-hero > .image').append($('#main_0_universal_header_0_minisiteHeadline'));
	$('.wrapper.universal-page').before($('#main_0_universal_0_universal_area_a_0_titleAndDek'));
	$('.outer > .wrapper:first, #main_0_universal_header_1_caption, #main_0_universal_header_1_captionMobile, .universal-page article').remove();
	$('#main_0_universal_0_universal_area_a_0_dekContainer').before($('#main_0_universal_header_1_textWrapper'));
	$('.universal-page .c-area > .rail .mck-email-icon').removeClass('btn-fill mck-email-icon');
	$('#main_0_universal_0_universal_area_a_0_dekContainer').after($('.universal-page .c-area > .rail'));
	
	var ABcontainer = $('#main_0_universal_1_divBlockList');
	ABcontainer.append($('#main_0_universal_2_divBlockList > .item'));
	$('.up.four-up:last').remove();
	$('body').append('<div class="ABstore" />');
	$('body .ABstore').append(ABcontainer.find('> .item').clone(true));
	$('#main_0_universal_1_sectionHeader').text('Filter');
	var ABlist = $('body .ABstore .item');
	var ABlistCats = [];
	$.each(ABlist, function(){
		var txt = $(this).find('.eyebrow').text();
		if(!(Boolean($.inArray(txt, ABlistCats)+1))) ABlistCats.push(txt);
	});
	
	var ABdd = '<div class="ABdd"><button class="ABddbtn btn">Select a Business Function or Industry</button><div id="ABdd" class="ABdd-content">';
	$.each(ABlistCats, function(){ ABdd += '<a href="#">' + this + '</a>'; });
	ABdd += '</div></div>';
	ABcontainer.before(ABdd);
	$('.ABdd > .ABddbtn').on('click', function(event){
		event.preventDefault();
		$(this).siblings('.ABdd-content').toggle();
		if($(this).hasClass('on')) $(this).removeClass('on');
		else $(this).addClass('on');
	});
	
	$('#ABdd > a').on('click', function(event){
		event.preventDefault();
		var arg = $(this).text();
		var ABselection = ABlist.filter(function(index){
			return ($(".eyebrow:contains('" + arg + "')", this).length === 1);
		}).clone(true);

		ABcontainer.empty().append(ABselection);
		if(!$('#main_0_universal_1_sectionHeader > a').length) $('#main_0_universal_1_sectionHeader').append('<a href="#">Clear all</a>');
		$('.ABdd > .ABddbtn').text(arg);
	});
	
	$('#main_0_universal_1_sectionHeader').on('click', '> a', function(event){
		event.preventDefault();
		ABcontainer.empty().append(ABlist.clone(true));
		$('.ABdd > .ABddbtn').text('Select a Business Function or Industry');
		$(this).remove();
	});

	$(window).on('click', function(event){
		if (!event.target.matches('.ABddbtn')){
			$('.ABdd-content').hide();
			$('.ABddbtn').removeClass('on');
		}
	});
});