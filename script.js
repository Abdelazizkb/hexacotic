function sendMail(e) {

    
    var tempParams = {
        name: document.getElementById("firstname").value + " " + document.getElementById("lastname").value,
        email:document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    emailjs.send('service_fgrx6cf', 'template_51vj92x',tempParams,'user_dTGEllSCneagDlQpPqwLh').then(res => {
        console.log(res.status)
    })
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
}

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 100 ) {
    header.classList.add("shadow-md");
  } else {
    header.classList.remove("shadow-md");
  }
};
