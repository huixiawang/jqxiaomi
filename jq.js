$(function () {
    // 购物车
    $("nav .cart-mini").mouseenter(function () {
        $("nav .cart-mini .box").clearQueue().slideDown("slow");

    })
    $("nav .cart-mini").mouseleave(function () {
        $("nav .cart-mini .box").clearQueue().slideUp("slow");
    })

    // 轮播图
    let img = $(".banner .picture img");
    let btn = $(".banner ol li");
    let left = $(".direction-left");
    let right = $(".direction-right");
    let now = 0;
    img.first().css("z-index", 2);
    btn.eq(0).addClass("active");
    let t = setInterval(move, 1000);

    function move() {
        now++;
        if (now == img.length) {
            now = 0;
        }
        img.css("z-index", 1).eq(now).css("z-index", 2);
        btn.removeClass("active").eq(now).addClass("active");
    }

    function movel() {
        now--;
        if (now < 0) {
            now = img.length - 1;
        }
        img.css("z-index", 1).eq(now).css("z-index", 2);
        btn.removeClass("active").eq(now).addClass("active");
    }

    left.click(function () {
        movel();
    })
    right.click(function () {
        move();
    })
    let banner = $(".banner .container");
    banner.mouseenter(function () {
        clearInterval(t);
    })
    banner.mouseleave(function () {
        t = setInterval(move, 1000);
    })


    // 轮播选项卡
    $(".banner ul li").mouseenter(function () {
        $(".banner ul li .lis").css("display", "none");
        $(this).children(".banner ul li .lis").css("display", "block");
    })
    $(".banner ul li").mouseleave(function () {
        $(".banner ul li .lis").css("display", "none");
    })

    // 家电选项卡
    let li = $(".tv .title ul li");
    let list = $(".tv ul .right");
    li.mouseenter(function () {
        let i = $(this).index();
        console.log(i);
        list.css("display", "none").eq(i).css("display", "block");
        li.removeClass("active");
        $(this).addClass("active");
    })
    li.triggerHandler("mouseenter");
    console.log(list);


    // 小米闪购
    let big = $(".xm-flashover .box-bd ul");
    let time = 0;
    $(".con").eq(0).click(function () {
        time++;
        if (time == 2) {
            time = 1;
        }
        else {
            big.css("transform", "translate(" + (-720 * time) + "px" + ")");
        }
    })
    // console.log($(".con").eq(0));
    $(".con").eq(1).click(function () {
        time--;
        if (time == -1) {
            time = 0;
        }
        else {
            big.css("transform", "translate(" + (-720 * time) + "px" + ")");
        }
    })

    // 为你推荐
    let zuo = $(".for-you .box1");
    let you = $(".for-you .box2");
    let pic = $(".for-you ul");
    let times = 0;
    zuo.click(function () {
        times++;
        if (times == 3) {
            times = 2;
        }
        pic.css("transform", "translate(" + (-1200 * times) + "px" + ")");
    })
    you.click(function () {
        times--;
        if (times == -1) {
            times = 0;
        }
        pic.css("transform", "translate(" + (-1200 * times) + "px" + ")");
    })

    // 导航选项卡
    let navCart = $(".top-nav ul li a");
    let white = $(".white-box");
    navCart.mouseenter(function () {
        let i = $(this).index();
        console.log(i);
        navCart.removeClass("active");
        $(this).addClass("active");
        white.eq(i).clearQueue().slideDown("slow");
        white.css("zIndeex", 999);
    })

    // 内容轮播图
    let kuang = $(".content .booh .first");
    let yuan = $(".content ul li .pages .ctrile.aa");
    let zuoBtn = $(".content ul li .leftb.aa");
    let youBtn = $(".content ul li .rightb.aa1");
    content(kuang, yuan, zuoBtn, youBtn);
    content($(".content .hoop .h"), $(".content .ctrile.a"), $(".content .leftb.a"), $(".content .rightb.a"));
    content($(".content .hook1 .first2"), $(".content ul li .ctrile.x"), $(".content ul li .leftb.x"), $(".content ul li .rightb.x"));
    content($(".content .hoop1 .first3"), $(".content ul li .ctrile.c"), $(".content ul li .leftb.c"), $(".content ul li .rightb.c"));

    function content(kuang, yuan, zuoBtn, youBtn) {
        let now1 = 0;
        let next1 = 0;
        yuan.eq(0).addClass("active");
        kuang.eq(0).css("left", 0);
        yuan.click(function () {
            let i = $(this).index();
            if (i > now1) {
                next1++;
                yuan.eq(now1).removeClass("active");
                yuan.eq(next1).addClass("active");
                kuang.eq(now1).animate({left: `-290px`});
                kuang.eq(next1).css("left", "290px");
                kuang.eq(next1).animate({left: `0`});

            } else if (i < now1) {
                next1--;
                yuan.eq(now1).removeClass("active");
                yuan.eq(next1).addClass("active");
                kuang.eq(now1).animate({left: `290px`});
                kuang.eq(next1).css("left", "-290px");
                kuang.eq(next1).animate({left: `0`});
            }
            now1 = next1;
        })
        youBtn.click(function () {
            next1++;
            if (next1 >= 2) {
                next1 = 2;
            }
            kuang.eq(now1).animate({left: `-290px`});
            kuang.eq(next1).css("left", "290px");
            kuang.eq(next1).animate({left: `0`});
            yuan.eq(now1).removeClass("active");
            yuan.eq(next1).addClass("active");
            now1 = next1;
        })
        zuoBtn.click(function () {
            next1--;
            if (next1 == -1) {
                next1 = 0;
            }
            kuang.eq(now1).animate({left: `290px`});
            kuang.eq(next1).css("left", "-290px");
            kuang.eq(next1).animate({left: `0`});
            yuan.eq(now1).removeClass("active");
            yuan.eq(next1).addClass("active");
            now1 = next1;
        })
    }

    // 倒计时
    let span = document.querySelectorAll(".time .box");
    setdate();
    setInterval(setdate, 1000);

    function setdate() {
        let arr = fn();
        span.forEach((v, i) => {
            v.innerHTML = arr[i];
        });

    }

    function fn() {
        let arr = [];
        let now = new Date();
        let future = new Date(2018, 9, 1, 12, 12);
        let time = Math.floor((future.getTime() - now.getTime()) / 1000);
        let hour = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) / (60 * 60));
        arr.push(hour);
        let m = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) / 60);
        arr.push(m);
        let s = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) % 60);
        arr.push(s);
        return arr;
    }


    // 返回顶部
    let back = $(".bartop ul li.back");
    back.css("display", "none");
    back.click(function () {
        $('html , body').animate({scrollTop: 0}, 'slow');
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            back.fadeIn();
        } else {
            back.fadeOut();
        }
    })
})