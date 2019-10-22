<template>

    <v-app>

        <header-image image_url="https://images.pexels.com/photos/248515/pexels-photo-248515.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">

            <v-container
                v-if="bio !== null"
                class="px-12 fill-height"
            >
                <v-row class="fill-height">
                    <v-col
                        xl="8"
                        lg="8"
                        md="7"
                        sm="12"
                        xs="12"
                        class="fill-height d-flex flex-column"
                    >

                        <p>{{bio.welcome_message}}</p>

                        <div class="mt-auto">

                            <h1 class="name mb-5">{{full_name}}</h1>
                            <p class="mb-5">{{ bio.about }}</p>

                            <v-btn
                                tile
                                large
                                elevation="24"
                                width="300"
                            >{{seeMyWork}}</v-btn>

                        </div>

                        <div class="mt-auto">

                            <a
                                v-for="(item, index) in bio.social_networks"
                                :key="index"
                                :href="item"
                            >
                                {{index}}</a>
                        </div>

                    </v-col>
                </v-row>
            </v-container>
        </header-image>
        <v-container
            v-if="bio !== null"
            class="px-12 bg-two"
        >

            <h1 class="name mb-5">{{full_name}}</h1>
            <p class="mb-5">{{ bio.about }}</p>

            <ul>
                <li
                    v-for="(item, index) in bio.social_networks"
                    :key="index"
                >
                    <a :href="item">{{index}}</a>
                </li>
            </ul>
            <v-btn
                tile
                large
                elevation="24"
                width="200"
            >{{seeMyWork}}</v-btn>

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
        loading: true,
        seeMyWork: "See my work"
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
@import "~vuetify/src/styles/main.sass";

@for $i from 1 through 6 {
    h#{$i} {
        font-family: "Proxima Nova";
        text-transform: uppercase;
        font-weight: 900;
        color: #555555;
    }
}
button {
    font-family: "Proxima Nova";
    text-transform: uppercase;
    font-weight: 900;
}

.name {
    font-size: 4.2rem;
}
.expand-width {
}
</style>