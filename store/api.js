export const state = () => ({
    isLoading: false
})

export const mutations = {
    setLoading(state, isLoading){
        state.isLoading = isLoading
    }
}

export const actions = {
    stopLoading(context){
        context.commit('setLoading', false)
    },
    req(context, {method, endpoint, params}){
        context.commit('setLoading', true)
        const requestUrl = process.env.BASE_URL + endpoint
        switch(method){
            case 'get':
                return this.$axios.get(requestUrl, { params: params })
            case 'post':
                return this.$axios.post(requestUrl, params)
            case 'put':
                return this.$axios.put(requestUrl, params)
            case 'delete':
                return this.$axios.delete(requestUrl, params)
        }
    }
}

export const getters = {
    isLoading: state => state.isLoading
}