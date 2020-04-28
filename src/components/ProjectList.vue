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
                    :element-width="elementWidth"
                />
            </v-col>
        </fade-transition>
    </v-container>
    <!--  -->
</template>

<script>
import ProjectItem from "@/components/ProjectListItem.vue";

export default {
    name: "ProjectList",
    components: { ProjectItem },
    data: () => ({
        model: null,
        width: "auto"
    }),
    beforeUpdate() {
        window.addEventListener("resize", this.setWidthAuto);
    },
    updated() {
        this.$nextTick(() => {
            this.calculateWidth();
        });
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

            return project.images[cover].file[640];
        },
        calculateWidth() {
            if (this.width == "auto") {
                let size = this.$refs.cols[0].$el.offsetWidth;
                this.width = size;
                console.log("ejecutandose");
            }
        },
        setWidthAuto() {
            this.width = "auto";
        }
    },
    computed: {
        elementWidth() {
            if (this.width == "auto") {
                return this.width;
            } else {
                return this.width + "px";
            }
        }
    }
};
</script>

<style lang="scss" scoped>

// .full{
//     background-color: blue;
   
   
// }
// .green{
//     background-color: green;
// }

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
