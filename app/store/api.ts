import { actionTree, getterTree, mutationTree } from 'typed-vuex'
import { AxiosResponse } from 'axios'
import { hookLoading } from '~/store/index'
export const namespaced = true

export const state = () => ({})

export type State = ReturnType<typeof state>

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {})

export const actions = actionTree({ state, getters, mutations }, {})
