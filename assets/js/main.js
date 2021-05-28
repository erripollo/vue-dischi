const app = new Vue({
    el: '#app',

    data:{
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        
        albumsData: ''
    },

    methods:{

    },

    mounted(){

        axios
        .get(this.url)
        .then(resp => {
            console.log(resp.data.response);
            this.albumsData = resp.data.response
        })

    }
})