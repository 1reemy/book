function Book(){

}
function Books(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = 'No';
    this.info = () =>{
        return (this.title + " by " + this.author + ", " + this.pages + " pages. " + "Read yet? " + this.haveRead);
    }    
}

Books.prototype = Object.create(Book.prototype)

let library = [];
let display = document.createElement('div');
let addButton = document.querySelector('#add');
let form = document.querySelector('#book1');
let addition = document.querySelector('#plus');
let popUp = document.querySelector('#modal');
let shelf = document.querySelector('#shelf');
let close = document.querySelector('.close');

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

        divTitle.textContent = readingList.title;
        divAuthor.textContent = readingList.author;
        divPages.textContent = readingList.pages;
        button.textContent = 'X';

        list.style.cssText = "border-style: solid; border-color: grey; background-color: rgb(50,200,100); color: blue; width:100px";
        divTitle.style.cssText = "display:flex; justify-content:center; align-items:center";
        divAuthor.style.cssText = "display:flex; justify-content:center; align-items:center";
        divPages.style.cssText = "display:flex; justify-content:center; align-items:center";
        button.style.cssText = "display:flex; border-radius:100px";


        list.appendChild(divTitle);
        list.appendChild(divAuthor);
        list.appendChild(divPages);
        list.appendChild(button);
        
        library.push(list);
        display.appendChild(list);

        button.addEventListener('click',() =>{            
            display.removeChild(list);
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