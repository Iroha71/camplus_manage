<template lang="html">
<div class="row">
    <h2 class="recommend">{{ player.name }}さんのおすすめ学科は<span :class="getFieldColor()">{{ player.field.name }}</span>です!!</h2>
</div>
</template>

<script> 
export default { 
    async asyncData({store, route}) { 
        const player_id = await route.params.id 
        const player = await store.dispatch('api/req', {method: 'get', endpoint: `v1/player/${player_id}`, params: null})
        return { player: player.data } 
    },
    methods: {
        getFieldColor:function(){
            switch(this.player.field.id){
                case 1:
                    return 'color-system'
                case 2:
                    return 'color-network'
                case 3:
                    return 'color-embeded'
            }
        }
    }
} 
</script> 

<style lang="scss" scoped>
.row{
    height: 100%;
    background-image: url("/images/bg-image.jpg");
}


.recommend{
    margin:auto;
    font-family: 'light-novel'
}

.color{
    &-system{
        color: #5757FF;
    }
    &-network{
        color: #008500;
    }
    &-embeded{
        color: #fcac01;
    }
}
</style>