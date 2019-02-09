<template>
  <div id="theater-container">
    <el-header>
     <Header></Header>
    </el-header>
    <el-main id="theater-main-container">
      <el-row>
        <el-col :span="24">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../assets/theater_banner1.jpg" style="width: 100%; height: 500px;" class="image">
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import Header from './Header';

export default {
  name: 'Theater',
  components : {
    Header
  }
}

</script>

<style scoped>

#theater-main-container {
  padding-left: 10em;
  padding-right: 10em;
}
</style>
