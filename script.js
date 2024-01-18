document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM to be fully loaded
    
    // Get the input element
    var inputElement = document.querySelector('input[name="words"]');

    // Get the check button element
    var checkButton = document.querySelector('.check-button');
    
    
    var screen1 = document.querySelector('.screen-1');
    var playVideo = document.querySelector('.screen-2');
    var bgImage = document.querySelector('.bg-img');
    // playVideo.video.muted = true;
    // Add a click event listener to the check button
    checkButton.addEventListener('click', function() {
        // Get the value of the input
        var inputValue = inputElement.value;

        // Get the screen-1 element
        var screen1Element = document.querySelector('.screen-1');
        
        // Check if the length is 7
        if (inputValue.length === 7) {
            // playVideo.video.muted = false;
            screen1.style.display = "none";
            playVideo.style.display = "block";
            bgImage.style.display = "block";
            
            // Create and append the video element
            // var videoElement = document.createElement('video');
            // videoElement.src = 'thala.mp4';
            // videoElement.controls = true;
            // videoElement.style.width = '30%';
            // videoElement.style.height = '30%';
            // videoElement.style.marginTop = '1em';

            // Create and append the text below the video
            // var textElement = document.createElement('div');
            // textElement.innerText = 'Thala for a reason';
            // textElement.style.marginTop = '0.5em';

            // // Append the video and text to the screen-1 element
            // screen1Element.appendChild(videoElement);
            // screen1Element.appendChild(textElement);
        } else {
            // If the length is not 7, create and append the "not Thala" div
            var notThalaElement = document.createElement('div');
            notThalaElement.innerText = 'You are not Thala';
            notThalaElement.style.marginTop = '1em';
            notThalaElement.style.color = 'red';

            // Append the "not Thala" div to the screen-1 element
            screen1Element.appendChild(notThalaElement);
        }
    });
});
