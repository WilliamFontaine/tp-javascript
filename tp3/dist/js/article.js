class Article {
    static idPrefix = 'article-';

    id;
    title;
    description;

    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;

        this.assertRequiredProperty();
    }

    createArticleHtml() {
        let newArticle = $('<article></article>');
        let h3 = $('<h3></h3>').text(this.title);
        let p = $('<p></p>').text(this.description)
        let button = $('<button></button>').text('View detail');
        let news  = $('#news');

        newArticle.id = Article.idPrefix + this.id;
        h3.attr('class', 'title')
        news.append(newArticle.append(h3).append(p).append(button).attr('id', 'article-'+this.id));

        
        button.click(function() {
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
        h3s.each(function(){
            if($(this).html().toLowerCase().trim() === this.title.toLowerCase().trim()){
               throw new DuplicateArticleError();
            }
        });
        return true;
    }

    assertRequiredProperty() {
        if (this.title === '' || this.description === '')
            throw new RequiredPropertyError();
    }
}