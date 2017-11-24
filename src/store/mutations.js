import Vue from 'vue'
import {
  RECEIVE_MAIN,
  RECEIVE_BRANDS,
  RECEIVE_CATEGORY,
  RECEIVE_USER
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
  [RECEIVE_USER] (state, {user}) {
    state.user = user
  }
}
