// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }


const gifts = ["teddy bear", "drone", "doll", "game", "socks"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    // console.log(`Wrapped ${gifts[i]} and added a bow!`);

  }

  return gifts;
}

wrapGifts(gifts);


const friends = ["Nicole", "Sara", "Mom"];

function writeCards(friends, event) {
    let thankYouCards = []
    for (let i = 0; i < friends.length; i++) {
        thankYouCards.push(`Thanks so much ${friends[i]} for the lovely ${event} gift!`)
    }

    return thankYouCards;
}

writeCards(friends);

// const gifts = ["teddy bear", "drone", "doll"];

function wrapGiftsTwo(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGiftsTwo(gifts);

// let countdown = 10
// while (countdown => 10){
//     console.log(countdown--);
// }

// function countdown10(number) {
//     while (number < 10){
//         console.log(number--);
//     }
// }

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }