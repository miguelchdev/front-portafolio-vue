<template>
    <!--  -->
    <v-container fluid>

        <fade-transition
            group
            tag="div"
            class="row"
        >
            <v-col
                v-for="project in projects"
                :key="project.id"
                xl="4"
                lg="4"
                md="4"
                sm="6"
                cols="12"
            >
                <project-item
                    ref="cols"
                    :id="project.id"
                    :title="project.title"
                    :image-url="cover(project)"
                    :description="project.description"
                    :width="width"
                    :height="height"
                    @click.native="goTo(project)"
                />
            </v-col>
        </fade-transition>
    </v-container>
    <!--  -->
</template>

<script>
import ProjectItem from "@/components/ProjectListItem.vue";
import { debounce } from "@/helpers";

export default {
    name: "ProjectList",
    components: { ProjectItem },
    data: () => ({
        created: true,
        width: "auto",
        height: "auto",
        winSize: 0
    }),
    mounted() {
        window.addEventListener("resize", this.onResize);
    },
    updated() {
        this.initalizeSize();
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.onResize);
    },
    props: {
        projects: {
            type: Array,
            required: true
        }
    },
    methods: {
        cover(project) {
            let cover = project.images.length - 1;

            return project.images[cover].file;
        },
        calculateSize() {
            let colums = this.$refs.cols;
            if (this.width == "auto" && colums) {
                let col = colums[0];
                let width = col.$el.offsetWidth;
                let height = col.$el.offsetHeight;
                this.width = `${width}px`;
                this.height = `${height}px`;
            }
        },
        goTo(project) {
            this.$router.push({
                name: "project",
                params: { project: project, id: project.id }
            });
        },
        initalizeSize() {
            this.$nextTick(() => {
                if (this.created) {
                    this.created = false;
                    this.calculateSize();
                }
            });
        },
        onResize() {
            this.width = "auto";
            this.height = "auto";
            this.winSize = window.innerWidth + window.innerHeight;
        }
    },
    computed: {},
    watch: {
        winSize: debounce(function() {
            this.calculateSize();
        }, 500)
    }
};
</script>

<style lang="scss" scoped>
.scroll-fade-enter-active {
    transition: all 0.3s ease;
}
.scroll-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.scroll-fade-enter, .scroll-fade-leave-to
/* .scroll-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
.mins {
    min-height: 0;
}
</style>
