$(function() {
    /*当前日期*/
    loadDateTime('today');
    /*通知 文字滚动*/
    ScrollLeft("", 40);
});

/*当前日期*/
function loadDateTime(id) {
    id = id || 'time';
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
/*通知 文字滚动*/
function ScrollLeft(timestamp, speed) {
    speed = 1000 / speed;
    var container=$('.header .notice-scroll' + timestamp);
    if (container.length === 0) {
        return;
    }
    var scroll_begin = container.find('ul').get(0);
    var scroll_end = container.find('ul').get(1);
    var scroll_div = container.find('>div').get(0);

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
    var MyMar = setInterval(Marquee, speed);
    scroll_div.onmouseover = function() {
        clearInterval(MyMar);
    };
    scroll_div.onmouseout = function() {
        MyMar = setInterval(Marquee, speed);
    };
}
/*页签切换*/
function tabsClick(widget) {
    if(widget===undefined){
        widget=$('.news-container');
    }
    if (widget.length === 0) {
        return;
    }
    widget.each(function(index, el) {
        var tabs = $(el).find('.u-tabnav > li'),
            content = $(el).find('.u-tabmain > div');
        tabs.on('click', function(e) {
            e.preventDefault();
            var index = $(this).data('index');
            tabs.removeClass('active-title');
            tabs.addClass('title');
            content.removeClass('u-tabmain-active');
            $(this).removeClass('title');
            $(this).addClass('active-title');
            content.eq(index).addClass('u-tabmain-active');
        });  
    });
}