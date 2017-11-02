$(function() {
    
    /* 图片轮播 */
    showAnimation({
        imgContentID: 'picslide-container', //图片容器ID
        imgContentClass: 'picslide-container', //图片容器样式
        btnContentID: 'picslide-btn', //按钮容器ID
        imgContentTitleClass: 'picslide-title', //标题样式
        timestamp: "1"
    });

    /* 图片列表横向滚动 */
    if($("#scrollImg1").length){
        $("#scrollImg1").kxbdMarquee({
            direction: "left",  //滚动方向
            scrollAmount: 1,    //滚动速度（数值越大，滚动越快）
        }); 
    }

    /* 页签切换 所有".news-container"的新闻列表 */
    tabsClick();

    /* 页签切换 首页底部的友情链接 */
    tabsClick($('.index-link'));
});

