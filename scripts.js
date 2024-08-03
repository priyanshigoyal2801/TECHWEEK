document.getElementById('tryItOutBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('submitBtn').addEventListener('click', function() {
    const files = document.getElementById('uploadInput').files;
    if (files.length > 0) {
        alert('Photos uploaded successfully!');
        document.getElementById('popup').style.display = 'none';
    } else {
        alert('Please upload at least one photo.');
    }
});
