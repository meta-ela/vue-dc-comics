<!-- dove andrà tutto l'HTML riguardante il BannerBlue della pagina -->
<template>
<!-- deve SEMPRE contenere un div all'interno del template 
    dentro andrà TUTTO l'HTML da scrivere -->
    <div class="bg-primary py-5">
        <div class="container">
            <ul class="nav justify-content-between">
                <li class="nav-item" v-for="link in bannerLinks" :key="link.name">
                    <a class="nav-link active text-white" aria-current="page" :href="link.href">
                            <img class="icon me-2" :src="link.img" :alt="link.name">
                        {{link.name}}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>


<!-- dove andrà tutto il JS riguardante il BannerBlue della pagina -->
<script>
// di prassi aggiungere export default
// con chiave name: valore "stesso nome del componente"
export default {
    name: "BannerBlue",
    data() {
        return {
            bannerLinks: [
                {
                    name: "DIGITAL COMICS",
                    href: "javascript:void(0)",
                    img: "/img/buy-comics-digital-comics.png"
                },
                {
                    name: "DC MERCHANDISE",
                    href: "javascript:void(0)",
                    img: "/img/buy-comics-merchandise.png"
                },
                {
                    name: "SUBSCRIPTION",
                    href: "javascript:void(0)",
                    img: "/img/buy-comics-subscriptions.png"
                },
                {
                    name: "COMIC SHOP LOCATOR",
                    href: "javascript:void(0)",
                    img: "/img/buy-comics-shop-locator.png"
                },
                {
                    name: "DC POWER VISA",
                    href: "javascript:void(0)",
                    img: "/img/buy-dc-power-visa.svg"
                },
            ],
        };
    },
};
</script>


<!-- dove andrà tutto lo styling riguardante il BannerBlue della pagina -->
<style lang="scss">

</style>
