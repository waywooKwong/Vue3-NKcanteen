import { createStore } from 'vuex'

const store = createStore({
  state() {
    // 尝试从本地存储中获取 windowID，如果不存在则默认为 null
    const savedWindowID = localStorage.getItem('windowID')
    return {
      windowID: savedWindowID ? savedWindowID : null
    }
  },
  mutations: {
    setWindowID(state, windowID) {
      // 更新 state 中的 windowID
      state.windowID = windowID
      // 同时将更新后的 windowID 存储到本地存储中
      localStorage.setItem('windowID', windowID)
    }
  },
  getters: {
    getWindowID(state) {
      return state.windowID
    }
  }
})

export default store
