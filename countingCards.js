var count = 0;

// // Ver1
// function cc(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }

//   return count < 1 ? count + " Hold" : count + " Bet";
// }

// Ver2
function cc(card) {
  let myRegex = new RegExp('[JQKA]');

  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || myRegex.test(card)) {
    count--;
  }

  return count < 1 ? `${count} Hold` : `${count} Bet`;
}

console.log("Should return: 0 Hold >", cc(7));