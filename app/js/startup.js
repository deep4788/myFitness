/*
 * This module handles starts-up functionality
 */

const { remote } = require('electron')

document.querySelector(".log-workout-button").addEventListener("click", function() {
    //remote.getCurrentWindow().loadURL('https://google.com')
    remote.getCurrentWindow().loadURL("file://" + __dirname + "/html/logpage.html");
});

document.querySelector(".past-graph-button").addEventListener("click", function() {
    //remote.getCurrentWindow().loadURL('https://google.com')
    remote.getCurrentWindow().loadURL("file://" + __dirname + "/html/graphpage.html");
});
