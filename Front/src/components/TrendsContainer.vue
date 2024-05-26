<template>
    <div>
    <div class=" row-sm d-flex flex-column mb-3 container-publicacion bg-light"  v-for="trend in trends"
                v-bind:key="trend.id">
        <div class="text-center mt-5">
            <strong>
                <h1>
                Trends
            </h1>
            </strong>
            

        </div>
    
        <div class="row">
           
            <div class="col mt-5 ms-4 mb-0">
                <strong><p>#{{ trend.hashtag }}</p></strong>
                
                    <p >
                        >{{ trend.occurences }}  Posts
                    </p>
                 

            </div>
           

            <div class="col mt-5 mb-5 ms-5">
                
                <RouterLink  :to="{name: 'trendview', params: {id: trend.hashtag}}" class="btn btn-outline-primary">Explorar</RouterLink>

            </div>

         

        </div> 
</div>
</div>


</template>

<script>


export default {
    name: 'TrendsContainer',

    data() {
        return {
            trends: []
        }
    },

    mounted() {
        this.getTrends()
    },

    methods: {
        getTrends() {
            this.$http
                .get('/api/posts/trends/')
                .then(response => {
                    console.log(response.data)

                    this.trends = response.data
                })
                .catch(error => {
                    console.log('Error: ', error)
                })
        }
    }
}
</script>