// 当前正在添加内容的div
let current_div = null;
// 计数：banner个数
let banner_num = 0;
// 计数：图片轮播个数
let picscroll_num = 0;
// 图片轮播 不调用js时的"纯净"html代码
let picscroll_html = [];
// 计数：图片滚动的个数
let scrollImg_num=0;
$(function() {
    /* 填充内容 事件绑定初始化 */
    filling_init();
    /* 初始化 生成首尾和主体框架 */
    initial();
    /* "初始化"按钮事件绑定 */
    $('#x-init').click(function() {
        if (window.confirm('确定? [ 点击"确定"后，将覆盖之前所有操作 ] ')) {
            initial();
        }

    });
    /* "完成"按钮事件绑定 */
    $('#x-done').click(function() {
        if (window.confirm('确定? [ 点击"确定"后，不能再添加内容 ] ')) {
            code_clean();
        }
    });
});



/* 初始化 生成首尾和主体框架 */
function initial() {
    let initial_params = {
        width: $('#x-width').val(),
        module_num: $('#x-module-num').val(),
        header_style: $('input:radio[name="x-header-style"]:checked').val(),
        left_width: $('#x-left-width').val(),
        right_width: $('#x-right-width').val(),
        news_detail_width: $('#x-news-width-detail').val(),
        news_width_1: $('#x-news-width-1').val(),
        news_width_2: $('#x-news-width-2').val(),
    };
    let public_style;
    let index_style;
    let header;
    let index_main;
    let index_main_style;
    let footer;
    public_style = `
        /* 下面添加到public.css后 */
        body {
            width: 100%;
            min-width: ${initial_params.width}px;
            overflow-x: hidden;
            background: #dbe0fb;
        }        


        /* 主体 */
        .main-526 {
            width: ${initial_params.width-20}px;
            background:white;
            margin: 0 auto;
            padding: 10px;
        }        
        `;
    index_style = `
        /* ---------------- 公用  ---------------- */
        /* ---------------- 公用  ---------------- */
        /* ---------------- 公用  ---------------- */
        /* ---------------- 公用  ---------------- */
        /* ---------------- 公用  ---------------- */
        /* ---------------- 公用  ---------------- */
        /* ---------------- 公用  ---------------- */
        /* ---------------- 公用  ---------------- 结束*/


        /* ---------------- index ----------------开始 */
        /* ---------------- index ---------------- */
        /* ---------------- index ---------------- */
        /* ---------------- index ---------------- */
        /* ---------------- index ---------------- */
        /* ---------------- index ---------------- */
        /* ---------------- index ---------------- */
        /* ---------------- index ---------------- */
        
        /*  左右分栏  */
        .index-module-left{
            display:inline-block;
            vertical-align:top;
            width:${initial_params.left_width}px;
            margin-right: ${initial_params.width-20-initial_params.left_width-initial_params.right_width-5}px;
            font-size:0;
        }
        .index-module-right{
            display:inline-block;
            vertical-align:top;
            width:${initial_params.right_width}px;
        }

        /*  标题样式 - style1  */
        .titlebar-style1{
            border-bottom:1px solid rgb(0,52,154);
            position:relative;     
        }
        .titlebar-style1 .active-title {
            background-color: rgb(0,52,154);
            color: white;
            height:40px;
            line-height:40px;
            padding:0 15px 0 30px;
            font-size:20px;
            font-family:'微软雅黑';
            position:relative;
        }
        .titlebar-style1 .active-title i {
            position: absolute;
            width: 5px;
            height: 20px;
            background: white;
            left: 10px;
            top: 10px;
        }
        .titlebar-style1 .title {
            color: rgb(0,52,154);
            height:40px;
            line-height:40px;
            padding:0 22px 0 23px;
            font-size:20px;
            font-family:'微软雅黑';
            position:relative;
        }
        .titlebar-style1 .title i {
            position: absolute;
            width: 5px;
            height: 20px;
            background: white;
            left: 10px;
            top: 10px;
        }
        .titlebar-style1 a.more{
            color:#959595;
            position:absolute;
            top:10px;
            right:10px;
            font-size:14px;
            font-family:'宋体';
        }

        /*  标题样式 - style2  */
        .titlebar-style2{        
            font-size: 0;
            position:relative;
        }
        .titlebar-style2 .active-title {
            display: inline-block;
            font-size: 16px;
            background-color: rgb(0,52,154);
            color: white;
            width:100%;
            text-align:center;
            padding: 8px 0 9px 0;
        }
        .titlebar-style2 .active-title i {
            
        }
        .titlebar-style2 .title {
        }
        .titlebar-style2 .title i {

        }
        .titlebar-style2 a.more {
            color:#959595;
            position:absolute;
            top:10px;
            right:10px;
            font-size:14px;
            font-family:'宋体';
        }
        
        /*  新闻列表样式 - style1 */
        .newslist-style1{
            margin-top:10px;
        }
        .newslist-style1 li a{
            display: block;
            position:relative;
            color: #222;
            height: 35px;
            font: 14px/35px '宋体';
            background: url(img/icon-listdot.png) no-repeat 18px 16px;
            padding-left: 35px;
        }
        .newslist-style1 li a .logo-new{
            width:23px;
            height:11px;
            background:url(img/new.gif) no-repeat 0 0;
        }
        .newslist-style1 li a .date{
            position:absolute;
            top:0;
            right:10px;
        }


        /*  新闻列表样式 - style2 */
        .newslist-style2{
            margin-top:10px;
        }
        .newslist-style2 li a{
            display: block;
            position:relative;
            color: #222;
            height: 35px;
            font: 14px/35px '宋体';
            background: url(img/icon-listdot.png) no-repeat 18px 16px;
            padding-left: 35px;
        }
        .newslist-style2 li a .logo-new{
            width:23px;
            height:11px;
            background:url(img/new.gif) no-repeat 0 0;
        }
        .newslist-style2 li a .date{
            position:absolute;
            top:0;
            right:10px;
        }


        /*  banner  */
        .index-banner{
            display:block;
            width:100%;
            margin-bottom:10px;
        }
        

        /*  news 上详情+下列表  */
        .news-detail-container{
        	display:inline-block;
            width:${initial_params.news_detail_width}px;
        	vertical-align:top;
        }        
        .news-detail-container>.content{
            padding:10px;
        }
        /*  news  上详情+下列表 -- 详情 */
        .news-detail-container>.content .newsdetail{
            position: relative;
            height: 150px;
            border-bottom: 1px dashed #bebebe;
        }
        .news-detail-container>.content .newsdetail .bigtitle {
            color: #e22000;
            text-align: center;
            display: block;
            font: 22px/60px 微软雅黑;
            height:60px;
        }
        .news-detail-container>.content .newsdetail p    {
            font: 14px/24px '宋体';
            color: #424242;
            text-indent: 2em;
        }
        .news-detail-container>.content .newsdetail a.more{
            color: #f24a00;
            position: absolute;
            right: 10px;
            bottom: 10px;
        }
        
        
        
        /*  news(带页签切换) - style1 */
        .news-style1{
            display:inline-block;
            width:${initial_params.news_width_1}px;
            margin-right:10px;
            margin-bottom:10px;
        }
        /*  news(带页签切换) - style2 */
        .news-style2{
            display:inline-block;
            width:${initial_params.news_width_2}px;
            margin-right:10px;            
            margin-bottom:10px;
        }

        /*  news(带页签切换) - 导航部分  */
        .news-container .u-tabnav {
            font-size:0;
        }
        .news-container .u-tabnav li {
            display:inline-block;
            cursor: pointer;
        }
        /*  news(带页签切换) - 内容部分  */
        .news-container .u-tabmain {
            font-size: 12px;
            position: relative;
        }
        /* news(带页签切换) - 更多，链接到list.html */
        .news-container .u-tabmain .more-tolist {
            position:absolute;
            top:-35px;
            right:10px;
            font:14px '宋体';
            color:#959595;            
        }
        .news-container .u-tabmain>div {
            display: none;
            width: 100%;
            height: 100%;
        }
        .news-container .u-tabmain>div.u-tabmain-active {
            display: block;
        }
        
        
        /* 主体 左侧图文nav  */
        .left-mix {
            width: 100%;
            margin: 0 auto 5px 0;
            padding: 15px 0 10px;
            font-size: 0;
            outline:1px solid #eee;
        }
        .left-mix li{
            display: inline-block;
            width: 16%;
        }
        .left-mix li a{
            display: block;
            font-size: 14px;
        }
        .left-mix li a img{
            display: block;
            width: 40%;
            margin: 0 auto;
        }
        .left-mix li a span.txt{
            display: block;
            text-align: center;
            color: #222;
            margin-top: 2px;
        }

        /* 右侧列点击"更多"时*/
        ul.more-div{
            display:none;
            position: absolute;
            z-index: 999;
            background-color: #d4ecff;
            padding: 10px 20px;
            width:220px;
        }
        ul.more-div li{
            display: inline-block;
        }
        ul.more-div li a{
            display: block;
            width: 200px;
            font-size: 14px;
            font-family: '宋体';
            background-color: #0094b3;
            text-align: center;
            padding: 8px 0;
            margin: 5px;
            border-radius: 2px;
            color: white;
        }

        /* 主体 右侧列图 */
        .yImages>ul.content>li{
            margin-bottom:5px;
        }
        .yImages>ul.content>li>a{
            display:block;
        }
        .yImages>ul.content>li>a>img{
            display:block;
        }
        .yImages-type1 .content{
            padding:10px;
            border:1px solid #ddd;
            margin-bottom:10px;
        }
        .yImages.yImages-type2 .content{
            width:100%;
        }
        .yImages img.yImage{
            width: 100%;
        }


        /* 主体 右侧图文链接  */
        .right-mix ul.content {
            width: 60%;
            padding: 0 20% 0 19%;
            font-size: 0;
            border: 1px solid #eee;
        }
        .right-mix ul.content li {
            display: inline-block;
            width: 50%;
            padding: 10px 0;
        }
        .right-mix ul.content li a {
            display: block;
            font-size: 14px;
        }
        .right-mix ul.content li a img {
            display: block;
            width: 70%;
            margin: 0 auto;
        }
        .right-mix ul.content li a span.txt {
            display: block;
            text-align: center;
            color: #222;
            margin-top: 2px;
        }


        /* 友情链接 */
        .index-link{
            width: 100%;
            border-top: 3px solid rgb(0,52,154);
            position: relative;
            margin-bottom:10px;
        }
        .index-link .static-title{
            display:inline-block;
            vertical-align:top;
            width: 100px;
            height: 45px;
            line-height: 45px;
            background: rgb(0,52,154) url(img/icon-index-link.png) no-repeat 15px 8px;
            padding-left: 50px;
            color: white;
            font-size: 22px;
            font-family:'微软雅黑';
        }
        .index-link>.u-tabnav {
            display:inline-block;
        }
        .index-link>.u-tabnav  li{
            display:inline-block;
            cursor:pointer;
            margin-top: 5px;
            padding: 5px 10px;
            border:1px solid transparent;
            font-size:15px;
            font-family:'微软雅黑';
        }
        .index-link>.u-tabnav>li.title {
            border:1px solid transparent;
        }
        .index-link .u-tabnav li.active-title {
            background-color:#f6f9fb;
            border:1px solid #eee;
        }
        .index-link .u-tabmain {
            clear: both;
            overflow: hidden;
            border-top: 1px solid #ccc;
        }
        .index-link .u-tabmain>div {
            display: none;
        }
        .index-link .u-tabmain .u-tabmain-active {
            display: block;
        }
        .index-link .u-tabmain .u-tabmain-active {
            padding: 10px 6px;
        }
        
        /* 图片滚动(横向) */
        .scrollImg-container{
            display: block;
            width: 1140px;
            margin: 10px auto;            
            position: relative;
            border:1px solid #aaa;
        }
        .scrollImg-container .scrollImg-title{
            display: inline-block;
            width: 20px;
            padding: 40px 15px 0 15px;
            height:150px;
            background:#3F51B5;
            color:white;
            font-size: 18px;
            font-family: '微软雅黑';
        }
        .scrollImg-container .scrollImg {
            position: absolute;
            left: 50px;
            right:0;
            top:0;
            bottom: 0;
            margin:auto;
            /* 宽度 > ( 图片的宽 + 图片的间距 *2 )*图片个数 时，就不滚动了 */
            width: 1050px;
            /* 若修改了图片的高，则必须修改 .scrollImg 的高，改成和图片的高一样*/
            height:160px;
            overflow: hidden;
        }
        .scrollImg-container .scrollImg ul>li {
            float: left;
            /* 图片之间的间距: 5px */
            padding: 0 5px;
        }
        .scrollImg-container .scrollImg>ul li a {
            display: block;
            position: relative;
        }
        .scrollImg-container .scrollImg>ul li a img {
            display: block;
            /* 图片的宽 */
            width: 200px;
            /* 图片的高。若修改了图片的高，则必须修改 .scrollImg 的高 */
            height: 160px;
        }
        .scrollImg-container .scrollImg>ul li a span.txt-cover {
            position: absolute;
            width: 100%;
            height: 26px;
            line-height: 26px;
            left: 0;
            bottom: 0;
            background: black;
            opacity: 0.5;
            z-index: 1;
        }
        .scrollImg-container .scrollImg>ul li a span.txt {
            position: absolute;
            width: 100%;
            height: 26px;
            line-height: 26px;
            left: 0;
            bottom: 0;
            font-size: 14px;
            font-family: '宋体';
            color: white;
            text-align: center;
            z-index: 2;
        }
        
    `;
    // 设定header
    if (initial_params.header_style === "0") {
        //首尾style：铺满
        header = `
        <!-- header -->
        <div class="header">
            <!-- 头部 - 最上面的信息条（日期等） -->
            <div class="info-bar">
                <div class="content">
                    <span id="today"></span>
                    <span class="info-bar-right">
                        <a href="javascript:void(0)">设为首页</a>
                        &nbsp;|&nbsp;
                        <a href="javascript:void(0)">添加收藏</a>
                    </span>
                </div>
            </div>
            <!-- 头部 - 大图 -->
            <div class="titleImg"></div>
            <!-- 头部 - 导航 -->
            <div class="nav">
                <ul class="content">
                    <li><a href="index.html">导航1<i></i></a></li>
                    <li><a href="list.html">导航2<i></i></a></li>
                    <li><a href="list.html">导航3<i></i></a></li>
                    <li><a href="list.html">导航4<i></i></a></li>
                    <li><a href="list.html">导航5<i></i></a></li>
                    <li><a href="list.html">导航6<i></i></a></li>
                    <li><a href="list.html">导航7</a></li>
                </ul>
            </div>
            <!-- 头部 - 底部条 -->
            <div class="bottom-bar">
                <div class="content">
                    <!-- 头部 - 通知滚动 -->
                    <div class="notice-scroll">
                        <div>
                            <i></i>
                            <ul>
                                <li><a href="javascript:void(0)">测试文字测试文字1</a></li>
                                <li><a href="javascript:void(0)">测试文字测试文字22</a></li>
                                <li><a href="javascript:void(0)">测试文字测试文字333</a></li>
                                <li><a href="javascript:void(0)">测试文字测试文字4444</a></li>
                                <li><a href="javascript:void(0)">测试文字测试文字55555</a></li>
                                <li><a href="javascript:void(0)">测试文字测试文字666666</a></li>
                                <li><a href="javascript:void(0)">测试文字测试文字7777777</a></li>
                            </ul>
                            <ul></ul>
                        </div>
                    </div>
                    <!-- 头部 - 搜索 -->
                    <div class="header-search">
                        <!-- 文本框 -->
                        <input type="text">
                        <!-- 普通搜索 -->
                        <input type="button" value="" class="pt_search">
                        <!-- 高级搜索 -->
                        <input type="button" value="高级搜索" class="gj_search">
                    </div>                   
                </div>
            </div>
            
        </div>
        `;
        public_style += `
        /* 头部 */
        .header .content {
            width: ${initial_params.width}px;
            margin: 0 auto;
        }
        /* 头部 最上面的信息条（日期等） */
        .header .info-bar {
            height: 35px;
            line-height: 35px;
            background-color:#eee;
            font-size: 14px;
            font-family: '宋体';
        }
        .header .info-bar .info-bar-right{
            float:right;
        }
        /* 头部 大图 */
        .header .titleImg {
            /* 改这里的高度 */
            height: 400px;
            background: url(img/header-title.png) no-repeat center 0;
        }
        /* 头部 导航 */
        .header .nav {
            background:rgb(0,52,154);
        }
        .header .nav>ul.content{
            font-size: 0px;
        }
        .header .nav>ul.content>li {
            display:inline-block;
            position: relative;
        }
        .header .nav>ul.content>li a {
            display: block;
            color: #fafafa;
            font-family:'微软雅黑';
            font-size: 16px;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        .header .nav>ul.content>li a:hover {
            background: rgb(9, 75, 206);
        }
        .header .nav>ul.content>li a i {
            width: 2px;
            height: 24px;
            position: absolute;
            right: 0;
            top: 13px;
            background: rgb(9, 75, 206);
        }
        /* 头部 底部条 */
        .header .bottom-bar {
            font-size: 0;
            padding: 2px 0;
            background-color: #eee;
        }
        /* 头部 通知滚动 */
        .header .notice-scroll {
            display: inline-block;
            vertical-align: top;
            width: 850px;
            height: 40px;
            padding-left: 40px;
            background: url(img/notice.png) no-repeat 10px 11.5px;
            overflow: hidden;
            margin: 0 auto;
        }
        .header .notice-scroll>div {
            white-space: nowrap;
            height: 40px;
            font: 16px/40px "微软雅黑";
            overflow: hidden;
        }
        .header .notice-scroll ul {
            display: inline;
        }
        .header .notice-scroll li {
            display: inline;
            margin-right: 20px;
        }
        .header .notice-scroll li a {
            color: #333333;
            font-size: 14px;
            font-family:'宋体';
        }
        /* 头部 - 搜索 */
        .header .header-search {
            display: inline-block;
            line-height: 40px;
            vertical-align: top;
            margin-left: 35px;
        }
        .header .header-search input[type="text"] {
            width: 145px;
            padding: 0 5px;
            height: 25px;
            line-height: 25px;
            border: none;
            vertical-align: middle;
        }
        .header .header-search input.pt_search {
            width: 25px;
            height: 25px;
            border: none;
            background: #f78e19 url(img/搜索.png) no-repeat 4px 4px;
            vertical-align: middle;
            position: relative;
            left: -1px;
        }
        .header .header-search input.gj_search {
            height: 25px;
            border: none;
            background: #f78e19;
            vertical-align: middle;
            margin-left: 5px;
            color:white;
            padding: 0 10px;
            font-size:12px;
            font-family:'微软雅黑';
        }
        /* 尾部 */
        .footer{
            width:100%;
            background-color:rgb(0,52,154);
            text-align:center;
            padding:30px 0;
        }
        .footer p{
            height:30px;
            line-height:30px;
            font-size:12px;
            font-family:'宋体';
            color: white;
        }
        .footer p>a{
            font-size:12px;
            font-family:'宋体';
            color: white;
        }`;

    } else {
        //首尾style：定宽
        header = `
        <!-- header -->
        <div class="header">
            <!-- 头部 - 最上面的信息条（日期等） -->
            <div class="info-bar">
                <span id="today"></span>
                <span class="info-bar-right">
                    <a href="javascript:void(0)">设为首页</a>
                    &nbsp;|&nbsp;
                    <a href="javascript:void(0)">添加收藏</a>
                </span>
            </div>
            <!-- 头部 -图 -->
            <img src="img/header-title.png" class="titleImg">
            <!-- 头部 - 导航 -->
            <ul class="nav">
                <li><a href="index.html">导航1<i></i></a></li>
                <li><a href="list.html">导航2<i></i></a></li>
                <li><a href="list.html">导航3<i></i></a></li>
                <li><a href="list.html">导航4<i></i></a></li>
                <li><a href="list.html">导航5<i></i></a></li>
                <li><a href="list.html">导航6<i></i></a></li>
                <li><a href="list.html">导航7</a></li>
            </ul>
            <!-- 头部 - 底部条 -->
            <div class="bottom-bar">
                <!-- 头部 - 通知滚动 -->
                <div class="notice-scroll">
                    <div>
                        <i></i>
                        <ul>
                            <li><a href="javascript:void(0)">测试文字测试文字1</a></li>
                            <li><a href="javascript:void(0)">测试文字测试文字22</a></li>
                            <li><a href="javascript:void(0)">测试文字测试文字333</a></li>
                            <li><a href="javascript:void(0)">测试文字测试文字4444</a></li>
                            <li><a href="javascript:void(0)">测试文字测试文字55555</a></li>
                            <li><a href="javascript:void(0)">测试文字测试文字666666</a></li>
                            <li><a href="javascript:void(0)">测试文字测试文字7777777</a></li>
                        </ul>
                        <ul></ul>
                    </div>
                </div>
                <!-- 头部 搜索 -->
                <div class="header-search">
                    <!-- 文本框 -->
                    <input type="text">
                    <!-- 普通搜索 -->
                    <input type="button" value="" class="pt_search">
                    <!-- 高级搜索 -->
                    <input type="button" value="高级搜索" class="gj_search">
                </div>
            </div>
        </div>`;

        public_style += `
        /* 头部  */
        .header>*{
            display:block;
            width: ${initial_params.width}px;
            margin: 0 auto;
        }
        /* 头部 最上面的信息条（日期等） */
        .header .info-bar {
            height: 35px;
            line-height: 35px;
            background-color:#eee;
            font-size: 14px;
            font-family: '宋体';
        }
        .header .info-bar .info-bar-right{
            float:right;
        }
        /* 头部 大图 */
        .header .titleImg {
            height: 400px;
        }
        /* 头部 导航 */
        .header .nav {
            font-size: 0px;
            background:rgb(0,52,154);
        }
        .header .nav li {
            display:inline-block;
            position: relative;
        }
        .header .nav li a {
            display: block;
            color: #fafafa;
            font-family: '微软雅黑';
            font-size: 16px;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        .header .nav li:hover {
            background: rgb(9, 75, 206);
        }
        .header .nav li i {
            width: 2px;
            height: 24px;
            position: absolute;
            right: 0;
            top: 13px;
            background: rgb(9, 75, 206);
        }
        /* 头部 底部条 */
        .header .bottom-bar {
            font-size: 0;
            padding: 2px 0;
            background-color: #eee;
        }
        /* 头部 通知滚动 */
        .header .notice-scroll {
            display: inline-block;
            vertical-align: top;
            width: 850px;
            height: 40px;
            font-size: 14px;
            padding-left: 40px;
            background: url(img/notice.png) no-repeat 10px 11.5px;
            overflow: hidden;
            margin: 0 auto;
        }
        .header .notice-scroll>div {
            white-space: nowrap;
            height: 40px;
            font: 16px/40px "微软雅黑";
            overflow: hidden;
        }
        .header .notice-scroll ul {
            display: inline;
        }
        .header .notice-scroll li {
            display: inline;
            margin-right: 20px;
        }
        .header .notice-scroll li a {
            color: #333333;
            font-size: 14px;
            font-family:'宋体';
        }

        /* 头部 - 搜索 */
        .header .header-search {
            display: inline-block;
            line-height: 40px;
            vertical-align: top;
            margin-left: 35px;
        }
        .header .header-search input[type="text"] {
            display: inline-block;
            width: 145px;
            padding: 0 5px;
            height: 25px;
            line-height: 25px;
            border: none;
            vertical-align: middle;
        }
        .header .header-search input.pt_search {
            display: inline-block;
            width: 25px;
            height: 25px;
            border: none;
            background: #f78e19 url(img/搜索.png) no-repeat 4px 4px;
            vertical-align: middle;
            position: relative;
            left: -1px;
        }
        .header .header-search input.gj_search {
            display: inline-block;
            height: 25px;
            border: none;
            background: #f78e19;
            vertical-align: middle;
            margin-left: 5px;
            color:white;
            padding: 0 10px;
            font-size:12px;
            font-family:'微软雅黑';
        }

        /* 尾部 */
        .footer{
            width: ${initial_params.width}px;
            margin: 0 auto;
            background-color:rgb(0,52,154);
            text-align:center;
            padding:30px 0;
        }
        .footer p{
            height:30px;
            line-height:30px;
            font-size:12px;
            font-family:'宋体';
            color: white;
        }
        .footer a{
            color: white;
            font-size:12px;
            font-family:'宋体';
            color: #fafafa;
        }`;
    }
    // 设定main
    index_main = `
            <!-- index主体 -->
            <div class="main-526">`;
    for (let i = 0; i < initial_params.module_num; i++) {
        index_main += `
            <!-- 第${i+1}层 -->
            <div class="index-module raw">
                <input type="button" value="添加内容" class="add-btn" onclick="open_filling($(this).parent('.raw'));">
            </div>`;
    }
    index_main += `</div>`;
    // 设定footer
    footer = `
        <!-- footer -->
        <div class="footer">
            <p>
                <a href="">联系我们</a>&nbsp;|&nbsp;
                <a href="">网站留言</a>
            </p>
            <p>吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦</p>
            <p>吧啦吧啦吧啦吧啦</p>
        </div>
        `;
    $('#x-preview').html(header + index_main + footer);
    $('#public-style').html(public_style);
    $('#index-style').html(index_style);
    /* 当前日期 */
    loadDateTime('today');
    /* head中的通知滚动 */
    scrollNotice(40);
}
/* 填充内容 打开filling面板 */
function open_filling(obj) {
    $('#x-filling-panel').css('display', 'block');
    $('#x-cover').css('display', 'block');
    current_div = obj;
    if (!current_div.hasClass('index-module')) {
        $('#x-filling_btn1').css('background', 'darkred');
        $('#x-filling_btn1').off('click');
    } else {
        $('#x-filling_btn1').css('background', 'rgb(236, 69, 69)');
        $('#x-filling_btn1').click(function() {
            filling_left();
            $('#x-cover').css('display', 'none');
        });
    }
}
/* 填充内容 事件绑定初始化 */
function filling_init(obj) {
    $('#x-filling-close').click(function() {
        $('#x-filling-panel').css('display', 'none');
        $('#x-cover').css('display', 'none');
    });
    $('#x-filling_btn1').click(function() {
        filling_left();
        $('#x-cover').css('display', 'none');
    });
    $('#x-filling_btn2').click(function() {
        filling_banner();
    });
    $('#x-filling_btn3').click(function() {
        filling_picscroll();
        $('#x-filling-panel').css('display', 'none');
    });
    $('#x-filling_btn4').click(function() {
        filling_news_detail();
    });
    $('#x-filling_btn5').click(function() {
        filling_yImages();
    });
    $('#x-filling_btn6').click(function() {
        filling_link();
    });
    $('#x-filling_btn7').click(function() {
        filling_rightnav();
    });
    $('#x-filling_btn8').click(function() {
        filling_holder();
    });
    $('#x-filling_btn9').click(function() {
        filling_leftnav();
    });
    $('#x-filling_btn10').click(function() {
        filling_news_tabChange();
    });
    $('#x-filling_btn11').click(function() {
        filling_scrollImg();
    });

}
/* 填充内容 分左右 */
function filling_left() {
    let leftWidth = $('#x-filling-left-width').val();
    let rightWidth = $('#x-filling-right-width').val();
    let html = `
    <!-- 左 -->
    <div class="index-module-left raw">
        <input type="button" value="添加内容" class="add-btn" onclick="open_filling($(this).parent('.raw'));">
    </div>
    <!-- 右 -->
    <div class="index-module-right raw">
        <input type="button" value="添加内容"  class="add-btn" onclick="open_filling($(this).parent('.raw'));">
    </div>`;
    current_div.removeClass('raw');
    current_div.html(html);
    $('#x-filling-panel').css('display', 'none');
}
/* 填充内容 banner */
function filling_banner() {
    banner_num = banner_num % 3 + 1;
    let html = `
            <!-- 横幅图片 -->
            <img src="img/index-banner${banner_num}.png" class="index-banner">`;
    current_div.html(current_div.html() + html);
}
/* 填充内容  news-带详情*/
function filling_news_detail() {
    let html = `
            <!-- 新闻：上详情+下列表 -->
            <div class="news-detail-container">
                <div class="titlebar-style1">
                    <span class="active-title"><i></i>标题</span>
                    <a href="list.html" class="more">更多&gt;&gt;</a>
                </div>
                <div class="content">
                    <div class="newsdetail">
                        <a href="detail.html" class="bigtitle" title="大标题1111">大标题1111</a>
                        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容...</p>
                        <a href="detail.html" class="more">[详细]</a>
                    </div>
                    <ul class="newslist-style1">
                        <li>
                            <a href="detail.html" title="标题1111">
                                <span class="txt">标题1111</span>
                                <span class="logo-new"></span>
                                <span class="date">2017-07-29</span>
                            </a>
                        </li>
                        <li>
                            <a href="detail.html" title="标题1111">
                                <span class="txt">标题1111</span>
                                <span class="logo-new"></span>
                                <span class="date">2017-07-29</span>
                            </a>
                        </li>
                        <li>
                            <a href="detail.html" title="标题1111">
                                <span class="txt">标题1111</span>
                                <span class="logo-new"></span>
                                <span class="date">2017-07-29</span>
                            </a>
                        </li>
                        <li>
                            <a href="detail.html" title="标题1111">
                                <span class="txt">标题1111</span>
                                <span class="logo-new"></span>
                                <span class="date">2017-07-29</span>
                            </a>
                        </li>
                        <li>
                            <a href="detail.html" title="标题1111">
                                <span class="txt">标题1111</span>
                                <span class="logo-new"></span>
                                <span class="date">2017-07-29</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>`;
    current_div.append(html);
}
/* 填充内容 news */
function filling_news_tabChange() {
    let style_type = $('#x-news-style-type').val();
    let html = `
            <!-- 新闻列表（带切换功能） -->
            <div class="news-container news-style${style_type}">
                <div class="titlebar-style1">
                    <ul class="u-tabnav">
                        <li class="active-title"><i></i>news1</li>
                        <li class="title"><i></i>news2</li>
                    </ul>
                </div>
                <div class="content u-tabmain">
                    <div class="u-tabmain-active">
                        <a href="list.html" class="more-tolist">更多&gt;&gt;</a>
                        <ul class="newslist-style2">
                            <li>
                                <a href="detail.html" title="标题1111">
                                    <span class="txt">标题1111</span>
                                    <span class="logo-new"></span>
                                    <span class="date">2017-07-29</span>
                                </a>
                            </li>
                            <li>
                                <a href="detail.html" title="标题1111">
                                    <span class="txt">标题1111</span>
                                    <span class="logo-new"></span>
                                    <span class="date">2017-07-29</span>
                                </a>
                            </li>
                            <li>
                                <a href="detail.html" title="标题1111">
                                    <span class="txt">标题1111</span>
                                    <span class="logo-new"></span>
                                    <span class="date">2017-07-29</span>
                                </a>
                            </li>
                            <li>
                                <a href="detail.html" title="标题1111">
                                    <span class="txt">标题1111</span>
                                    <span class="logo-new"></span>
                                    <span class="date">2017-07-29</span>
                                </a>
                            </li>
                            <li>
                                <a href="detail.html" title="标题1111">
                                    <span class="txt">标题1111</span>
                                    <span class="logo-new"></span>
                                    <span class="date">2017-07-29</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a href="list.html" class="more-tolist">更多&gt;&gt;</a>
                        <ul class="newslist-style2">
                            <li>
                                <a href="detail.html" title="标题2222">
                                    <span class="txt">标题2222</span>
                                    <span class="logo-new"></span>
                                    <span class="date">2017-07-29</span>
                                </a>
                            </li>
                            <li>
                                <a href="detail.html" title="标题1111">
                                    <span class="txt">标题1111</span>
                                    <span class="logo-new"></span>
                                    <span class="date">2017-07-29</span>
                                </a>
                            </li>
                            <li>
                                <a href="detail.html" title="标题1111">
                                    <span class="txt">标题1111</span>
                                    <span class="logo-new"></span>
                                    <span class="date">2017-07-29</span>
                                </a>
                            </li>
                            <li>
                                <a href="detail.html" title="标题1111">
                                    <span class="txt">标题1111</span>
                                    <span class="logo-new"></span>
                                    <span class="date">2017-07-29</span>
                                </a>
                            </li>
                            <li>
                                <a href="detail.html" title="标题1111">
                                    <span class="txt">标题1111</span>
                                    <span class="logo-new"></span>
                                    <span class="date">2017-07-29</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
    current_div.append(html);
    tabsClick();
}
/* 填充内容 左侧横向图文nav  */
function filling_leftnav() {
    let html = `
    <!-- 横向图文链接 -->
    <div class="left-mix">
        <ul class="content">
            <li><a href="javascript:void(0)"><img src="img/icons1.png"><span class="txt">标题1</span></a></li>
            <li><a href="javascript:void(0)"><img src="img/icons2.png"><span class="txt">标题1</span></a></li>
            <li><a href="javascript:void(0)"><img src="img/icons3.png"><span class="txt">标题1</span></a></li>
            <li><a href="javascript:void(0)"><img src="img/icons4.png"><span class="txt">标题1</span></a></li>
            <li><a href="javascript:void(0)"><img src="img/icons5.png"><span class="txt">标题1</span></a></li>
            <li><a href="javascript:void(0)"><img src="img/icons6.png"><span class="txt">标题1</span></a></li>
        </ul>
    </div>`;
    current_div.html(current_div.html() + html);
}
/* 填充内容 右侧纵向图文nav */
function filling_yImages() {
    let num = $('#x-yImage-num').val();
    let type = $('input:radio[name="x-yImage-type"]:checked').val();
    let title_type = $('#x-yImage-title-type').val();
    let html;
    switch (type) {
        case "1":
            html = `
                <!-- 右侧纵向图文导航 有标题 -->
                <div class="yImages yImages-type1 has-more-div">
                    <div class="titlebar-style${title_type}">
                        <span class="active-title"><i></i>标题</span>
                        <a href="javascript:void(0)" class="more" onclick="rightMore(this)">更多&gt;&gt;</a>
                    </div>
                    <ul class="content">
                    `;
            for (let i = 0; i < num; i++) {
                html += `
                    <li><a href="javascript:void(0)"><img src="img/yImage${(i%5)+1}.png" class="yImage"></a></li>`;
            }
            html += `
                </ul>
                <ul class="more-div">`;
            for (let i = 0; i < num; i++) {
                html += `
                    <li><a href="javascript:void(0)">标题</a></li>
                    `;
            }
            html += `
                    </ul>
                </div>`;
            break;
        case "2":
            html = `
                <!-- 右侧纵向图文导航 无标题 -->
                <div class="yImages yImages-type2">
                    <ul class="content">
                    `;
            for (let i = 0; i < num; i++) {
                html += `
                    <li><a href="javascript:void(0)"><img src="img/yImage${(i%5)+1}.png" class="yImage"></a></li>`;
            }
            html += `
                    </ul>
                </div>`;
            break;
    }
    current_div.html(current_div.html() + html);
}
/* 填充内容 友情链接 */
function filling_link() {
    let html = `
        <!-- 友情链接 -->
        <div class="index-link">
            <div class="static-title">友情链接</div>
            <ul class="u-tabnav">
                <li class="active-title">友情链接1</li>
                <li class="title">友情链接2</li>
            </ul>
            <div class="u-tabmain">
                <div class="u-tabmain-active">
                    <ul>
                        <li><a href="javascript:void(0)">友情链接1111</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="javascript:void(0)">友情链接2222</a></li>
                    </ul>
                </div>
            </div>
        </div>`;
    current_div.append(html);
    tabsClick($('.index-link'));
}
/* 填充内容 右侧 图文nav */
function filling_rightnav() {
    let num = $('#x-right-num').val();
    let title_type = $('#x-right-title-type').val();
    let current = 1;
    let html = `
    <!-- 右侧 图文nav -->
    <div class="right-mix has-more-div">
        <div class="titlebar-style${title_type}">
            <span class="active-title"><i></i>标题</span>
            <a href="javascript:void(0)" class="more" onclick="rightMore(this)">更多&gt;&gt;</a>
        </div>
        <ul class="content">`;
    for (let i = 0; i < num; i++) {
        html += `
            <li><a href="javascript:void(0)"><img src="img/icons${current%6}.png"><span class="txt">标题1</span></a></li>
            <li><a href="javascript:void(0)"><img src="img/icons${current%6+1}.png"><span class="txt">标题1</span></a></li>
            `;
        current = current + 2;
    }
    html += `
        </ul>
        <ul class="more-div">`;
    for (let i = 0; i < num; i++) {
        html += `
            <li><a href="javascript:void(0)">标题</a></li>
            <li><a href="javascript:void(0)">标题</a></li>
            `;
    }
    html += `
        </ul>
    </div>`;
    current_div.html(current_div.html() + html);
}
/* 填充内容 占位框 */
function filling_holder() {
    let w = $('#x-holder-width').val();
    let h = $('#x-holder-height').val();
    let type = $('[name="x-holder-type"]:checked').val();
    let html;
    switch (type) {
        case "1":
            html = `
            <div class="holder" style="width:${w};height:${h}">
                <div class="titlebar-style1">
                    <span class="active-title"><i></i>标题</span>
                    <a href="javascript:void(0)" class="more">更多&gt;&gt;</a>
                </div>
            </div>`;
            break;
        case "2":
            html = `
            <div class="holder" style="width:${w};height:${h}"></div>`;
            break;
    }

    current_div.append(html);
}
/* 填充内容 横向图片滚动 */
function filling_scrollImg(){
    scrollImg_num++;
    var html=`
    <div class="scrollImg-container">
        <div class="scrollImg-title">标题</div>
        <div id="scrollImg${scrollImg_num}" class="scrollImg">
            <ul>
                <li>
                    <a href="javascript:void(0)">
                        <img src="img/1.jpg"></img>
                        <span class="txt-cover"></span>
                        <span class="txt">标题</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <img src="img/2.jpg"></img>
                        <span class="txt-cover"></span>
                        <span class="txt">标题</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <img src="img/3.jpg"></img>
                        <span class="txt-cover"></span>
                        <span class="txt">标题</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <img src="img/4.jpg"></img>
                        <span class="txt-cover"></span>
                        <span class="txt">标题</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <img src="img/5.jpg"></img>
                        <span class="txt-cover"></span>
                        <span class="txt">标题</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>`;
    current_div.append(html);
    $(`#scrollImg${scrollImg_num}`).kxbdMarquee({
        direction: "left",
        scrollAmount: 2,
    });
}
/* 整理代码 */
function code_clean() {
    let html = $('#x-preview').html();
    // 去掉所有.raw
    let re = /\b\sraw\b/g;
    html = html.replace(re, "");
    $('body').html(html);
    // 删除所有input按钮"添加内容"
    $('.add-btn').remove();
    // 重新绑定js
    loadDateTime('today');
    // head中的通知滚动
    scrollNotice(40);
    tabsClick($('.link'));
    // 为了获得clean的html代码 图片轮播不再重新绑定
    // 页签切换不再重新绑定
    for (let i = 1; i <= picscroll_num; i++) {
        $(`#picslide-container${i}`).prop('outerHtml', picscroll_html[i - 1]);
    }


}
/* 填充内容 picscroll */
function filling_picscroll() {
    picscroll_num++;
    $('#picscroll').css('display', 'block');
    picscroll_detail();
}
/* 图片轮播 生成 详细版 */
function picscroll_detail(done = false) {
    let timestamp = done ? picscroll_num : ("_preview");
    let params = {
        // 整体
        width: $('#picscroll_width').val(),
        height: $('#picscroll_height').val(),
        length: $('#picscroll_img_num').val(),
        // 底部栏
        bottomHeight: $('#picscroll_bottom_height').val(),
        bottomColor: $('#picscroll_bottom_color').val(),
        bottomOpacity: $('#picscroll_bottom_opacity').val(),
        // 按钮
        btnAlign: $('input:radio[name="picscroll_btns_align"]:checked').val(),
        btnSize: $('#picscroll_btn_size').val(),
        btnColor: $('#picscroll_btn_color').val(),
        btnCColor: $('#picscroll_btn_ccolor').val(),
        // 标题
        hasTitle: $('input:radio[name="picscroll_has_title"]:checked').val(),
        titleAlign: $('input:radio[name="picscroll_title_align"]:checked').val(),
        titleSize: $('#picscroll_title_size').val(),
        titleColor: $('#picscroll_title_color').val(),
    };
    let html = `
    <!-- 图片轮播${timestamp} -->
<div id="picslide-container${timestamp}" class="picslide-container${timestamp}">`;
    for (let i = 0; i < params.length; i++) {
        let str_a; //每个a标签
        if (params.hasTitle) {
            str_a = `
      <a href="javascript:void(0);">
          <img src="img/${i+1}.jpg" class="picslide-pic${timestamp}">
          <div class="picslide-title${timestamp}">标题${i+1}</div>
          <div class="op_div${timestamp}"></div>
      </a>`;
        } else {
            str_a = `
        <a href="javascript:void(0);">
            <img src="img/${i+1}.jpg" class="picslide-pic${timestamp}">
            <div class="op_div${timestamp}"></div>
        </a>`;
        }
        html += str_a;
    }
    html += `
        <div id="picslide-btn${timestamp}" class="picslide-btn${timestamp}"></div>
</div>`;
    let btnTop = (params.bottomHeight - params.btnSize) / 2;
    let btnsLeft = (params.width - (parseInt(params.btnSize) + 8) * params.length) / 2;
    let preview_css=`
        /* 图片轮播${timestamp} */
        .picslide-container${timestamp}{
        	display:inline-block;
        	vertical-align:top;
            width: ${params.width}px;
            height: ${params.height}px;
            position: relative;
            margin-bottom:10px;
        }
        /* 图片轮播${timestamp} - 图片 */
        .picslide-pic${timestamp} {
            display: none;
            position: absolute;
            width: ${params.width}px;
            height: ${params.height}px;
            left: 0;
            top: 0;
            z-index:1;
        }
        /* 图片轮播${timestamp} - 标题 */
        .picslide-title${timestamp} {
            display: none;
            position: absolute;
            bottom: 0;
            height: ${params.bottomHeight}px;
            line-height: ${params.bottomHeight}px;
            color: ${params.titleColor};
            text-align: ${params.titleAlign};
            z-index: 3;
            font-size: ${params.titleSize}px;
            font-family:'宋体';
        }
        /* 图片轮播${timestamp} - 底部透明栏 */
        .op_div${timestamp}{
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            height: ${params.bottomHeight}px;
            line-height: ${params.bottomHeight}px;
            background: ${params.bottomColor};
            opacity: ${params.bottomOpacity/100};
            filter: alpha(opacity=${params.bottomOpacity});
            z-index:2;
        }
        /* 图片轮播${timestamp} - 按钮组 */
        .picslide-btn${timestamp}{
            position: absolute;
            height: ${params.bottomHeight}px;
            line-height: ${params.bottomHeight}px;
            right: 0;
            bottom: 0;
            z-index: 4;
        }
        /* 图片轮播${timestamp} - 按钮组 - 按钮 */
        .picslide_btn_a${timestamp} {
            width: ${params.btnSize}px;
            height: ${params.btnSize}px;
            border-radius: 50%;
            background-color: ${params.btnColor};
            float: left;
            position: relative;
            top: ${btnTop}px;
            margin-right: 8px;
        }
        .picslide-btn${timestamp} .active {
            background-color: ${params.btnCColor};
        }`;
    let css = `
        /* 图片轮播${timestamp} */
        .picslide-container${timestamp}{
        	display:inline-block;
        	vertical-align:top;
            width: ${params.width}px;
            height: ${params.height}px;
            position: relative;
            margin-bottom:10px;
        }
        /* 图片轮播${timestamp} - 图片 */
        .picslide-pic${timestamp} {
            display: none;
            position: absolute;
            width: ${params.width}px;
            height: ${params.height}px;
            left: 0;
            top: 0;
            z-index:1;
        }
        /* 图片轮播${timestamp} - 标题 */
        .picslide-title${timestamp} {
            display: none;
            position: absolute;
            bottom: 0;
            height: ${params.bottomHeight}px;
            line-height: ${params.bottomHeight}px;
            color: ${params.titleColor};
            font-size: ${params.titleSize}px;
            text-align: ${params.titleAlign};
            z-index: 3;
        }
        /* 图片轮播${timestamp} - 底部透明栏 */
        .op_div${timestamp}{
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            height: ${params.bottomHeight}px;
            line-height: ${params.bottomHeight}px;
            background: ${params.bottomColor};
            opacity: ${params.bottomOpacity/100};
            filter: alpha(opacity=${params.bottomOpacity});
            z-index:2;
        }
        /* 图片轮播${timestamp} - 按钮组 */
        .picslide-btn${timestamp}{
            position: absolute;
            height: ${params.bottomHeight}px;
            line-height: ${params.bottomHeight}px;
            right: 0;
            bottom: 0;
            z-index: 4;
        }
        /* 图片轮播${timestamp} - 按钮组 - 按钮 */
        .picslide_btn_a${timestamp} {
            width: ${params.btnSize}px;
            height: ${params.btnSize}px;
            border-radius: 50%;
            background-color: ${params.btnColor};
            float: left;
            position: relative;
            top: ${btnTop}px;
            margin-right: 8px;
        }
        .picslide-btn${timestamp} .active {
            background-color: ${params.btnCColor};
        }`;
    // 标题位置
    switch (params.titleAlign) {
        case 'left':
            preview_css += `
            .picslide-title${timestamp} {
                left:10px;
            }`;
            css += `
            .picslide-title${timestamp} {
                left:10px;
            }`;
            break;
        case 'right':
            preview_css += `
            .picslide-title${timestamp} {
                right:0;
            }`;
            css += `
            .picslide-title${timestamp} {
                right:0;
            }`;
            break;
    }
    // 按钮位置     
    switch (params.btnAlign) {
        case "0":
            preview_css += `
            .picslide-btn${timestamp} {
                left:0px;
            }`;
            css += `
            .picslide-btn${timestamp} {
                left:0px;
            }`;
            break;
        case "1":
            preview_css += `
            .picslide-btn${timestamp} {
                left:${btnsLeft}px;
            }`;
            css += `
            .picslide-btn${timestamp} {
                left:${btnsLeft}px;
            }`;
            break;
        case "2":
            break;
    }

    if (done) {
        $('#picscroll-preview .picscroll-content').html("");
        $('#picscroll-style').html("");
        $('#picscroll').css('display', 'none');
        current_div.append(html);
        picscroll_html.push(html);
        $('#index-style').append(css);
        $('#x-filling-panel').css('display', 'block');
    } else {
        $('#picscroll-preview .picscroll-content').html(html);
        $('#picscroll-style').html(preview_css);
        showAnimation({
            imgContentID: 'picslide-container', //图片容器ID
            imgContentClass: 'picslide-container', //图片容器样式
            btnContentID: 'picslide-btn', //按钮容器ID
            imgContentTitleClass: 'picslide-title', //标题样式
            timestamp: timestamp
        });
    }

}
/* 图片轮播 生成 取消 */
function picscroll_cancel() {
    $('#picscroll-preview .picscroll-content').html("");
    $('#picscroll-style').html("");
    $('#picscroll').css('display', 'none');
    $('#x-filling-panel').css('display', 'block');
    picscroll_num--;
}