const state = {
    demo2:{}
}

const getters = {
    demo2: state => state.demo2
}

const mutations = {
    setDemo2(state,data){
        state.demo2 = data
    }
}

const actions = {
    getDemo2({commit},val){
        commit("setDemo2",val)
    }    
}

export default {
    state,
    getters,
    mutations,
    actions
}