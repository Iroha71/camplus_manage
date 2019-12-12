<template lang="html">
<div class="row" :class="{ 'distopia': selectingCharacter.id == 8 }">
    <div class="character-card col-4"
        v-for="(character, index) in characters"
        :style="setCharacterStyle(index)"
        v-show="!((character.id==6 || character.id==7 ||character.id==9 || character.id==10)&&selectingCharacter.id==8)">
        <div class="wrap">
            <span @click="returnGame(character.id)">{{ character.id }}</span>
            <img :src="`/characters/${character.id}.png`"
                :class="{'herit': selectingCharacter.id == 8}"
                @click="returnGame(character.id)" />
        </div>
    </div>
    <div class="col-lg-6 offset-lg-3 d-lg-flex d-md-none select-area">
        <button class="btn btn-info"  v-for="number in 11" @click="currentIndex=number-1" :class="{ 'btn-danger': selectingCharacter.id==(number) }">
            {{ number }}
        </button>
    </div>
    <MessageWindow :name="selectingCharacter.name" :text="selectingCharacter.text" :color="selectingCharacter.color"></MessageWindow>
    <b-modal id="noSenarioModal" hide-footer>
        <div class="d-block text-center">
            comming soon!!
        </div>
        <b-button class="mt-3" block @click="$bvModal.hide('noSenarioModal')">
            閉じる
        </b-button>
    </b-modal>
</div>
</template>

<script>
import MessageWindow from '~/components/MessageWindow.vue'
import { nextTick } from 'q'
export default {
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => {
                this.$nuxt.$loading.finish()
            }, 500);
        })
    },
    data() {
        return {
            currentIndex: 0,
            characters: [
                { id: 1, name: 'ひーさん', color: '#d460dd', text: "11人の中で最年長にして病弱。\n苦手なものは階段。7階の教室に上がる途中でいつも力尽きている。デジタル機器が苦手でスマホでメールが打てない。", senario: 'h2-1', label: '*selected' },
                { id: 2, name: 'ニコ', color: '#84a614', text: "明るくエネルギッシュなオタク。\n守備範囲はガンダムからアイドルまで幅広い。マイペースで人の話をあまり聞かないタイプだが特に害はない。" },
                { id: 3, name: 'ミッツ', color: '#e1c61c', text: "いつも電卓とメガホンを携帯しており、儲け話に目がない。\nそして何故か都市伝説マニア。趣味は怪しい通販グッズ収集。" },
                { id: 4, name: 'ヨウコ', color: '#ff6f92', text: "いつも穏やかで優しい保険委員長さん。\n天然なところもあるが頑張り屋で一生懸命。笑顔でたまに怖いことを言ったりもする。" },
                { id: 5, name: 'ゴトウさん', color: '#17508b', text: "知性のある常識人。自由奔放なメンバーの中で、なんとか規律を保とうと奔走する苦労人。\nワラ人形をいつも持ち歩いており怒らせるとものすごく怖いらしい。" },
                { id: 6, name: 'ムッちゃん', color: '#9c7055', text: "常に指人形を両手に装着しておりコミュニケーションはうさぎと猫がすべてこなす。人形がないと慌てる極度の人見知りだが寂しがり屋でひとりぼっちは別として苦手。"},
                { id: 7, name: 'なっちゃん', color: '#c0b400', text: "どこにでもいる普通の女の子だが時代劇が好きであり、「白馬に乗った王子様＝遠山の金さん」だと思っている。\n実家が貧乏でめっちゃバイトしている。"},
                { id: 8, name: 'ハチベエ', color: '#d67a03', text: "――――その日、爆弾が落ちた。"},
                { id: 9, name: '九鬼さん', color: '#d53a3b', text: "運動神経バツグンのスポーツ少女。サバサバとした性格で男っぽい。\nヤンチャだが正義感は人一倍強く周囲から「アニキ」と慕われている。少し喧嘩っ早い。" },
                { id: 10, name: '会長', color: '#00a1ad', text: "何でも完璧にこなすカリスマ。クールで口調はやや威圧的だが面倒見はワリといい。\nただ料理だけは苦手で包丁を握ると謎のオブジェが出来上がる。" },
                { id: 11, name: 'ワン子', color: '#b7b7b7', text: "自由奔放な帰国子女。明るくポジティブで無駄にテンションが高い。\n日本が大好きで着物作りを趣味にしている。"}
            ],
        }
    },
    components: {
        MessageWindow
    },
    methods: {
        setCharacterStyle:function(index){
            const layer = this.currentIndex - index
            let addStyle = `transform: translate3d(${layer*(-80)}%, -50%, ${Math.abs(layer)*(-30)}px); z-index: ${Math.abs(layer)*(-1)};`
            addStyle += `filter: drop-shadow(5px 5px ${this.characters[index].color}); color: ${this.characters[index].color};`
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
        },
        returnGame:function(character_id){
            if(character_id == this.selectingCharacter.id){
                let senario = this.selectingCharacter.senario
                const label = this.selectingCharacter.label
                if(this.$route.query.is_maigo == 'false'){
                    senario = 'h2-1-2'
                }
                if(senario && label){
                    location.href = `${process.env.GAME_URL}?storage=${senario}&target=${label}`
                }else{
                    this.$bvModal.show('noSenarioModal')
                }
            }else{
                if(this.selectingCharacter.id < character_id){
                    this.changePosition('next')
                }else{
                    this.changePosition('prev')
                }
            }
            
        }
    },
    computed: {
        selectingCharacter:function(){
            return this.characters[this.currentIndex]
        }
    },
}
</script>

<style lang="scss" scoped>
.row{
    height: 100%;
    perspective: 80px;
    overflow: hidden;
    background-image: url("/images/bg-image.jpg");
    animation: bg-roop 120s linear infinite;
    @keyframes bg-roop {
        0%{ background-position: 0 0; }
        100%{ background-position: -1950px 0 }
    }
    .character-card{
        height: 90vh;
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        margin: auto;
        transition: .5s;
        cursor: pointer;
        .wrap{
            height: 100%;
            text-align: center;
            span{
                position: absolute;
                z-index: 1;
                top: 0;
                left: 15%;
                font-size: 5rem;
                font-family: 'Mgen'
            }
            img{
                background: #fff;
                border-radius: 10px;
                height: 100%;
                transition: .5s;
                &:hover{
                    background: #dfdfdf;
                }
                /* ハチベエ */
                &.herit{
                    background: inherit;
                    filter: drop-shadow(0,0, inherit)
                }
            }
        }   
    }
    /* ハチベエ */
    &.distopia{
        background: url("/images/distpia.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        animation: none;
    }
    .select-area{
        position: absolute;
        bottom: 40%;
        display: flex;
        justify-content: space-between;
        z-index: 0;
        button{
            z-index: 2;
        }
    }
}
</style>