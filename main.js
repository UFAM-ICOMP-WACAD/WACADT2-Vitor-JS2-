const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altTexts = ["Alt Text 1", "Alt Text 2", "Alt Text 3", "Alt Text 4", "Alt Text 5"];

/* Looping through images */
for (let i = 0; i < imageFilenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageFilenames[i]);
    newImage.setAttribute('alt', altTexts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function () {
        displayedImage.setAttribute('src', 'images/' + imageFilenames[i]);
        displayedImage.setAttribute('alt', altTexts[i]);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function () {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});