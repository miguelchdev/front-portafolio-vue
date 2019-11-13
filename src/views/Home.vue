<template>
    <div id="about">
        <introduction />
        <service />
        <project />
    </div>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import Service from '@/components/Service.vue'
import Project from '@/components/Project.vue'

export default {
    components: { Introduction, Service, Project }
}
</script>
