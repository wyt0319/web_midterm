window.onload = function() {
    $(function() {
        $("#confirm").on("click", function() {
            var date = $("#datepicker").datepicker("getDate");
            if(date == null){
                alert("請先選擇日期");
                return;
            }
            $("#courseTable").empty();
            $("#courseTable").append("<tr><th>場次</th> <th>時間</th> <th>主題</th> </tr>");
            var topicCount = topic.length;
            for (var x = 0; x < topicCount; x++) {
                if (x < 2) {
                    $("#courseTable").append(`<tr><td>${x+1}</td><td style="color:grey">${date.toLocaleDateString()} 星期${day_list[date.getDay()]}</td><td style="color:grey">${topic[x]}</td>`);
                } else {
                    $("#courseTable").append(`<tr><td>${x+1}</td><td>${date.toLocaleDateString()} 星期${day_list[date.getDay()]}</td><td>${topic[x]}</td>`);
                }
                $("#courseTable").append("</tr>");
            }
        });
    });
}
