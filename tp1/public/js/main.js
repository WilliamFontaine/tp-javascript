increment();

let content_h1 = document.querySelector('h1').innerHTML;
logMessage(content_h1);

let content_h2 = document.querySelector('h2#titleNews').innerText;
logMessage(content_h2);

let content_h3 = document.querySelectorAll('h3.title');
logMessage(content_h3);

let button = document.querySelector("input[name='addNewsBtn']");
button.onclick = addArticle;

logMessageDate(' un message avec la date et l\'heure devant');

function addArticle(){
    let text_input = document.querySelector("input[name='titleToAdd']").value;
    let news = document.querySelector("#news");
    let form = document.querySelector("#addNewsForm");
    let newArticle = document.createElement('article');
    let h3 = document.createElement('h3');
    let test = document.querySelector('.erreur');
    let err;
    if(typeof(test) != 'undefined' && test != null){
        err = true;
    }
    try{
        if(text_input === "") {
            throw 'Erreur en mode texte';
        }
    }
    catch (e) {
        logMessage(e);
        if(err){
            test.innerHTML = "Veuillez inserer du texte dans le champ svp !";
            return false;
        }else{
            h3.classList.add('erreur');
            h3.innerHTML = "Veuillez inserer du texte dans le champ svp !";
            h3.style.color = "red";
            form.prepend(h3);
        }
        return false;
    }
    let existant = document.querySelectorAll('h3.title');
    for (let i = 0; i < existant.length; i++){
        if (existant[i].innerHTML === text_input){
            if(err){
                test.innerHTML = "Un article possede deja ce titre !";
                return false;
            }else{
                h3.classList.add('erreur');
                h3.innerHTML = "Un article possede deja ce titre !";
                h3.style.color = "red";
                form.prepend(h3);
            }
            return false;
        }
    }
    if(err){
        test.remove();
    }
    h3.innerHTML = text_input;
    h3.classList.add('title');
    newArticle.append(h3);
    news.append(newArticle);
    return false;
}



