document.addEventListener("DOMContentLoaded", () => {
    sortRecords();
    populateNavigation();
    

    function filterContent()
    {
        sortRecords();
        clickedValue = this.innerHTML;
        const recordElements = document.getElementById("content").children;
        const records = Array.from(recordElements);
        records.forEach((record) => {
            record.classList.add("is-hidden");
            const spans = record.querySelectorAll('.tag span');
            spans.forEach((span) => {
                if(span.innerHTML === clickedValue){
                    record.classList.remove("is-hidden");
                }
            });
        });
    }


    function sortRecords(){
        const parentElement = document.getElementById("content");
        const childElements = Array.from(parentElement.children);
    
        childElements.sort((a, b) => {
        if (a.innerText < b.innerText) {
            return -1;
        } else if (a.innerText > b.innerText) {
            return 1;
        } else {
            return 0;
        }
        });
    
        childElements.forEach((element) => {
        parentElement.appendChild(element);
        });

    }

    function populateNavigation(){
        const x = document.getElementById("content");
        const tagElements = Array.from(x.getElementsByTagName("span"));
        
        const uniqueTagElements = {};
        tagElements.forEach((tagElement) => {
            if (!uniqueTagElements[tagElement.innerHTML]) {
                uniqueTagElements[tagElement.innerHTML] = tagElement;
            }
        });
        
        const navContainer = document.getElementById("navigation");

        navElement = document.createElement("a");
        navElement.textContent = 'ALL';
        navElement.href = ``;
        navContainer.appendChild(navElement);

        for (const tagName in uniqueTagElements) {
            const navElement = document.createElement("a");
            navElement.textContent = tagName;
            navElement.href = `#${uniqueTagElements[tagName].id}`;
            navContainer.appendChild(navElement);
        }



        var elements = document.querySelectorAll("#navigation a");

        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', filterContent, false);
        }
    }

});
    