<!-- dove andrà tutto l'HTML riguardante il footer della pagina -->
<template>
<!-- deve SEMPRE contenere un div all'interno del template 
    dentro andrà TUTTO l'HTML da scrivere -->
    <footer>
        <div class="container position-relative overflow-hidden">
            <div class="py-5">
                <div class="row">
                    <div class="col">
                        <!-- due colonne verticali -->
                        <div class="row flex-column">
                            <div class="col">
                                <h4 class="text-white fw-bold">DC COMICS</h4>
                                <ul class="list-unstyled">
                                    <li v-for="link in dcComicsLinks" :key="link">
                                        <a class="nav-link active text-white-50" aria-current="page" :href="link.href">
                                        {{link.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col">
                                <h4 class="text-white fw-bold">SHOP</h4>
                                <ul class="list-unstyled">
                                    <li v-for="link in shopLinks" :key="link">
                                        <a class="nav-link active text-white-50" aria-current="page" :href="link.href">
                                        {{link.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <h4 class="text-white fw-bold">DC</h4>
                        <ul class="list-unstyled">
                            <li v-for="link in dcLinks" :key="link">
                                <a class="nav-link active text-white-50" aria-current="page" :href="link.href">
                                {{link.name}}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <h4 class="text-white fw-bold">SITES</h4>
                        <ul class="list-unstyled">
                            <li v-for="link in sitesLinks" :key="link">
                                <a class="nav-link active text-white-50" aria-current="page" :href="link.href">
                                {{link.name}}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- colonna grande laterale destra con logo in background -->
                    <div class="col-6">
                        <img class="banner-img" src="/img/dc-logo-bg.png" alt="DC Logo">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<!-- dove andrà tutto il JS riguardante il footer della pagina -->
<script>
// di prassi aggiungere export default
// con chiave name: valore "stesso nome del componente"
export default {
    name: "TheFooter",
    data() {
        return {
            dcComicsLinks: [
                {
                    name: "Characters",
                    href: "javascript:void(0)",
                },
                {
                    name: "Comics",
                    href: "javascript:void(0)",
                },
                {
                    name: "Movies",
                    href: "javascript:void(0)",
                },
                {
                    name: "TV",
                    href: "javascript:void(0)",
                },
                {
                    name: "Games",
                    href: "javascript:void(0)",
                },
                {
                    name: "Videos",
                    href: "javascript:void(0)",
                },
                {
                    name: "News",
                    href: "javascript:void(0)",
                },
            ],
            shopLinks: [
                {
                    name: "Shop DC",
                    href: "javascript:void(0)",
                },
                {
                    name: "Shop DC Collectibles",
                    href: "javascript:void(0)",
                },
            ],
            dcLinks: [
                {
                    name: "Terms Of Use",
                    href: "javascript:void(0)",
                },
                {
                    name: "Privacy policy (New)",
                    href: "javascript:void(0)",
                },
                {
                    name: "Ad Choices",
                    href: "javascript:void(0)",
                },
                {
                    name: "Advertising",
                    href: "javascript:void(0)",
                },
                {
                    name: "Jobs",
                    href: "javascript:void(0)",
                },
                {
                    name: "Subscriptions",
                    href: "javascript:void(0)",
                },
                {
                    name: "Talent Workshops",
                    href: "javascript:void(0)",
                },
                {
                    name: "CPSC Certificates",
                    href: "javascript:void(0)",
                },
                {
                    name: "Ratings",
                    href: "javascript:void(0)",
                },
                {
                    name: "Shop Help",
                    href: "javascript:void(0)",
                },
                {
                    name: "Contact Us",
                    href: "javascript:void(0)",
                },
            ],
            sitesLinks: [
                {
                    name: "DC",
                    href: "javascript:void(0)",
                },
                {
                    name: "MAD Magazine",
                    href: "javascript:void(0)",
                },
                {
                    name: "DC Kids",
                    href: "javascript:void(0)",
                },
                {
                    name: "DC Universe",
                    href: "javascript:void(0)",
                },
                {
                    name: "DC Power Visa",
                    href: "javascript:void(0)",
                },
            ],
        };
    },
};
</script>


<!-- dove andrà tutto lo styling riguardante il footer della pagina -->
<style>

footer {
    background-image: url("/public/img/footer-bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.banner-img {
    position: absolute;
    top: -50px;
    right: 0;
    bottom: 0;
}
</style>
