// window.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');

//     function recursy (element) {
//         element.childNodes.forEach(node => {
//             console.log(node);
//             if (element.childNodes.lenght > 1) {
//                 recursy(node);
//             }
//         })
//     }
//     recursy(form);
// })

document.querySelector('#btn-final').addEventListener('click', () => {
    console.log(document.querySelector('#endoscopic-resection').value);
    let myCheckBox = document.querySelector('#endoscopic-resection');
    
    console.log(myCheckBox.checked);
    console.log(myCheckBox.value);
    // if (myCheckBox.checked) {

    // } else {

    // }

})

let procedure-type = document.querySelector('.procedure-type');

document.querySelector('#btn-final').addEventListener('click', (event) => {
    event.preventDefault();

    let form = document.querySelector('form');
    // console.log(form);
    console.log(form.elements.other.value);
});