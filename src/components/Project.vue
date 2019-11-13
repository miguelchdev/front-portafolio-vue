<template>
    <div class="bg-light full-view">
        <v-container class="px-sm-12 px-5 padding-y parent-height d-flex flex-column ">
            <v-row no-gutters>
                <v-col
                    xl="10"
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
                    xl="2"
                    lg="2"
                    md="2"
                    cols="12"
                >
                    <v-tabs
                        background-color="light"
                        fixed-tabs
                    >
                        <v-tab
                            v-for="(category, index) in categories"
                            :key="index"
                        >{{ category }}</v-tab>
                    </v-tabs>
                </v-col>
            </v-row>
            <div class="d-flex justify-space-between">
                <!-- <ul class="d-inline">
                    <li
                        v-for="(category,index) in categories"
                        :key="index"
                    ></li>
                </ul> -->
            </div>

            <project-list
                v-if="projects"
                :projects="filterProjects"
            />

            <v-pagination
                v-model="page"
                :length="pages"
                class="mt-auto"
            ></v-pagination>
        </v-container>
    </div>
</template>

<script>
import ProjectList from '@/components/ProjectList.vue'
import portfolioApi from '@/services/portfolioApi'

export default {
    name: 'Projects',
    components: { ProjectList },
    data: () => ({
        myWork: 'my work',
        page: 1,
        projects: null,
        count: null,
        categories: ['All', 'Mobile', 'Web'],
        current: 0
    }),
    methods: {
        getProjects() {
            portfolioApi
                .getProjects({ fields: 'id,title,images,description' })
                .then(data => {
                    this.projects = data.results
                    this.count = data.count
                    this.loading = false
                })
                .catch(error => {
                    console.log(error)
                })
        },
        setCurrentProject(id) {
            this.current = id
        }
    },
    mounted() {
        this.getProjects()
    },
    computed: {
        filterProjects() {
            let start = (this.page - 1) * this.pageCount
            let end = start + this.pageCount
            // let start = this.page - 1;
            // let end = start + this.pageCount + 1;
            return this.projects.slice(start, end)
        },
        pageCount() {
            return this.$vuetify.breakpoint.smAndDown ? 3 : 4
        },
        pages() {
            return Math.ceil(this.count / this.pageCount)
        },
        currentProject() {
            return this.projects[this.current]
        }
    }
}
</script>

<style lang="scss"></style>
<style scoped lang="scss">
.description-services {
    padding-bottom: 3%;
}
</style>
