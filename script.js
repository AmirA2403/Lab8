fetch('https://picsum.photos/600/400')
    .then(response => {
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = `<img src="${response.url}" alt="Beautiful Nature Image" />`;
    })
    .catch(error => {
        console.error('Error fetching image:', error);
        document.getElementById('imageContainer').textContent = 'Error loading image.';
    });

document.getElementById('changeImageButton').addEventListener('click', () => {
    fetch('https://picsum.photos/600/400')
        .then(response => {
            const imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = `<img src="${response.url}" alt="Beautiful Nature Image" />`;
        })
        .catch(error => {
            console.error('Error fetching image:', error);
            document.getElementById('imageContainer').textContent = 'Error loading image.';
        });
});
