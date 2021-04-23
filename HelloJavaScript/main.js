window.onload = function(){

    var img = new Array(3);
    img[0] = "https://img.candylife.tw/uploads/20200216164624_16.jpg"
    img[1] = "https://imgcdn.cna.com.tw/www/WebPhotos/1024/20201011/1838x1218_590922953265.jpg"
    img[2] = "https://linky.tw/wp-content/uploads/2018/06/57eca2287749c_1024-1000x600.jpg"

$(function () {
    $("input").on("click", function () {
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        $('img').attr('src', img[randomChildNumber]);
    });
});};
