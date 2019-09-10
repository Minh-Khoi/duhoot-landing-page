// MENU
$(".menu .nav form button").click(function () { 
    if ($(".menu .nav form input").css("display") == "none"){
        console.log($(".menu .nav form input").css("display"));
        $(".menu .nav form input").animate({
            width: 200,
        },500);
        $(".menu .nav form input").show(500);
    } 
    else if ($(".menu .nav form input").css("display") == "inline-block"){
        console.log($(".menu .nav form input").css("display"));
        $(".menu .nav form input").animate({
            width: "0",
        },200);
        $(".menu .nav form input").hide(500);
    }
});

// NOI DUNG
$(window).on("resize load", function(e) {
    // auto set height for .purple-theme and img in normal .noidung > div
    $(".noidung .img-wrapper").each(function (index, element) {
        let widthFirst = $(this).find("img").css("width");
        $(this).find(".pupple-theme").css("width", parseFloat(widthFirst));
        let width = parseFloat(widthFirst);
        if(window.innerWidth>767)
            $(this).find(".pupple-theme, img").css("height", 
                                                2/3 * parseFloat(width));
        else  $(this).find(".pupple-theme, img").css("height", 
                                                1/2 * parseFloat(width));
        // $(this).parentsUntil(".noidung").find(".long .pupple-theme, .long .img-wrapper img")
        //                             .css("height", 1/3 * parseFloat(width));
        // console.log(width);
        // console.log($(this).parentsUntil(".noidung").find(".long .pupple-theme, .long .img-wrapper img").css("height"));
    });
    // and in .noidung div.long
    $(".noidung .long .img-wrapper").each(function (index, element) {
        let width = $(this).find(".pupple-theme").css("width");;
        if(window.innerWidth>767)
            $(this).parentsUntil(".noidung")
                        .find(".long .pupple-theme, .long .img-wrapper img")
                                    .css("height", 1/4 * parseFloat(width));
        // else if(window.innerWidth>410)
        //         $(this).parentsUntil(".noidung")
        //                 .find(".long .pupple-theme, .long .img-wrapper img")
        //                             .css("height", 1/2 * parseFloat(width));
        else $(this).find(".pupple-theme, img").css("height", 
                                                1/2 * parseFloat(width));
    });

    // auto set bg-color for every purple theme
    $(".noidung .img-wrapper").each(function (index, element) {
        let borderGround = $(this).css("border-bottom-color");
        let indexOfA = borderGround.indexOf('('), indexOfValue = borderGround.indexOf(')');
        borderGround= borderGround.slice(0,indexOfA) + "a"  
                        + borderGround.slice(indexOfA,indexOfValue) + ", 0.502" 
                        + borderGround.slice(indexOfValue);
        // console.log(borderGround);
        $(this).find(".pupple-theme").css("background-color", borderGround);
    });

    // auto set position for large icon for normal col divs and 
    // .long divs
    $(".noidung .content-wrapper-2 i:not(.fa-star), .noidung .long >div> i")
                        .each(function (index, element) {
        // element == this
        let img_height = $(this).parentsUntil(".noidung")
                            .find(".img-wrapper .pupple-theme")
                            .css("height");
        $(this).css("margin-top", -30);
        // console.log(img_height);
    });

    // auto set position for .show-more 
    $(".noidung .content-wrapper .show-more").each(function (index, element) {
        // element == this
        let img_height = $(this).parentsUntil(".noidung")
                                .find(".img-wrapper .pupple-theme")
                                .css("height");
        $(this).css("top",30/100 * parseFloat(img_height));
    });
    // auto set position for img star icons
    $(".noidung .content-wrapper ul").each(function (index, element) {
        // element == this
        let img_height = $(this).parentsUntil(".noidung")
                                .find(".img-wrapper .pupple-theme")
                                .css("height");
        $(this).css("top",60/100 * parseFloat(img_height));
    });

    // with .long, auto set the img height as 1/3 img width
    $(".noidung .content-wrapper > img").each(function (index, element) {
        // element == this
        let img_height = $(this).parentsUntil(".noidung")
                                .find(".img-wrapper .pupple-theme")
                                .css("height");
        $(this).css("top",60/100 * parseFloat(img_height));
    });

    // with .long, auto set the position of .title-row and .title-row-2
    $(".noidung .long .img-wrapper > img").each(function (index, element) {
        // element == this
        let img_height = $(this).css("height");
        // console.log(img_height);
        if(window.innerWidth>767 || window.innerWidth<635){
            $(this).parentsUntil(".noidung")
                        .find(".long .title-row")
                        .css("top", 80/100 * parseFloat(img_height));
        } else {
            $(this).parentsUntil(".noidung")
                        .find(".long .title-row")
                        .css("top", 86/100 * parseFloat(img_height));
        }
        // console.log(window.innerWidth);
        if(window.innerWidth<620) {
                $(this).parentsUntil(".noidung")
                            .find(".long .title-row")
                            .css({"background-color":"rgba(0,0,0,0.5)",
                                    "left": "17%",
                                    "width": "78.5%"});
        } else if(window.innerWidth<1200) {
            $(this).parentsUntil(".noidung")
                        .find(".long .title-row")
                            .css({"background-color":"transparent",
                                    "left": "13%",
                                    "width": "80%"});
        } else {
            $(this).parentsUntil(".noidung")
                        .find(".long .title-row")
                            .css({"background-color":"transparent",
                                    "left": "11.5%",
                                    "width": "80%"});
        }
        if(window.innerWidth <620){
            $(this).parentsUntil(".noidung").find(".long .title-row-2")
                    .css({"top": 150/100 * parseFloat(img_height)});
        }
        else {
            $(this).parentsUntil(".noidung").find(".long .title-row-2")
                    .css({"top": 107.8/100 * parseFloat(img_height)+10});
        }
    });
    
    //set equal height for every divs inside .row
    // let row_height = 0;
    // // console.log(row_height);
    // $(".noidung .row > div").each(function (index, element) {
    //     // element == this
    //     // console.log( $(this).css("height"));
    //     if( row_height < parseFloat(this.scrollHeight)) {
    //         row_height = parseFloat(this.scrollHeight);
    //         // console.log("row height " +row_height);
    //         // console.log("scroll Height "+ this.scrollHeight);
    //     } 
    // });
    // console.log(row_height);
    // if(window.innerWidth>1200){
    //     $(".noidung .row > div >div").each(function (index, element) {
    //         // element == this
    //         if (parseFloat($(this).css("height")) < row_height)
    //                                 $(this).css("height", row_height);
    //         // console.log($(this).css("height")+ "------" + this.scrollHeight+ " --- " + this.offsetHeight);
    //     });
    // } else $(".noidung .row > div >div").css("height", "fit-content");

    // Set truncate for .content-wrapper-2 p and .content-row p
    $(".noidung .row > div").each(function (index, element) {
        // element == this
        let paragraph = $(this).find(".content-wrapper-2, .content-row")
                                                            .find("p")[0] ;
        let hiddenText = $(this).find(".content-wrapper-2, .content-row")
                                                            .find("span")[0] || "";
        // console.log(hiddenText.innerHTML);
        paragraph.innerHTML = hiddenText.innerHTML || paragraph.innerHTML;
        let wordsArray = paragraph.innerHTML.split(" "), hiddenContent = hiddenText.innerHTML 
                                                                            || paragraph.innerHTML;
        while(paragraph.scrollHeight > paragraph.offsetHeight){
            $(this).find(".content-wrapper-2, .content-row").find("span").remove();
            // hiddenContent = wordsArray[wordsArray.length-1]+ " " + hiddenContent;
            // console.log(hiddenContent);
            wordsArray.pop();
            if($(paragraph).parent().parent().hasClass("content-wrapper-2")){
                    paragraph.innerHTML = wordsArray.join(" ")  + "...";
            }
            if($(paragraph).parent().parent().hasClass("content-row")){
                paragraph.innerHTML = wordsArray.join(" ")  + "<a><b>...read more</b></a>";
            }
        }
        // console.log(hiddenContent);
        $(paragraph).after(" <span style=\"display:none\">" + hiddenContent + "</span>");
    });
    // $(".noidung .row > div").each(function (index, element) {
    //     // element == this
    //     let widthOfPara = $(this).find(".content-row .right").css("width");
    //     let marginOfStar = $(this).find(".title-row-2").css("left");
    //     console.log(widthOfPara+ "---"+ marginOfStar);
    // });
});

