<template>
  <ListView class="list-group home" for="country in allNews" @itemTap="onItemTap">
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
</template>

<script>
  import axios from "axios";
  import News from "./news";
  export default {
    components: { News },
    mounted() {
      axios
          .get(
              "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3501589432fb4372a19a8ddf132d6952"
          )
          .then(
              result => {
                this.allNews = result.data.articles;
              },
              error => {
                console.error(error);
              }
          )
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
    },
    data() {
      return {
        allNews: []
      }
    }
  }
</script>

<style scoped>
  .home{
    background-color: #212121;
  }
  .imgcircle {
    width: 100%;
    height: auto;
  }

</style>
