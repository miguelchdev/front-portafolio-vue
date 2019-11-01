<template>
    <v-app>
        <introduction />
        <service />
        <project/>
    </v-app>
</template>

<script>
import Introduction from "@/components/Introduction.vue";
import Service from "@/components/Service.vue";
import Project from "@/components/Project.vue";
export default {
    name: "App",
    components: { Introduction, Service,Project },
    
};
</script>


<style scoped lang="scss">




</style>