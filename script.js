// Select Billinput,Tipinput,No.ofPeople and PerPersonTotal

let billTotalInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let numberOfPeopleDiv = document.getElementById("numberOfPeople");
let perPersonTotalDiv = document.getElementById("perPersonTotal");

// Get no.ofpeople input

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// Calculate total bill per person

const calculateBill = () => {
  // Get Billinput value
  let Billinput = Number(billTotalInput.value);

  // Get Tipinput value
  let Tipinput = Number(tipInput.value / 100);

  // Calculate TipAmount
  let TipAmount = Billinput * Tipinput;

  // Total tip amount
  let total = Billinput + TipAmount;

  // PerpersonTotal value
  let perPersonTotal = total / numberOfPeople;

  // Show to user
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

// Increase the People

const increasePeople = () => {
  // increment the people
  numberOfPeople += 1;

  // update to user
  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};

const decreasePeople = () => {
  // condition to stop less than 1
    if (numberOfPeople <=1){
        return
    }
  // decrement the people
  numberOfPeople -= 1;

  // update to user
  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};
