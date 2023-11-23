// frontend
javascript: (() => {
    identifier='apiTicket=';
    url = 'https://hofe-staging-builds.hotel.check24-test.de/internals/api-host?apiHost=api-ticket&apiTicket=00000';
    ticketNr=location.href.match(/hoapi-\d\d\d\d\d/i)?.[0]?.toLowerCase()?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    document.getElementsByClassName('jira-issue-link')?.[0]?.getAttribute('data-issuekey')?.toLowerCase()?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    document.querySelector('[alt="API host"]')?.parentNode?.childNodes[3]?.innerHTML?.trim()?.replaceAll('-builds.de','')?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    prompt('Enter Ticket Number');
    console.log(ticketNr);
    if(ticketNr==null){return;}
    window.open(url.toLowerCase().replaceAll(identifier+'00000', identifier + ticketNr), '_blank').focus();
})();
// cms
javascript:(() => {
    identifier='hoapi-';
    url = 'https://hoapi-00000-cms-builds.hotel.check24-test.de/';
    ticketNr=location.href.match(/hoapi-\d\d\d\d\d/i)?.[0]?.toLowerCase()?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    document.getElementsByClassName('jira-issue-link')?.[0]?.getAttribute('data-issuekey')?.toLowerCase()?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    document.querySelector('[alt="API host"]')?.parentNode?.childNodes[3]?.innerHTML?.trim()?.replaceAll('-builds.de','')?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    prompt('Enter Ticket Number');
    console.log(ticketNr);
    if(ticketNr==null){return;}
    window.open(url.toLowerCase().replaceAll(identifier+'00000', identifier + ticketNr), '_blank').focus();
})();
// adminer
javascript:(() => {
    identifier='hoapi-';
    url = 'https://hoapi-00000-adminer-builds.hotel.check24-test.de/';
    ticketNr=location.href.match(/hoapi-\d\d\d\d\d/i)?.[0]?.toLowerCase()?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    document.getElementsByClassName('jira-issue-link')?.[0]?.getAttribute('data-issuekey')?.toLowerCase()?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    document.querySelector('[alt="API host"]')?.parentNode?.childNodes[3]?.innerHTML?.trim()?.replaceAll('-builds.de','')?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    prompt('Enter Ticket Number');
    console.log(ticketNr);
    if(ticketNr==null){return;}
    window.open(url.toLowerCase().replaceAll(identifier+'00000', identifier + ticketNr), '_blank').focus();
})();
// jira
javascript:(() => {
    identifier='hoapi-';
    url = 'https://c24-hotel.atlassian.net/browse/hoapi-00000';
    ticketNr=location.href.match(/hoapi-\d\d\d\d\d/i)?.[0]?.toLowerCase()?.replace('hoapi-','')?.replace('HOAPI-','') ??
    document.getElementsByClassName('jira-issue-link')?.[0]?.getAttribute('data-issuekey')?.toLowerCase()?.replace('hoapi-','')?.replace('HOAPI-','') ??
    document.querySelector('[alt="API host"]')?.parentNode?.childNodes[3]?.innerHTML?.trim()?.replaceAll('-builds.de','')?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    prompt('Enter Ticket Number');
    console.log(ticketNr);
    if(ticketNr==null){return;}
    window.open(url.replace(identifier+'00000', identifier + ticketNr), '_blank').focus();
})();
//Pullrequest
javascript:(() => {
    identifier='hoapi-';
    url = 'https://bitbucket.check24.de/projects/HG/repos/hotelapi/pull-requests?state=ALL&reviewer=&filterText=hoapi-00000';
    ticketNr=location.href.match(/hoapi-\d\d\d\d\d/i)?.[0]?.toLowerCase()?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    document.getElementsByClassName('jira-issue-link')?.[0]?.getAttribute('data-issuekey')?.toLowerCase()?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    document.querySelector('[alt="API host"]')?.parentNode?.childNodes[3]?.innerHTML?.trim()?.replaceAll('-builds.de','')?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    prompt('Enter Ticket Number');
    console.log(ticketNr);
    if(ticketNr==null){return;}
    window.open(url.replaceAll(identifier+'00000', identifier + ticketNr), '_blank').focus();
})();
//Kibana
javascript:(() => {
    identifier='hoapi-';
    url = "https://kibana-builds.hotel.check24-test.de/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-24h,to:now))&_a=(columns:!(),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'1435d9b0-700d-11e9-a71f-158d27b3be1d',key:ticket,negate:!f,params:(query:HOAPI-00000),type:phrase),query:(match_phrase:(ticket:HOAPI-00000)))),index:'1435d9b0-700d-11e9-a71f-158d27b3be1d',interval:auto,query:(language:kuery,query:''),sort:!(!('@timestamp',desc)))";
    ticketNr=location.href.match(/hoapi-\d\d\d\d\d/i)?.[0]?.toLowerCase()?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    document.getElementsByClassName('jira-issue-link')?.[0]?.getAttribute('data-issuekey')?.toLowerCase()?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    document.querySelector('[alt="API host"]')?.parentNode?.childNodes[3]?.innerHTML?.trim()?.replaceAll('-builds.de','')?.replaceAll('hoapi-','')?.replaceAll('HOAPI-','') ??
    prompt('Enter Ticket Number');
    console.log(ticketNr);
    if(ticketNr==null){return;}
    window.open(url.toLowerCase().replaceAll(identifier+'00000', identifier + ticketNr), '_blank').focus();
})();

/////////////////////////////
//Open Ticket
javascript:(() => {
    identifier='hoapi-';
    url = 'https://c24-hotel.atlassian.net/browse/hoapi-00000';
    ticketNr=prompt('Enter Ticket Number');
    console.log(ticketNr);
    if(ticketNr==null){return;}
    window.open(url.toLowerCase().replaceAll(identifier+'00000', identifier + ticketNr), '_blank').focus();
})();

//Code Coverage
javascript:(() => {
    identifier='filepath';
    url = 'http://localhost:63342/hotelapi/logs/coverage/FILEPATH.html';
    ticketNr=prompt(`Enter File Path
    auto: remove module/
    auto: add .html at end
    `);
    console.log(ticketNr);
    if(ticketNr==null || ticketNr==''){window.open('http://localhost:63342/hotelapi/logs/coverage/', '_blank').focus();}
    ticketNr=ticketNr.replaceAll('module/','');
    window.open(url.toLowerCase().replaceAll(identifier, ticketNr), '_blank').focus();
})();

//SumStoryPoints
javascript:(() => {
    var y=0;
    var x = document.getElementsByClassName('customfield_10031'); 
    for (var j = 0; j < x.length; j++){
     y=y+Number(x[j].innerHTML);
    }
    confirm(y);
})();
