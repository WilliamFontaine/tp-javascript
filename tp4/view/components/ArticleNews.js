export default {
    data() {
        return {
            //article: this.getArticleByIndex()
        }
    },
    props:{
        articles: Array,
        index: String
    },   
    computed: {
    },
    methods: {
        getArticles() {
            return JSON.parse(ALLNEWSJSON);
        },
        getArticleByIndex(index){
            return this.articles[index];
        },
        viewDetailArticle() {
            console.log(this.articles);
        }
    },
    template: `
    <article class="article-news">
        <h3 class="title">{{ index }}</h3>
        <button @click="viewDetailArticle()">View details</button>
        <button @click="$emit('test')">Supprimer</button>
    </article>`
}