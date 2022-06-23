<template>
    <div>
        <div class="my_card position-relative">
            <div class="box_img">
                <img class="w-100" :src="product.thumb" :alt="`Immagine della serie ${product.series}`">
            </div>
            
            <div class="card_overlay">
                <div>
                    <strong>Price: </strong>{{product.price}}
                </div>
                <div>
                    <strong>Type: </strong>{{product.type}}
                </div>
            </div>
        </div>
        <div class="text-uppercase text-white py-2">
                {{ product.series }}
            </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
    },
};
</script>

<style lang="scss" scoped>
// dentro ad uno style scoped le modifiche apportate alle classi boostrap
// rimangono modificate SOLO qui dentro
// modificato la .card in _card.scss e modifico .card qui per contenere le variazioni 

/* .card {
    background-color: transparent;
    border: 0;
} */

</style>