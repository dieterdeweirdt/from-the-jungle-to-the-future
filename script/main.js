document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
        document.getElementById('prev').click();
    }
    else if (e.keyCode == '39') {
       // right arrow
        document.getElementById('next').click();
    }

}

document.getElementById('xd').addEventListener('click', function(evt){
    evt.preventDefault();
    window.open('https://xd.adobe.com/view/e1d48496-5122-49d7-66b0-dffca2dd173d-97e5/?fullscreen&hints=off','_blank');
    document.getElementById('next').click();
});