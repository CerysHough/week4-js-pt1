let spendingMoney = "They're not coming :(";
let buddy = "Anonymous";

function myFunction() {
buddy = prompt("Hey Buddy! What's your name?");

let rsvp = prompt("Would you like to come to the shops?");

if (rsvp.toLowerCase() === "yes") {
    spendingMoney = prompt("Yay! What is your budget?");
    if (spendingMoney > 30) {
            alert('Whoop! Big Spender!!');
        } 
       
        else if (spendingMoney <= 30) {
            alert('Better be careful!!');
        } 
        else if (typeof spendingMoney === 'string' ) {
            spendingMoney = prompt("Please enter a number!");
        }
        
        
} else if (rsvp.toLowerCase() === "maybe") {
    alert("Make up your mind!");
} else {
    alert("That's a shame :(");
}


    document.getElementById("rsvpResponse").innerHTML = rsvp;
    document.getElementById("budget").innerHTML = spendingMoney;
    let el = document.getElementsByClassName('buddyName');
    for (var i=0;i<el.length; i++) {
        el[i].innerHTML = buddy;
    }
  }