export default {
  setUserTokens (state, userTokens) {
    state.userTokens = userTokens
  },
  setUserReportCount (state, userReportCount) {
    state.userReportCount = userReportCount
  },
  setTransactions (state, transactions) {
    state.transactions = transactions
  },
  setReferrals (state, referrals) {
    state.referrals = referrals
  },
  setUserRank (state, userRank) {
    state.userRankObj = userRank
	state.userRank = userRank.user_rank
  },
  setUserCount (state, userCount) {
    state.userCount = userCount
  },
  setTokensDistributed (state, tokensDistributed) {
    state.tokensDistributed = tokensDistributed
  },
  setRewardedActivityCount (state, rewardedActivityCount) {
    state.rewardedActivityCount = rewardedActivityCount
  },
  setLeaderboard (state, leaderboard) {
    state.leaderboard = leaderboard
  },
  setExtendedLeaderboard (state, leaderboard) {
    state.extLeaderboard = leaderboard
  },
  setReports (state, reports) {
    state.reports = reports
  },
  setTopDelegators (state, topDelegators) {
    state.topDelegators = topDelegators
  },
  setModerators (state, moderators) {
    state.moderators = moderators
  },
  setAmbassadors (state, ambassadors) {
    state.ambassadors = ambassadors
  },
  setProfessionals (state, professionals) {
	state.professionals = professionals
  },
  setProducts (state, products) {
	state.products = products
  },
  setRealProducts (state, realProds) {
	state.realProducts = realProds
  },
  setGadgetStats (state, gadgetStats) {
	state.gadgetStats = gadgetStats
  },
  setActiveReport (state, report) {
    state.activeReport = report
  },
  setEditReport (state, report) {
    state.editReport = report
  },
  setMoreReportsAvailable (state, moreReportsAvailable) {
    state.moreReportsAvailable = moreReportsAvailable
  },
  setUserReports (state, userReports) {
    state.userReports = userReports
  },
  setMoreUserReportsAvailable (state, moreUserReportsAvailable) {
    state.moreUserReportsAvailable = moreUserReportsAvailable
  },
  setNews (state, news) {
    state.news = news
  },
  setActiveNews (state, activeNews) {
    state.activeNews = activeNews
  },
  setVoteWeight (state, weight) {
    state.voteWeight = weight
  },
  setPostToVote (state, post) {
    state.postToVote = post
  },
  setNewlyVotedPosts (state, newlyVotedPosts) {
    state.newlyVotedPosts = newlyVotedPosts
  },
  setCommentEntries (state, commentEntries) {
    state.commentEntries = commentEntries
  },
  setCommentCountToday (state, commentCountToday) {
    state.commentCountToday = commentCountToday
  },
  setStdLoginUser (state, stdLoginUser){
	state.stdLoginUser = stdLoginUser;
  },
  setBchain (state, bchain) {
	state.bchain = bchain;
  },
  setCartEntries (state, entries) {
	state.cartEntries = entries;
  },
  addCartEntry (state, entry){
	//if this new addition is following a prior purchase, need to reset the cart
	if (state.purchaseSuccess){
		state.purchaseSuccess = false;
		state.cartEntries = [];
	}
	state.cartEntries.push(entry);
	return true;
  },
  removeCartEntry (state, entry){
	state.cartEntries = state.cartEntries.filter( obj => obj._id !== entry._id);
  },
  clearCart (state){
	state.cartEntries = [];
  },
  setPurchaseSuccess (state, _purchaseSuccess) {
	state.purchaseSuccess = _purchaseSuccess;
  }
}
