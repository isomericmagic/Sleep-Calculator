function getSleepHours (day) {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 6;
      break;
  }
}

/*function getActualSleepHours(){
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
}*/
//lets do an arrow function w/ an implicit return instead...just because
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let sleepDebt = actualSleepHours - idealSleepHours;
  if (actualSleepHours === idealSleepHours) {
    console.log(`You got ${actualSleepHours} hours...the perfect amount of sleep.`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${sleepDebt} hour(s) more sleep than needed.`);
  } else {
    sleepDebt = Math.abs(sleepDebt);
    console.log(`You need ${sleepDebt} more hour(s) of sleep...you should get some rest.`);
  }
}
calculateSleepDebt();