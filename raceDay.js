const registeredEarly = true;
const runnerAge = 19;

let raceNumber = Math.floor(Math.random() * 1000);
//earlyAdults >= 1000
//lateAdults =< 1000
//adultStart = '9:30am' || '11:00am'
//youthStart = '12:30'
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log('You race time begins at 9:30AM and your number is ' + raceNumber);
}