const header = document.querySelector('header');
const nav = document.querySelector('nav');

const footer = document.createElement('footer');
const footerNav = nav.cloneNode(true);
footerNav.classList.add('footer__nav');
header.after(footer);
footer.append(footerNav);

