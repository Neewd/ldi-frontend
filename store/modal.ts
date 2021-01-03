export interface ModalState {
    open: boolean;
    componentName: string;
}

export const state: () => ModalState = () => ({
    open: false,
    componentName: ''
})

export const getters = {
    open: (state: ModalState) => state.open,
    componentName: (state: ModalState) => state.componentName
}

export const mutations = {
  SET_OPEN (state: ModalState, open: boolean) {
    state.open = open
  },

  SET_COMPONENT_NAME (state: ModalState , name: string) {
    state.componentName = name
  }
}

export const actions = {
  async openModal ({ commit }: { commit: Function }, data: { duration: number, componentName: string}) {

    commit('SET_COMPONENT_NAME', data.componentName)

    commit('SET_OPEN', true)
    if (data.duration) {
        setTimeout(() => (
            commit('SET_OPEN', false)
        ), data.duration)
    }

  },

  async closeModal ({ commit }: { commit: Function }) {
    commit('SET_OPEN', false)
  }

}