<template lang="html">
<div class="row">
    <div class="col-12">
        <h1>エラーが発生しました</h1>
        <h2>再度ログインをお願いします</h2>
        <button class="btn btn-large btn-danger" @click="$router.push('/login')">ログイン</button>
    </div>
</div>
</template>

<script>
export default {
    props: ['error']
}
</script>