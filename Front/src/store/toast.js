// Importa la función defineStore desde la biblioteca 'pinia'
import { defineStore } from 'pinia'

// Define y exporta una tienda de toasts utilizando defineStore
export const useToastStore = defineStore({
    // Identificador único de la tienda
    id: 'toast',

    // Define el estado inicial de la tienda
    state: () => ({
        // Tiempo de duración del toast en milisegundos
        ms: 0,
        // Mensaje a mostrar en el toast
        message: '',
        // Clases CSS adicionales para el toast
        classes: '',
        // Booleano que indica si el toast está visible o no
        isVisible: false,
    }),

    // Define las acciones que pueden modificar el estado de la tienda
    actions: {
        // Acción para mostrar un toast con un mensaje específico, una duración y clases CSS opcionales
        showToast(ms, message, classes) {
            // Convierte el tiempo de duración del toast a un entero
            this.ms = parseInt(ms)
            // Asigna el mensaje del toast
            this.message = message
            // Asigna las clases CSS para el toast
            this.classes = classes
            // Establece el estado de visibilidad del toast como verdadero
            this.isVisible = true

            // Configura un temporizador para agregar una clase CSS que muestra el toast
            setTimeout(() => {
                this.classes += ' -translate-y-28 '
            }, 10)

            // Configura un temporizador para eliminar la clase CSS que muestra el toast después de que haya pasado el tiempo especificado
            setTimeout(() => {
                this.classes = this.classes.replace(' -translate-y-28', '')
            }, this.ms - 500)

            // Configura un temporizador para ocultar el toast después de que haya pasado el tiempo especificado
            setTimeout(() => {
                this.isVisible = false
            }, this.ms)
        }
    }
})
