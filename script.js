var smallScreenText = document.querySelector('.small-screen-text');
var largeScreenText = document.querySelector('.large-screen-text');

function toggleText() {
    if (smallScreenText.style.display === 'block') {
        smallScreenText.style.display = 'none';
        largeScreenText.style.display = 'block';
    }
}
