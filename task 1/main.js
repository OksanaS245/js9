const li2 = document.querySelector('li:nth-child(2)');
const li3 = document.querySelector('li:last-child');

const aboutUs = document.createElement('li');
aboutUs.innerHTML = '<a href="#">About Us</a>';
const ourTeam = document.createElement('li');
ourTeam.innerHTML = '<a href="#">Our Team</a>';

li2.before(aboutUs);
li3.before(ourTeam);