//toggle color of start in .content-wrapper
$('.noidung .content-wrapper ')
                    .each(function (index, element) {
    // element == this
    // console.log(typeof element);
    $(this).find(' ul li img[alt=""]').each(function(index2,el){
        $(this).hover(function () {
                // over
                // console.log($(this).parentsUntil(".content-wrapper").eq(1)
                //                             .find('li img[alt=""]'));
                for(let i=0;i<=index2;i++){
                    $(this).parentsUntil(".content-wrapper, .content-wrapper-2").eq(1)
                        .find('li img[alt=""]').eq(i)
                        .attr("src", "./imgs/noidung/start-icon.png");
                }
            }, function () {
                for(let i=0;i<=index2;i++){
                    $(this).parentsUntil(".content-wrapper, .content-wrapper-2").eq(1)
                        .find('li img[alt=""]').eq(i)
                        .attr("src", "./imgs/noidung/star-icon2.png");
                }
            }
        );
    })
});
// $(".noidung .content-wrapper-2").each(function(i,e){
//     $(this).find("ul li i.fa-star").each(function(i2,e2){
//         console.log(i2);
//     })
// });      

//toggle color of stars in .content-wrapper-2
$(".noidung .content-wrapper-2 ")
                    .each(function (index, element) {
    // element == this
    $(this).find("ul li i.fa-star").each(function(index2, el){
        $(this).hover(function (e) {
                // over
                //console.log($(this).parentsUntil(".content-wrapper-2").eq(1).find('i.fa-star').eq(0));
                for(let i=0;i<=(index2);i++){
                    $(this).parentsUntil(".content-wrapper-2")
                                .eq(1).find('i.fa-star')
                                .eq(i).css("color", "rgb(241, 158, 31)");
                }
            }, function () {
                for(let i=0;i<=(index2);i++){
                    $(this).parentsUntil(".content-wrapper-2")
                                .eq(1).find('i.fa-star')
                                .eq(i).css("color", "");
                }
            }
        );
    });
});

