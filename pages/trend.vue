<template lang="html">
<div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="root row">
        <div class="col-8 offset-2 result">
            <div class="result-view system">
                <img src="/images/pc.png" />
                <h4>システム</h4>
                <h3>{{ fields[0].total_num }}人</h3>
            </div>
            <div class="result-view network">
                <img src="/images/server.png" />
                <h4>ネットワーク</h4>
                <h3>{{ fields[1].total_num }}人</h3>
            </div>
            <div class="result-view embeded">
                <img src="/images/drone.png" />
                <h4>電子システム</h4>
                <h3>{{ fields[2].total_num }}人</h3>
            </div>
        </div>
    </div>
    <section class="row">
        <div class="col-6 offset-3">
            <button class="btn-large btn btn-danger" @click="$router.push('/')">TOPへ戻る</button>
            <button class="btn-large btn btn-info">おすすめ学科提案結果も見る</button>
        </div>
    </section>
</div>
</template>

<script>
export default {
    layout: 'manage',
    async asyncData({store}) {
        const fields = await store.dispatch('api/req', {method: 'get', endpoint: '/v1/field', params: null})
        return { fields: fields.data }
    },
    data() {
        return {
            items: [
                { text: 'トップ', href: "/" },
                { text: '参加者の傾向', href: "/trend" }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.root{
    height: 100%;
    align-items: center;
    .result{
        height: 40vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &-view{
            height: 40vh;
            width: 40vh;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                height: 20vh;
                width: 20vh;
            }
        }
    }
    .system{
        background: #5757FF;
    }
    .network{
        background: #008500;
    }
    .embeded{
        background: #fcac01;
    }
}
section{
    margin-top: 20px;
    button{
        margin-bottom: 10px !important;
        display: block;
        margin: auto;
    }
}
</style>