// another way is to get all elements by classname
    // and iterating thru them

// nab all the accordions
let accord = document.getElementsByClassName('accordion');
var i;

// lets iterate through the accordions
for (i = 0; i < accord.length; i++) {
    // add event listener to each iteration
    accord[i].addEventListener('click', function() {
        // to the whole classlist toggle active
            // based on the hover
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if(panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

    });
}