// Set hover for content-wraper
$(".noidung .img-wrapper, .noidung .content-wrapper ").hover(function (e) {
        // over
        // console.log($(e.currentTarget).parent());
        $(e.currentTarget).parent().find(".content-wrapper, .pupple-theme")
                                        .css("visibility","visible");
    }, function (e) {
        $(e.currentTarget).parent().find(".content-wrapper, .pupple-theme")
                                        .css("visibility","hidden");
    }
);

// In .long , toggle color of stars in .title-row and title-row-2
$(".noidung .long .title-row, .noidung .long .title-row-2 ")
                    .each(function (index, element) {
    // element == this
    $(this).find("ul li i.fa-star").each(function(index2, el){
        $(this).hover(function (e) {
                // over
                //console.log($(this).parentsUntil(".content-wrapper-2").eq(1).find('i.fa-star').eq(0));
                for(let i=0;i<=(index2);i++){
                    $(this).parentsUntil(".title-row, .title-row-2")
                                .eq(1).find('i.fa-star')
                                .eq(i).css("color", "rgb(241, 158, 31)");
                }
            }, function () {
                for(let i=0;i<=(index2);i++){
                    $(this).parentsUntil(".title-row, .title-row-2")
                                .eq(1).find('i.fa-star')
                                .eq(i).css("color", "");
                }
            }
        );
    });
});


