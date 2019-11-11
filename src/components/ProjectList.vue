<template>
    <!--  -->
    <v-container fluid>
        <v-row>

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
                />
   
            </v-col>

        </v-row>
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
            return srcSet.slice(0, srcSet.length - 2);
        },
        onSelect() {
            this.$emit("selected", 0);
        }
    }
};
</script>

<style lang="scss" scoped>
.sad {
    background-color: blue;
}
</style>