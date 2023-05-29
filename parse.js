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

function getTitle() {
    let arr = [];
    let count = document.querySelectorAll('fieldset').length;
    for (let i = 0; i < count; i++) {
        arr.push(document.querySelectorAll('fieldset')[i].children[0].innerText)
        // console.log(document.querySelectorAll('fieldset')[i].children[0].innerText)
    }
    console.log(arr);
}

document.querySelector('#btn-final').addEventListener('click', (event) => {
    event.preventDefault();

    let collectionCheckedAnswer = [];
    let collectFieldts = document.querySelectorAll('fieldset');
    let collectCount = document.querySelectorAll('fieldset').length;
    for (let i = 0; i < collectCount; i++) {
        
        let count = collectFieldts[i].elements.length;
        for (let j = 0; j < count; j++) {
            let searchChecked = collectFieldts[i].elements[j];
            if (searchChecked.checked === true) {
                collectionCheckedAnswer.push(searchChecked.value);
            }
        }   
    }
    console.log(collectionCheckedAnswer);
    getTitle();
})