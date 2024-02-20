let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 25;
if (age > 18 && registeredEarly ){
  raceNumber += 1000
}else{
  
}

if(age > 18 && registeredEarly  ){
  console.log(`runner ${raceNumber},your race start at 9:30`)
}else if( age > 18 && !registeredEarly){
  console.log(`runner ${raceNumber},your race start at 11:30`)

}else if(age< 18){
  console.log(`runner ${raceNumber},your race start at 12:30`)
}else{
  console.log(`runner ${raceNumber},see the registration desk`)
}
