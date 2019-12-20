/* eslint-disable */

import Vue from 'vue';
import template from './password.html'
import styles from './password.less'

export default Vue.extend({
    template: template,

    data: function() {
        return {
            state: this.$route.params.state
        }
    },
    methods: {

    },
    created: function() {}
});