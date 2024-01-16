const projectpages = ["/projects/digital-refractometer/index.html", "/projects/uaikey/index.html/", 
"/projects/meulab/index.html", "/projects/glass-door/index.html", "/projects/voltage-source/index.html",
"/projects/microscopy-analogies/index.html"
]

const willAppear = {"digital-refractometer": true, "uaikey": true, "meulab": true, "glass-door": true, 
"voltage-source": true, "microscopy-analogies": true
}


function writePlaceholder() {
  if (document.documentElement.lang === 'en') {
    document.getElementsByName('searchInput')[0].placeholder = "Search acronyms, techonolgies...";
  } else {
    document.getElementsByName('searchInput')[0].placeholder = "ワード、テクノロジーなどを検索";
  }
}

writePlaceholder();

// Function to be executed when the lang attribute changes
function handleLangChange(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
      // Perform the action when lang attribute changes
      writePlaceholder();

      // Call your function or perform actions here
      // For example, you can trigger a function:
      // myFunction();
    }
  }
}

// Create a MutationObserver instance
const langObserver = new MutationObserver(handleLangChange);

// Specify the target node and the type of mutations to observe
const config = { attributes: true, attributeOldValue: true, attributeFilter: ['lang'] };

// Start observing the target node for changes in lang attribute
langObserver.observe(document.documentElement, config);

document.addEventListener('DOMContentLoaded', function () {
    // Get the input and all searchable elements
    const searchInput = document.getElementById('searchInput');
    const searchableElements = document.querySelectorAll('.searchable');

    // Add an event listener to the search input
    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();
      if (document.documentElement.lang === "jp") {
        
        const xhrjp = new XMLHttpRequest();
        xhrjp.onreadystatechange = function () {
            if (xhrjp.readyState === XMLHttpRequest.DONE) {
                if (xhrjp.status === 200) {
                  const data = JSON.parse(xhrjp.responseText);
                  for(const project in willAppear) {
                    const key = "/projects/".concat(project, "/index.html");
                    if (findStringInObject(searchTerm, data[key])) {
                      willAppear[project] = true;
                    } else {
                      willAppear[project] = false;
                    }
                  }
                  
                } else {
                    console.error('Error fetching JSON. Status:', xhrjp.status);
                }
            }
            searchableElements.forEach(function (element) {
              const hastoAppear = willAppear[element.id];
      
              // Check if the search term is empty or the element's text content contains the search term
              if (searchTerm === '' || hastoAppear) {
                // Display the element
                element.style.display = 'block';
              } else {
                // Hide the element
                element.style.display = 'none';
              }
            });
        };

          xhrjp.open('GET', `../../locales/jp.json`, true);
          xhrjp.send();
      }
      
      const xhren = new XMLHttpRequest();
        xhren.onreadystatechange = function () {
            if (xhren.readyState === XMLHttpRequest.DONE) {
                if (xhren.status === 200) {
                  const data = JSON.parse(xhren.responseText);
                  for(const project in willAppear) {
                    const key = "/projects/".concat(project, "/index.html");
                    if (findStringInObject(searchTerm, data[key])) {
                      willAppear[project] = true;
                    } else {
                      willAppear[project] = false;
                    }
                  }
                  
                } else {
                    console.error('Error fetching JSON. Status:', xhren.status);
                }
            }
            searchableElements.forEach(function (element) {
              const hastoAppear = willAppear[element.id];
      
              // Check if the search term is empty or the element's text content contains the search term
              if (searchTerm === '' || hastoAppear) {
                // Display the element
                element.style.display = 'block';
              } else {
                // Hide the element
                element.style.display = 'none';
              }
            });
        };

          xhren.open('GET', `../../locales/en.json`, true);
          xhren.send();

     
      
    });

    function findStringInObject(searchString, jsonObject) {
      // Build a regular expression dynamically based on the entered characters
      //const patternRegex = new RegExp(searchString.split('').join('.*'));
      const escapedWord = searchString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const patternRegex = new RegExp(escapedWord);
      //Iterate through each key-value pair in the object
      const hasWord = false;
      

      for (const key in jsonObject) {

          const value = jsonObject[key].toLowerCase();
          if (jsonObject["name"] === "デジタル屈折メーター") {
            console.log(value);
            console.log(patternRegex.test(value));
          }

          // Check if the search string is present in the current value
          if (patternRegex.test(value)) {
            return true;
          }
        }
      }
      // for (const key in jsonObject) {
      //   if (Object.prototype.hasOwnProperty.call(jsonObject, key)) {
      //     const value = jsonObject[key];
      //     let currentIndex = 0; // Index to track the current position in the value
    
      //     // Iterate through each character in the entered string
      //     for (const char of searchString) {
      //       const charIndex = value.indexOf(char, currentIndex);
    
      //       // Check if the character is found in the correct order
      //       if (charIndex !== -1 && charIndex >= currentIndex) {
      //         currentIndex = charIndex + 1; // Move the current index to the next position
      //       } else {
      //         // If the character is not found in the correct order, break the loop
      //         break;
      //       }
      //     }
    
      //     // Check if the entered string characters were found in order in the value
      //     return currentIndex === searchString.length;
      //   }
      // }
    }
);