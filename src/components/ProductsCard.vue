<template>
<div>
    <div class="box_img">
        <img :src="imgUrl" :alt="`Immagine della serie ${cardTitle}`">
    </div>
    <div class="text-uppercase text-white py-2">
        {{ cardTitle }}
    </div>
</div>
</template>

<script>
export default {
    props: {
        cardTitle: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
            required: true,
        },
        cardPrice:{
            type: String,
            required: true,
        },
        cardType: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss">

</style>