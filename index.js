// let traveledRide = 4;

// function scuberGreetingForFeet(){  
//   if (traveledRide <= 400) {
//     return `This one is on me!`;
//   } else if (traveledRide > 2000) {
//     return `I will gladly take your thirty bucks.`;
//   } else if (traveledRide > 2500) {
//     return `No can do.`;
//   }
// }

// function ternaryCheckCity(city){
//   city === 'NYC' ? `Ok, sounds good.` : `No go.`;

//   return 
// }

// function switchOnCharmFromTip(){
//   // Write your code here!
// }



function scuberGreetingForFeet(distance) {
  if (distance > 2500) {
    return 'No can do.';
  } else if (distance > 2000) {
    return 'I will gladly take your thirty bucks.';
  } else if (distance < 400) {
    return 'This one is on me!';
  }
}

function ternaryCheckCity(location) {
  let phrase = location === `NYC` ? 'Ok, sounds good.' : 'No go.';

  return phrase;
}

const switchOnCharmFromTip = tip => {
  switch (tip) {
    case 'generous' :
      return 'Thank you so much.';
      break;
    case 'not as generous' :
      return 'Thank you.';
      break;
    default :
      return 'Bye.';
  }
}