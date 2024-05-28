<script setup>
// Importa la tienda de toasts desde el archivo de la tienda ubicado en '@/store/toast'
import { useToastStore } from '@/store/toast'

// Obtiene la instancia de la tienda de toasts para su uso en este componente
const store = useToastStore()
</script>

<template>
    <!-- Renderiza el componente solo si el estado 'isVisible' de la tienda es verdadero -->
    <div v-if="store.isVisible" 
         class="transition ease-in-out delay-500 duration-500  toast-container position-fixed bottom-0 end-0 p-3" 
         :class="store.classes">
        <!-- Muestra el mensaje de toast almacenado en el estado 'message' de la tienda -->
        {{ store.message }}
    </div>
</template>
