<template lang="html">
<div class="row root">
    <div class="col-lg-3 col-sm-12 form">
        <p class="text-danger" v-if="error">{{ error }}</p>
        <p class="text-danger" v-if="authError">{{ authError }}</p>
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
            password: '',
            error: ''
        }
    },
    methods: {
        login:function(){
            this.postUser().then(res => {
                this.$router.push('/')
            })
            setTimeout(() => { this.$nuxt.$loading.finish() }, 500);
        },
        async postUser(){
            this.$nuxt.$loading.start()
            const loginInfo = { email: this.email, password: this.password }
            const user = await this.$store.dispatch('api/req', {method: 'post', endpoint: 'auth/sign_in', params: loginInfo})
            this.$store.dispatch('user/setUser', user.data)
            this.$store.dispatch('user/setAuth', user.headers)
        }
    },
    computed: {
        authError(){
            if(this.$route.query.authError == 401){
                return 'メールアドレスまたはパスワードが間違っています'
            }else if(this.$route.query.authError === 500){
                return '通信に失敗しました'
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