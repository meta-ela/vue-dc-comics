<template>
    <div class="my_card">
        <div class="box_img">
            <img :src="product.thumb" :alt="`Immagine della serie ${product.series}`">
        </div>
        <div class="text-uppercase text-white py-2">
            {{ product.series }}
        </div>
        <!-- <div class="card_overlay">
            <div>
                <strong>Prezzo:</strong>{{product.price}}
            </div>
            <div>
                <strong>Tipologia:</strong>{{product.type}}
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
    },
};
</script>

<style lang="scss">

    
</style>