import ArticleNews from '/view/components/ArticleNews.js';

Vue.createApp({
    data() {
        return {
            title: 'TP4 JS - Code with William & Léopold :)'
        }
    }
}).mount('h1');

Vue.createApp({
    data() {
        return {
            articles: this.getArticles(),
            message: null,
            titleToAdd: TITLEPLACEHOLDER,
            descriptionToAdd: null,
            art: "article",
            colorVar: null
        }
    },
    computed: {
        getNbArticles(){
            if (this.articles.length > 1)
                this.art = "articles"
            else
                this.art = "article"
            return this.articles.length;
        }
    },
    methods: {
        getArticles() {
            return JSON.parse(ALLNEWSJSON);
        },
        viewDetailArticle(article) {
            console.log(article.desc);
        },
        addArticle: function (event) {
            console.log(this.titleToAdd);
            console.log(this.descriptionToAdd);

            this.message = null;

            if (this.titleToAdd !== '' && this.titleToAdd !== TITLEPLACEHOLDER) {
                this.articles.push({title: this.titleToAdd, description: this.descriptionToAdd});
                this.titleToAdd = TITLEPLACEHOLDER;
                this.descriptionToAdd = null;
                this.colorVar = 'lightgreen'
                this.message = 'Vous avez bien ajouté un article !';

            } else {
                this.colorVar = 'red';
                this.message = 'Le titre et la description doivent être renseignés !';
            }

            event.preventDefault();
        },
        suppArticle(article){
            this.articles.splice(this.articles.indexOf(article),1)
        },
    }
}).mount('#global');


Vue.createApp({})
    .component('ArticleNews', ArticleNews)
    .mount('#news');


