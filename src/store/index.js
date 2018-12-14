import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import modulA from './module/modelA/index'
import modulB from './module/modelB/index'

const store = new Vuex.Store({
	modules: {
        modulA,
        modulB
	},
	strict: true
})

export default store
