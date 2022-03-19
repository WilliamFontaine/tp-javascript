//iterate();

let h1 = $('h1');
if (h1 === undefined || h1.length === 0) {
    throw new Error('Nombre de H1 trouvés faux !');
}

if (h1.length > 1) {
    let lastH1 = $('h1:last');
    lastH1.remove();
}

logMessageWithDate(h1);
logMessageWithDate(h1.html());
h1.html('TP3 JS');


let titleNews = $('#titleNews');
logMessageWithDate(titleNews.attr('.value'));
logMessageWithDate(titleNews.val());


let titles = $('.title');
titles.each(function () {
    logMessageWithDate($(this).html())
});


let button = $('input[name="addNewsBtn"]');
button.click(function () {
    let title = $('input[name="titleToAdd"]');
    let description = $('textarea[name="descriptionToAdd"]');

    try {
        let article = new Article(title.val(), description.val());
        if (article.insertArticleHtml()) {
            title.value = '';
            description.value = '';
        }
        clearErrors();
    } catch (e) {
        clearErrors();
        if (e instanceof RequiredPropertyError || e instanceof DuplicateArticleError) {
            addError(e.message);
        } else {
            addError('Une erreur inconnue est survenue !');
            console.error(e);
        }
    }
    return false;
});


let buttons = $('article button');
buttons.click(function () {
    console.log($(this).parent().children()[1].innerHTML);
});


let articles = jQuery.parseJSON(ALLNEWSJSON);
articles.forEach(function (element) {
    console.log(element);

    try {
        let a = new Article(element.title, element.description);
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
});

insertAll();

$('#sectionForm').click(function () {
    $('#news').hide();
    $('#addNewsForm').show();
});

$('#sectionNews').click(function () {
    $('#addNewsForm').hide();
    $('#news').show();
});

$('#addNewsForm').hide();
$('#news').show();