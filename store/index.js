import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null, // logged in user, via steemconnect
      userTokens: 0, // logged-in user's token count
      userCount: 0, // users using actifit
      tokensDistributed: 0, // total amount of distributed tokens
      rewardedActivityCount: 0, // total amount of activity posts
      leaderboard: [] // top users
    },
    getters,
    mutations,
    actions
  })
}

export default createStore
