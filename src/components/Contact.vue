<template>
    <div class="bg-dark full-view">
        <v-container class="px-sm-12 px-5 padding-y parent-height d-flex flex-column">
            <h1 class="text-sm-justify text-center">{{ title }}</h1>
            <p class="description-services ">{{ servicesDescription }}</p>
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
                                v-model="name"
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
                                v-model="email"
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
                                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                                v-model="mensaje_input"
                                :rules="mensaje_rules"
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
                >

                    <v-card>
                        <v-card-title primary-title>
                            <p class="display-1 text--primary">
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
export default {
    name: "Contact",
    data: () => ({
        title: "Contact ME",
        servicesDescription:
            "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus rutrum sapien eget scelerisque. Nullam vel leo congue, ultricies arcu eu, rutrum est. Fusce sollicitudin, arcu id vulputate fermentum, lacus ipsum ultricies odio, vel tincidunt sapien nibh ac felis. Maecenas a nisi sit amet dolor sodales hendrerit. Mauris ut sodales felis ",
        name: "",
        lastName: "",
        dialog: false,
        phone: "",
        email: "",
        aeronave: null,
        pasajeros: 1,
        origen: "",
        destino: "",
        error_messages: {
            missing: "Debe ingresar un {}.",
            invalid: "Debe ingresar un {} valido",
            missing_option: "Debe seleccionar una opción."
        },
        mensaje_input: "",
        valid: false,
        aeropuertos_seleccionados: [],
        menu2: false,
        menu: false,
        dialogTitle: "",
        dialogBody: ""
    }),
    computed: {
        nameRules() {
            return [
                v => !!v || this.error_messages.missing.replace("{}", "nombre"),
                v =>
                    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(
                        v
                    ) || this.error_messages.invalid.replace("{}", "nombre")
            ];
        },
        lastNameRules() {
            return [
                v =>
                    !!v ||
                    this.error_messages.missing.replace("{}", "apellido"),
                v =>
                    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(
                        v
                    ) || this.error_messages.invalid.replace("{}", "apellido")
            ];
        },
        emailRules() {
            return [
                v => !!v || this.error_messages.missing.replace("{}", "email"),
                v =>
                    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
                        v
                    ) || this.error_messages.invalid.replace("{}", "email")
            ];
        },
        phoneRules() {
            return [
                v =>
                    !!v ||
                    this.error_messages.missing.replace(
                        "{}",
                        "número de teléfono"
                    ),
                v =>
                    /^(0\d{10}|0\d{3}\-\d{7}|58\d{10}|58\-\d{3}\-\d{7})$/.test(
                        v
                    ) ||
                    this.error_messages.invalid.replace(
                        "{}",
                        "número de teléfono"
                    )
            ];
        },
        mensaje_rules() {
            return [
                v =>
                    !!v || this.error_messages.missing.replace("{}", "mensaje"),
                v => v.length > 20 || "Mensaje muy corto"
            ];
        },
        message() {
            return `Nombre:${this.name}\nApellido:${this.lastName}\nTeléfono:${this.phone}\nCorreo Electrónico:${this.email}\n\n${this.mensaje_input}`;
        },
        formValues() {
            return {
                from_email: this.email,
                to_email: "info@victoryfly.com",
                body: this.message,
                subject: `Nuevo mensaje  de: ${this.name} ${this.lastName}`
            };
        }
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                EmailApi.sendEmail(this.formValues)
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