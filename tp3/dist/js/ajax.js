function insertAll() {
    let articles = getArticles();
    if (articles != null) {
        for (let i = 0; i < articles.results.length; i++) {
            try {
                let a = new Article(articles.results[i].title, articles.results[i].full_description);
                a.insertArticleHtml();
            } catch (e) {
                clearErrors();

                if (e instanceof RequiredPropertyError || e instanceof DuplicateArticleError) {
                    addError(e.message);
                } else {
                    addError('Une erreur inconnue est survenue !');
                    console.error(e);
                }
            }
        }
    }
}

function getArticles() {
    let articles;
    $.ajax({
        url: "https://newsdata.io/api/1/news?apikey=pub_4627365ed0e1d1c0536016b89a969e1275ef&language=fr&category=technology",
        method: 'GET',
        async: false
    })
        .done(function (data, textStatus, xhr) {
            console.log('Done');
            //if (xhr.status === 301 || xhr.status === 302)
            if (xhr.status >= 300 && xhr.status < 400)
                console.log('Attention redirection');

            /*
                status 100 => INFO
                status 200 => OK
                status 300 => OK avec REDIRECTION
                status 400 => ERREUR CLIENT
                status 500 => ERREUR SERVEUR
            */
            console.log(xhr.status);
            console.log(textStatus);
            console.log(data); //JSON
            articles = data;
        })
        .fail(function (xhr, textStatus, error) {
            console.log('Fail');
            console.log(xhr.status);
            console.log(textStatus);
            throw new Error(error);
        })
        .always(function () {
            console.log('FINI');
        })
    return articles;
}

