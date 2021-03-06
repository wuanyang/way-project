import Vuex from 'vuex'
import Vue from 'vue'
import reserve from '../pages/reserve/module.js'
import city from '../pages/city/module.js'
import home from '../pages/home/module.js'
Vue.use(Vuex);

export default new Vuex.Store ({
	modules: {
		reserve: reserve,
		city: city,
		home: home
	}
})
