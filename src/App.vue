<template>
    <v-app>
        <introduction />
        <services />

    </v-app>
</template>

<script>
import Introduction from "@/components/Introduction.vue";
import Services from "@/components/Services.vue";
export default {
    name: "App",
    components: { Introduction, Services },
    
};
</script>


<style scoped lang="scss">




</style>