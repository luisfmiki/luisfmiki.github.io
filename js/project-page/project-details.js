const expandButtonStates = [false,false,false,false,false,false];

document.addEventListener('DOMContentLoaded', function () {
    const expandableBoxes = document.getElementsByClassName('projectblock');
    const toggleButtons = document.getElementsByClassName('expButton');
    const additionalContents = document.getElementsByClassName('additionalContent');

    if (expandableBoxes && toggleButtons && additionalContents) {
        for (let i = 0; i < toggleButtons.length; i++) {
            
            toggleButtons[i].addEventListener('click', function () {
                expandButtonStates[i] = !expandButtonStates[i];
                expandableBoxes[i].classList.toggle('expanded', expandButtonStates[i]);

                if (expandButtonStates[i]) {
                    additionalContents[i].style.display = 'block';
                    toggleButtons[i].innerHTML = "<i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i>";
                } else {
                    additionalContents[i].style.display = 'none';
                    toggleButtons[i].innerHTML = "<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>";
                }
            }); 
        }
    } else {
      console.error('Error: One or more elements not found. Check your HTML structure.');
    }

  });