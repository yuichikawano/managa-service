<template>
    <div>
        <div class="header">
            <v-app-bar app>
                <v-app-bar-nav-icon @click="sidebarOpenFlag = !sidebarOpenFlag" />

                <v-toolbar-title>Application</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-app-bar>
        </div>
        <div class="content">
            <v-card v-if="sidebarOpenFlag" width="256" class="side-bar">
                <v-navigation-drawer permanent>
                    <v-list-item>
                        <v-list-item-content>
                            <v-btn v-if="!$store.getters['user/user']" elevation="2" @click="test">login</v-btn>
                            <v-btn v-else elevation="2" @click="logoutHandler">logout</v-btn>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>

                    <v-list dense nav>
                        <v-list-item v-for="item in items" :key="item.title" link>
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-card>
            <nuxt-child />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {},
})
export default class PageIndex extends Vue {
    sidebarOpenFlag: boolean = false
    test() {}

    async logoutHandler() {
        await this.$store.dispatch('user/signoutUser')
        this.$store.dispatch('user/removeSession')
        this.$router.push('/hello')
    }
}
</script>

<style lang="stylus">
.content
    margin-top 65px
    display flex
    height 100vh
    .side-bar
        height 100%
</style>
