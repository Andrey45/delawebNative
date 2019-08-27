<template>
  <Page>
    <ActionBar title="News" class="action-bar">
      <NavigationButton text="Home" android.systemIcon="ic_menu_back" @tap="concel"/>
    </ActionBar>
    <ScrollView class="news">
      <WebView :src="open"/>
    </ScrollView>
  </Page>
</template>

<script>
  export default {
    props:['dat'],
    methods:{
      concel(){
        this.$navigateBack()
      },
    },
    computed:{
      open(){
        return this.dat
      }
    }
  }
</script>

<style scoped>
  .news{
    font-size: 22px;
    background-color: #212121;
  }
</style>
