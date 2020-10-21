import { actionTree, getterTree, mutationTree } from 'typed-vuex'
import moment from 'moment'
// import { IUser, IMedia } from '~/types/user'
// import { HttpBadRequest } from '~/plugins/ns-elements'

export const namespaced = true

export const state = () => ({
    token: null,
    isGuest: true,
    user: null,
    proxyUser: null,
})

export const getters = getterTree(state, {
    user(state) {
        return state.user
    },
    token(state) {
        return state.token
    },
    isGuest(state) {
        return state.isGuest
    },
})

export type AccessibleType = 'create' | 'update' | 'read' | 'execute'

export type State = ReturnType<typeof state>

export const mutations = mutationTree(state, {
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
})

export const actions = actionTree(
    { state, getters, mutations },
    {
        // OK
        setToken(context, token) {
            context.commit('setToken', token)
        },
        async signinUser(context, params) {
            const session = await this.$axios.$post('/auth/signin', params)
            // cookie保存
            this.$cookies.set('__cred__', session.accessToken, {
                path: '/',
                expires: moment(session.expire).toDate(),
            })
            context.commit('setUser', session.user)
            return session
        },
        setSession(context, session) {
            // cookie保存
            // @ts-ignore
            this.$cookies.set('__cred__', session.accessToken, {
                path: '/',
                expires: moment(session.expires).toDate(),
            })
            // store保存
            context.commit('setUser', session.user)
        },
        // OK
        setUser(context, user) {
            // store保存
            console.log('setuser', user)
            context.commit('setUser', user)
        },
        async signoutUser(context) {
            try {
                // @ts-ignore
                await this.$axios.$get('/auth/signout')
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
            console.log('user', user)
            dispatch('setUser', user)
        },
    }
)
