
function serialize (form) {
    let i, j, q = [];

    for (i = 0; i < form.elements.length; i++) {
        
        if (form.elements[i].name === '') {
            continue;
        } 
        switch (form.elements[i].nodeName) {
            case 'INPUT':
                switch (form.elements[i].type) {
                    case 'text':
                        if (form.elements[i].value === "") {
                            break
                        } else {
                            q.push(form.elements[i].name + " " + form.elements[i].value);
                            break;
                        }
                    case 'checkbox':
                    case 'radio':
                        console.log('start');
                        if(form.elements[i].checked === true) {
                            q.push(form.elements[i].name + " " + form.elements[i].value)
                        } 
                        break;
                };
            // case 'TEXTAREA':
            //     q.push(form.elements[i].name + "=" + form.elements[i].value);
            //     break;
            case 'SELECT':
                switch (form.elements[i].type) {
                    case 'select-one':
                        q.push(form.elements[i].name + " " + form.elements[i].value);
                        break;
                    case 'select-multiple':
                            for (j =  0; j <= form.elements[i].options.length; j++) {
                                if (form.elements[i].options[j].selected) {
                                    q.push(form.elements[i].name + " " + form.elements[i].options[j].value);
                                }
                            }
                        break;
                }
        } 
    }
    console.log(q);
} 


document.querySelector('#btn-final').addEventListener('click', (event) => {
    event.preventDefault();
    let frm = document.querySelector('form');
    serialize(frm);
});