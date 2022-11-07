var billAmount = document.querySelector("#billAmount");
var cashGiven = document.querySelector("#cashGiven");
var checkButton = document.querySelector(".checkBtn");
var message = document.querySelector(".message");
var notesOutput = document.querySelectorAll(".no-of-notes");
var show = document.querySelector(".hiddenContainer");
var proceed = document.querySelector(".proceed");
var initialMessage = document.querySelector(".initialMessage");
var footer = document.querySelector(".footer");

var notes = [2000, 500, 100, 20, 10, 5, 1];

show.style.display = "none";

footer.style.position = "absolute";


proceed.addEventListener("click", function showDiv() {
    console.log(typeof Number(billAmount.value))
    if (Number(billAmount.value) > 0) {
        show.style.display = "block";
        initialMessage.style.display = "none";
        proceed.style.display = "none";
        footer.style.position = "static";
    } else {
        initialMessage.innerHTML = ("Invalid Bill Amount")
    }
})


checkButton.addEventListener("click", function validateBillAmt() {
    if (Number(billAmount.value) > 0) {
        if (Number(cashGiven.value) > Number(billAmount.value)) {
            console.log('true')
            var returnChange = Number(cashGiven.value) - Number(billAmount.value);
            message.innerHTML = ("Change to be returned: " + returnChange);
            calculateNotes(returnChange);
        } else {
            if (Number(cashGiven.value) === Number(billAmount.value)) {
                message.innerText = "No need to return change"
                for (var i=0; i<notes.length; i++) {
                    notesOutput[i].innerText = '0';
                }
            } else {
            message.innerHTML = ("Invalid Amount")
                for (var i=0; i<notes.length; i++) {
                    notesOutput[i].innerText = '0';
                }
            }
        }
    } else {
        message.innerText = "Invalid Amount";
        for (var i=0; i<notes.length; i++) {
            notesOutput[i].innerText = '0';
        }
    }
}
);

function calculateNotes(rtnchg) {
    for (var i = 0; i < notes.length; i++) {
        var truncated = Math.trunc(rtnchg / notes[i]);
        rtnchg = rtnchg % notes[i];
        notesOutput[i].innerHTML = truncated;
    }
}

