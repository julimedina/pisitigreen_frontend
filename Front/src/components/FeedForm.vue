<template>
  <div class=" row-sm d-flex flex-column mb-3  bg-light ">
                <form  v-on:submit.prevent="submitForm" method="post">
                <div class="p-2 mt-5 d-flex justify-center">
                    <textarea v-model="body" class="form-control  ms-4 me-4"  placeholder="Qué estás pensando?" aria-label="With textarea" ></textarea>
                </div>
                <div class="row">  
            <div class="col ms-4">
                <label>
                <input type="checkbox" v-model="is_private"> Privado
            </label>
            </div>
            
            

            <div id="preview" v-if="url">
                <img :src="url" class="w-[100px] mt-3 rounded-xl" />
            </div>
        </div>

            
                <div class="row p-2">
                    <div class="p-4  flex justify-content-around">
            <label class="inline-block py-4 px-6 btn btn-success">
                <input type="file" ref="file" @change="onFileChange">
                Adjuntar imagen
            </label>

            <button type="button"class="btn btn-primary">Post</button>
        </div>
                   
                  
                </div> 
            </form> 
</div>



</template>

<script>


export default {
    props: {
        user: Object,
        posts: Array
    },

    data() {
        return {
            body: '',
            is_private: false,
            url: null,
        }
    },

    methods: {
        submitForm() {
            console.log('submitForm', this.body)

            let formData = new FormData()
            formData.append('image', this.$refs.file.files[0])
            formData.append('body', this.body)
            formData.append('is_private', this.is_private)

            this.$http
                .post('/api/posts/create/', formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                })
                .then(response => {
                    console.log('data', response.data)

                    this.posts.unshift(response.data)
                    this.body = ''
                    this.is_private = false
                    this.$refs.file.value = null
                    this.url = null

                    if (this.user) {
                        this.user.posts_count += 1
                    }
                })
                .catch(error => {
                    console.log('error', error)
                })
        },
    }
}
</script>