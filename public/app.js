$(document).ready(function() {
    $(".button-collapse").sideNav();

    $('select').material_select();

    //////////////////SWITCH CSS AND TRUE AND FALSE LOGIC////////////////

    $('#mySwitch').prop('checked', true)

    function switches() {
        var switchOff = $('#mySwitch').prop('checked');
        var switchOn = $('#mySwitch').not('checked');
        if (switchOff) {
            console.log(false);
            $("#alarmTime").removeClass("neon-effect");
            $("#alarmLabel").removeClass("neon-effect");
        } else {
            console.log(true);
            $("#alarmTime").addClass("neon-effect");
            $("#alarmLabel").addClass("neon-effect");
        }
    }
    
    $(".lever").on("click", function() {
        switches();
    })
    //////////////////SWITCH CSS AND TRUE AND FALSE LOGIC////////////////

    //////////////////ALARM SOUNDS////////////////

    var alarmTimes = [];
    var sound = new Audio("alarm.wav");
    sound.loop = true;


    //////////////////ALARM SOUNDs////////////////

    //////////////////DATE DISPLAY////////////////

    function date() {
        var getDate = new Date();
        var year = getDate.getFullYear();
        var dayOfMonth = getDate.getDate();
        var months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var month = months[getDate.getMonth()];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var day = days[getDate.getDay()];


        var dateDisplay = day + ", " + month + " " + dayOfMonth + ", " + year;

        console.log(dateDisplay);
        $("#date").html(dateDisplay);
    }
    date();

    //////////////////DATE DISPLAY////////////////


    //////////////////GET TIME ////////////////

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var aOrp = "AM";

    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        aOrp = "PM";
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var time = hours + ":" + minutes + ":" + seconds + " " + aOrp;

    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);
    console.log(time);

    function clock() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var aOrp = "AM";

        if (hours === 0) {
            hours = 12;
        }
        if (hours > 12) {
            hours = hours - 12;
            aOrp = "PM";
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        var time = hours + ":" + minutes + ":" + seconds + " " + aOrp;
        $("#clock").html(time);
        setInterval(clock, 1000);

    }
    clock();
    // console.log(time);

    //////////////////Get TIME////////////////

    //////////////////ADD ALARM ////////////////


    $(document).on('click', '#addAlarm', function(e) {
        var addHour = $("#hour").val();
        var addMinute = $("#minute").val()
        var AM = $('input[id="AM"]:checked').val();
        var PM = $('input[id="PM"]:checked').val();
        var time = addHour + ":" + addMinute + ":" + "00"

        if (AM === "on") {
            time = time + " " + "AM"
        } else {
            time = time + " " + "PM"
        }

        var label = $("#labelInput").val();
        var charity = $("#charityInput").val();
        var repeat = $("#repeatInput").val();
        alarmTimes.push(time);


        var newAlarm = {
            time: time,
            AM: AM,
            PM: PM,
            label: label,
            charity: charity,
            repeat: repeat
        }

        console.log(newAlarm);
        console.log(alarmTimes);
    });


    //////////////////ADD ALARM////////////////

//////////////////SETTING ALARM ////////////////

    // console.log(time);
    for (let i = 0; i < alarmTimes.length; i++) {
        if (time === alarmTimes[i]) {
            alert("ALARM");
        }

    }
    //////////////////SETTING ALARM ////////////////


});