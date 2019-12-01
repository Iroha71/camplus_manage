<template lang="html">
    <div>
        <Header class="header" />
        <div class="container-fluid">
            <nuxt />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
.header{
    height: 10vh;
}
.container-fluid{
    height: 90vh;
    font-family: 'light-novel'
}
</style>