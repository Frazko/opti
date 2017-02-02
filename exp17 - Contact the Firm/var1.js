/* jshint strict: true */
/* jshint esversion: 3 */


var $;


var abcss = '<style>' +

    '@media screen and (max-width: 1179px){' +
    '	.ab-exp-17 {' +
    '		display: none;' +
    '	}' +
    '}' +


    '        .ab-exp-17 .rail-article img {' +
    '             max-width: 66px !important;' +
    '             width: 66px !important;' +
    '             border-radius: 100%;' +
    '         }' +

    '         .ab-exp-17.ab-right-subscribe {' +
    '              position: absolute;' +
    '              overflow: hidden;' +
    '              width: 300px;' +
    '              bottom: 340px;' +
    '              left: 720px;' +
    '              padding: 20px;' +
    '         }' +

    '         .ab-exp-17.ab-right-subscribe .readNextAB a {' +
    '              margin-top: 0;' +
    '         }' +

    '         .ab-exp-17.ab-right-subscribe .title.headline{' +
    '             font-size: 30px;' +
    '             font-weight: 400;' +
    '         }' +

    '         .ab-exp-17 .ab-contact-authors {' +
    '             width: 242px;' +
    '         }' +

    '         .ab-exp-17  .ab-text-wrapper {' +
    '             display: table;' +
    '         }' +

    '         .ab-exp-17  .ab-author-img {' +
    '             display: table-cell;' +
    '         }' +

    '         .ab-exp-17  .ab-author-title {' +
    '             display: table-cell;' +
    '             padding-left: 8px;' +
    '             vertical-align: middle;' +
    '         }' +


    '        .popup-window.shareEmail .popup-content .text-xl .headline {' +
    '            font-size: 37px;' +
    '            color: #03316c;' +
    '            font-weight: 400;' +
    '        }' +

    '        .shareEmail.popup-window.ab-exp-17 div#authors-content {' +
    '            display: table;' +
    '            width: 100%;' +
    '        }' +

    '        .shareEmail.popup-window.ab-exp-17 .item.rail-article.ab-author-image {' +
    '            display: table-cell;' +
    '            width: 50%;' +
    '            float: none;' +
    '        }' +

    '        .shareEmail.popup-window.ab-exp-17 small {' +
    '            display: none;' +
    '        }' +

    '        .shareEmail.popup-window.ab-exp-17 .popup .popup-content>.up .module-header {' +
    '            width: 100%;' +
    '        }' +

    '        .shareEmail.popup-window.ab-exp-17 .popup-content {' +
    '            width: 720px;' +
    '        }' +

    '        .shareEmail.popup-window.ab-exp-17 .form-col {' +
    '            margin: 20px 0;' +
    '            width: 50%;' +
    '            float: left;' +
    '        }' +

    '        .shareEmail.popup-window.ab-exp-17 .form-col:nth-child(2) {' +
    '            padding-right: 10px;' +
    '        }' +

    '        .shareEmail.popup-window.ab-exp-17 .form-col:nth-child(3) {' +
    '            padding-left: 10px;' +
    '        }' +

    '        .shareEmail.popup-window.ab-exp-17 .popup .popup-content>.up {' +
    '            margin-left: 0;' +
    '            margin-right: 0;' +
    '            padding-left: 85px;' +
    '            padding-right: 85px;' +
    '            width: 100%;' +
    '        }' +

    '        .shareEmail.popup-window.ab-exp-17 .form-content {' +
    '            width: 100%;' +
    '        }' +

    '         </style>';



var abHtml = '  <section class="up ab-contact-authors ab-exp-17">' +
    '        <h3 class="section-header rail-header" id="most-popular-title">Meet the Authors</h3>' +
    '        <div id="authors-content" class="block-list text-s">' +
    '        </div>' +
    '        <div class="readNextAB">' +
    '            <a class="btn btn-fill interactive-link share-article" aria-labelledby="LearnMore Link"   data-show-popup="shareEmail" sid="{E97BC987-AE3B-4A57-818D-A1920364EEE5}">' +
    '        CONTACT AUTHORS' +
    '        </a>' +
    '        </div>' +
    '    </section>';


var abSubscribe = '<section class="ab-exp-17 ab-right-subscribe ">' +
    '    <div class="">' +
    '        <h3 class="title headline">Stay current on your favorite topics</h3>' +
    '        <div class="readNextAB">' +
    '            <a class="btn" aria-labelledby="LearnMore Link" href="/user-registration/register">' +
    '                SUBSCRIBE NOW' +
    '            </a>' +
    '        </div>' +
    '    </div>' +
    '</section>';


