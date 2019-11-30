<template lang="html">
<div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="root row">
        <div class="col-8 offset-2 result">
            <div class="result-view system">
                <img src="/images/pc.png" />
                <h4>システム</h4>
                <h3>20</h3>
            </div>
            <div class="result-view network">
                <img src="/images/server.png" />
                <h4>ネットワーク</h4>
                <h3>20</h3>
            </div>
            <div class="result-view embeded">
                <img src="/images/drone.png" />
                <h4>電子システム</h4>
                <h3>20</h3>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    layout: 'manage',
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
</style>