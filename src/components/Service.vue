<template>
    <div class="bg-dark full-view">
        <v-container class="px-sm-12 px-5 padding-y parent-height d-flex flex-column">
            <h1 class="text-sm-justify text-center">{{myServices}}</h1>
            <p class="description-services ">{{servicesDescription}}</p>
            <service-list></service-list>
        </v-container>
    </div>
</template>

<script>
import ServiceList from "@/components/ServiceList.vue";
export default {
    name: "Service",
    components: { ServiceList },
    data: () => ({
        myServices: "MY SERVICES",
        servicesDescription:
            "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus rutrum sapien eget scelerisque. Nullam vel leo congue, ultricies arcu eu, rutrum est. Fusce sollicitudin, arcu id vulputate fermentum, lacus ipsum ultricies odio, vel tincidunt sapien nibh ac felis. Maecenas a nisi sit amet dolor sodales hendrerit. Mauris ut sodales felis "
    })
};
</script>


<style lang="scss">
/* global styles */
@import "@/assets/styles/base.scss";
</style>

<style lang="scss" scoped>
@import "@/assets/styles/responsive-breakpoints.scss";

.description-services {
    font-weight: 400;
    font-size: 1.35rem;
    color: var(--v-darkText-base);
    padding: 5% 0 3% 0%;
}
// Telefonos moviles en landscape
@include respond-between(xs, md) {
    @media (orientation: landscape) {
        .full-view {
            min-height: 150vh;
            
        }
    }
}
//Tables pequeñas y hacia arriba
@include respond-above(sm) {
    @media (orientation: portrait) {
        .full-view {
            min-height: 70vh;
        }
    }
}

// Tablet grandes,laptops y pa arriba
@include respond-above(md) {
    .full-view {
        min-height: 100vh;
    }
}
</style>