<template lang="html">
<div class="frame col-6">
    <div class="nameplate" :style="setTheme(true)">
        <span>{{ name }}</span>
    </div>
    <div class="text-area" :style="setTheme(false)">
        <span v-for="(t, index) in animationText"
            v-text="t"
            :key="index" 
            class="text-item"
            :style="{animationDelay: index*50+'ms'}"/>
    </div>
</div>
</template>

<script>
export default {
    props: {
        name:{
            type: String,
            required: true
        },
        text:{
            type: String,
            required: true
        },
        color:{
            type: String,
            required: false
        },
        styleClass:{
            type: String,
            required: false
        }
    },
    data() {
        return {
            animationText: this.text
        }
    },
    methods: {
        setTheme:function(isBackgroundPaint){
            let themeColor = '#166ab9'
            if(this.color){
                    themeColor = this.color
            }
            if(isBackgroundPaint){
                return `background: ${themeColor};`
            }else{
                return `filter: drop-shadow(5px 5px ${themeColor});`
            }
        },
        setThemeByClass:function(){
            return this.styleClass
        }
    },
    watch: {
        text:function(){
            this.animationText = ''
            setTimeout(() => {
                this.animationText = this.text
            }, 1);
        }
    }
}
</script>

<style lang="scss" scoped>
.frame{
    position: absolute;
    right: 0;
    left: 0;
    bottom: 15%;
    margin: auto;
    z-index: 2;
    .nameplate{
        font-size: 1.3rem;
        min-width: 30%;
        position: absolute;
        z-index: 1;
        top: -25px;
        color: #fff;
        padding: 5px 5px 5px 10px;
        border-radius: 10px;
        transform: rotateZ(-2deg);
        transition: .5s;
    }
    .text-area{
        font-size: 1.25rem;
        width: 100%;
        padding: 20px 10px 10px 10px;
        border-radius: 10px;
        background: #f7f7f7;
        transition: .5s;
        white-space: pre-wrap;
        .text-item{
            animation: text-apply 0s linear 0s backwards;
        }
        @keyframes text-apply {
            0%{ opacity: 0; }
            100%{ opacity: 1; }
        }
    }
}
</style> 