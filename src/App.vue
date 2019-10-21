<template>

    <v-app>

        <header-image>
            <v-container class="bg-white ">

                <p>Sobre mi: {{ bio.about }}</p>
                <h1>{{full_name}}</h1>
                <p>{{bio.welcome_message}}</p>
                <p>Role: {{ bio.role }}</p>

                <ul>
                    <li
                        v-for="(item, index) in bio.social_networks"
                        :key="index"
                    >
                        <a :href="item">{{index}}</a>
                    </li>
                </ul>
                <v-row>
                    <v-col>adsad</v-col>
                    <v-col>asdasd</v-col>
                </v-row>
            </v-container>
        </header-image>

        <v-container class="bg-two ">

            <p>Sobre mi: {{ bio.about }}</p>
            <h1>{{full_name}}</h1>
            <p>{{bio.welcome_message}}</p>
            <p>Role: {{ bio.role }}</p>

            <ul>
                <li
                    v-for="(item, index) in bio.social_networks"
                    :key="index"
                >
                    <a :href="item">{{index}}</a>
                </li>
            </ul>

        </v-container>

    </v-app>
</template>

<script>
import portfolioApi from "@/services/portfolioApi";
import ProjectList from "@/components/ProjectList";
import HeaderImage from "./components/HeaderImage.vue";
export default {
    name: "App",
    components: { ProjectList, HeaderImage },
    data: () => ({
        bio: null,
        loading: true
    }),
    methods: {
        getBio() {
            portfolioApi
                .getBio(1)
                .then(data => {
                    this.bio = data;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    computed: {
        full_name() {
            return this.bio.name + " " + this.bio.last_name;
        }
    },
    created() {
        this.getBio();
    }
};
</script>

<style lang="scss">
@import "assets/custom-bootstrap.scss";

@for $i from 1 through 4 {
    h#{$i} {
        font-family: "Proxima Nova";
        text-transform: uppercase;
        font-weight: 900;
        color: #555555;
    }
}
.bg-two {
    background-color: green;
    height: 100vh;
}

.bg-white {
    background-color: blue;
}

.bg-rose{
    background-color: pink;
}
</style>