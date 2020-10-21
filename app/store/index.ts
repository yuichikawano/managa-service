import { getAccessorType, getterTree, mutationTree, actionTree } from 'typed-vuex'
import { Store } from 'vuex'
import { IAxiosError } from '~/types/errorResponse'
import * as user from '~/store/user'
import * as api from '~/store/api'
export async function hookLoading<T, R>(store: Store<R>, running: () => Promise<T>, isAnimation = true): Promise<T> {
    try {
        if (isAnimation) {
            // store.commit('startLoading')
        }
        return await running()
    } catch (reason) {
        reason.message = errorText(store, reason)
        throw reason
    } finally {
        if (isAnimation) {
            // store.commit('finishLoading')
        }
    }
}

export const errorText = <R>(store: Store<R>, reason: IAxiosError): string => {
    const code = reason.response?.data?.errorCode
    if (!code && code !== 0) {
        if (reason.response?.data?.error === 'Bad Request')
            return `(400) ${reason.response?.data?.message.reduce((prev, cur) => `${prev} ${cur}`, '')}`
        return 'エラーが発生しました'
    }

    return `(${reason.response?.data?.errorCode}) ` + reason.response?.data?.message?.[0]
}

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {})

export const actions = actionTree({ state, getters, mutations }, {})

export const accessorType = getAccessorType({
    state,
    getters,
    mutations,
    actions,
    modules: {
        // cart,
        // shop,
        // dtphotos,
        // mygoods,
        user,
        api,
    },
})
