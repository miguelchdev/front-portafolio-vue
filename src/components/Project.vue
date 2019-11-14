<template>
    <div class="bg-light full-view">
        <v-container class="px-sm-12 px-5 padding-y parent-height d-flex flex-column ">
            <v-row no-gutters>
                <v-col
                    xl="8"
                    lg="10"
                    md="10"
                    cols="12"
                    class="mb-md-0 mb-5"
                >
                    <h1 class=" text-sm-justify text-center description-services">
                        {{ myWork }}
                    </h1>
                </v-col>
                <v-col
                    xl="4"
                    lg="2"
                    md="2"
                    cols="12"
                >
                    <v-tabs
                        v-if="categories"
                        v-model="tab"
                        fixed-tabs
                        background-color="light"
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
            />

            <v-pagination
                v-if="projects"
                v-model="page"
                :length="pages"
                class="mt-auto"
            ></v-pagination>
        </v-container>
    </div>
</template>

<script>
import ProjectList from "@/components/ProjectList.vue";
import portfolioApi from "@/services/portfolioApi";

export default {
    name: "Projects",
    components: { ProjectList },
    data: () => ({
        myWork: "my work",
        page: 1,
        projects: [],
        count: null,
        categories: [],
        current: 0,
        tab: 0,
        all: "All",
        loading: true
    }),
    methods: {
        getProjects() {
            portfolioApi
                .getProjects({
                    fields: "id,title,images,description,technologys"
                })
                .then(data => {
                    this.projects = data.results;
                    this.count = data.count;
                    this.loading = false;
                })
                .catch(error => {
                    this.loading = true;
                });
        },
        getTechnologys() {
            portfolioApi
                .getTechnologys()
                .then(data => {
                    this.categories = data.results;
                    this.categories.unshift(this.all);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        filterItems(list, query, defValue) {
            return list.filter(el =>
                query == defValue ? true : el["technologys"].includes(query)
            );
        }
    },
    created() {
        this.getProjects();
        this.getTechnologys();
    },
    computed: {
        filterProjects() {
            return this.filterItems(
                this.projects,
                this.categories[this.tab],
                this.all
            );
        },
        paginateProjects() {
            let start = (this.page - 1) * this.pageCount;
            let end = start + this.pageCount;

            return this.filterProjects.slice(start, end);
        },
        pageCount() {
            return this.$vuetify.breakpoint.smAndDown ? 3 : 4;
        },
        size() {
            return this.filterProjects.length;
        },
        pages() {
            return Math.ceil(this.size / this.pageCount);
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
