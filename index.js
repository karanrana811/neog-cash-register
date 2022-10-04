var billAmount = document.querySelector("#billAmount");
var cashGiven = document.querySelector("#cashGiven");
var checkButton = document.querySelector(".checkBtn");
var message = document.querySelector(".message");
var notesOutput = document.querySelectorAll(".no-of-notes");
var show = document.querySelector(".hiddenContainer");
var proceed = document.querySelector(".proceed");
var initialMessage = document.querySelector(".initialMessage");

var notes = [2000, 500, 100, 20, 10, 5, 1];

show.style.display = "none";

proceed.addEventListener("click", function showDiv() {
    if (billAmount.value > 0) {
        show.style.display = "block";
        initialMessage.style.display = "none";
    } else {
        initialMessage.innerHTML = ("Invalid Bill Amount 3")
    }
})


checkButton.addEventListener("click", function validateBillAmt() {
    if (billAmount.value > 0) {
        show.style.display = "block";
        console.log(cashGiven.value);
        console.log(billAmount.value);
        if (cashGiven.value >= billAmount.value) {
            var returnChange = cashGiven.value - billAmount.value;
            message.innerHTML = ("Change to be returned: " + returnChange);
            calculateNotes(returnChange);
        } else {
            message.innerHTML = ("Invalid Bill Amount 1")
        }
    } else {
        message.innerHTML = ("Invalid Bill Amount 2");
    }
});

function calculateNotes(rtnchg) {
    for (var i = 0; i < notes.length; i++) {
        var truncated = Math.trunc(rtnchg / notes[i]);
        rtnchg = rtnchg % notes[i];
        notesOutput[i].innerHTML = truncated;
    }
}

