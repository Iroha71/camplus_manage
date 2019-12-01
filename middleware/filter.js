export default({route, redirect, store}) => {
    try{
        const userInfo = JSON.parse(localStorage.getItem('camplus_manage'))
        if(userInfo.user.token){
            store.dispatch('user/setUser', userInfo.user)
            const authInfo = { 'access-token': userInfo.user.token, 'client': userInfo.user.client, 'uid': userInfo.user.uid }
            store.dispatch('user/setAuth', authInfo)
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