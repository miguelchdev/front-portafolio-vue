<template>
    <div class="bg-dark full-view">
        <v-container class="px-sm-12 px-5 padding-y parent-height d-flex flex-column">
            <h1
                v-if="title"
                class="text-sm-justify text-center"
            >{{ title }}</h1>
            <p
                v-if="page_contents"
                class="description-services "
            >{{ page_contents.description }}</p>
            <v-container>

                <v-form
                    ref="form"
                    v-model="valid"
                >
                    <v-row>
                        <v-col
                            cols="12"
                            md="4"
                        >
                            <v-text-field
                                v-model="contact.name"
                                label="Nombre"
                                :rules="nameRules"
                                class="mb-3"
                                required
                                type="text"
                                dark
                            ></v-text-field>
                        </v-col>
                        <v-col
                            md="4"
                            cols="12"
                        >
                            <v-text-field
                                dark
                                v-model="contact.email"
                                label="Correo electrónico"
                                :rules="emailRules"
                                class="mb-3"
                                required
                                type="email"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            md="8"
                            cols="12"
                        >
                            <v-textarea
                                dark
                                auto-grow
                                label="Mensaje"
                                class="mb-3"
                                v-model="contact.message"
                                :rules="mensajeRules"
                            ></v-textarea>
                        </v-col>
                    </v-row>

                </v-form>
                <v-btn
                    :disabled="!valid"
                    dark
                    large
                    class="mt-4 mx-auto"
                    @click="validate"
                >
                    Enviar mensaje
                </v-btn>

                <v-dialog
                    v-model="dialog"
                    width="500"
                    dark
                >

                    <v-card>
                        <v-card-title primary-title>
                            <p class="display-1">
                                {{dialogTitle}}
                            </p>

                        </v-card-title>
                        <v-spacer></v-spacer>
                        <v-card-text>
                            {{dialogBody}}
                        </v-card-text>

                    </v-card>
                </v-dialog>

            </v-container>
        </v-container>
    </div>
</template>

<script>
import portfolioApi from "@/services/portfolioApi";

import { checkEmail, checkName } from "@/helpers";

export default {
    name: "Contact",
    props: { title: String, images: Object, page_contents: Object },
    data() {
        return {
            dialog: false,

            error_messages: {
                missing: "Debe ingresar un {}.",
                invalid: "Debe ingresar un {} valido",
                missing_option: "Debe seleccionar una opción."
            },
            contact: {
                name: "",
                message: "",
                email: ""
            },

            valid: false,
            dialogTitle: "",
            dialogBody: ""
        };
    },
    computed: {
        nameRules() {
            const { invalid, missing } = this.error_messages;
            return [
                (v => !!v || missing.replace("{}", "nombre"),
                v => checkName(v) || invalid.replace("{}", "nombre"))
            ];
        },
        emailRules() {
            const { invalid, missing } = this.error_messages;
            return [
                v => !!v || missing.replace("{}", "email"),
                v => checkEmail(v) || invalid.replace("{}", "email")
            ];
        },
        mensajeRules() {
            const { missing } = this.error_messages;
            return [
                v => !!v || missing.replace("{}", "mensaje"),
                v => v.length > 20 || "Mensaje muy corto"
            ];
        },
        formValues() {
            const { email, message, name } = this.contact;
            return {
                from_email: email,
                to_email: "miguelchdev@gmail.com",
                body: message,
                subject: `Nuevo mensaje  de: ${name}`
            };
        }
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                portfolioApi
                    .sendEmail(this.formValues)
                    .then(response => {
                        this.dialog = true;
                        this.dialogTitle = "Gracias";
                        this.dialogBody = "Su mensaje ha sido enviado.";
                    })
                    .catch(error => {
                        this.dialog = true;
                        this.dialogTitle = "Error";
                        this.dialogBody =
                            "Su solicitud no pudo ser procesada, intente más tarde.";
                    });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/responsive-breakpoints.scss";
.description-services {
    font-weight: 400;
    font-size: 1rem;
    color: var(--v-darkText-base);
    padding: 5% 0 3% 0%;
    word-wrap: break-word;
}
@include respond-above(sm) {
    @media (orientation: portrait) {
        .full-view {
            min-height: 70vh;
            height: auto;
        }
        .parent-height {
            min-height: inherit;
        }
    }
    @media (orientation: landscape) {
        .full-view {
            min-height: 100vh;
            height: auto;
        }
    }
}
</style>
