export const state = () => ({
    currentCharacter: '',
    c1: { 
        id: 1, 
        name: 'ひーさん', 
        color: '#d460dd'
    },
    c2: {
        id: 2,
        name: 'ニコ',
        color: '#84a614',
    },
    c3: {
        id: 3,
        name: 'ミッツ',
        color: '#e1c61c',
    },
    c4: {
        id: 4,
        name: 'ヨウコ', color: '#ff6f92'
    },
    c5: {
        id: 5,
        name: 'ゴトウさん',
        color: '#17508b'
    },
    c6: {
        id: 6,
        name: 'ムッちゃん',
        color: '#9c7055'
    },
    c7: {
        id: 7,
        name: 'なっちゃん',
        color: '#c0b400'
    },
    c8: {
        id: 8,
        name: 'ハチベエ',
        color: '#d67a03'
    },
    c9: {
        id: 9,
        name: '九鬼さん',
        color: '#'
    },
    c10: {
        id: 10,
        name: '会長',
        color: '#00a1ad',
    },
    c11: {
        id: 11,
        name: 'ワン子',
        color: '#b7b7b7', 
    }
})

export const mutations = {
    setCurrentCharacter(state, character){
        state.currentCharacter = character
    }
}

export const actions = {
    setCurrentCharacter(context, character){
        context.commit('setCurrentCharacter', character)
    }
}

export const getters = {
    currentCharacter: state => state.currentCharacter,
    c1: state => state.c1,
    c2: state => state.c2,
    c3: state => state.c3,
    c4: state => state.c4,
    c5: state => state.c5,
    c6: state => state.c6,
    c7: state => state.c7,
    c8: state => state.c8,
    c9: state => state.c9,
    c10: state => state.c10,
    c11: state => state.c11,
}