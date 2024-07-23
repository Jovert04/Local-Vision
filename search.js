document.getElementById('search').addEventListener('keyup', function(event) {
    if (this.value.trim() === '') {
        document.getElementById('results').innerHTML = '';
        return;
    }

    document.getElementById('results').innerHTML = '<div class="spinner"></div>';

    fetch('https://www.googleapis.com/books/v1/volumes?q=' + encodeURIComponent(this.value))
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';

            if (data.items) {
                data.items.forEach(item => {
                    const resultElement = document.createElement('div');
                    resultElement.classList.add('result');

                    const title = document.createElement('h2');
                    title.textContent = item.volumeInfo.title;

                    const authors = document.createElement('p');
                    authors.textContent = 'Author(s): ' + item.volumeInfo.authors.join(', ');

                    resultElement.appendChild(title);
                    resultElement.appendChild(authors);
                    resultsDiv.appendChild(resultElement);
                });
            } else {
                resultsDiv.textContent = 'No results found';
            }
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
            document.getElementById('results').textContent = 'Error fetching search results';
        });
});