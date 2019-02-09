<template>
  <el-row>
    <div v-for="cinema in cinemaInfo" :key="cinema.cineplexId">
      <div v-if="Cid==cinema.cineplexId">
        <el-col class="picker-item-first" :span="4">
          <p>กรุณาเลือกวัน</p>
        </el-col>
        <div v-for="item in cinema.cineplexDetail[0].showTimeList" :key="item.ShowDateId">
          <el-col class="picker-item" :span="4">
            <el-button class="day-card" icon="el-icon-date" v-on:click="showTimeView(item.showDateId)" type="primary" plain>{{ item.showDate }}</el-button>
          </el-col>
        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
import theaterInfo from '../assets/theater.json';
export default {
  name: 'ShowDate',
  props: ['Cid'],
  data() {
    return{
      cinemaInfo: theaterInfo.cineplexList
    }
  },
  methods: {
    showTimeView(dateView){
      console.log(dateView)
    }
  }
}
</script>

<style scope>
 .day-card {
   text-align: center;
 }
 .picker-item{
   margin-left: -3em;
 }
</style>

