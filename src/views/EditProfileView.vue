<template>
    <div class=" mt-4 ms-4 grid grid-cols-2 gap-4">
        <div class="main-left">
            <div class="p-12">
                <h1 class="mb-6">Editar perfil</h1>

                <p class="mb-6 text-gray-500">
                    Llena los campos con los datos correspondientes
                </p>

                
            </div>
        </div>

        <div class="main-right">
            <div class="p-12">
                <form  v-on:submit.prevent="submitForm">
                    <div>
                        <label>Nombre</label><br>
                        <input type="text" v-model="form.name"   class="form-control bg-stone-300  mt-2 py-4 px-6 ">
                    </div>

                    <div>
                        <label>E-mail</label><br>
                        <input type="email" v-model="form.email" class="form-control bg-stone-300  mt-2 py-4 px-6">
                    </div>

                    <div>
                        <label>Avatar</label><br>
                        <input type="file" ref="file">
                    </div>

                    <template v-if="errors.length > 0">
                        <div class="bg-red-300 p-6">
                            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                        </div>
                    </template>

                    <div>
                        <button class="py-4 px-6 btn btn-success">Guardar cambios</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import { useToastStore } from '@/store/toast'
import { useUserStore } from '@/store/user'

export default {
    setup() {
        const toastStore = useToastStore()
        const userStore = useUserStore()

        return {
            toastStore,
            userStore
        }
    },

    data() {
        return {
            form: {
                email: this.userStore.user.email,
                name: this.userStore.user.name
            },
            errors: [],
        }
    },

    methods: {
        submitForm() {
            this.errors = []

            if (this.form.email === '') {
                this.errors.push('Falta tu correo')
            }

            if (this.form.name === '') {
                this.errors.push('Falta tu nombre')
            }

            if (this.errors.length === 0) {
                let formData = new FormData()
                formData.append('avatar', this.$refs.file.files[0])
                formData.append('name', this.form.name)
                formData.append('email', this.form.email)

                axios
                    .post('/api/editprofile/', formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        }
                    })
                    .then(response => {
                        if (response.data.message === 'information updated') {
                            this.toastStore.showToast(5000, 'Los datos fueron cambiados con éxito', 'bg-emerald-500')

                            this.userStore.setUserInfo({
                                id: this.userStore.user.id,
                                name: this.form.name,
                                email: this.form.email,
                                avatar: response.data.user.get_avatar
                            })

                            this.$router.back()
                        } else {
                            this.toastStore.showToast(5000, `${response.data.message}. Por favor intenta otra vez`, 'bg-red-300')
                        }
                    })
                    .catch(error => {
                        console.log('error', error)
                    })
            }
        }
    }
}
</script>