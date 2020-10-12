<template>
    <div>
        PageContentIndex
        {{ $store.getters['user/user'] }}
        <nuxt-child />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {},
})
export default class PageContentIndex extends Vue {}
</script>

<style lang="stylus"></style>
