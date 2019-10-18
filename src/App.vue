<template>
  
    <v-app>

        <!-- <v-container>
           
            <p>{{ bio.welcome_message }}</p>
            <p>Sobre mi: {{ bio.about }}</p>
            <v-img v-for="(value, key) in bio.pic" :key="key" :lazy-src="value" :src="value" alt></v-img>
            <p>Role: {{ bio.role }}</p>
            <p>Mis conocimientos</p>
            <ul>
                <li v-for="skill in bio.skills" :key="skill.id">{{ skill.name }}</li>
            </ul>
            <p>Mi educación</p>
            <ul>
                <li v-for="course in bio.education" :key="course.id">
                    <span>{{ course.name }}</span>
                    <span>{{ course.location }}</span>
                    <span>{{ course.degree }}</span>
                    <span>{{ course.start_date }}</span>
                    <span>{{ course.end_date }}</span>
                </li>
            </ul>
           
        </v-container> -->
       <project-list></project-list>
    </v-app>
</template>

<script>
import portfolioApi from "@/services/portfolioApi";
import ProjectList from '@/components/ProjectList';
export default {
    name: "App",
    components: { ProjectList,},
    data: () => ({
        bio: null,
        loading: true,
    }),
    methods: {
        getBio() {
            portfolioApi
                .getBio(1)
                .then(data => {
                    this.bio = data;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    computed: {
        full_name() {
            return this.bio.name + " " + this.last_name;
        }
    },
    mounted() {
        this.getBio();
    }
};
</script>
