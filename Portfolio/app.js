const toggleButton = document.getElementById("toggleButton");
const navlinks = document.getElementById("navLinks");

toggleButton.addEventListener('click', () =>{
    navlinks.classList.toggle('active');
    console.log("hello");
});

