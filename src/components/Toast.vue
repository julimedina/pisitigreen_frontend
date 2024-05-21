<script setup>
import store from '@/store';
import { useToastStore } from '@/stores/toast'
const store = useToastStore()



</script>

<template>
    <div v-if="store.visible" class="toast-container position-fixed bottom-0 end-0 p-3" :class="store.classes">
        {{ store.message }}
        

    </div>

</template>