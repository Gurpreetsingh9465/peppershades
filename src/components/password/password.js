/* eslint-disable */

import Vue from 'vue';
import template from './password.html'
import styles from './password.less'
import socialBar from '../UI/socialBar.vue'

export default Vue.extend({
    template: template,
    components: {
        socialBar
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