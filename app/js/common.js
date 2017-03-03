/*
 * This module handles common functionality
 * across other pages: log and graph
 */

const { remote } = require('electron')

document.querySelector(".home-page-button").addEventListener("click", function() {
    remote.getCurrentWindow().loadURL("file://" + __dirname + "/../index.html");
});
