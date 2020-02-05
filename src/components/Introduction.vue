<template>
    <introduction-background
        light="true"
        class="bg-light"
        image-url="https://images.pexels.com/photos/248515/pexels-photo-248515.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    >
       
        <v-container
         
            class="px-sm-12 px-6 fill-height"
        >
            <v-row class="fill-height">
                <v-col
                    xl="8"
                    lg="8"
                    md="7"
                    sm="8"
                    xs="12"
                    class="d-flex flex-column  fill-height"
                >
                    <p class="mx-sm-0 mx-auto">{{ welcome_message }}</p>

                    <div class="mt-auto">
                        <h1 class="text-sm-left text-center name mb-5">{{ full_name }}</h1>
                        <p class="mb-5">{{ about }}</p>
                        <div class="text-sm-left text-center">
                            <v-btn
                                tile
                                large
                                elevation="24"
                                width="300"
                            >{{ seeMyWork }}</v-btn>
                        </div>
                    </div>

                    <div class="mt-auto mx-sm-0 mx-auto pt-5">
                        <a
                            v-for="(item, index) in social_networks"
                            :key="index"
                            :href="item"
                            class="social pr-sm-5 pr-2"
                            target="_blank"
                        >{{ index }}</a>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </introduction-background>
</template>

<script>
import IntroductionBackground from "@/components/IntroductionBackground.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
    name: "Introduction",
    components: { IntroductionBackground },
    data: () => ({
        loading: true,
        seeMyWork: "See my work"
    }),
    computed: {
        ...mapGetters("bio", ["full_name", "welcome_message", "about","social_networks"]),
        ...mapState("bio", ["bio"])
    },
    created() {
        this.getBio()
    },
    methods: {
        ...mapActions("bio", { getBio: "fetchBio" })
    }
};
</script>


<style scoped lang="scss">
.fill-height {
    min-height: 100%;
}
.name {
    font-size: 4.2rem;
}

.social {
    text-transform: capitalize;
    font-weight: 900;
    text-decoration: none;
}
</style>