<template>
    <div class="bg-light full-view">
        <v-container class="px-sm-12 px-5 padding-y parent-height d-flex flex-column">
            <v-row
                no-gutters
                class="flex-grow-0"
            >
                <v-col
                    xl="8"
                    lg="6"
                    md="6"
                    cols="12"
                    class="mb-md-0 mb-5"
                >
                    <h1 class=" text-sm-justify text-center description-services mins">
                        {{ myWork }}
                    </h1>
                </v-col>
                <v-col
                    xl="4"
                    lg="6"
                    md="6"
                    cols="12"
                >
                    <v-tabs
                        v-if="categories"
                        v-model="tab"
                        fixed-tabs
                        background-color="light"
                        show-arrows
                    >
                        <v-tab
                            v-for="(category,index) in categories"
                            :key="index"
                        >{{ category}}</v-tab>
                    </v-tabs>
                </v-col>
            </v-row>

            <project-list
                v-if="projects"
                :projects="paginateProjects"
                class="mt-auto"
            />

            <v-pagination
                v-if="projects"
                @input="paginate"
                :length="pages"
                :value="page"
                class="mt-auto"
            ></v-pagination>
        </v-container>
    </div>
</template>

<script>
import ProjectList from "@/components/ProjectList.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
    name: "Projects",
    components: { ProjectList },
    data: () => ({
        myWork: "my work",
        all: "All",
        page: 1,
        current: 0,
        tab: 0,
        loading: true,
        perPage: 3
    }),
    methods: {
        ...mapActions("projects", {
            getProjects: "fetchProjects"
        }),
        paginate(curretPage) {
            if (curretPage == this.pages || curretPage == this.pages - 1) {
                console.log("Cargando info");
                this.getProjects().then(() => {
                    this.page = curretPage;
                    console.log("Info cargada");
                });
            } else {
                this.page = curretPage;
            }
        }
    },
    mounted() {
        this.getProjects();
    },
    watch: {
        tab() {
            this.page = 1;
        },
        pages() {
            if (this.pages == 1 && this.total < this.count) {
                console.log("se ejecuta");
                this.getProjects();
            }
        }
    },
    computed: {
        ...mapGetters("projects", ["filterItems", "technologys", "total"]),
        ...mapState("projects", ["count"]),
        categories() {
            return [this.all].concat(this.technologys);
        },
        selectedCategory() {
            let category =
                this.categories[this.tab] == this.all
                    ? ""
                    : this.categories[this.tab];
            return category;
        },
        projects() {
            return this.filterItems(this.selectedCategory);
        },
        start() {
            return (this.page - 1) * this.perPage;
        },
        end() {
            return this.start + this.perPage;
        },
        paginateProjects() {
            return this.projects.slice(this.start, this.end);
        },
        size() {
            return this.projects.length;
        },
        pages() {
            return Math.ceil(this.size / this.perPage);
        }
    }
};
</script>

<style lang="scss"></style>
<style scoped lang="scss">
.description-services {
    padding-bottom: 3%;
}
</style>