var popupForm = `<div class="shareEmail popup-window ab-exp-17 ">
        <div class="interactive-container _visible">
            <div class="background"></div>
            <div class="outer popup">
                <div class="wrapper">
                    <div class="popup-content" style="margin-top: 40px;">
                        <span class="close-btn mck-radial-x-icon" role="link"></span>
                        <div class="up one-up one-up-medium">
                            <header class="text-xl module-header">
                                <h3 class="title headline">Contact Authors</h3>
                            </header>
                            <header id="requiredMessage" class="text-m module-header success" style="display: block;">


                                <div class="description module-description">Required fields are marked with an asterisk (*).</div>
                            </header>
                        </div>
                        <div class="up one-up one-up-medium" data-module="PopupForm">
                            <div id="shareEmailForm" class="form-content">
                                <div id="errorMessage" class="alert error no-pading-bottom no-margin-bottom" style="display: none;">
                                    <span>ERROR</span>
                                    <p id="main_0_universal_0_errormsg">Sorry something went wrong. Please try again</p>
                                </div>
                                <div id="successMessage" class="success-message" style="display: none;">
                                </div>
                                <div id="formContent" style="display: block;">

                                    <div class="form-group">
                                        <label for="contactProfileMessage">PERSONAL MESSAGE</label>
                                        <textarea rows="8" cols="20" maxlength="8192" name="contactProfileMessage" id="contactProfileMessage"></textarea>
                                    </div>
                                    <div class="form-col">
                                        <div class="form-group">
                                            <label for="contactProfileName">YOUR NAME<sup>*</sup></label>
                                            <input name="contactProfileName" id="contactProfileName" class="textField" maxlength="50" type="text" data-rule-required="true" data-msg-required="Please provide your name." data-rule-spam="true" data-msg-spam="Please provide a valid name." autofocus=""
                                                aria-required="true">
                                        </div>
                                        <div class="form-group">
                                            <label for="contactProfileEmail">YOUR EMAIL<sup>*</sup></label>
                                            <input name="contactProfileEmail" id="contactProfileEmail" value="" maxlength="128" class="textField" type="email" data-rule-required="true" data-rule-email="true" data-msg-email="Please provide a valid email address." data-msg-required="Please provide your email address."
                                                aria-required="true">
                                        </div>
                                    </div>
                                    <div class="form-col">
                                        <div class="form-group">
                                            <label for="contactProfileTitle">TITLE</label>
                                            <input name="contactProfileTitle" id="contactProfileTitle" maxlength="50" class="textField" type="text" data-rule-spam="true" data-msg-spam="Please provide a valid title.">
                                        </div>
                                        <div class="form-group">
                                            <label for="contactProfileOrganization">ORGANIZATION</label>
                                            <input name="contactProfileOrganization" id="contactProfileOrganization" maxlength="50" class="textField" type="text" data-rule-spam="true" data-msg-spam="Please provide a valid organization name." data-pattern="[\\\<\>\%\?\^\(\)]">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input id="contactProfileButton" type="button" value="Submit" class="btn-submit">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;


$(function () {
    "use strict";

    // var _McKinseyAuthors = $('footer.about-authors a:lt(3):not(a.btn.btn-fill)');
    var _McKinseyAuthors = $('footer.about-authors > strong > a:lt(3)');
    if (_McKinseyAuthors.length===0) return false;


    $('head').append(abcss);
    $('.article-body-wrapper .rail').prepend(abHtml);
    $('.article-body-wrapper footer.about-authors ').after(abSubscribe);
    $('.article-body-wrapper .rail > .up').wrapAll('<div class="innerUp"> </div>');
    $('aside.text-l.-span-right.disruptor ').removeClass('-span-right');
    $('footer.about-authors').append('<div class="ab-exp-17 readNextAB"><a class="btn btn-fill interactive-link share-article" aria-labelledby="LearnMore Link" data-show-popup="shareEmail" sid="{E97BC987-AE3B-4A57-818D-A1920364EEE5}">CONTACT AUTHORS</a></div>');
    $('form >.outer').append(popupForm);

    var profilesTotal = _McKinseyAuthors.length;
    var profilesLoaded = 0;

    _McKinseyAuthors.each(function () {
        //console.log(index + ": " + $(this).text());
        var authorName = $(this).text();
        // var authorNameProfileEncoded = authorName.split(' ').join('-').toLowerCase();
        // var authorNameHTMLEncoded = authorName.split(' ').join('%20');
        var authorProfileUrl = $(this).attr('href'); // '/our-people/' + authorNameProfileEncoded;
        // var authorImageUrl = '/~/media/McKinsey/Our%20People/' + authorNameHTMLEncoded + '/' + authorNameHTMLEncoded + '_thumbnail_img.ashx?mw=240&car=1:1';
        var loaded = $('<div id="results"></div>');
        loaded.load(authorProfileUrl + " .profile-wrapper", function (response, status, xhr) {
            $('#authors-content').append(buildAuthorContainer(authorName, loaded.find('small.job-title').text().trim(), loaded.find('.circle-crop img').attr('src'), authorProfileUrl));
            profilesLoaded++;
            if (profilesLoaded === profilesTotal) {
                profilesHtmlReady();
            }
        });
    });


    function profilesHtmlReady() {
        $('#requiredMessage').prepend($('#authors-content').html());
    }

    function buildAuthorContainer(name, jobTitle, profileImage, authorProfileUrl) {
        console.log("-->", name + " - ", jobTitle + " - ", profileImage);
        return '            <div class="item rail-article ab-author-image">' +
            '                <div class="ab-text-wrapper">' +
            '                    <img class="ab-author-img" src="' + profileImage + '" alt="">' +
            '                    <span class="ab-author-title">' +
            '                        <a class="item-title-link" href="' + authorProfileUrl + '">' +
            '                            <h4 class="headline" id="rail-article-title-2">' + name + '</h4>' +
            '                        </a>' +
            '                        <small class="eyebrow">' + jobTitle +
            '                        </small>' +
            '                    </span>' +
            '                </div>' +
            '            </div>';
    }


    // --------------------------------------------------------------------------------- FROM McKinsey


    var o = {
        form: "form1",
        formSelector: "form-content",
        submitBtn: "btnSubmit",
        contactProfileButton: "contactProfileButton",
        formContent: "formContent",
        requiredMessage: "requiredMessage",
        successMessage: "successMessage",
        errorMessage: "errorMessage"
    },
        a = {
            contactProfile: "/services/contentapi/websiteapi.svc/contactprofile"
        },
        s = {
            popupForm: $("#" + o.form),
            formContainer: $("#" + o.form).find("." + o.formSelector),
            popupFormBtn: $("#" + o.form).find("[id$=" + o.submitBtn + "]")
        },
        l = function (e, n, r) {
            var a = $("#" + o.form);
            a.valid() && (d(e),
                getJSON(n, f, r, "POST"))
        },
        u = function () {
            $("#" + o.contactProfileButton).bind("click", c)
        },
        c = function () {
            var e = {
                name: $("input[name=contactProfileName]").val(),
                email: $("input[name=contactProfileEmail]").val(),
                title: $("input[name=contactProfileTitle]").val(),
                organization: $("input[name=contactProfileOrganization]").val(),
                subject: "MESSAGE SUBJECT",
                message: $("textarea[name=contactProfileMessage]").val(),
                sid: $("a.share-article").attr("sid")
            };
            l("#" + o.contactProfileButton, a.contactProfile, e)
        },
        d = function (e) {
            $(e).off("click"),
                $(e).addClass("disable-submit")
        },
        f = function (e) {
            "error" === e ? ($("#" + o.errorMessage).css("display", "block"),
                $("#form1 .outer .form-group").firs$().find("input").focus()) : e.data.successMessage ? ($("#" + o.formContent).css("display", "none"),
                    $("#" + o.requiredMessage).css("display", "none"),
                    $("#" + o.successMessage).css("display", "block"),
                    $("#" + o.contactProfileButton).length && $(window).scrollTop(0),
                    $("#" + o.errorMessage).css("display", "none"),
                    $("#" + o.successMessage).html(e.data.successMessage)) : $("#" + o.errorMessage).css("display", "block"),
                u(),
                $("#" + o.contactProfileButton).removeClass("disable-submit")
        };

    function getJSON(url, callback, data, method) {
        console.log("AJAX url:: ", url);
        console.log("AJAX data:: ", data);
        console.log("AJAX method:: ", method);

        $.ajax({
            url: url,
            data: JSON.stringify(data),
            type: method,
            dataType: 'json',
            success: function (response) {
                console.log("AJAX RESPONSE:: ", response);
                callback(response);
                callback(JSON.parse(a.responseText));
                
            },
            error: function (xhr) {
                alert("An error occured: " + xhr.status + " " + xhr.statusText);
                o(a.response);
                t("error");
            },
            contentType: "application/json"
        })

    }


    this.firstRun = function () {
        $("#" + o.contactProfileButton).on("keydown", function (e) {
            $("this:focus") && 9 === e.which && (e.preventDefault(),
                t("input[name=contactProfileName]").focus())
        }),
            $("#" + o.form).validate({
                submitHandler: function (e) {
                    var n = s.popupFormBtn.data("action");
                    n && "" !== n && s.formContainer.is(":visible") && s.popupForm.attr("action", n),
                        $(e)[0].submit()
                },
                ignore: ":hidden",
                invalidHandler: function (e, n) {
                    var r = n.numberOfInvalids();
                    r && n.errorList[0].element.focus(),
                        $(".popup-login-error").hide()
                },
                rules: {
                    recipientsEmails: {
                        multiemail: !0
                    }
                }
            }),
            $("#" + o.form).keypress(function (e) {
                return 13 === e.which && "textarea" !== e.target.type && $("#" + o.form).valid() && $("#" + o.contactProfileButton).is(":visible") ? ($("#" + o.contactProfileButton).trigger("click"), !1) : void 0
            }),
            u()
    } ()


});


