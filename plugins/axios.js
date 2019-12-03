
export default function({$axios, store, redirect, route}){
    $axios.onRequest(config => {
        config.headers.common['access-token'] = store.getters['user/token']
        config.headers.common['client'] = store.getters['user/client']
        config.headers.common['uid'] = store.getters['user/uid']
        return config
    })

    $axios.onError(error => {
        try{
            const code = parseInt(error.response.status)
            $nuxt.error({
                statusCode: code,
                message: 'エラー'
            })
            // 
            // if(isNaN(code)){
            //     alert('通信に失敗しました')
            // }else{
            //     if(code === 401){
            //         if(route.path !== '/login'){
            //             alert('ログインしてください')
            //             redirect('/login')
            //         }else{
            //             redirect('/login?authError=401')
            //         }
            //     }else{
            //         if(code === 500 && route.path === '/login'){
            //             redirect('/login?authError=500')
            //         }
            //     }
            // }
        }catch(err){
            $nuxt.error({
                statusCode: 500,
                message: 'エラー'
            })
        }
    })
}