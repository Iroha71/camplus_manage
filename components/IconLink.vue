<template lang="html">
<div class="menu" @mouseover="isHover=true" @mouseleave="isHover=false" @click="$router.push(link)">
    <div class="menu-icon" :class="{'is-rotate': isHover}">
        <img :src="icon" v-show="!isHover">
        <img src="/images/yajirushi.png" v-show="isHover">
    </div>
    <div class="menu-title">{{ title }}</div>
</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isHover: false
        }
    },
}
</script>

<style lang="scss" scoped>
.menu{
    display: flex;
    align-items: center;
    cursor: pointer;
    &-icon{
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url("/images/hexagon.png");
        height: 20vh;
        width: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .5s;
        img{
            height: 15vh;
            width: 15vh;
        }
    }
    &-title{
        font-size: 2rem;
    }
}
.is-rotate{
    transform: rotate(90deg);
    background-image: url("/images/hexagon_go.png");
}
</style>