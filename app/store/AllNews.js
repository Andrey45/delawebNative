import axios from 'axios'
export default {
  state:{
    new:[]
  },
  actions:{
    loadingAll(cont){
      axios
          .get(
              "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3501589432fb4372a19a8ddf132d6952"
          )
          .then(res => {
            cont.commit('loadingTop', res.data.articles)
          })
    }
  },
  mutations:{
    loadingAll(state, news){
      state.new = news
    }
  },
  getters:{
    allnews(state){
      return state.new
    }
  }
}
