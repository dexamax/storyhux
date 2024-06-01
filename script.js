// Array of URLs to cycle through
const urls = [
    'https://www.highcpmgate.com/dgqt83xh?key=822cd750ccf72cbadcce3dfabfced822',
    'https://www.highcpmgate.com/p5kzhvb83t?key=4938b93bc152b4e831ce2a6b0947056f',
    'https://www.highcpmgate.com/k1qa01dg?key=82f0dfee6a90580d71faf0c1342fc4af',
    'https://www.highcpmgate.com/rjmfriwj31?key=878e8955110fa8532827322249592d9d',
    'https://www.highcpmgate.com/u22ym7aks?key=1f197e6738865edd9805752d2c79df3b',
    'https://www.highcpmgate.com/aq1wkg76?key=9b711da8d6b00b77c49cb2f66bb0ffee',
    'https://www.highcpmgate.com/jy7ezuk6wj?key=3b34c5d7269b7537e0ccf13ded98698a',
    'https://www.highcpmgate.com/bfvryik1?key=8f9beedf454d91ebb8e921341e72407f',
    'https://www.highcpmgate.com/us3pwpu2r3?key=35ad809fb68b913d1784ab25574b7740',
    'https://www.highcpmgate.com/nrq2k6v8?key=ecf0b4bc057d378c77ea9027b81bd09a',
    'https://www.highcpmgate.com/r1hn63ay?key=bc41cb366f85e740302eaea16465db6b'
];

// Function to get the next URL from the array
function getNextUrl() {
    let currentIndex = sessionStorage.getItem('currentUrlIndex') || 0;
    currentIndex = parseInt(currentIndex, 10);
    const nextIndex = (currentIndex + 1) % urls.length;
    sessionStorage.setItem('currentUrlIndex', nextIndex);
    return urls[nextIndex];
}

// Set interval to change the URL every 10 minutes
setInterval(() => {
    const nextUrl = getNextUrl();
    console.log(`Next URL: ${nextUrl}`); // For debugging purposes
}, 600000); // 600000 milliseconds = 10 minutes

// Event listener for the red button
redButton.addEventListener('click', function() {
    // Redirect to the next URL
    window.location.href = getNextUrl();
    // Store the state of the red button
    sessionStorage.setItem('redButtonClicked', true);
});
