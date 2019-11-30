export default({route, redirect, store}) => {
    try{
        const userInfo = JSON.parse(localStorage.getItem('camplus_manage'))
        if(userInfo.user.token){
            store.dispatch('user/setUser', userInfo.user)
            store.dispatch('user/setAuth', userInfo.user)
        }else{
            checkRequireAuthPage(route.path, redirect)
        }
    }catch(error){
        console.log('認証情報がありません' + error)
        checkRequireAuthPage(route.path, redirect)
    }
}

const checkRequireAuthPage = (requestRoute, redirect) => {
    const ignoreRoute = ['/login', '/senario/select']
    if(ignoreRoute.indexOf(requestRoute) < 0){
        redirect('/login')
    }
}