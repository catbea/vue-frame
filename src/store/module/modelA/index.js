const state = {
    demo1: ""
}

const getters = {
    demo1: state => state.demo1
}

const mutations = {
    setDemo1(state,data) {
        state.demo1 = data
    }
}

const actions = {
    getDemo1({commit},val) {
        commit("setDemo1",val)
    }    
}

export default {
    state,
    getters,
    mutations,
    actions
}