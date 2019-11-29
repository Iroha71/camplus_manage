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
    setAuth(state, {token, client, uid}){
        state.token = token,
        state.client = client,
        state.uid = uid
    }
}

export const actions = {
    setUser(context, user){
        context.commit('setUser', user)
    },
    setAuth(context, {token, client, uid}){
        context.commit('setAuth', {token, client, uid})
    }
}

export const getters = {
    name: state => state.name,
    email: state => state.email,
    token: state => state.token,
    client: state => state.client,
    uid: state => state.uid
}