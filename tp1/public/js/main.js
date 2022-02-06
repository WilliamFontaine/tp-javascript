
increment();

let content_h1 = document.querySelector('h1').innerHTML;
logMessage(content_h1);

let content_h2 = document.querySelector('h2#titleNews').innerText;
logMessage(content_h2);

let content_h3 = document.querySelectorAll('h3.title');
logMessage(content_h3);

let button = document.querySelector("input[name='addNewsBtn']");
button.onclick = addArticle;


function addArticle(){

    let text_input = document.querySelector("input[name='titleToAdd']").value;
    try{
        if(text_input === "")
            throw Error('Erreur en mode texte');
    }
    catch (e) {
         e.message
    }

    let news = document.querySelector("#news");

    let newArticle = document.createElement('article');
    let h3 = document.createElement('h3');
    h3.innerHTML = text_input;
    newArticle.append(h3);
    news.append(newArticle);
    return false;
}
