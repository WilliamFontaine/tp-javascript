function createArticleHtml(title) {
    let newArticle = document.createElement('article');
    let h3 = document.createElement('h3');
    let news = document.querySelector('#news');
    h3.innerHTML = title;
    h3.classList.add('title');
    newArticle.append(h3);
    news.append(newArticle);
}

function assertRequiredField(title) {
    if (title === '')
        throw 'Titre vide';

    if (title.length < 3)
        throw 'Titre trop court';
}

function assertArticleUnicity(title) {
    let h3s = document.querySelectorAll('h3.title');

    for (let i = 0; i < h3s.length; i++) {
        if (h3s[i].innerHTML.toLowerCase().trim() === title.toLowerCase().trim()) {
            throw 'Erreur article deja existant';
        }
    }

    return true;
}

function addArticle(title) {
    try {
        clearErrors();
        assertRequiredField(title)
        assertArticleUnicity(title)
        createArticleHtml(title);

        return true;
    } catch (e) {
        let form = document.querySelector('#addNewsForm');
        addError(e, form);

        return false;
    }
}

function getDescription(article){
    let articlehtml = document.querySelector("#"+article);
    logMessageWithDate(articlehtml.querySelector("p").innerHTML);
}