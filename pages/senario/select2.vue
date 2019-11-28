<template lang="html">
<div class="row">
    <div class="character-card col-4" v-for="(character, index) in characters" :style="setCharacterStyle(index)">
        <div class="wrap">
            <img :src="`/characters/${character.id}.png`"/>
        </div>
    </div>
    <div class="col-6 offset-3 select-area">
        <button class="btn btn-info"  v-for="number in 11" @click="currentIndex=number-1">
            {{ number }}
        </button>
        <!-- <button class="btn btn-info" @click="changePosition('prev')">◀</button>
        <button class="btn btn-primary" @click="changePosition('next')">▶</button> -->
    </div>
    <MessageWindow :name="selectingCharacter.name" :text="selectingCharacter.text" :color="selectingCharacter.color"></MessageWindow>
</div>
</template>

<script>
import MessageWindow from '~/components/MessageWindow.vue'
export default {
    data() {
        return {
            currentIndex: 0,
            characters: [
                { id: 1, name: 'ひーさん', color: '#d460dd', text: "10人の中で最年長にして病弱。\n苦手なものは階段。7階の教室に上がる途中でいつも力尽きている。デジタル機器が苦手でスマホでメールが打てない。" },
                { id: 2, name: 'ニコ', color: '#84a614', text: "明るくエネルギッシュなオタク。\n守備範囲はガンダムからアイドルまで幅広い。マイペースで人の話をあまり聞かないタイプだが特に害はない。" },
                { id: 3, name: 'ミッツ', color: '#e1c61c', text: "いつも電卓とメガホンを携帯しており、儲け話に目がない。\nそして何故か都市伝説マニア。趣味は怪しい通販グッズ収集。" },
                // { id: 4 },
                { id: 5, name: 'ゴトウさん', color: '#17508b', text: "知性のある常識人。自由奔放なメンバーの中で、なんとか規律を保とうと奔走する苦労人。\nワラ人形をいつも持ち歩いており怒らせるとものすごく怖いらしい。" },
                { id: 6, name: 'ムッちゃん', color: '#9c7055', text: "常に指人形を両手に装着しておりコミュニケーションはうさぎと猫がすべてこなす。人形がないと慌てる極度の人見知りだが寂しがり屋でひとりぼっちは別として苦手。"},
                { id: 7, name: 'なっちゃん', color: '#c0b400', text: "どこにでもいる普通の女の子だが時代劇が好きであり、「白馬に乗った王子様＝遠山の金さん」だと思っている。\n実家が貧乏でめっちゃバイトしている。"},
                { id: 8, name: 'ハチベエ', color: '#d67a03', text: "いつもお腹を空かせておりホイップ入りのボウルを片手にふらりと現れては消えていく。存在自体が謎だらけだが、メンバーは誰も突っ込みはしない。\nひょっとしたら妖精かもしれない。"},
                { id: 10, name: '会長', color: '#00a1ad', text: "何でも完璧にこなすカリスマ。クールで口調はやや威圧的だが面倒見はワリといい。\nただ料理だけは苦手で包丁を握ると謎のオブジェが出来上がる。" },
                { id: 11, name: 'ワン子', color: '#b7b7b7', text: "自由奔放な帰国子女。明るくポジティブで無駄にテンションが高い。日本が大好きで着物作りを趣味にしている。"}
            ],
            visibleRange: 3,
            reserseIndex: 7
        }
    },
    components: {
        MessageWindow
    },
    methods: {
        setCharacterStyle:function(index){
            let layer = this.currentIndex - index
            let addStyle = `transform: translate3d(${layer*(-80)}%, -50%, ${Math.abs(layer)*(-30)}px); z-index: ${Math.abs(layer)*(-1)}`
            return addStyle
        },
        changePosition:function(direction){
            if(direction === 'next'){
                this.isPushPrevButton = false
                if(this.currentIndex == this.characters.length-1){
                    this.currentIndex = 0
                }else{
                    this.currentIndex++
                    this.reserseIndex--
                }
            }else if(direction === 'prev'){
                this.isPushPrevButton = true
                if(this.currentIndex == 0){
                    this.currentIndex = this.characters.length-1
                }else{
                    this.currentIndex--
                }
            }
        }
    },
    computed: {
        selectingCharacter:function(){
            return this.characters[this.currentIndex]
        }
    }
}
</script>

<style lang="scss" scoped>
.row{
    height: 100%;
    perspective: 70px;
    overflow: hidden;
    background-image: url("/images/bg-image.jpg");
    .character-card{
        height: 90vh;
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        margin: auto;
        transition: .5s;
        .wrap{
            height: 100%;
            display: hidden;
            border: solid 3px #fff;
            border-radius: 10px;
            text-align: center;
            img{
                height: 100%;
                filter: drop-shadow(5px 5px #fff);
            }
        }
    }
    .select-area{
        position: absolute;
        bottom: 40%;
        display: flex;
        justify-content: space-between;
        button{
            z-index: 2;
        }
    }
}
</style>