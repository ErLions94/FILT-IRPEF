function toggleText() {
    var smallScreenText = document.querySelector('.dino');
    var largeScreenText = document.querySelector('.gino');

    if (smallScreenText.style.display === 'block') {
        smallScreenText.style.display = 'none';
        largeScreenText.style.display = 'block';
    } else {
        smallScreenText.style.display = 'block';
        largeScreenText.style.display = 'none';
    }
}
