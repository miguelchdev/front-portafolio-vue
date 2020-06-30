<template>
    <div class="bg-dark d-flex flex-grow-1">
        <v-container class=" px-sm-12 px-5 padding-y parent-height ">
            <h1 class="text-sm-center text-center">{{project.title}}</h1>
            <v-parallax
                class="my-5"
                :src="cover"
            ></v-parallax>
            <!-- <v-carousel
                cycle
                height="400"
                class="my-5"
                hide-delimiter-background
                show-arrows-on-hover
            >
                <v-carousel-item
                    v-for="image in project.images"
                    :key="image.id"
                    :src="image.file"
                    transition="fade-transition"
                >

                </v-carousel-item>
            </v-carousel> -->
            <div class="d-flex justify-space-between">
                <div class="flex-grow-1 flex-shrink-1">
                    <h3 class="text-uppercase font-weight-bold text-center">{{$t("project.date")}}</h3>
                    <p class="text-center  py-1">-{{$d(new Date(project.date),'short')}}</p>
                </div>
                <div class="flex-grow-1">
                    <h3 class="text-uppercase font-weight-bold text-center">{{$t("project.technologys")}}</h3>
                    <div class="d-flex justify-center flex-wrap py-1">
                        <p
                            :key="key"
                            class="text-center px-1"
                            v-for="(item,key) in project.technologys"
                        >{{item}}</p>
                    </div>

                </div>
            </div>
            <h2 class="text-center font-weight-bold">Descripción</h2>
            <p class="text-justify py-5">{{project.description}}</p>
            <h2 class="text-sm-center text-center">{{$t('project.gallery')}}</h2>
            <v-row  class="mx-auto">
                <v-col
                    v-for="{id,file,alt} in project.images"
                    :key="id"
                    md="4"
                    cols="6"
                >
                <v-hover v-slot:default="{hover}">
                    <v-card
                    dark
                        flat
                        tile
                        class="d-flex"
                        :elevation="hover ? 24 : 4"
                    >
                        <v-img
                            :src="file"
                            :alt="alt"
                            :aspect-ratio="4/3"
                        ></v-img>
                    </v-card>
                     </v-hover>
                </v-col>
            </v-row>
            <div class="text-center pt-12">
                <v-hover v-slot:default="{hover}">

               
                <v-btn
                    dark
                    tile
                    large
                    :elevation="hover ? 24 : 8"
                    class=" py-5 mx-auto"
                >
                    {{ $t("project.button-go") }}
                </v-btn>
                 </v-hover>
            </div>

        </v-container>

    </div>
</template>

<script>
export default {
    name: "ProjectView",
    props: {
        project: {
            type: Object,
            required: true,
            default() {
                return { images: [{ file: "", alt: "" }] };
            }
        }
    },
    computed: {
        cover(){
            return this.project.images[0].file;
        }
    }
};
</script>
<style lang="scss" scoped>
.full-view {
    min-height: 100vh;
}
// *{
//     outline: 1px solid red;
// }
</style>