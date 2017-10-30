$(function() {
    /*图片轮播*/
    showAnimation({
        imgContentID: 'picslide-container', //图片容器ID
        imgContentClass: 'picslide-container', //图片容器样式
        btnContentID: 'picslide-btn', //按钮容器ID
        imgContentTitleClass: 'picslide-title', //标题样式
        timestamp: "1"
    });
    /*页签切换 所有新闻列表 */
    tabsClick();
    /*页签切换 友情链接 */
    tabsClick($('.index-link'));
});
/*图片轮播*/
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
/*右侧导航 点击更多*/
function right_more(el, obj) {
    var _top = $(el).offset().top;
    var _left = $(el).offset().left;
    _top = parseFloat(_top) + 30;
    _left = parseFloat(_left) - 400;
    obj.css("display", "block");
    obj.offset({ top: _top, left: _left });

    obj.mouseleave(function() {
        obj.css("display", "none");
    });
}