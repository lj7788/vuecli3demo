<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{$t("haha")}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VueI18n from 'vue-i18n'
export default {
  name: 'home',

  components: {
    HelloWorld
  },
  computed:{
    locale(){
      return this.$i18n.locale
    }
  }
}
</script>
