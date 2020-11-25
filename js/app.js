// Initializing Variables
const nav = document.querySelector('nav');
const logo=document.querySelector(".navbar-brand");
// Adding Scroll Effect on Navbar
window.addEventListener('scroll', (e) => {
    nav.classList.toggle("navbar-dark",window.scrollY == 0)
    logo.classList.toggle("green",window.scrollY>0);
    nav.classList.toggle("navbar-light",window.scrollY > 0)
	nav.classList.toggle('sticky', window.scrollY > 0);
});
// For gradual increase in count of countries vsited, blogs and Pictures captured on home page
start_counters();
function start_counters()
{
    
    let amt_countries = 100;
    let amt_blogs = 200;
    let amt_pics = 200;
    let pics = document.querySelector('.pics_number');
    let blogs = document.querySelector('.blogs_number');
    let country = document.querySelector('.countries_number');
    let i1 = 1;
    let i2 = 2;
    let i3 = 3;
    t1 = setInterval(function () {
        pics.innerHTML = ++i1;
        if (i1 == amt_pics) {
            clearTimeout(t1);
        }
    }, 30);
    
    t2 = setInterval(function () {
        blogs.innerHTML = ++i2;
        if (i2 == amt_blogs) {
            clearTimeout(t2);
        }
    }, 30);
    
    t3 = setInterval(function () {
        country.innerHTML = ++i3;
        if (i3 == amt_countries) {
            clearTimeout(t3);
        }
    }, 30);
}

