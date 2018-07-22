
<template>
  <div class="about">
    <h1>{{$t("about.title")}}</h1>
    <div class="test1">
        asf;lajsdfkasjdfl;kasjdfalskfd<span>jalskfj</span>aslfkasjflkasjfdlkasd
    </div>
    <div class="test2">
        asf;lajsdfkasjdfl;kasjdfalskfd<span>jalskfj</span>aslfkasjflkasjfdlkasd
    </div>
    <el-date-picker
      v-model="value1"
      type="date"
      :placeholder="$t('date.placeholder')">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:''
    }
  }
}
</script>

<style scoped lang="less">
  .about{
    .h1{
      font-size:12px;
      color:red;
    }
    .test1{
      span{
        color:green;
      }
    }
    .test2{
      span{
        color:blue;
      }
    }
  }
</style>
