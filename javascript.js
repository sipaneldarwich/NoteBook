document.addEventListener("DOMContentLoaded", () => {
    const defaultTag = 'work';
    // renderNotes();
    populateIcons();
    populateNavigation();
    filterContent();
    var elements = document.querySelectorAll(".record");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('dblclick', xx, false);
    }

    function xx(){
        
    }
    // function renderNotes() {
    //     rawContent = document.getElementsByClassName('rawContent');
    //     Array.from(rawContent).forEach(element => {
    //         let obj = JSON.parse(x);
    //         let record = `
    //         <div class="record">
    //             <div class="subTitle">${obj.subTitle}</div>
    //             <div class="explain">${obj.explain}</div>
    //             <div class="bash">sudo chown -R sipan .</div>
    //             <div class="tag"><span class="icon">ubuntu</span></div>
    //         </div>
    //         `;
    //     });
    // }

    function populateIcons()
    {
        let tagsMap = [];

        tagsMap.push({'name':'ALL','icon': 'https://cdn-icons-png.flaticon.com/512/5277/5277703.png'});
        tagsMap.push({'name':'work','icon': 'https://img.freepik.com/premium-vector/work-office-icon-logo-vector-design-template_827767-2684.jpg?w=2000'});
        tagsMap.push({'name':'tools','icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/2048px-Circle-icons-tools.svg.png'});
        tagsMap.push({'name':'git','icon': 'https://git-scm.com/favicon.ico'});
        tagsMap.push({'name':'sql','icon': 'https://cdn-icons-png.flaticon.com/512/2772/2772165.png'});
        tagsMap.push({'name':'ubuntu','icon': 'https://assets.ubuntu.com/v1/49a1a858-favicon-32x32.png'});
        tagsMap.push({'name':'vscode','icon': 'https://code.visualstudio.com/favicon.ico'});
        tagsMap.push({'name':'docker','icon': 'https://www.docker.com/wp-content/uploads/2023/04/cropped-Docker-favicon-32x32.png'});
        tagsMap.push({'name':'json','icon': 'https://img.freepik.com/premium-vector/modern-flat-design-json-file-icon-web_599062-6552.jpg?w=2000'});
        tagsMap.push({'name':'nginx','icon': 'https://www.nginx.com/wp-content/uploads/2019/10/favicon-48x48.ico'});
        tagsMap.push({'name':'notFound','icon': 'https://static.thenounproject.com/png/1527904-200.png'});

        const tags = document.getElementsByClassName("icon");
        for (let spanIndex = 0; spanIndex < tags.length; spanIndex++) {
            const tag = tags[spanIndex];
            let index = tagsMap.findIndex(element => element.name === tag.innerHTML)
            tag.setAttribute('order', index);
            icon = tagsMap[index].icon;
            tag.innerHTML = '<img class="tag" src="' + icon + '"> ' + tag.innerHTML;
        }
    }

    function filterContent()
    {
        const filters = [];
        Array.from(document.getElementsByClassName('filter')).forEach((filter) =>{
            filters.push(filter.innerText.trim().toLowerCase());
        });
        // const filterString = filters.sort().join(',');
        // console.log('filterString = ' + filterString);
        Array.from(document.getElementById("content").children).forEach((record) => {
            const tags = [];
            record.classList.add("is-hidden");
            record.querySelectorAll('.tag span').forEach((span) => {
                tags.push(span.innerText.trim().toLowerCase());
            });
            const tagsString = tags.sort().join(',');
            let foundMatch = true;
            filters.forEach((filter) => {
                // console.log(filter);
                // console.log(tagsString);
                if (tagsString.search(filter) < 0){
                    foundMatch = false;
                }
            });
            if(foundMatch === true){
                record.classList.remove("is-hidden"); 
            }

        });
    }

    function navigationLinkClick(){
        this.classList.toggle('filter');
        filterContent();
    }

    function populateNavigation(){
        const contentElements = document.getElementById("content");
        orderedTags = Array.from(contentElements.getElementsByTagName("span")).sort(function (a,b) {return a.getAttribute('order') > b.getAttribute('order') ? true : false;})
  
        let uniqueTagElements = [];
        orderedTags.forEach((tagElement) => {
            if (!uniqueTagElements[tagElement.innerText]) {
                uniqueTagElements[tagElement.innerText] = tagElement.innerHTML;
            }
        });

        const navContainer = document.getElementById("navigation");
        navElement = document.createElement("a");
        navElement.textContent = 'ALL';
        navElement.classList.add('icon');
        navElement.href = ``;
        navContainer.appendChild(navElement);
        for (const tagName in uniqueTagElements) {
            const navElement = document.createElement("a");
            navElement.innerHTML = uniqueTagElements[tagName];
            navElement.classList.add('icon');
            navElement.href = `#}`;
            if(tagName.trim() === defaultTag){
                navElement.classList.add('filter');
            }
            navContainer.appendChild(navElement);
        }

        var elements = document.querySelectorAll("#navigation a");
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', navigationLinkClick, false);
        }
    }

    // CUSTOM FUNCTION TOOLS
    $("#jiraJsonToPHPJson_button").click(function()
    {
        var input = $("#jiraJsonToPHPJson_input").val();
        var edited = input.replaceAll(/\\/g,'').replaceAll('"{"','{"')
        .replaceAll('"[{','[{')
        .replaceAll('}]"','}]')
        .replaceAll(']}"',']}')
        .replaceAll('}"','}')
        .replaceAll('n\#','&#13;&#10;')
        ;
        $("#jiraJsonToPHPJson_output").val(edited);
    });
});