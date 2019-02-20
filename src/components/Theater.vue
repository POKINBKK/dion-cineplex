<template>
  <!--หน้า theater ที่จะมีหนังให้เลือก-->
  <div id="theater-container">
    <el-header>
     <Header></Header>
    </el-header>
    <el-main id="theater-main-container">
    <!--DatePicker section-->
    <el-row>
      <div v-for="cinema in cinemaInfo" :key="cinema.cineplexId">
        <div v-if="cinemaId==cinema.cineplexId">
          <el-col class="picker-item" :span="24">
            <el-tabs type="card" @tab-click="handleClick" v-model="activeName">
              <el-tab-pane v-for="item in cinema.cineplexDetail[0].showTimeList" :key="item.showDateId" :label="item.showDate" :name="item.showDateId">
                <ShowMoviebyDate v-bind:dateId="item.showDateId" v-bind:cineplexId="cinemaId"></ShowMoviebyDate>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </div>
      </div>
    </el-row>
    <!---->
    </el-main>
  </div>
</template>

<script>
import Header from './Header'
import ShowMoviebyDate from './ShowMoviebyDate'
import theaterInfo from '../assets/theater.json'
import movieInfo from '../assets/movielist.json'

export default {
  name: 'Theater',
  components : {
    Header,
    ShowMoviebyDate
  },
  data (){
    return{
      activeName: "27022019",
      cinemaId: this.$route.params.id,
      cinemaInfo: theaterInfo.cineplexList,
    }
  },
  methods: {
  }
}

</script>

<style scoped>

#theater-main-container {
  padding-left: 10em;
  padding-right: 10em;
}
</style>
