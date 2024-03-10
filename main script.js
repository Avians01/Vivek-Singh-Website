document.addEventListener('DOMContentLoaded', function () {
    const abtme = document.getElementById('abtme');
    const namefirst = document.querySelector('.namefirst');
    const desc = document.getElementById('desc');
    const worktitle = document.getElementById('worktitle');

    const parallaxFactor = 0.5; // Adjust the parallax factor
    const fadeInThreshold = 0.5; // Adjust the scroll position threshold for fade-in
    const fadeStartPoint = 400;
    const fadeOutStartPoint = 900;


    window.addEventListener('scroll', function () {
        const translateY = window.scrollY * parallaxFactor;
        abtme.style.transform = `translateY(-${translateY}px)`;
        worktitle.style.transform = `translateY(-${translateY}px)`;

        // Handle fade-out effect for namefirst
        const fadeOutOpacitynamefirst = 1 - window.scrollY / (window.innerHeight * 0.4);
        namefirst.style.opacity = fadeOutOpacitynamefirst > 1 ? 1 : (fadeOutOpacitynamefirst < 0 ? 0 : fadeOutOpacitynamefirst);

        // Handle fade-out effect for abtme
        const fadeOutOpacityAbtme = 3.5 - window.scrollY / (window.innerHeight * 0.2);
        abtme.style.opacity = fadeOutOpacityAbtme > 1 ? 1 : (fadeOutOpacityAbtme < 0 ? 0 : fadeOutOpacityAbtme);

        // Handle fade-out effect for worktitle
        const fadeOutOpacityWorktitle = 3.5 - window.scrollY / (window.innerHeight * 0.2);
        worktitle.style.opacity = fadeOutOpacityWorktitle > 1 ? 1 : (fadeOutOpacityWorktitle < 0 ? 0 : fadeOutOpacityWorktitle);

        // Handle fade-in effect for desc
        const fadeInScrollPosition = window.scrollY;
        const fadeInDesc = (fadeInScrollPosition > fadeStartPoint) ?
        (fadeInScrollPosition - fadeStartPoint) / (window.innerHeight * fadeInThreshold) :
        0;

        // Handle fade-out effect for desc starting at fadeOutStartPoint
        const fadeOutDesc = Math.max(0, 1 - (window.scrollY - fadeOutStartPoint) / (window.innerHeight * 0.5));

    // Combine fade-in and fade-out effects for desc
    desc.style.opacity = fadeInDesc * fadeOutDesc;

    
    // Logging statements moved inside the event listener to ensure accurate values
    console.log('Scroll Position:', window.scrollY);
    console.log('Abtme Opacity:', fadeOutOpacityAbtme);
    console.log('Desc Opacity:', desc.style.opacity);
    console.log('namefirst Opacity:', namefirst.style.opacity);
    });


});



//to make <a> look like buttons
document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('#for-hover li');
    console.log('Selected List Items:', listItems);

    // Highlight the "pt-one" link by default
    listItems.forEach(function (listItem) {
        if (listItem.querySelector('a').getAttribute('href') === '#pt-one') {
            listItem.classList.add('highlighted');
        }
    });

    listItems.forEach(function (listItem) {
        listItem.addEventListener('click', function () {
            // Remove 'highlighted' class from all list items
            listItems.forEach(function (item) {
                item.classList.remove('highlighted');
            });

            // Add 'highlighted' class to the clicked list item
            listItem.classList.add('highlighted');
        });
    });
});


function toggleList(sectionId, event) {
    // Handle your toggleList function if needed
}


function toggleList(id, event) {
    event.preventDefault();

    
    console.log('Toggled: pt-five', id);

    var elements = document.querySelectorAll('.links-to-pts > ul');

    elements.forEach(function (element) {
        if (element.id === id) {
            // Toggle visibility for the clicked element
            element.classList.toggle('hidden');
        } else {
            // Hide other elements
            element.classList.add('hidden');
        }
    });


}


// Display the content of 'pt-one' initially
document.getElementById('pt-one').classList.remove('hidden');



// Open modal function UAE
function openModaluae() {
    document.getElementById("modalOverlayuae").style.display = "flex";
  }

  // Close modal function
  function closeModaluae() {
    document.getElementById("modalOverlayuae").style.display = "none";
  }

// Open modal function wipro
function openModalwipro() {
    document.getElementById("modalOverlaywipro").style.display = "flex";
  }

  // Close modal function
  function closeModalwipro() {
    document.getElementById("modalOverlaywipro").style.display = "none";
  }

  function openModalkpmg() {
    document.getElementById("modalOverlaykpmg").style.display = "flex";
  }

  // Close modal function
  function closeModalkpmg() {
    document.getElementById("modalOverlaykpmg").style.display = "none";
  }

