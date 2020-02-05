import portfolioApi from "@/services/portfolioApi";

export default {
    namespaced: true,
    state: {
        projects: [],
        projectsTotal: 0,
        technologys: []
    },
    actions: {
        fetchProjects({ commit }) {
            portfolioApi
                .getProjects({
                    fields: "id,title,images,description,technologys"
                })
                .then(data => {
                    commit("setProjects", data.results);
                    commit("setProjectsTotal", data.count);
                });
        },
        fetchTechnologys({ commit }) {
            portfolioApi.getTechnologys().then(data => {
                commit("setTechnologys", data.results);
            });
        }
    },
    getters: {
        portfolioProjects: state => query => {
            return state.projects.filter(project =>
                !state.technologys.includes(query)
                    ? true
                    : project["technologys"].includes(query)
            );
        },
        portfolioProjectsTotal(state) {
            return state.projectsTotal;
        }
    },
    mutations: {
        setProjects(state, projects) {
            state.projects = projects;
        },
        setProjectsTotal(state, total) {
            state.projectsTotal = total;
        },
        setTechnologys(state, technologys) {
            state.technologys = technologys;
        }
    }
};
