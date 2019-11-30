export const state = () => ({
    name: '',
    email: '',
    token: '',
    client: '',
    uid: ''
})

export const mutations = {
    setUser(state, user){
        state.name = user.name
        state.email = user.email
    },
    setAuth(state, auth){
        state.token = auth['access-token'],
        state.client = auth['client'],
        state.uid = auth['uid']
    }
}

export const actions = {
    setUser(context, user){
        context.commit('setUser', user)
    },
    setAuth(context, auth){
        context.commit('setAuth', auth)
    }
}

export const getters = {
    name: state => state.name,
    email: state => state.email,
    token: state => state.token,
    client: state => state.client,
    uid: state => state.uid
}