<template>
    <div>
        <transition enter-active-class="ease-out duration-300"
                    enter-class="opacity-0" 
                    enter-to-class="opacity-100" 
                    leave-active-class="ease-in duration-200" 
                    leave-class="opacity-100" 
                    leave-to-class="opacity-0">
            <div class="fixed bottom-0 inset-x-0 px-4 py-24 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center z-10"
                v-show="open">
                <transition
                    enter-active-class="ease-out duration-300"
                    enter-class="opacity-0" 
                    enter-to-class="opacity-100" 
                    leave-active-class="ease-in duration-200" 
                    leave-class="opacity-100" 
                    leave-to-class="opacity-0">
                    <div v-if="open"
                        class="fixed inset-0 transition-opacity" >
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                </transition>

                <transition
                    enter-active-class="ease-out duration-300" 
                    enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" 
                    enter-to-class="opacity-100 translate-y-0 sm:scale-100" 
                    leave-active-class="ease-in duration-200" 
                    leave-class="opacity-100 translate-y-0 sm:scale-100" 
                    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div v-if="open"
                        class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
                        >
                        <component v-bind:is="componentName"></component>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            open: 'modal/open',
            componentName: 'modal/componentName',
        })
    },

    methods: {
        ...mapActions({
           
        }),
    },
};
</script>