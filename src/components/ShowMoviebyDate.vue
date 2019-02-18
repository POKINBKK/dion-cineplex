<template>
  <!--ตัววนสร้างลิสหนังตามวัน แบบรับวันกับเลขโรงหนังเข้ามา-->
  <div id="showmoviebydate-container">
    <el-row>
      <el-col>
        <div v-for="cinemadata in cinemaInfo" :key="cinemadata.cineplexId">
          <h1 v-if="cinemadata.cineplexId==cineplexId">{{cinemadata.cineplexName}}</h1>
        </div>
        <div v-for="cinema in cinemaInfo" :key="cinema.cineplexId">
          <!--วันที่ฉายตรงกัน-->
          <div v-if="cinema.cineplexId==cineplexId">
            <!--อันนี้ของโรงทั้งหมดในสาขา-->
            <div v-for="item in cinema.cineplexDetail" :key="item.theaterId">
              <!--อันนี้ของรอบฉายทั้งหมด-->
              <div v-for="theater in item.showTimeList" :key="theater.showDateId">
                <!--อันนี้เช็คว่าวันตรงกัน-->
                <div v-if="theater.showDateId==dateId">
                  <ShowTimeMCard v-bind:theaterId="theater"></ShowTimeMCard>
                <br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import theaterInfo from '../assets/theater.json'
import movieInfo from '../assets/movielist.json'
import ShowTimeMCard from './ShowTimeMCard'

export default {
  name: 'ShowMoviebyDate',
  components: {
    ShowTimeMCard
  },
  data (){
    return{
      cinemaInfo: theaterInfo.cineplexList,
    }
  },
  props: [ 'dateId','cineplexId' ]
}

</script>

<style scoped>

#theater-main-container {
  padding-left: 10em;
  padding-right: 10em;
}
</style>
