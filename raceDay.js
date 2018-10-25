const registeredEarly = false;
const runnerAge = 12;

let raceNumber = Math.floor(Math.random() * 1000);

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log('You race time begins at 9:30AM and your number is ' + raceNumber);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log('Late adults run at 11:00 am.  Your race number is: ' + raceNumber);
} else if (runnerAge < 18) {
  console.log('Youth run at 12:30pm. Your race number is: ' + raceNumber);
} else {
  console.log('Please see the registration desk');
}