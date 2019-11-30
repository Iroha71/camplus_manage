<template lang="html">
<b-navbar type="dark" variant="primary">
    <b-navbar-brand>
        <img src="/images/camplus.png" />
    </b-navbar-brand>
    <b-collapse is-nav>
        <b-navbar-nav>
            <b-nav-item>参加者の傾向</b-nav-item>
            <b-nav-item>おすすめ学科提案結果</b-nav-item>
        </b-navbar-nav>
        <button class="btn btn-danger"><img src="/images/logout.png">ログアウト</button>
    </b-collapse>
</b-navbar>
</template>

<style lang="scss" scoped>
img{
    height: 10vh;
}
.nav-link{
    color: #f5f5f5 !important;
}
.btn{
    position: absolute;
    right: 0;
    margin-right: 10px;
    img{
        height: 1.2rem;
    }
}
</style>