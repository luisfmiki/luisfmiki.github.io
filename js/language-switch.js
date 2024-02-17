// language-switch logic
// ToDo:

document.addEventListener('DOMContentLoaded', function () {
    // Function to set the language
    function setLanguage(lang) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    
                    iterateJson(data);


                    // Save the language preference to localStorage
                    localStorage.setItem('currentLang', lang);
                } else {
                    console.error('Error fetching JSON. Status:', xhr.status);
                }
            }
        };

        xhr.open('GET', `../../locales/${lang}.json`, true);
        xhr.send();
    }


    const langBtns = document.getElementsByClassName('langButton');

    if (langBtns) {
        //console.log(langBtns);
        for(let i=0;i<3;i++) {
            langBtns[i].addEventListener('click', function () {
                // Toggle between English and Japanese
                //console.log(langBtns[i].id);
    
                // Set the new language
                document.documentElement.lang = langBtns[i].id;
    
                // Load content for the new language
                setLanguage(langBtns[i].id);
            });
        }
    } else {
        console.log("error")
    }



    function iterateJson(data) {
        let page = window.location.pathname;
        // if (page === "/") {
        //     page = "/index.html";
        // }
        // else if (page === "/projects/" || page === "/projects") {
        //     page = "/projects/index.html"
        // }
        // else if (page === "/about/" || page === "/about") {
        //     page = "/about/index.html"
        // }
        if (!page.includes("index.html")) {
            page = page + "index.html";
        }
        for (const key in data[page]) {
            const element = document.getElementById(key);
            if (element) {
                element.innerHTML = data[page][key];
            } 
            else {
                const elements = document.getElementsByClassName(key);
                if (!isNaN(key)) {
                    let i = 0;
                    for (const secondkey in data[page][key]) {
                        elements[i].innerHTML = data[page][key][secondkey];
                        i++;
                    }
                } 
                else {
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].innerHTML = data[page][key];
                    }
                }
            }
        }
    }


    

    // Initial setup - load content for the stored language preference
    const storedLang = localStorage.getItem('currentLang') || 'en'; // default lang == en
    document.documentElement.lang = storedLang;
    setLanguage(storedLang);

});