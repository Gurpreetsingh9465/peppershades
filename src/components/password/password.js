/* eslint-disable */

import Vue from 'vue';
import template from './password.html'
import styles from './password.less'
import socialBar from '../UI/socialBar.vue'
import cover from '../UI/cover.vue'

export default Vue.extend({
    template: template,
    components: {
        socialBar,
        cover
    },
    data: function() {
        return {
            old: 'true'
        }
    },
    methods: {
        
    },
    created: function() {}
});