<template>
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
</template>
<script>
export default {
    name: "ContactForm",
    props: {
        contact: Object,
        emailRules: Array,
        mensajeRules: Array,
        nameRules: Array,
        valid: Boolean
    }
};
</script>
<style lang="scss" scoped>
</style>