<template>
  <div class="row">
    <div class="col-6 chara-area">
      <img :src="`/characters/${selectingChara.id}.png`"/>
    </div>
    <div class="col-6 menu-area">
      <IconLink title="参加者の傾向" link="/senario/select" icon="/images/graph.png" />
      <IconLink title="おすすめ学科提案結果" link="/" icon="/images/proposal.png" />
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
    const rand = Math.floor(Math.random()*10)
    this.selectingChara = this.$store.getters[`characters/c${rand+1}`]
    this.$store.dispatch('characters/setCurrentCharacter', this.selectingChara)
  },
  data() {
    return {
      selectingChara: '',
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
    }
  }
  .menu-area{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
