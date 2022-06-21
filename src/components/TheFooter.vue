<!-- dove andrà tutto l'HTML riguardante il footer della pagina -->
<template>
<!-- deve SEMPRE contenere un div all'interno del template 
    dentro andrà TUTTO l'HTML da scrivere -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col">
                    <!-- due colonne verticali -->
                    <div class="row flex-column">
                        <div class="col">
                            <h4>DC COMICS</h4>
                            <ul class="list-unstyled">
                                <li v-for="link in dcComicsLinks" :key="link">
                                    <a class="nav-link active text-white" aria-current="page" :href="link.href">
                                    {{link.name}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col">
                            <h4>SHOP</h4>
                            <ul class="list-unstyled">
                                <li v-for="link in shopLinks" :key="link">
                                    <a class="nav-link active text-white" aria-current="page" :href="link.href">
                                    {{link.name}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h4>DC</h4>
                    <ul class="list-unstyled">
                        <li v-for="link in dcLinks" :key="link">
                            <a class="nav-link active text-white" aria-current="page" :href="link.href">
                            {{link.name}}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h4>SITES</h4>
                    <ul class="list-unstyled">
                        <li v-for="link in sitesLinks" :key="link">
                            <a class="nav-link active text-white" aria-current="page" :href="link.href">
                            {{link.name}}
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- colonna grande laterale destra con logo in background -->
                <div class="col">
                    <div class="footer_logo">
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
                    href: "#",
                },
                {
                    name: "Comics",
                    href: "#",
                },
                {
                    name: "Movies",
                    href: "#",
                },
                {
                    name: "TV",
                    href: "#",
                },
                {
                    name: "Games",
                    href: "#",
                },
                {
                    name: "Videos",
                    href: "#",
                },
                {
                    name: "News",
                    href: "#",
                },
            ],
            shopLinks: [
                {
                    name: "Shop DC",
                    href: "#",
                },
                {
                    name: "Shop DC Collectibles",
                    href: "#",
                },
            ],
            dcLinks: [
                {
                    name: "Terms Of Use",
                    href: "#",
                },
                {
                    name: "Privacy policy (New)",
                    href: "#",
                },
                {
                    name: "Ad Choices",
                    href: "#",
                },
                {
                    name: "Advertising",
                    href: "#",
                },
                {
                    name: "Jobs",
                    href: "#",
                },
                {
                    name: "Subscriptions",
                    href: "#",
                },
                {
                    name: "Talent Workshops",
                    href: "#",
                },
                {
                    name: "CPSC Certificates",
                    href: "#",
                },
                {
                    name: "Ratings",
                    href: "#",
                },
                {
                    name: "Shop Help",
                    href: "#",
                },
                {
                    name: "Contact Us",
                    href: "#",
                },
            ],
            sitesLinks: [
                {
                    name: "DC",
                    href: "#",
                },
                {
                    name: "MAD Magazine",
                    href: "#",
                },
                {
                    name: "DC Kids",
                    href: "#",
                },
                {
                    name: "DC Universe",
                    href: "#",
                },
                {
                    name: "DC Power Visa",
                    href: "#",
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

.footer_logo {
    background-image: url("/public/img/dc-logo-bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
