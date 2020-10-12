<template>
    <v-container>
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="model.password" label="password" required></v-text-field>
                </v-col>
            </v-row>
        </v-container>
        <v-btn block elevation="2" @click="userActivateHandler">利用を開始する</v-btn>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
    components: {},
})
export default class PageActivateUUIDIndex extends Vue {
    model = {
        password: '',
        token: '',
    }

    userActivateHandler() {
        this.model.token = this.$route.params.uuid
        this.$axios.$post('/user/activate', { ...this.model })
        this.$router.push('/hello')
    }
}
</script>

<style lang="stylus"></style>
