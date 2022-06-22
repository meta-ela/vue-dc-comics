<template>
<div>
    <div class="box_img">
        <img class="card_img" :src="imgUrl" :alt="`Immagine della serie ${cardTitle}`">
    </div>
    <div class="text-uppercase text-white py-2">
        {{ cardTitle }}
    </div>
</div>
</template>

<script>
export default {
    props: {
        cardTitle: String,
        imgUrl: String,
        cardPrice: String,
        cardType: String,
    },
};
</script>

<style>
.box_img {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
}


</style>