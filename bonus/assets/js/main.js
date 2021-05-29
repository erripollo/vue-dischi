const app = new Vue({
    el: '#app',

    data:{
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        
        albumsData: '',

        genres: [],

        sortBySelect: 'recentPlayed',

        genreSelect: 'all'

    },

    methods:{

        /**
         * ## list music genres
         * creates the list of unique music genres
         */
        getGenres(){
            let genresTemp = [];
            for (let index = 0; index < this.albumsData.length; index++) {
                genresTemp.push(this.albumsData[index].genre)
            }
            this.genres = genresTemp.filter((el, index) => {
                return genresTemp.indexOf(el) === index;
            })
        },

        sortBy(){
            if(this.sortBySelect == 'sortByYear'){
                this.albumsData.sort((a, b) => {
                    return a.year - b.year
                })
            }else  {
                axios
                .get(this.url)
                .then(resp => {
                    console.log(resp.data.response);
                    this.albumsData = resp.data.response
                })
            }
            
        }
       

    },

    mounted(){

        axios
        .get(this.url)
        .then(resp => {
            console.log(resp.data.response);
            this.albumsData = resp.data.response
        })

    },
    
})
