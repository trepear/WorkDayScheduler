$(document).ready(function(){

// MOMENT.JS
    // 1) Date/Time displayed at top of page for user
const today = moment().format('MMMM Do YYYY H:mm');
var currentDay = $("#currentDay");
currentDay.text(today);

    // 2) Time right now
const rightNow = moment().format('H');

    // 3) color-coded blocks
        // gray for past
        // red for current
        // green for future
var slotNine = $("#schedule-nine");
var nine = 9;
if (nine < rightNow) {
    slotNine.css("background-color", "lightgrey");
} else if (nine > rightNow) {
    slotNine.css("background-color", "green");
} else {
    slotNine.css("background-color", "red");
}

var slotTen = $("#schedule-ten");
var ten = 10;
if (ten < rightNow) {
    slotTen.css("background-color", "lightgrey");
} else if (ten > rightNow) {
    slotTen.css("background-color", "green");
} else {
    slotTen.css("background-color", "red");
}
    
var slotEleven = $("#schedule-eleven");
var eleven = 11;
if (eleven < rightNow) {
    slotEleven.css("background-color", "lightgrey");
} else if (eleven > rightNow) {
    slotEleven.css("background-color", "green");
} else {
    slotEleven.css("background-color", "red");
}

var slotTwelve = $("#schedule-twelve");
var twelve = 12;
if (twelve < rightNow) {
    slotTwelve.css("background-color", "lightgrey");
} else if (twelve > rightNow) {
    slotTwelve.css("background-color", "green");
} else {
    slotTwelve.css("background-color", "red");
}

var slotThirteen = $("#schedule-thirteen");
var thirteen = 13;
if (thirteen < rightNow) {
    slotThirteen.css("background-color", "lightgrey");
} else if (thirteen > rightNow) {
    slotThirteen.css("background-color", "green");
} else {
    slotThirteen.css("background-color", "red");
}

var slotFourteen = $("#schedule-fourteen");
var fourteen = 14;
if (fourteen < rightNow) {
    slotFourteen.css("background-color", "lightgrey");
} else if (fourteen > rightNow) {
    slotFourteen.css("background-color", "green");
} else {
    slotFourteen.css("background-color", "red");
}

var slotFifteen = $("#schedule-fifteen");
var fifteen = 15;
if (fifteen < rightNow) {
    slotFifteen.css("background-color", "lightgrey");
} else if (fifteen > rightNow) {
    slotFifteen.css("background-color", "green");
} else {
    slotFifteen.css("background-color", "red");
}

var slotSixteen = $("#schedule-sixteen");
var sixteen = 16;
if (sixteen < rightNow) {
    slotSixteen.css("background-color", "lightgrey");
} else if (sixteen > rightNow) {
    slotSixteen.css("background-color", "green");
} else {
    slotSixteen.css("background-color", "red");
}

var slotSeventeen = $("#schedule-seventeen");
var seventeen = 17;
if (seventeen < rightNow) {
    slotSeventeen.css("background-color", "lightgrey");
} else if (seventeen > rightNow) {
    slotSeventeen.css("background-color", "green");
} else {
    slotSeventeen.css("background-color", "red");
}



    // 1) User will be able to type into the textarea
    // 2) User will be able to save their text
    // 3) When user refreshes, they will see their text is saved

// time-slot 9
var savedItem = localStorage.getItem("message-nine");
$("#schedule-nine").val(savedItem);

$("#save-nine").on("click", function() {
console.log("9");
var slotNine = $("#schedule-nine");
slotNine.val();
localStorage.setItem("message-nine", slotNine.val());
});

// time-slot 10
var savedItem = localStorage.getItem("message-ten");
$("#schedule-ten").val(savedItem);

$("#save-ten").on("click", function(){
console.log("10");
var slotTen = $("#schedule-ten");
slotTen.val();
localStorage.setItem("message-ten", slotTen.val());
});

// time-slot 11
var savedItem = localStorage.getItem("message-eleven");
$("#schedule-eleven").val(savedItem);

$("#save-eleven").on("click", function(){
console.log("11");
var slotEleven = $("#schedule-eleven");
slotEleven.val();
localStorage.setItem("message-eleven", slotEleven.val());
});

// time-slot 12
var savedItem = localStorage.getItem("message-twelve");
$("#schedule-twelve").val(savedItem);

$("#save-twelve").on("click", function(){
console.log("12");
var slotTwelve = $("#schedule-twelve");
slotTwelve.val();
localStorage.setItem("message-twelve", slotTwelve.val());
});

// time-slot 13
var savedItem = localStorage.getItem("message-thirteen");
$("#schedule-thirteen").val(savedItem);

$("#save-thirteen").on("click", function(){
console.log("13");
var slotThirteen = $("#schedule-thirteen");
slotThirteen.val();
localStorage.setItem("message-thirteen", slotThirteen.val());
});

// time-slot 14
var savedItem = localStorage.getItem("message-fourteen");
$("#schedule-fourteen").val(savedItem);

$("#save-fourteen").on("click", function(){
console.log("14");
var slotFourteen = $("#schedule-fourteen");
slotFourteen.val();
localStorage.setItem("message-fourteen", slotFourteen.val());
});

// time-slot 15
var savedItem = localStorage.getItem("message-fifteen");
$("#schedule-fifteen").val(savedItem);

$("#save-fifteen").on("click", function(){
console.log("15");
var slotFifteen = $("#schedule-fifteen");
slotFifteen.val();
localStorage.setItem("message-fifteen", slotFifteen.val());
});

// time-slot 16
var savedItem = localStorage.getItem("message-sixteen");
$("#schedule-sixteen").val(savedItem);

$("#save-sixteen").on("click", function(){
console.log("16");
var slotSixteen = $("#schedule-sixteen");
slotSixteen.val();
localStorage.setItem("message-sixteen", slotSixteen.val());
});

// time-slot 17
var savedItem = localStorage.getItem("message-seventeen");
$("#schedule-seventeen").val(savedItem);

$("#save-seventeen").on("click", function(){
console.log("17");
var slotSeventeen = $("#schedule-seventeen");
slotSeventeen.val();
localStorage.setItem("message-seventeen", slotSeventeen.val());
});


});
