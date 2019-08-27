import axios from 'axios'
export default {
  state:{
    topnews:[]
  },
  actions:{
    loadingTop(cont){
      axios
          .get(
              "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3501589432fb4372a19a8ddf132d6952"
          )
          .then(res => {
            cont.commit('loadingTop', res.data.articles)
          })
    }
  },
  mutations:{
    loadingTop(state, news){
      state.topnews = news
    }
  },
  getters:{
    TopNews(state){
      return state.topnews
    }
  }
}
