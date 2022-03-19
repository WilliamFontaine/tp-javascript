export default {
    data() {
        return {
        }
    },
    props:{
        id: String,
        title: String,
        desc: String,
    },   
    computed: {
    },
    methods: {
        viewDetailArticle() {
            console.log(this.desc);
        },
        supp(){
            this.$emit('remove');
        }
    },
    template: `
    <article class="article-news">
        <h3 class="title">{{ title }}</h3>
        <button @click="viewDetailArticle">View details</button>
        <button @click="supp">Supprimer</button>
    </article>`
}