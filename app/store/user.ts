import { ActionTree, GetterTree, MutationTree } from 'vuex'
import moment from 'moment'
import { RootState } from '~/store/index'

export interface State {
    token: string | null
    isGuest: boolean
    user: any | null
    proxyUser: any | null
}

export const state = (): State => ({
    token: null,
    isGuest: true,
    user: null,
    proxyUser: null,
})

export type AccessibleType = 'create' | 'update' | 'read' | 'execute'

export const mutations: MutationTree<State> = {
    setToken(state, token) {
        state.token = token
    },
    setUser(state, user) {
        if (user !== null) {
            state.isGuest = false
            state.user = user
        } else {
            state.isGuest = true
            state.user = null
        }
    },
    setProxyUser(state, user) {
        state.proxyUser = user
        if (user !== null) {
            sessionStorage.proxyUser = JSON.stringify(user)
        } else if (sessionStorage.proxyUser) {
            delete sessionStorage.proxyUser
        }
    },
}

export const actions: ActionTree<State, RootState> = {
    // OK
    setToken(context, token) {
        context.commit('setToken', token)
    },
    async signinUser(context, params) {
        const session = await this.$axios.$post('/user/signin', params)
        // cookie保存
        this.$cookies.set('__cred__', session.credential, {
            path: '/',
            expires: moment(session.expires).toDate(),
        })
        context.commit('setUser', session.user)
        return session
    },
    setSession(context, session) {
        // cookie保存
        // @ts-ignore
        this.$cookies.set('__cred__', session.credential, {
            path: '/',
            expires: moment(session.expires).toDate(),
        })
        // store保存
        context.commit('setUser', session.user)
    },
    // OK
    setUser(context, user) {
        // store保存
        context.commit('setUser', user)
    },
    setProxyUser(context, user) {
        context.commit('setProxyUser', user)
    },
    async signoutUser(context) {
        try {
            // @ts-ignore
            await this.$axios.$post('/user/signout')
            // cookie保存
            // @ts-ignore
            this.$cookies.remove('__cred__', {
                path: '/',
            })
            // store保存
            context.commit('setUser', null)
            return Promise.resolve()
        } catch (e) {
            return Promise.reject(e)
        }
    },
    // OK
    removeSession(context) {
        // cookie保存
        // @ts-ignore
        this.$cookies.remove('__cred__', {
            path: '/',
        })
        // store保存
        context.commit('setUser', null)
        context.commit('setToken', null)
    },
    async loadMe({ dispatch }) {
        const user = await this.$axios.$get('/user/me')
        dispatch('setUser', user)
    },
}

export const getters: GetterTree<State, RootState> = {
    token(state): string | null {
        return state.token
    },
    isGuest(state): boolean {
        return state.isGuest
    },
    id(state): number | null {
        if (state.user) {
            return state.user.id
        } else {
            return null
        }
    },
    position(state): string | null {
        if (state.user) {
            return state.user.position
        } else {
            return null
        }
    },
    name(state): string | null {
        if (state.user) {
            return `${state.user.lastName} ${state.user.firstName}`
        } else {
            return null
        }
    },
    user(state): any | null {
        if (state.user) {
            return state.user
        } else {
            return null
        }
    },
    proxyUser(state): any | null {
        if (state.proxyUser) {
            return state.proxyUser
        } else {
            return null
        }
    },
    setting: (state) => (name: string) => {
        if (state.user && state.user.settings) {
            const setting = state.user.settings.find((it) => it.name === name)
            if (setting) {
                return setting.content
            } else {
                return null
            }
        } else {
            return null
        }
    },
}
