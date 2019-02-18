<template>
  <!--หน้าเลือกโรงที่มี 2 โรง-->
  <div id="theaterlist-container">
    <el-header>
     <Header></Header>
    </el-header>
    <el-main id="theaterlist-main-container">
      <el-row v-for="item in theaterList" :key="item.cineplexId">
        <el-col :span="24" >
          <el-card :body-style="{ padding: '0px' }" class="theater-card" >
            <img v-bind:src="item.cineplexBanner" style="width: 100%; height: 300px;" class="image">
            <el-button type="primary" icon="el-icon-location" style="width: 100%; margin-top: -1em;" @click="theaterSelect(item.cineplexId)">Select Theater</el-button>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import Header from './Header'
import json from '../assets/theater.json'

export default {
  name: 'TheaterList',
  components : {
    Header
  },
  methods: {
    theaterSelect (cineplexId) {
      this.$router.push({name: 'Theater',params :{id: cineplexId}})
    }
  },
  data () {
    return {
      theaterList: json.cineplexList
    }
  } 
}

</script>

<style scoped>

#theaterlist-main-container {
  padding-left: 10em;
  padding-right: 10em;
}

.theater-card {
  margin-bottom: 2em;
}
</style>
