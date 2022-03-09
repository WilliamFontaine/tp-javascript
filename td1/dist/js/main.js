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
            errorMessage: null,
            titleToAdd: TITLEPLACEHOLDER,
            descriptionToAdd: null
        }
    },
    computed: {
        getNbArticles(){
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

            this.errorMessage = null;

            if (this.titleToAdd !== '' && this.titleToAdd !== TITLEPLACEHOLDER) {
                this.articles.push({title: this.titleToAdd, description: this.descriptionToAdd});
                this.titleToAdd = TITLEPLACEHOLDER;
                this.descriptionToAdd = null;

            } else
                this.errorMessage = 'Le titre doit être renseigné !';

            event.preventDefault();
        },
    }

    }).mount('#news');

Vue.createApp({
    data() {
        return {
            counter: 1
        }
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            if (this.counter > 0)
                this.counter--;
        }
    }
}).mount('#click');


