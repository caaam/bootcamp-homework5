var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

console.log(moment("8:00 pm", "h:mm a").fromNow());

var storedEntry = "";

for (var i = 8; i < 12; i++) {
    testHourAm(i);
    storedEntry = localStorage.getItem("" + i + "am");
    if (storedEntry != "") {
        $("#" + i + "am-content").text(storedEntry);
    }
}

testHourPm(12);

for (var i = 1; i < 12; i++) {
    testHourPm(i);
}

function store8am() {
    localStorage.setItem("8am", $("#8am -content").val());
}

function store9am() {
    localStorage.setItem("9am", $("#9am -content").val());
}

function store10am() {
    localStorage.setItem("10am", $("#10am -content").val());
}

function store11am() {
    localStorage.setItem("11am", $("#11am -content").val());
}

function store12pm() {
    localStorage.setItem("12pm", $("#12pm -content").val());
}

function store1pm() {
    localStorage.setItem("1pm", $("#1pm -content").val());
}

function store2pm() {
    localStorage.setItem("2pm", $("#2pm -content").val());
}

function store3pm() {
    localStorage.setItem("3pm", $("#3pm -content").val());
}

function store4pm() {
    localStorage.setItem("4pm", $("#4pm -content").val());
}

function store5pm() {
    localStorage.setItem("5pm", $("#5pm -content").val());
}

function store6pm() {
    localStorage.setItem("6pm", $("#6pm -content").val());
}

function store7pm() {
    localStorage.setItem("7pm", $("#7pm -content").val());
}

function store8pm() {
    localStorage.setItem("8pm", $("#8pm -content").val());
}

function store9pm() {
    localStorage.setItem("9pm", $("#9pm -content").val());
}

function store10pm() {
    localStorage.setItem("10pm", $("#10pm -content").val());
}

function store11pm() {
    localStorage.setItem("11pm", $("#11pm -content").val());
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

