$(function() {
    /* head中的显示当前日期*/
    loadDateTime();
    /* head中的通知滚动 */
    scrollNotice(40);
});

/* head中的显示当前日期 */
function loadDateTime(id) {
    id = id || 'today';
    var dateTime = new Date();
    var hh = dateTime.getHours();
    var mm = dateTime.getMinutes();
    var ss = dateTime.getSeconds();
    var yy = dateTime.getFullYear();
    var MM = dateTime.getMonth() + 1;
    var dd = dateTime.getDate();
    var week = dateTime.getDay();
    var days = "日一二三四五六 ";
    $("#" + id).text("今天是：" + yy + "年" + MM + "月" + dd + "日" + "  " + "星期" + days[week]);
}
/* head中的通知滚动 */
function scrollNotice(speed) {
    speed = 1000 / speed;
    var container = $('.header .notice-scroll');
    if (container.length === 0) {
        return;
    }
    var scroll_begin = container.find('ul').get(0);
    var scroll_end = container.find('ul').get(1);
    var scroll_div = container.find('>div').get(0);
    var MyMar = setInterval(Marquee, speed);
    scroll_div.onmouseover = function() {
        clearInterval(MyMar);
    };
    scroll_div.onmouseout = function() {
        MyMar = setInterval(Marquee, speed);
    };

    function Marquee() {
        if (scroll_div.offsetWidth - scroll_begin.offsetWidth < 0) {
            scroll_end.innerHTML = scroll_begin.innerHTML;
        }
        if (scroll_end.offsetWidth - scroll_div.scrollLeft <= 0) {
            scroll_div.scrollLeft -= scroll_begin.offsetWidth;
        } else {
            scroll_div.scrollLeft++;
        }
    }
}
/* 页签切换 新闻列表/友情链接 */
function tabsClick(widget,eventName) {
    // tab:
    //  当前：.active-title
    //  其他：.title
    // content:
    //  当前：.u-tabmain-active
    //  其他：无class

    if (widget === undefined) {
        widget = $('.news-container');
    }
    if (eventName === undefined) {
        eventName ='click';
    }
    widget.each(function(index, el) {
        var tabs = $(el).find('.u-tabnav > li');
        var content = $(el).find('.u-tabmain > div');
        tabs.on(eventName, function(e) {
            e.preventDefault();
            var index = $(this).index();
            tabs.removeClass('active-title');
            tabs.addClass('title');
            content.removeClass('u-tabmain-active');
            $(this).removeClass('title');
            $(this).addClass('active-title');
            content.eq(index).addClass('u-tabmain-active');
        });
    });
}
/* 标题行右侧，点击"更多"，显示div */
function rightMore(el, left_offset) {
    if (left_offset === undefined) {
        left_offset = -400;
    }
    var obj = $(el).parents('.has-more-div').find('ul.more-div');
    var _top = $(el).offset().top;
    var _left = $(el).offset().left;
    _top = parseFloat(_top) + 30;
    _left = parseFloat(_left) + left_offset;
    obj.css("display", "block");
    obj.offset({ top: _top, left: _left });

    obj.mouseleave(function() {
        obj.css("display", "none");
    });
}
/* 图片轮播 */
function showAnimation(object) {
    var htmlAdBtn = '';
    $("#" + object.imgContentID + object.timestamp + " img").each(function(index, e) {
        var id = "adImage_" + object.timestamp + "_" + index;
        var indexs = parseInt(index) + 1;
        htmlAdBtn = htmlAdBtn + '<a href="javascript:" class="picslide_btn_a' + object.timestamp + '" data-rel="' + id + '"></a>';
        e.id = id;
    });
    $("#" + object.btnContentID + object.timestamp).html(htmlAdBtn).find("a").powerSwitch({
        eventType: "hover",
        classAdd: "active",
        animation: "fade",
        duration: 1000,
        autoTime: 2000,
        onSwitch: function(e) {
            if (true) {
                var index = $(this).index();
                $("." + object.imgContentClass + object.timestamp).find("." + object.imgContentTitleClass + object.timestamp).each(function() {
                    $(this).hide();
                });
                $("." + object.imgContentClass + object.timestamp).find("." + object.imgContentTitleClass + object.timestamp + ":eq(" + index + ")").show();
            }
        }
    }).eq(0).trigger("mouseover");
}