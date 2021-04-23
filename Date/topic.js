var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];
var startDate = new Date();

function setMonthAndDay(startMonth, startDay) {
    startDate.setMonth(startMonth - 1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

var day_list = ['日', '一', '二', '三', '四', '五', '六'];

$(function () {
    $("#datepicker").datepicker();
});