class Books{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
}

let library = [];
let display = document.createElement('div');
let addButton = document.querySelector('#add');
let form = document.querySelector('#book1');
let addition = document.querySelector('#plus');
let popUp = document.querySelector('#modal');
let shelf = document.querySelector('#shelf');
let close = document.querySelector('.close');

Books.prototype.read = false;

function modal(){
    addition.addEventListener("click",()=>{
        popUp.style.display = "block";
    })
    close.addEventListener("click",()=>{
        popUp.style.display = "none";
    })
    window.onclick = function(event) {
        if (event.target == popUp) {
          popUp.style.display = "none";
        }
      }
}

function addToLibrary(){
    addButton.addEventListener("click",() => {
        let title = document.forms["book1"]["title"].value;
        let author = document.forms["book1"]["author"].value;
        let pages = document.forms["book1"]["pages"].value; 
        
        const readingList = new Books(title,author,pages);
        
        const divTitle = document.createElement('p');
        const divAuthor = document.createElement('p');
        const divPages = document.createElement('p');
        const button = document.createElement('button');
        const list = document.createElement('div');
        const readButton = document.createElement('button');

        divTitle.textContent = readingList.title;
        divAuthor.textContent = readingList.author;
        divPages.textContent = readingList.pages;
        button.textContent = 'Delete';
        readButton.textContent = 'Not Read';

        list.style.cssText = "display: flex; align-items:center; flex-direction:column; border-style: solid; border-color: grey; background-color: rgb(50,200,100); color: blue; width:100px; margin-bottom: 20px";
        divTitle.style.cssText = "display:flex; justify-content:center; align-items:center";
        divAuthor.style.cssText = "display:flex; justify-content:center; align-items:center";
        divPages.style.cssText = "display:flex; justify-content:center; align-items:center";
        button.style.cssText = "width:80px; color: blue; background-color: red";
        readButton.style.cssText = "width:80px; color: blue; background-color: red";

        list.appendChild(divTitle);
        list.appendChild(divAuthor);
        list.appendChild(divPages);
        list.appendChild(readButton);
        list.appendChild(button);
        
        library.push(list);
        display.appendChild(list);

        button.addEventListener('click',() =>{            
            display.removeChild(list);
        }) 
        readButton.addEventListener('click',()=>{                                    
            if(readingList.read = !readingList.read){
                readButton.textContent = 'Read';
                readButton.style.cssText = "width:80px; color: blue; background-color: yellow";
            }
            else{
                readButton.textContent = 'Not Read';
                readButton.style.cssText = "width:80px; color: blue; background-color: red";
            }
        })   
        book1.reset();                        
    });
}

function selection(){
    for(let i = 0; i <= library.length; i++){       
        shelf.appendChild(display);
    }    
}
modal();
addToLibrary();
selection();