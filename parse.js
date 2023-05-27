window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    function recursy (element) {
        element.childNodes.forEach(node => {
            console.log(node);
            if (element.childNodes.lenght > 1) {
                recursy(node);
            }
        })
    }
    recursy(form);
})