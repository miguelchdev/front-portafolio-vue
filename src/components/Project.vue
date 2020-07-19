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
                    <v-lazy
                        v-if="readyAll"
                        :options="{threshold: 1}"
                        min-height="50px"
                        transition="scroll-x-transition"
                    >
                        <h1
                            v-if="title"
                            class="text-sm-justify text-center description-services mins"
                        >{{ title }}</h1>
                    </v-lazy>
                </v-col>
                <v-col
                    xl="4"
                    lg="6"
                    md="6"
                    cols="12"
                >
                    <v-lazy
                        v-if="readyAll"
                        :options="{
                threshold: 1
            }"
                        min-height="100px"
                        transition="scroll-x-transition"
                    >
                        <v-tabs
                            v-if="categories"
                            v-model="tab"
                            fixed-tabs
                            background-color="light"
                            show-arrows
                        >
                            <v-tab>{{ $t("projects.all") }}</v-tab>
                            <v-tab
                                v-for="(category, index) in categories"
                                :key="index"
                            >{{ category }}</v-tab>
                        </v-tabs>
                    </v-lazy>
                </v-col>
            </v-row>
            <v-lazy
                v-if="readyAll"
                :options="{
                threshold: 1
            }"
                min-height="300px"
                transition="scroll-x-transition"
                class="mt-auto"
            >
                <project-list
                    v-if="projects"
                    :projects="paginateProjects"
                />
            </v-lazy>
            <v-lazy
                v-if="readyAll"
                :options="{threshold: 1}"
                class="mt-auto"
                min-height="50px"
                transition="scroll-x-transition"
            >
                <v-pagination
                    v-if="projects"
                    @input="paginate"
                    :length="pages"
                    :value="page"
                ></v-pagination>
            </v-lazy>
        </v-container>
    </div>
</template>

<script>
import ProjectList from "@/components/ProjectList.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
    name: "Projects",
    components: { ProjectList },
    props: { title: String, images: Object, page_contents: Object },
    data() {
        return {
            page: 1,
            current: 0,
            tab: 0,
            perPage: 3
        };
    },
    methods: {
        ...mapActions("projects", {
            getProjects: "fetchProjects"
        }),
        paginate(curretPage) {
            if (curretPage == this.pages || curretPage == this.pages - 1) {
               
                this.getProjects().then(() => {
                    this.page = curretPage;
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
                this.getProjects();
            }
        }
    },
    computed: {
        ...mapGetters("projects", [
            "filterItems",
            "technologys",
            "total",
            "ready"
        ]),
        ...mapGetters("pages", { readyContent: "ready" }),
        ...mapState("projects", ["count"]),
        categories() {
            return this.technologys;
        },
        selectedCategory() {
            let category = this.tab == 0 ? "" : this.categories[this.tab - 1];
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
        },
        readyAll() {
            return this.ready || this.readyContent;
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
