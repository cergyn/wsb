// we should wait for the document object to be loaded completely to attach 
document.addEventListener('readystatechange', (event) => {
    if (document.readyState == 'complete') {
        setEvents();
    }
});

function setEvents() {
    console.log('Document is ready');
}

