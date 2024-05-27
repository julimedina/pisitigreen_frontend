
<template>
    <div class="ms-4 mt-4 grid grid-cols-4 gap-4">
        <div class="main-center col-span-3 space-y-4">
            <div class="">
                <FeedForm  v-bind:user="null"   v-bind:posts="posts"/>
            </div>

            <div 
                class="p-4 bg-white border border-gray-200 rounded-lg   "
                v-for="post in posts"
                v-bind:key="post.id"
            >
                <FeedItem v-bind:post="post" v-on:deletePost="deletePost" />
            </div>
        </div>

        <!--<div class="main-right col-span-1 space-y-4">
            <PersonasQueQuizaConozcas />

            <TrendsContainer />
        </div>
        --> 
    </div>
</template>    

<script>
import FeedItem from '../components/FeedItem.vue'
import FeedForm from '../components/FeedForm.vue'
import PersonasQueQuizaConozcas from '../components/PersonasQueQuizaConozcas.vue'
import TrendsContainer from '@/components/TrendsContainer.vue'

export default {
    name: 'FeedView',

    components: {
        PersonasQueQuizaConozcas,
        TrendsContainer,
        FeedItem,
        FeedForm
    },

    data() {
        return {
            posts: [],
            body: '',
        }
    },

    mounted() {
        this.getFeed()
    },

    methods: {
        getFeed() {
            this.$http
                .get('/api/posts/')
                .then(response => {
                    console.log('data', response.data)

                    this.posts = response.data
                })
                .catch(error => {
                    console.log('error', error)
                })
        },

        deletePost(id) {
            this.posts = this.posts.filter(post => post.id !== id)
        },
    }
}
</script>