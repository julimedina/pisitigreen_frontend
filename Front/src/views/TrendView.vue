<template>
    <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4">
        <div class="main-center col-span-3 space-y-4">
            <div 
                class="p-4 bg-white border border-gray-200 rounded-lg"
            >
                <h2 class="text-xl">Trend: #{{ $route.params.id }}</h2>
            </div>
            
            <div 
                class="p-4 bg-white border border-gray-200 rounded-lg"
                v-for="post in posts"
                v-bind:key="post.id"
            >
                <FeedItem v-bind:post="post" />
            </div>
        </div>

        <div class="main-right col-span-1 space-y-4">
            <PersonasQueQuizaConozcas />

            <TrendsContainer />
        </div>
    </div>
</template>

<script>

import PersonasQueQuizaConozcas from '../components/PersonasQueQuizaConozcas.vue'
import FeedItem from '../components/FeedItem.vue'
import TrendsContainer from '@/components/TrendsContainer.vue';

export default {
    name: 'TrendView',

    components: {
        PersonasQueQuizaConozcas,
        TrendsContainer,
        FeedItem
    },

    data() {
        return {
            posts: [],
        }
    },

    mounted() {
        this.getFeed()
    },

    watch: { 
        '$route.params.id': {
            handler: function() {
                this.getFeed()
            },
            deep: true,
            immediate: true
        }
    },

    methods: {
        getFeed() {
            this.$http
                .get(`/api/posts/?trend=${this.$route.params.id}`)
                .then(response => {
                    console.log('data', response.data)

                    this.posts = response.data
                })
                .catch(error => {
                    console.log('error', error)
                })
        },
    }
}
</script>