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

                    // Update language switch button text
                    updateLanguageButtonText(lang);

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

    // Function to update language switch button text
    function updateLanguageButtonText(lang) {
        const langSwitchBtn = document.getElementById('lang-switch-btn');

        // Check if the button element exists
        if (langSwitchBtn) {
            // Set button text based on the language state
            langSwitchBtn.innerText = lang === 'en' ? '日本語 🇯🇵' : 'English 🇺🇸';
        } else {
            console.error('Error: Language switch button not found. Check your HTML structure.');
        }
    }

    // Event listener for language switch button
    const langSwitchBtn = document.getElementById('lang-switch-btn');
    if (langSwitchBtn) {
        langSwitchBtn.addEventListener('click', function () {
            // Toggle between English and Japanese
            const currentLang = localStorage.getItem('currentLang') || 'en';
            const newLang = currentLang === 'en' ? 'jp' : 'en';

            // Set the new language
            document.documentElement.lang = newLang;

            // Load content for the new language
            setLanguage(newLang);
        });
    } else {
        console.error('Error: Language switch button not found. Check your HTML structure.');
    }

    function iterateJson(data) {
        let page = window.location.pathname;
        if (page === "/") {
            page = "/index.html";
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