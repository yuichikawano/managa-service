<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                <v-card elevation="13" tile>
                    <v-card-title>Hello World !</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-app>
            <v-form>
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="model.account" label="account name" required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field v-model="model.name" label="user name" required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field v-model="model.email" label="E-mail" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-row>
                    <v-btn block elevation="2" @click="signupHandler">新規登録</v-btn>
                </v-row>
                <v-row>
                    <v-btn block elevation="2" @click="$router.push('/hello')">戻る</v-btn>
                </v-row>
            </v-form>
        </v-app>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
    components: {},
})
export default class PageSignin extends Vue {
    model = {
        account: '',
        name: '',
        email: '',
    }

    async signupHandler() {
        const res = await this.$axios.$post('/user/signup', this.model)
    }
}
</script>

<style lang="stylus"></style>
