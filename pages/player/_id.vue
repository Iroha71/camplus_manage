<template lang="html">
<div class="row">
    <h2>{{ player.name }}さんへのおすすめ学科は</h2>
    <h3>{{ player.field.name }}</h3>
</div>
</template>

<script>
export default {
    async asyncData({store, route}) {
        const player_id = await route.params.id
        const player = await store.dispatch('api/req', {method: 'get', endpoint: `v1/player/${player_id}`, params: null})
        console.log(player.data)
        return { player: player.data }
    },
}
</script>

<style lang="scss" scoped>
.row{
    height: 100%;
    background-image: url("/images/bg-image.jpg");
}
</style>