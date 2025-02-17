const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images =['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText ={
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Closeup of a human eye',
    'pic3.jpg': 'Closeup of a human eye',
    'pic4.jpg': 'Closeup of a human eye',
    'pic5.jpg': 'Closeup of a human eye'}

/* Looping through images */
for (image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + image);
    newImage.setAttribute('alt', altText[image]);
    thumbBar.appendChild(newImage);
        
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    currentAppearance = btn.getAttribute('class');
    if (currentAppearance === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {    
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor= 'rgba(255, 255, 255, 0)';

    
}
});

