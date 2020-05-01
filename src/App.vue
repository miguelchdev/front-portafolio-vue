<template>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <v-app>
        <v-slide-x-transition leave-absolute>
            <router-view></router-view>
        </v-slide-x-transition>
    </v-app>
</template>

<script>
export default {
    name: "App",
    components: {}
};
</script>

<style scoped lang="scss"></style>
