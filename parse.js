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
let finalReport = {};
let collectFields = document.querySelectorAll('fieldset');
function getTitle() {
    let arr = [];
    let count = collectFields.length;
    for (let i = 0; i < count; i++) {
        arr.push(collectFields[i].children[0].innerText)
        finalReport[`${collectFields[i].children[0].innerText}`] = 'answer';
    }
}

document.querySelector('#btn-final').addEventListener('click', (event) => {
    event.preventDefault();
    getTitle();
    let collectionCheckedAnswer = {};
    
    let collectCount = collectFields.length;
    for (let i = 0; i < collectCount; i++) {
        let name =  collectFields[i].children[0].innerText
        let count = collectFields[i].elements.length;
        for (let j = 0; j < count; j++) {
            let searchChecked = collectFields[i].elements[j];
            if (searchChecked.checked === true) {
                collectionCheckedAnswer[`${name}`] = searchChecked.value;
            }
        }   
    }
    console.log(collectionCheckedAnswer);
})