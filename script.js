var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

console.log(moment("8:00 pm", "h:mm a").fromNow());

for (var i = 8; i < 12; i++) {
    testHourAm(i);
}

testHourPm(12);

for (var i = 1; i < 12; i++) {
    testHourPm(i);
}

function testHourAm(hour) {
    if (moment("" + hour + ":00 am", "h:mm a").fromNow().includes("minutes ago")) {
        console.log("the " + hour + " o'clock hour is now");
        console.log("#" + hour + "am-content");
        $("#" + hour + "am-content").addClass("bg-danger text-dark");
        // $(".container").append("<h3>The " + hour + "am hour is now</h3>");
        // console.log(moment("" + hour + ":00 am", "h:mm a").fromNow());
    } else if (moment("" + hour + ":00 am", "h:mm a").fromNow().includes("ago")) {
        console.log(hour + " is earlier");
        $("#" + hour + "am-content").addClass("bg-secondary text-dark");
        // $(".container").append("<h3>" + hour + "am is earlier</h3>");
        // console.log(moment("" + hour + ":00 am", "h:mm a").fromNow());
    } else if (moment("" + hour + ":00 am", "h:mm a").fromNow().includes("in ")) {
        console.log(hour + " is later");
        $("#" + hour + "am-content").addClass("bg-success text-dark");
        // $(".container").append("<h3>" + hour + "am is later</h3>");
        // console.log(moment("" + hour + ":00 am", "h:mm a").fromNow());
    }
}

function testHourPm(hour) {
    if (moment("" + hour + ":00 pm", "h:mm a").fromNow().includes("minutes ago")) {
        console.log("the " + hour + " o'clock hour is now");
        console.log("#" + hour + "pm-content");
        $("#" + hour + "pm-content").addClass("bg-danger text-dark");
        // $(".container").append("<h3>The " + hour + "pm hour is now</h3>");
        // console.log(moment("" + hour + ":00 am", "h:mm a").fromNow());
    } else if (moment("" + hour + ":00 pm", "h:mm a").fromNow().includes("ago")) {
        console.log(hour + " is earlier");
        $("#" + hour + "pm-content").addClass("bg-secondary text-dark");
        // $(".container").append("<h3>" + hour + "pm is earlier</h3>");
        // console.log(moment("" + hour + ":00 pm", "h:mm a").fromNow());
    } else if (moment("" + hour + ":00 pm", "h:mm a").fromNow().includes("in ")) {
        console.log(hour + " is later");
        $("#" + hour + "pm-content").addClass("bg-success text-dark");
        // $(".container").append("<h3>" + hour + "pm is later</h3>");
        // console.log(moment("" + hour + ":00 pm", "h:mm a").fromNow());
    }
}