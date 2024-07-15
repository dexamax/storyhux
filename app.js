window.onload = function() {
    var countdownElement = document.getElementById('countdown');
    var okButton = document.getElementById('okButton');
    var countdown = 20;

    var interval = setInterval(function() {
        countdownElement.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            countdownElement.textContent = "නිල් පාට බටන් එක ඔබන්න";
            countdownElement.classList.add('small-text'); // Add class to change font size
            okButton.style.display = 'block';
        }
    }, 1000);
};

var script1 = document.createElement('script');
script1.type = 'text/javascript';
script1.src = '//pl22417849.highrevenuenetwork.com/7f/17/8a/7f178a840bc8e2fc6f855819c052cba9.js';
document.head.appendChild(script1);

var script2 = document.createElement('script');
script2.type = 'text/javascript';
script2.src = '//pl22417838.highrevenuenetwork.com/83/12/f8/8312f879f3b66c46ffa1d1d8cebc1362.js';
document.head.appendChild(script2);
