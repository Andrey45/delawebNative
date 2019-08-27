<template>
  <Page class="page">
    <ActionBar class="action-bar" >
      <Label :text="NavTitle"/>
    </ActionBar>
    <DockLayout stretchLastChild="true" backgroundColor="#3c495e">
      <StackLayout dock="bottom" height="64">
        <FlexboxLayout class="navigation" height="80">
          <WrapLayout orientation="vertical" width="33%" @tap="updatePage('home')">
            <Label text=" ☗ " width="100%" height="35" class="top" />
            <Label text="Home" width="100%" height="24" class="bottom" />
          </WrapLayout>
          <WrapLayout orientation="vertical" width="33%" @tap="updatePage('topNews')">
            <Label text="⚑" width="100%" height="35" class="top" />
            <Label text="Top News" width="100%" height="24" class="bottom" />
          </WrapLayout>
          <WrapLayout orientation="vertical" width="34%" @tap="updatePage('allNews')">
            <Label text="▤" width="100%" height="35" class="top" />
            <Label text="All News" width="100%" height="24" class="bottom" />
          </WrapLayout>
        </FlexboxLayout>
      </StackLayout>
        <home v-if="page == 'home'" />
      <StackLayout class="home">
        <top-news v-if="page == 'topNews'" />
      </StackLayout>
      <ScrollView class="home">
        <all-news v-if="page == 'allNews'" />
      </ScrollView>
    </DockLayout>
  </Page>
</template>

<script>
  import home from './home';
  import topNews from './topNews';
  import allNews from './allNews';
  import { mapActions} from 'vuex'
  export default {
    data () {
      return {
        page: 'home',
      };
    },
    components: {
      home,
      topNews,
      allNews
    },
    created() {
      this.loadingTop()
      this.loadingAll()
    },
    computed:{
      NavTitle(){
        switch (this.page) {
          case "home":
            return 'Home'
          case "topNews":
            return 'Top News'
          case "allNews":
            return 'All News'
        }
      }
    },
    methods: { // Определяем какой компонет должен отображаться
      ...mapActions(['loadingTop','loadingAll']),
      updatePage: function(newpage) {
        this.page = newpage;
      }
    }
  }

</script>

<style lang="scss">
  .home{
    background-color: #212121;
  }
  .action-bar{
    background: #414141;
  }
  .navigation {
    width: 100%;
    color: #347bcb;
    text-align: center;
    WrapLayout {
      color: #fff;
      background: #414141;
      height: 50px;
      display: block;
      &.add {
        background: #b86bd7;
      }
      &:active{
        color: orange;
      }
    }
    .top {
      padding: 10px 0 0 0;
      font-size: 20px;
    }
    .bottom {
      padding: 0 0 10px 0;
      font-size: 16px;
    }
    .icon {
      width: 100%;
      display: block;
    }
  }
</style>
