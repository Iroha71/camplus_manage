<template>
  <div class="row">
    <div class="col-6 chara-area">
      <img :src="`/characters/${selectingChara.id}_fill.png`" v-if="selectingChara!=1" />
    </div>
    <div class="col-6 menu-area">
      <IconLink title="参加者の傾向" link="/trend" icon="/images/graph.png" />
      <IconLink title="おすすめ学科提案結果" link="/play-result" icon="/images/proposal.png" />
    </div>
  </div>
</template>

<script>
import IconLink from '@/components/IconLink.vue'
export default {
  components: {
    IconLink
  },
  layout: 'manage',
  mounted() {
    this.$nextTick(() => {
      const rand = Math.floor(Math.random()*11) + 1
      this.selectingChara = this.$store.getters[`characters/c${1}`]
      this.$store.dispatch('characters/setCurrentCharacter', this.selectingChara)
    })
  },
  data() {
    return {
      selectingChara:  1,
      isHover: false
    }
  },
}
</script>

<style lang="scss" scoped>
.row{
  height: 100%;
  .chara-area{
    height: 100%;
    text-align: center;
    img{
      height: 100%;
      position: absolute;
      right: 0;
    }
  }
  .menu-area{
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
