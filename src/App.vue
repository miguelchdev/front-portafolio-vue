<template>
    <v-app>
        <introduction />
        <service />

    </v-app>
</template>

<script>
import Introduction from "@/components/Introduction.vue";
import Service from "@/components/Service.vue";
export default {
    name: "App",
    components: { Introduction, Service },
    
};
</script>


<style scoped lang="scss">




</style>