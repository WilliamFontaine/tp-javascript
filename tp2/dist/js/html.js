function bindButton(button) {
    button.onclick = function (event) {
        event.preventDefault();
        let champ = document.querySelector('input[name="titleToAdd"]');

        if (new Article(7, champ.value, "desc article 7"))
            champ.value = '';
        return false;
    }
}

function clearErrors() {
    let errors = document.querySelectorAll('.error');

    if (errors) {
        while (errors.length > 0 && errors[0].parentNode != null) {
            errors[0].parentNode.removeChild(errors[0]);
        }
    }
}

function addError(message, parent) {
    let error = document.createElement('p');
    error.innerHTML = message;
    error.style.color = ROUGE;
    error.classList.add('error');

    parent.prepend(error);
}

function bindButtonArticle(button) {
    button.onclick = function (event) {
        event.preventDefault();
        Article.getDescription(button.parentNode.id);

        return false;
    }
}

function jsonToArticle(name) {
    let articles = JSON.parse(name);
    articles.forEach(element => new Article(element.id, element.title, element.desc));
    bindButtonArticle(but);
}