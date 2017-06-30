/*
 * This module handles log page functionality
 */

//TODO create a confirmation dialog for when ADD button is clicked, the confirmation will show the added content for
//an exercise
//
document.querySelector('.save-button').addEventListener('click', function() {

    console.log(document.getElementById('exercise-name').value);
    console.log(document.getElementById('weight-lbs').value);
    console.log(document.getElementById('num-reps').value);
    console.log(document.getElementById('num-sets').value);
    console.log(document.getElementById('time-minutes').value);
    console.log(document.getElementById('distance-covered').value);
});
