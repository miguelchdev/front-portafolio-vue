<template>

    <v-slide-group
        mandatory
        show-arrows
        center-active
        v-model="model"
        @change="onSelect"
    >

        <v-slide-item
            v-for="project in projects"
            :key="project.id"
            v-slot:default="{ active, toggle }"
            active-class="sad"
        >

            <project-item
                :id="project.id"
                :title="project.title"
                :image-url="cover(project)"
                :description="project.description"
                :active="active"
                @click="toggle"
            />

        </v-slide-item>

    </v-slide-group>
</template>

<script>
import ProjectItem from "@/components/ProjectListItem.vue";

export default {
    name: "ProjectList",
    components: { ProjectItem },
    data: () => ({
        model: null
    }),
    props: {
        projects: {
            type: Array,
            required: true
        }
    },
    methods: {
        cover(project) {
            let cover = project.images.length - 1;
            return project.images[cover].file["gallery_large"];
        },
        onSelect() {
           this.$emit('selected',this.model);
        }
    }
};
</script>

<style lang="scss" scoped>

.sad {
    background-color: blue;
}
</style>