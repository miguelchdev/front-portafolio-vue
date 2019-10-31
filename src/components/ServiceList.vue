<template>
  <v-container class="px-0">
        <v-row >
            <v-col
                v-for="service in services"
                :key="service.id"
                xl="4"
                lg="4"
                md="4"
                sm="4"
                cols="12"
            >
                <service-list-item
                    :title="service.title"
                    :description="service.description"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import portfolioApi from "@/services/portfolioApi";
import ServiceListItem from "@/components/ServiceListItem.vue";

export default {
    name: "ServiceList",
    components: { ServiceListItem },
    data: () => ({
        services: null,
        count: null,
        loading: true,
        show: false
    }),
    mounted() {
        this.getServices();
    },
    methods: {
        getServices() {
            portfolioApi
                .getServices()
                .then(data => {
                    this.services = data.results;
                    this.count = data.count;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },computed:{
        hasGutters(){
            return false;
        }
    }

}
</script>
<style lang="scss">
/* global styles */
@import "@/assets/styles/base.scss";
</style>

<style scoped lang="scss">

</style>