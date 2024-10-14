#!/usr/bin/env node

//This script runs multiple urls at the same time to perform performance and accessibility testing
//Utilizes the testURL file which will contain a list of all the urls that will be ran


const execSync = require('child_process').execSync;
let urls = require('./testUrls.json'); // The file where your list of urls lives
let runs = 0
for (const url of urls) {
    console.log(`Running performance test ${runs + 1}`); // Logs this to the console just before it kicks off
    try {
        execSync(`lighthouse ${url} --view`); // Executes this on the command line to run the performance test
    }
    catch(err) {
        console.log(`Performance test ${runs + 1} failed`); // If Lighthouse happens to fail it'll log this to the console and log the error message
        break;
    }
    console.log(`Finished running performance test ${runs + 1}`); // Logs this to the console just after it finishes running each performance test
    runs++;
}
console.log(`All finished`);