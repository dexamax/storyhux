redButton.addEventListener('click', function() {
    // Redirect to the red page
    window.location.href = 'https://dexamax.github.io/okpage/';
    // Store the state of the red button
    sessionStorage.setItem('redButtonClicked', true);
});
