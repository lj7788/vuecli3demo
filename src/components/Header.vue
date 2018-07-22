<template>
    <div id="header">
        <div class="lng" @click="changeLang">En</div>
    </div>
</template>

<script>
export default {
    methods:{
        changeLang(){
           var lng=this.$i18n.locale
           lng=lng=="en"?"cn":"en"
           this.$i18n.locale=lng
           window.localStorage.setItem('language', lng)
        }
    }
}
</script>

<style lang="less" scoped>
 #header{
    .lng{
    position:absolute;
    top:10px;
    right:10px;
    display: inline-block;
    border:solid 1px #555;
    background-color: #ccc;
    border-radius: 3px 3px;
    text-align: center;
    padding:3px;
    font-size:12px;
    cursor: pointer;
  }
 }
</style>
