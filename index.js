document.addEventListener('DOMContentLoaded', documentOnReady);
function documentOnReady() {
    const myInput = document.getElementById('myInput');
    const myDiv = document.getElementById('myDiv');

    myInput.addEventListener('mouseenter', function() {
        myDiv.style.display = 'block';
    });

    myInput.addEventListener('mouseleave', function() {
        myDiv.style.display = 'none';
    });
}

