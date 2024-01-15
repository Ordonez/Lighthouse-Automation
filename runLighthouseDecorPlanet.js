#!/usr/bin/env node
// This script will run performance and accessibility tests on whatever url is entered. 
//Edit the runlimit to adjust the amount of iterations performed
//The default runLimit is set to 2. Adjust based on preferences


const execSync = require('child_process').execSync;
let url = "https://www.rtacabinetstore.com/"; // Url that runs the tests
let runs = 0;
let runLimit = 2; // the number of performance tests to run
do {
    console.log(`Starting performance test ${runs + 1}`); // Logs this to the console just before it kicks off
    try {
        execSync(`lighthouse ${url} --view`); // Executes this on the command line to run the performance test
    }
    catch(err) {
        console.log(`Performance test ${runs + 1} failed`); // If Lighthouse fails display this error message in console
        break;
    }
    console.log(`Finished running performance test ${runs + 1}`); // Finish message after each completed test run
    runs++;
}
while (runs < runLimit); // Keeps looping around until this condition is false
console.log(`All finished`);