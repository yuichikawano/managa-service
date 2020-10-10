import { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface State {}
export const state = (): State => ({})

export type RootState = ReturnType<typeof state>
export const actions: ActionTree<State, RootState> = {}
export const mutations: MutationTree<State> = {}
export const getters: GetterTree<State, RootState> = {}
