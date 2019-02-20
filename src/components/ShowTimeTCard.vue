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
      if(JSON.parse(window.localStorage.loginstate)  == true){
        this.$router.push({name: 'SelectSeat',params :{id: id}})
      } else {
          this.$notify({
          title: 'กรุณาเข้าสู่ระบบ',
          message: 'ท่านจำเป็นต้องเข้าสู่ระบบจึงจะเลือกที่นั่งได้',
          type: 'warning',
          position: 'top-left'
        });
      }
    }
  }
}
</script>

<style scoped>

</style>
