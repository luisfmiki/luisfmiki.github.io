document.addEventListener('DOMContentLoaded', function () {

      // Add event listeners for the prev and next buttons
      const prevs = document.getElementsByClassName('prev');
      const nexts = document.getElementsByClassName('next');

    const slideIndexes = [];

    for(let i=0;i<prevs.length;i++) {
      slideIndexes[i] = 1;
    }

    // Function to show slides
    function showSlides(n, i) {
      const slidesContainer = document.getElementsByClassName('slides-container')[i];

      slideIndexes[i] += n;

      if (slideIndexes[i] > 3) {
        slideIndexes[i] = 1;
      }

      if (slideIndexes[i] < 1) {
        slideIndexes[i] = 3;
      }

      slidesContainer.style.transform = `translateX(${-100 * (slideIndexes[i] - 1)}%)`;

    }

    // Call showSlides to display the initial slide
    //showSlides(0, 1);

    for(let i=0;i<prevs.length;i++) {
      prevs[i].addEventListener('click', function () {
        showSlides(-1, i);
      });
    }

    for(let i=0;i<prevs.length;i++) {
      nexts[i].addEventListener('click', function () {
        showSlides(1, i);
      });
    }
    // document.getElementsByClassName('.prev').addEventListener('click', function () {
    //   console.log(document.querySelector('.prev'))
    //   showSlides(-1);
    // });

    // document.getElementsByClassName('.next').addEventListener('click', function () {
    //   console.log(document.querySelector('.next'))
    //   showSlides(1);
    // });
  });