class Article {
    id;
    title;
    desc;


    constructor(id, title, desc) {
        this.id = "article-"+id;
        this.title = title;
        this.desc = desc;
        this.addArticle();
    }

    get id() {
        return this.id;
    }

    set id(value) {
        this.id = value;
    }

    get title() {
        return this.title;
    }

    set title(value) {
        this.title = value;
    }

    get desc() {
        return this.desc;
    }

    set desc(value) {
        this.desc = value;
    }

    createArticleHtml() {
        let newArticle = document.createElement('article');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let button = document.createElement('button');
        let news = document.querySelector('#news');
        p.innerHTML = this.desc;
        button.innerHTML = "View details";
        h3.innerHTML = this.title;
        newArticle.id = this.id;
        h3.classList.add('title');
        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
        bindButtonArticle(button)
    }

    assertRequiredField() {
        if (this.title === '')
            throw 'Titre vide';

        if (this.title.length < 3)
            throw 'Titre trop court';
    }

    assertArticleUnicity() {
        let h3s = document.querySelectorAll('h3.title');

        for (let i = 0; i < h3s.length; i++) {
            if (h3s[i].innerHTML.toLowerCase().trim() === this.title.toLowerCase().trim()) {
                throw 'Erreur article deja existant';
            }
        }

        return true;
    }

    addArticle() {
        try {
            clearErrors();
            this.assertRequiredField()
            this.assertArticleUnicity()
            this.createArticleHtml();

            return true;
        } catch (e) {
            let form = document.querySelector('#addNewsForm');
            addError(e, form);

            return false;
        }
    }

    static getDescription(id) {
        let articlehtml = document.querySelector("#" + id);
        logMessageWithDate(articlehtml.querySelector("p").innerHTML);
    }
}