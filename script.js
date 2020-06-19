$(document).ready(function(){

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




// MOMENT.JS
    // 1) Date/Time displayed at top of page for user
    // 2) color-coded blocks
        // gray for past
        // red for current
        // green for future
    // 3) Time displayed on the left of each block




