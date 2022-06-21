<!-- dove andrà tutto l'HTML riguardante l'header della pagina -->
<template>
<!-- deve SEMPRE contenere un div all'interno del template 
    dentro andrà TUTTO l'HTML da scrivere -->
    <div class="container">
        <nav class="d-flex justify-content-between pt-2">
            <div class="img_logo mb-2">
                <img class="w-100" src="/img/dc-logo.png" alt="DC Logo"/>
            </div>
            <ul class="nav">
                <li class="nav-item" v-for="link in navLinks" :key="link">
                    <a class="nav-link active text-dark" aria-current="page" :href="link.href">{{link.name}}</a>
                </li>
            </ul>
        </nav>
    </div>
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
                    href: "#",
                },
                {
                    name: "COMICS",
                    href: "#",
                },
                {
                    name: "MOVIES",
                    href: "#",
                },
                {
                    name: "TV",
                    href: "#",
                },
                {
                    name: "GAMES",
                    href: "#",
                },
                {
                    name: "COLLECTIBILES",
                    href: "#",
                },
                {
                    name: "VIDEOS",
                    href: "#",
                },
                {
                    name: "FANS",
                    href: "#",
                },
                {
                    name: "NEWS",
                    href: "#",
                },
                {
                    name: "SHOP",
                    href: "#",
                },
            ],
        };
    },
};
</script>


<!-- dove andrà tutto lo styling riguardante l'header della pagina -->
<style>
.img_logo {
    width: 60px;
    height: 60px;
}

.nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

