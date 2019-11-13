<template>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <v-app>
        <v-slide-y-transition
            hide-on-leave
            mode="in-out"
        >
            <router-view></router-view>
        </v-slide-y-transition>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    components: {}
}
</script>

<style scoped lang="scss"></style>
