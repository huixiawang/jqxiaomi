$(function () {
    // 购物车
    $("nav .cart-mini").mouseenter(function () {
        $("nav .cart-mini .box").clearQueue().slideDown("slow");

    })
    $("nav .cart-mini").mouseleave(function () {
        $("nav .cart-mini .box").clearQueue().slideUp("slow");
    })

    // 轮播图
    let img=$(".banner .picture img");
    let btn=$(".banner ol li");
    let left=$(".direction-left");
    let right=$(".direction-right");
    let now=0;
    img.first().css("z-index",2);
    btn.eq(0).addClass("active");
    let t=setInterval(move,1000);
    function move(){
        now++;
        if(now==img.length){
            now=0;
        }
        img.css("z-index",1).eq(now).css("z-index",2);
        btn.removeClass("active").eq(now).addClass("active");
    }
    function movel(){
        now--;
        if(now<0){
            now=img.length-1;
        }
        img.css("z-index",1).eq(now).css("z-index",2);
        btn.removeClass("active").eq(now).addClass("active");
    }
    left.click(function(){
        movel();
    })
    right.click(function () {
        move();
    })
    let banner=$(".banner .container");
    banner.mouseenter(function(){
        clearInterval(t);
    })
    banner.mouseleave(function(){
        t=setInterval(move,1000);
    })


    // 轮播选项卡
    $(".banner ul li").mouseenter(function () {
        $(".banner ul li .lis").css("display","none");
        $(this).children(".banner ul li .lis").css("display","block");
    })
    $(".banner ul li").mouseleave(function () {
        $(".banner ul li .lis").css("display","none");
    })

    // 家电选项卡
    let li=$(".tv .title ul li");
    let list=$(".tv ul .right");
    li.mouseenter(function(){
        let i=$(this).index();
        console.log(i);
        list.css("display","none").eq(i).css("display","block");
        li.removeClass("active");
        $(this).addClass("active");
    })
    li.triggerHandler("mouseenter");
    console.log(list);

    // let parent=$(".tv .title ul a");
    // let son=$(".tv ul .right")
    // console.log(parent,son);
    // parent.mouseenter(function () {
    //     let i=$(this).index();
    //     son.css("display","none").eq(i).css("display","block");
    //     parent.removeClass("active");
    //     $(this).addClass("active");
    // })
    // parent.triggerHandler("mouseenter");


    // 小米闪购
    let big=$(".xm-flashover .box-bd ul");
    let time=0;
    $(".con").eq(0).click(function(){
        time++;
        if(time==2){
            time=1;
        }
        else{
            big.css("transform","translate("+(-720*time)+"px"+")");
        }
    })
    $(".con").eq(1).click(function(){
        time--;
        if(time==-1){
            time=0;
        }
        else{
            big.css("transform","translate("+(-720*time)+"px"+")");
        }
    })

    // 为你推荐
    let zuo=$(".for-you .box1");
    let you=$(".for-you .box2");
    let pic=$(".for-you ul");
    let times=0;
    zuo.click(function(){
        times++;
        if(times==3){
            times=2;
        }
        pic.css("transform","translate("+(-1200*times)+"px"+")");
    })
    you.click(function(){
        times--;
        if(times==-1){
            times=0;
        }
        pic.css("transform","translate("+(-1200*times)+"px"+")");
    })
})