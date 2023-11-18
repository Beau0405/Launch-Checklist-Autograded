// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let targetPlanet=document.getElementById("missionTarget")
    targetPlanet.innerHTML=`<h2>Mission Destination</h2>
    
                
                <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
    
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    if (isNaN(testInput) ===true) {
        return "Not a Number";
    }
    if (isNaN(testInput) === false) {
        return "Is a Number";
    }

    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let fuelReady = true;
    let cargoReady = true;

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("Please fill all the fields!");
    }else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
        alert("Make sure to enter valid name information for pilot/copilot");
    }else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Make sure to enter a valid number input for fuel level and cargo level");

    }else {
        list.style.visibility = 'visible';
        pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }
    

    if(fuelLevel < 10000) {
       fuelReady = false;
       fuelStatus.innerHTML = 'Fuel level too low for launch!';
    }else{
        fuelStatus.innerHTML ='Fuel level high enough for launch!';
    }

     if(cargoLevel > 10000 ){
        cargoReady = false;
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch!';
     }else{
        cargoStatus.innerHTML = 'Cargo mass low enough for launch!';
     }
    
    if (cargoReady === true && fuelReady ===true){
        launchStatus.innerHTML = 'Shuttle is Ready for Launch!';
        launchStatus.style.color = 'green';
    }else{
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch!';
        launchStatus.style.color ='red';
    }
    }
    
 
 
 async function myFetch() {
     let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        return response.json()
     });
       return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random() * planets.length);
    return planets[planetIndex];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;