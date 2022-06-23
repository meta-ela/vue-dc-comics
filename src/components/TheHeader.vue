<!-- dove andrà tutto l'HTML riguardante l'header della pagina -->
<template>
<!-- deve SEMPRE contenere un div all'interno del template 
    dentro andrà TUTTO l'HTML da scrivere -->
    <header class="sticky-top bg-white">
        <div class="container">
            <nav class="d-flex justify-content-between pt-2">
                <div class="img_logo mb-2">
                    <img class="w-100" src="/img/dc-logo.png" alt="DC Logo"/>
                </div>
                <ul class="nav">
                    <li class="nav-item" v-for="link in navLinks" :key="link.name">
                        <a class="nav-link active" aria-current="page" :href="link.href">{{link.name}}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>


<!-- dove andrà tutto il JS riguardante l'header della pagina -->
<script>
// di prassi aggiungere export default
// con chiave name: valore "stesso nome del componente"
export default {
    name: "TheHeader",
    data() {
        return {
            navLinks: [
                {
                    name: "CHARACTERS",
                    href: "javascript:void(0)",
                },
                {
                    name: "COMICS",
                    href: "javascript:void(0)",
                },
                {
                    name: "MOVIES",
                    href: "javascript:void(0)",
                },
                {
                    name: "TV",
                    href: "javascript:void(0)",
                },
                {
                    name: "GAMES",
                    href: "javascript:void(0)",
                },
                {
                    name: "COLLECTIBILES",
                    href: "javascript:void(0)",
                },
                {
                    name: "VIDEOS",
                    href: "javascript:void(0)",
                },
                {
                    name: "FANS",
                    href: "javascript:void(0)",
                },
                {
                    name: "NEWS",
                    href: "javascript:void(0)",
                },
                {
                    name: "SHOP",
                    href: "javascript:void(0)",
                },
            ],
        };
    },
};
</script>


<!-- dove andrà tutto lo styling riguardante l'header della pagina -->
<style lang="scss" scoped>
// dentro ad uno style scoped le modifiche apportate alle classi boostrap
// rimangono modificate SOLO qui dentro
// importare le variabili per poterle utilizzare --> lo scoped limita anche il scss
@import "../assets/scss/_variables.scss";

li {
    border-bottom: 5px solid white;
}

a {
    color: $dark;
}

li {
    &:hover {
        a {
            color: $blue;
        };

        border-bottom: 5px solid $blue;
        text-decoration: none;
    }
}

</style>

