<template lang="html">
<div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="row root">
        <div class="col-3">
            <label>学科を絞り込み</label>
            <select @change="changeFilterField()" v-model="selectingField   ">
                <option value="0">全体</option>
                <option value="1">システム</option>
                <option value="2">ネットワーク</option>
                <option value="3">電子システム</option>
            </select>
        </div>
        <div class="col-6">
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th>プレイヤー名</th>
                        <th>提案学科</th>
                        <th>最終プレイ日</th>
                    </tr>
                    <tr v-for="player in players">
                        <td>{{ player.name }}</td>
                        <td v-if="player.field">{{ player.field.name }}</td>
                        <td v-else>なし</td>
                        <td>{{ player.updated_at }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
    layout: 'manage',
    async asyncData({store}) {
        const players = await store.dispatch('api/req', {method: 'get', endpoint: '/v1/player', params: null})
        return { players: players.data }
    },
    data() {
        return {
            items: [
                { text: 'トップ', href: '/' },
                { text: 'おすすめ学科提案結果', href: '/play-result' }
            ],
            selectingField: 0
        }
    },
    methods: {
        changeFilterField:function(){
            this.$nuxt.$loading.start()
            if(this.selectingField == "0"){
                this.selectingField = null
            }
            const fieldInfo = { field_id: this.selectingField }
            this.getField(fieldInfo).then(response => {
                this.$nuxt.$loading.finish()
            })
        },
        async getField(fieldInfo){
            const players = await this.$store.dispatch('api/req', {method: 'get', endpoint: '/v1/player', params: fieldInfo})
            this.players = players.data
        }
    }
}
</script>