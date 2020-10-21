<template>
    <div>
        PageContentIndex
        <nuxt-child />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {},
})
export default class PageContentIndex extends Vue {
    // test () {
    //     const test = this.$accessor.user.token
    // }
}
</script>

<style lang="stylus"></style>
