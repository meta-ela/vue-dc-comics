<!-- dove andrà tutto l'HTML riguardante il BannerFooter della pagina -->
<template>
<!-- deve SEMPRE contenere un div all'interno del template 
    dentro andrà TUTTO l'HTML da scrivere -->
    <div class="footer_bg_color py-2 sticky-bottom">
        <div class="container">
            <nav class="d-flex justify-content-between pt-2">
                <div class="d-flex justify-content-between align-items-center btn_signup">
                    <a class="btn text-white">
                        SIGN-UP NOW!
                    </a>
                </div>
                <ul class="nav">
                    <div class="d-flex justify-content-between align-items-center fw-bold text-primary">
                        FOLLOW US
                    </div>
                    <li class="nav-item" v-for="link in bannerFooterLinks" :key="link">
                        <a class="nav-link active" aria-current="page" :href="link.href">
                            <img :src="link.img" :alt="link.name">
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>


<!-- dove andrà tutto il JS riguardante il BannerFooter della pagina -->
<script>
// di prassi aggiungere export default
// con chiave name: valore "stesso nome del componente"
export default {
    name: "BannerFooter",
    data() {
        return {
            bannerFooterLinks: [
                {
                    name: "Facebook",
                    href: "javascript:void(0)",
                    img: "/img/footer-facebook.png"
                },
                {
                    name: "Twitter",
                    href: "javascript:void(0)",
                    img: "/img/footer-twitter.png"
                },
                {
                    name: "YouTube",
                    href: "javascript:void(0)",
                    img: "/img/footer-youtube.png"
                },
                {
                    name: "Pinterest",
                    href: "javascript:void(0)",
                    img: "/img/footer-pinterest.png"
                },
                {
                    name: "Periscope",
                    href: "javascript:void(0)",
                    img: "/img/footer-periscope.png"
                },
            ],
        };
    },
};
</script>


<!-- dove andrà tutto lo styling riguardante il BannerFooter della pagina -->
<style>
.footer_bg_color{
    background-color: #303030;
}

.btn_signup {
    border: 2px solid #0d6efd;
}
</style>