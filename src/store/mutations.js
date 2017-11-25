import Vue from 'vue'
import {
  RECEIVE_MAIN,
  RECEIVE_BRANDS,
  RECEIVE_CATEGORY,
  ADD_USER
} from './mutation-types'
export default {
  [RECEIVE_MAIN] (state, {main}) {
    state.main = main
  },
  [RECEIVE_BRANDS] (state, {brands}) {
    state.brands = brands
  },

  [RECEIVE_CATEGORY] (state, {category}) {
    state.category = category
  },
  [ADD_USER] (state, {user}) {
    state.user.push(user)
  }
}
