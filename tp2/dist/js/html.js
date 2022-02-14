function bindButton(button) {
    button.onclick = function (event) {
        event.preventDefault();
        let champ = document.querySelector('input[name="titleToAdd"]');
        let champ2 = document.querySelector('input[name="descToAdd"]');
        let articlesId = []
        document.querySelectorAll("article").forEach(element => articlesId.push((element.id).match(/\d+/)[0]))
        let max = Math.max.apply(null,articlesId)
        if (new Article(max+1, champ.value, champ2.value))
            champ.value = '';
            champ2.value = '';
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