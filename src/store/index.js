import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default  new Vuex.Store({
    //state类似于data(数据)
    state: {
        navShow: true
    },
    //getters类似于computed()
    getters: {
        getNavShow(){}
    },
    //mutations类似于methods，一般用于同步
    mutations: {
        changeNavShow(state, isShow) {
            state.navShow = isShow;
        }
    },
    //类似mutations,一般用于异步
    action:{
    }
})
