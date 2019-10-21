
export default function({$axios, store, redirect, route}){
    $axios.onRequest(config => {
        config.headers.common['access-token'] = store.getters['user/token']
        config.headers.common['client'] = store.getters['user/client']
        config.headers.common['uid'] = store.getters['user/uid']
        return config
    })

    $axios.onError(error => {
        const code = parseInt(error.response.status)
        if(isNaN(code)){
            alert('通信に失敗しました')
        }else{
            if(code === 401){
                if(route.path !== '/login'){
                    alert('ログインしてください')
                    redirect('/login')
                }
            }
        }
    })
}