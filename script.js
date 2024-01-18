document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM to be fully loaded
    
    // Get the input element
    var inputElement = document.querySelector('input[name="words"]');

    // Get the check button element
    var checkButton = document.querySelector('.check-button');
    
    var screen1 = document.querySelector('.screen-1');
    var playVideo = document.querySelector('.screen-2');
    var bgImage = document.querySelector('.bg-img');

    // Add a click event listener to the check button
    checkButton.addEventListener('click', function() {
        // Get the value of the input
        var inputValue = inputElement.value;

        // Get the screen-1 element
        var screen1Element = document.querySelector('.screen-1');
        
        // Check if the length is 7
        if (inputValue.length === 7) {
            screen1.style.display = "none";
            playVideo.style.display = "block";
            bgImage.style.display = "block";
        } else {
            // If the length is not 7, create and append the "not Thala" div
            var notThalaElement = document.createElement('div');
            notThalaElement.innerText = 'You are not Thala for a reason ❌';
            notThalaElement.style.marginTop = '1em';
            notThalaElement.style.color = 'red';

            // Append the "not Thala" div to the screen-1 element
            screen1Element.appendChild(notThalaElement);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.querySelector('input[name="words"]');
    var checkButton = document.querySelector('.check-button');
    var screen1 = document.querySelector('.screen-1');
    var playVideo = document.querySelector('.screen-2');
    var bgImage = document.querySelector('.bg-img');
    var videoElement = document.querySelector('video');

    checkButton.addEventListener('click', function() {
        var inputValue = inputElement.value;
        var screen1Element = document.querySelector('.screen-1');

        if (inputValue.length === 7) {
            screen1.style.display = "none";
            playVideo.style.display = "block";
            bgImage.style.display = "block";

            // Play the video
            videoElement.play();
        } else {
            var notThalaElement = document.createElement('div');
            notThalaElement.innerText = 'You are not Thala';
            notThalaElement.style.marginTop = '1em';
            notThalaElement.style.color = 'red';
            screen1Element.appendChild(notThalaElement);
        }
    });

    // Event listener for video errors
    videoElement.addEventListener('error', function(event) {
        console.error('Video error:', event);
    });
});
