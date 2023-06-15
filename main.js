//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string_match,array_check){
    array_check.forEach(item=>{ //Goes through each item in the array
        if (string_match.match(item)){ //first checks total matches
            console.log(`Matched case sensitive: ${item}`)        }
        else if(string_match.toLowerCase().match(item.toLowerCase())){
            console.log(`Matched case insensitive: ${item}`)} //Then those that aren't case sensitive

        else//and if not found
           {console.log(`Did not match ${item}`) }
        })
    
}
findWords(dog_string,dog_names)

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    let new_arr=arr.slice()//Copy the original array
    for (i=0; i<new_arr.length; i+=2){ //Go through valid even indexes
        new_arr.splice(i,1,"even index") //And splice them out for even index
    }
    // console.log(`Given arr == ${arr}`)
    // console.log(`Output arr == ${new_arr}`)
    return new_arr
}
console.log(given_arr)
console.log(replaceEvens(given_arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//HERE IS THE CODEWARS
//Says reccomended to start easy so we'll do 2 8's and 2 7's here. 

//Even or odd
//Actually did this on in c++. 
function evenOrOdd(number) {
    if (number%2==0){return 'Even'} return 'Odd' //Realisitcally odd usually should be on it's own line, at least, but it's a bit funny to do a one liner while things are simple
}

//Total pressure calculation
solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    return (((givenMass1/molarMass1+givenMass2/molarMass2)*(temp+273.15)*0.082)/volume)
}
  //Just some maths

  //7 kyu now
  //number of people in a bus (takes in an array of value pairs [x,y], where x is people getting on bus, and y off (where we track how many are on at end))
var number = function(busStops){
    let count=0
    busStops.forEach(stop => count=count+stop[0]-stop[1])
    return count
}


//This ones for a zombie game, though the solution is mathmatic rather than game
//Will you survive the zombie onslaught?

function zombieShootout (zombies, range, ammo) {
    if((range*2)>=zombies && ammo>=zombies){
      return `You shot all ${zombies} zombies.`
    }
    else if(zombies>=(range*2) && (range*2)<=ammo){
      return `You shot ${range*2} zombies before being eaten: overwhelmed.`
    }
    else
      return `You shot ${ammo} zombies before being eaten: ran out of ammo.`
}
//Basically too little ammo or range when compared to zombies and ya die, different deaths have different returns
//In the 'game solution' the zombies move 2 range by the time you shoot down 1 zombie with 1 bullet (each 'turn')