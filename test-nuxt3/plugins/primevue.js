import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Card from 'primevue/card';


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.component('Dropdown', Dropdown)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('Card', Card)
})