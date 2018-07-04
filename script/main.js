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