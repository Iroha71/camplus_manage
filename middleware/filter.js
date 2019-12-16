export default({route, redirect, store}) => {
    try{
        const userInfo = JSON.parse(localStorage.getItem('camplus_manage'))
        if(userInfo.user.token){
            store.dispatch('user/setUser', userInfo.user)
            const authInfo = { 'access-token': userInfo.user.token, 'client': userInfo.user.client, 'uid': userInfo.user.uid }
            store.dispatch('user/setAuth', authInfo)
        }else{
            checkRequireAuthPage(route, redirect)
        }
    }catch(error){
        checkRequireAuthPage(route, redirect)
    }
}

const checkRequireAuthPage = (route, redirect) => {
    console.log(route.path)
    const ignoreRoute = ['/login', '/login/', '/senario/select', '/senario/select/',  `/player/${route.params.id}`]
    if(ignoreRoute.indexOf(route.path) < 0){
        redirect('/login')
    }
}