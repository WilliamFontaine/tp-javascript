export default {
    data() {
        return {
        }
    },
    props: {
        articles: this.getArticles(),
        message: null,
        titleToAdd: TITLEPLACEHOLDER,
        descriptionToAdd: null,
        art: "article",
        colorVar: null
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
    },
    template: `
    <article class="article-news" v-for="article in articles">
        <h3 class="title">{{ article.title }}</h3>
        <button @click="viewDetailArticle(article)">View details</button>
        <button @click="suppArticle(article)">Supprimer</button>
    </article>`
}