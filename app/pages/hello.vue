<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                <v-card elevation="13" tile>
                    <v-card-title>Hello World !</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="model.email" label="E-mail" required></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="model.password" label="password" required></v-text-field>
                </v-col>
                <v-col>
                    <v-btn elevation="2" raised @click="loginHandler">login</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-btn block elevation="2" @click="$router.push('/signin')">新規登録はこちら</v-btn>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {},
})
export default class PageIndex extends Vue {
    model = {
        password: '',
        email: '',
    }

    async loginHandler() {
        try {
            await this.$store.dispatch('user/signinUser', {
                ...this.model,
            })
            this.$router.push('/content')
        } catch (e) {
            console.log('e', e)
        }
    }
}
</script>

<style lang="stylus"></style>
