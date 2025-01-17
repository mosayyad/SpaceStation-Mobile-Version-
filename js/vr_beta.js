var contents = document.querySelectorAll('.tab-content');
var tabs = document.querySelectorAll('.tab');

function showTabContent(tabId) {
    contents.forEach(function(content) {
        content.classList.remove('active');
    });
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    document.querySelector('.tab[onclick="showTabContent(\'' + tabId + '\')"]').classList.add('active');
}

// Show the first tab by default
showTabContent('vr-info');