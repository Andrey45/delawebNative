<template>
  <ScrollView class="news">
    <StackLayout class="home-panel">
      <Label height="50" text="Top news" class="h1" />
      <ListView :height="heightTop" for="country in newsTop" class="list-group"
                @itemTap="onItemTap">
        <v-template>
          <FlexboxLayout flexDirection="column" class="list-group-item">
            <Image :src="country.urlToImage" class="imgcircle" />
            <Label textWrap="true" :text="country.title"
                   class="list-group-item-heading" />
            <Button text="Open" @tap="navigate(country.url)"
                    class="btn-outline" />
          </FlexboxLayout>
        </v-template>
      </ListView>
      <Label height="50" text="All news" class="h1" />
      <ListView :height="heightAll" class="list-group" for="country in newsAll"
                @itemTap="onItemTap">
        <v-template>
          <FlexboxLayout flexDirection="column" class="list-group-item">
            <Image :src="country.urlToImage" class="imgcircle" />
            <Label textWrap="true" :text="country.title"
                   class="list-group-item-heading" />
            <Button text="Open" @tap="navigate(country.url)"
                    class="btn-outline"/>
          </FlexboxLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </ScrollView>
</template>

<script>
  import axios from  'axios'
  import News from "./news"
  export default {
    components: { News },
    data:()=>({
      newsTop:[],
      newsAll: []
    }),
    computed: {
      heightTop() {// Определяем высоту списка исходя из колличества записей, одна запись = 325px 'единственный вызод что я нашел'
        return this.newsTop.length*325;
      },
      heightAll() {// Определяем высоту списка исходя из колличества записей, одна запись = 325px 'единственный вызод что я нашел'
        return  this.newsAll.length*325;
      }
    },
    mounted() {
      axios
          .get(
              "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3501589432fb4372a19a8ddf132d6952"
          )
          .then(res => {
            this.newsTop =res.data.articles
          })
      axios
          .get(
              "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3501589432fb4372a19a8ddf132d6952"
          )
          .then(res => {
            this.newsAll = res.data.articles
          })
    },
    methods: {
      onItemTap(event) {},
      navigate(arr) {// Функция ручной навигации, перенаправляет на компонент News и прередает в него props
        this.$navigateTo(News, {
          props: {
            dat: arr
          }
        })
      }
    }
  }
</script>

<style scoped>
  .news{
    background-color: #212121;
  }
  .home-panel {
    font-size: 22px;
    margin: 15px;
  }

  .h1 {
    margin: 30%;
    width: auto;
    color: white;
    font-size: 30px;
  }

  .imgcircle {
    width: 100%;
    height: auto;
  }

</style>
