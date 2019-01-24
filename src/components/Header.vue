<template>
  <div id="header-container">
    <!--logo and singin/signup Section-->
    <el-row class="header-asset-container" type="flex" justify="space-between">
      <el-col :span="6"><div></div></el-col>
      <el-col :span="6" class="header-image-container">
        <img src="../assets/logo.png" width="150px">
      </el-col>
      <el-col :span="6" class="signin-signup-container">
        <el-button round icon="el-icon-circle-check-outline">เข้าสู่ระบบ / สมัครสมาชิก</el-button>
      </el-col>
    </el-row>
    <!--menu Section-->
    <el-row class="header-menu-container">
      <el-col :span="24">
      <el-menu :default-active="activeIndex" mode="horizontal" class="head-menu" @select="handleSelect">
        <el-menu-item index="1">หน้าแรก</el-menu-item>
         <el-submenu index="2">
          <template slot="title">ภาพยนตร์</template>
          <el-menu-item index="2-1">กำลังฉาย</el-menu-item>
          <el-menu-item index="2-2">โปรแกรมหน้า</el-menu-item>
         </el-submenu>
        <el-menu-item index="3">โรงภาพยนตร์</el-menu-item>
      </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key);
        if(key == "1"){

        }
      }
    }
  }
</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
  .header-image-container {
    text-align: center;
  }
  .signin-signup-container {
    padding-top: 8px;
  }
  .head-menu {
    padding-left: 40%;
  }
</style>
