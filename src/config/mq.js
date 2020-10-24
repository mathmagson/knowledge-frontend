// Media Query: desenvolvido para responsividade do Menu
import Vue from 'vue'
import VueMq from 'vue-mq'

// Padrões de tamanho de pixels definidos pelo Bootstrap 4
Vue.use(VueMq, {
    breakpoints: {
        xs: 576,
        sm: 768,
        md: 960,
        lg: 1140,
        xl: Infinity
    }
})