class Article {
    static idPrefix = 'article-';

    id;
    title;
    description;

    constructor(title, description) {
        let max;

        $("article").each(function () {
            let articlesId = []
            if ($(this)[0].id.match(/\d+/) === null)
                articlesId.push(0);
            else
                articlesId.push($(this)[0].id.match(/\d+/)[0]);
            max = Math.max.apply(null, articlesId)

        });
        if (max === undefined)
            max = 0;
        this.id = max + 1;
        this.title = title;
        this.description = description;
    }

    getTabId(articles) {
        console.log(articles[0].id.match(/\d+/))
    }

    createArticleHtml() {
        let newArticle = $('<article></article>');
        let h3 = $('<h3></h3>').text(this.title).attr('class', 'title');
        let p = $('<p></p>').text(this.description)
        let button = $('<button></button>').text('View detail');
        let news = $('#news');

        newArticle.id = Article.idPrefix + this.id;
        news.append(newArticle.append(h3).append(p).append(button).attr('id', newArticle.id));


        button.click(function () {
            logMessageWithDate($(this).parent().children()[1].innerHTML);
        });
    }

    insertArticleHtml() {
        this.assertRequiredProperty();
        this.assertUnicity();

        this.createArticleHtml();
        return true;
    }

    assertUnicity() {
        let h3s = $('.title');
        for (let i = 0; i < h3s.length; i++) {
            if (h3s[i].innerHTML.toLowerCase().trim() === this.title.toLowerCase().trim())
                throw new DuplicateArticleError();
        }
        return true;
    }

    assertRequiredProperty() {
        if (this.title === '' || this.description === '')
            throw new RequiredPropertyError();
    }
}