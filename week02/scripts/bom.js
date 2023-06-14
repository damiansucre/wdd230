const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', () =>{
    if (input.value != ''){
    const myBook = input.value;
    input.value = '';

    const listBook = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listBook.appendChild(listText);
    listText.textContent = myBook;
    listBook.appendChild(listBtn);
    listBtn.textContent ='X';
    list.appendChild(listBook);

    listBtn.addEventListener('click', () =>{
        list.removeChild(listBook);
        input.focus();
    })

    input.focus();
}
} )