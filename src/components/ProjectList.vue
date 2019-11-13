<template>
    <!--  -->
    <v-container fluid>
       
            <transition-group name="slide-fade" tag="div" class="row">
                <v-col
                    v-for="project in projects"
                    :key="project.id"
                    xl="4"
                    lg="4"
                    md="4"
                    cols="12"
                >

                    <project-item
                        :id="project.id"
                        :title="project.title"
                        :image-url="cover(project)"
                        :description="project.description"
                       class="fade-item"
                    />

                </v-col>
            </transition-group>
    </v-container>
    <!--  -->
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
            let srcSet = "";
            for (let [key, value] of Object.entries(
                project.images[cover].file
            )) {
                srcSet += value + " " + key + "w, ";
            }
            console.log(srcSet.slice(0, srcSet.length - 1));
            return project.images[cover].file[640];
        },
        onSelect() {
            this.$emit("selected", 0);
        }
    }
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>