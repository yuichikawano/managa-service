import { NuxtCookies } from 'cookie-universal-nuxt'
import { ApiInstance } from '~/apis/$api'
import { accessorType } from '~/store'

declare module '@nuxt/types' {
    interface Context {
        $api: ApiInstance
        $cookies: NuxtCookies
        $accessor: typeof accessorType
    }

    interface NuxtAppOptions {
        $api: ApiInstance
        $cookies: NuxtCookies
        $accessor: typeof accessorType
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $api: ApiInstance
        $cookies: NuxtCookies
        $accessor: typeof accessorType
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $api: ApiInstance
        $cookies: NuxtCookies
        $accessor: typeof accessorType
    }
}
