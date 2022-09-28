const form = document.querySelector('#searchGoogle');
const radio = document.querySelector('#redditrad');
const exclude = document.querySelector('#exclude');
const include = document.querySelector('#include');
const searchQuery = document.querySelector('#searchQuery');
const includeYouTube = document.querySelector('#includeYouTube');

form.addEventListener('submit', function submit(e) {
    //window.alert('sup');
    e.preventDefault();
    //let searchString = radio.value + ' ' + searchQuery.value + ' ' + 'inurl:("r/' + include.value + '")' + ' -()' + exclude.value;
    let searchString = radio.value + ' ' + searchQuery.value;
    window.location.href = 'https://www.google.com/search?q=' + searchString;


})