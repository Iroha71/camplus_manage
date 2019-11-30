<template lang="html">
<div class="row root">
    <div class="col-3 form">
        <div class="form-group">
            <label>メールアドレス</label>
            <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
            <label>パスワード</label>
            <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
            <button class="btn btn-large btn-info" @click="login()">ログイン</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login:function(){
            this.postUser().then(res => {
                this.$router.push('/')
            })
        },
        async postUser(){
            const loginInfo = { email: this.email, password: this.password }
            const user = await this.$store.dispatch('api/req', {method: 'post', endpoint: 'auth/sign_in', params: loginInfo})
            this.$store.dispatch('user/setUser', user.data)
            this.$store.dispatch('user/setAuth', user.headers)
        }
    },
    computed: {
        error(){
            if(this.$route.query.authError == 401){
                return 'メールアドレスまたはパスワードが間違っています'
            }else{
                return ''
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.root{
    height: 100%;
    display: flex;
    align-items: center;
    .form{
        margin: auto;
        button{
            display: block;
            margin: auto;
        }
    }
}
</style>