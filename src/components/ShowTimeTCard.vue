<template>
  <div id="showtimetcard-container">
    <el-card>
      <el-row>
        <el-col :span="4">
          <div>โรงภาพยนตร์ที่ {{showTimeData.theaterId}}</div>
        </el-col>
        <el-col :span="2" v-for="round in showTimeData.showTime" :key="round.showTimeId">
          <el-button @click="roundSelect(round.showTimeId)">{{round.showTime}}</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>  
</template>

<script>
export default {
  name: 'ShowTimeTCard',
  props: ['showTimeData'],
  methods: {
    roundSelect(id){
      this.$router.push({name: 'SelectSeat',params :{id: id}})
    }
  }
}
</script>

<style scoped>

</style>
