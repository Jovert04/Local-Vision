// addToCart.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const itemId = form.querySelector('input[name="itemId"]').value;
        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'addToCart.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        };
        xhr.send('itemId=' + encodeURIComponent(itemId));
    });
});