import { ActionContext, Store } from 'vuex'
import { NuxtCookies } from 'cookie-universal-nuxt'

type Dictionary<T> = { [key: string]: T }

export interface ApplicationContext {
    $cookies: NuxtCookies
    $html2canvas: any
    $copyText: (
        text: string,
        container?: object | HTMLElement
    ) => Promise<{
        action: string
        text: string
        trigger: String | HTMLElement | HTMLCollection | NodeList
        clearSelection: () => void
    }>
    $customFilters: {
        shortAgeFormat: (value: string | null) => string
        detailAgeFormat: (value: string | null) => string
    }
    $templateCommon: {
        countMaxSpaces: (rows: string[]) => number
        renderTemplate: (templates: string[][][]) => string
        arrangeString: (column: string, spaces: number) => string
    }
}

export interface NuxtContext {
    $cookies: NuxtCookies
    $html2canvas: any
}

declare module 'vuex/types' {
    interface ActionContext<S, R> extends ApplicationContext {}

    interface Store<S> extends NuxtContext {}
}

declare module '@nuxt/types' {
    interface Context extends ApplicationContext {}

    interface NuxtAppOptions extends ApplicationContext {}
}

declare module 'vue/types/vue' {
    interface Vue extends ApplicationContext {}
}

declare module 'vuex/types/index' {
    interface Store<S> extends NuxtContext {}
}
