export default({route, redirect, store}) => {
    try{
        const userInfo = JSON.parse(localStorage.getItem('camplus_manage'))
        if(userInfo.auth.token){
            store.dispatch('user/setUser', userInfo.user)
            store.dispatch('user/setAuth', userInfo.auth)
        }else{
            checkRequireAuthPage(route.path, redirect)
        }
    }catch(error){
        console.log('認証情報がありません')
        checkRequireAuthPage(route.path, redirect)
    }
}

const checkRequireAuthPage = (requestRoute, redirect) => {
    const ignoreRoute = ['/login', '/senario/select']
    if(ignoreRoute.indexOf(requestRoute) < 0){
        redirect('/login')
    }
}