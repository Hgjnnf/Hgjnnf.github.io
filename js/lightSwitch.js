var checkbox = document.getElementById('light-switch');
var theme = document.getElementsByTagName('link')[0];
var text = document.getElementById('switch-text');
var logo = document.getElementById('logo');

checkbox.addEventListener('change', function() {
    if (theme.getAttribute('href') == './css/light.css') {
        theme.setAttribute('href', './css/dark.css');
        text.innerHTML = 'Switch to Light';
        logo.setAttribute('src', './media/lightLogo.png');

    } else {
        theme.setAttribute('href', './css/light.css');
        text.innerHTML = 'Switch to Dark';
        logo.setAttribute('src', './media/darkLogo.png');
    }
});
