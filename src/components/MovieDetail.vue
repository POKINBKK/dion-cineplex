<template>
  <div id="moviedetail-container">
  <el-header>
    <Header></Header>
  </el-header>
  <el-main>
    <div class="box-detail-container">
      <div class="box-detail">
        <div class="poster">
          <img v-bind:src="movieList[movieId-1].movieThumbnails">
        </div>
        <div class="detail">
          <div class="main-detail">
            <h1 class="name">{{movieList[movieId-1].movieTitle}}</h1>
          </div>
            <p class="gnere">หมวดหมู่: {{movieList[movieId-1].genre}}</p>
            <ul class="movie-detail-list">
              <li class="list-item" style="padding-left:0;">ความยาว: {{movieList[movieId-1].movieLength}} นาที</li>
              <br>
              <el-button icon="el-icon-caret-right" @click="centerDialogVisible = true" style="margin-top:30px;">ตัวอย่างภาพยนตร์</el-button>
            </ul>
          </div>
        </div>
              <el-dialog
      title="ตัวอย่างภาพยนตร์"
      :visible.sync="centerDialogVisible"
      width="51%"
      center>
      <span><iframe width="720" height="480" frameborder="0"
      v-bind:src="movieList[movieId-1].movieTrailer">
      </iframe></span>
      <span slot="footer" class="dialog-footer">
      <el-button icon="el-icon-circle-close" type="primary" @click="centerDialogVisible = false">ปิดหน้าต่าง</el-button>
      </span>
      </el-dialog>
      </div>
      <br>
      <div class="showtime-container">
        <el-row>
          <div v-for="cineplex in theaterList" :key="cineplex.cineplexId">
            <div v-for="theater in cineplex.cineplexDetail" :key="theater.theaterId">
              <div v-if='theater.screeningId == movieId && showTimestate'>
                <el-col :span="24">
                  <el-tabs type="card" @tab-click="handleClick" v-model="activeName">
                    <el-tab-pane v-for="showtime in theater.showTimeList" :key="showtime.showDateId" :label="showtime.showDate" :name="showtime.showDateId">
                      <div>
                        <h1> {{cineplex.cineplexName}}</h1>
                      </div>
                      <ShowTimeTCard v-bind:showTimeData="showtime"></ShowTimeTCard>
                    </el-tab-pane>
                  </el-tabs>
                </el-col>
              </div>
            </div>
          </div>
        </el-row>
      </div>
  </el-main>
  </div>
</template>

<script>
import Header from './Header'
import ShowTimeTCard from './ShowTimeTCard'
import moviejson from '../assets/movielist.json'
import theaterjson from '../assets/theater.json'

export default {
  name: 'MovieDetail',
  components: {
    Header,
    ShowTimeTCard
  },
  data(){
    if(this.$route.name == "NowShowingDetail"){
      return{
        activeName: "27022019",
        movieId: this.$route.params.id,
        movieList: moviejson.nowShowingList,
        theaterList: theaterjson.cineplexList,
        showTimestate: true,
        centerDialogVisible: false,
      }
    }
    if(this.$route.name == "ComingSoonDetail"){
      return{
        movieId: this.$route.params.id,
        movieList: moviejson.comingSoonList,
        theaterList: theaterjson.cineplexList,
        showTimestate: false,
        centerDialogVisible: false,
      }
    }
  }
}
</script>

<style scoped>
    .box-detail-container{
        margin-left: 8.333333%;
        width: 83.333333%;
        /* float: left; */
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
        box-sizing: border-box;
    }
    .box-detail{
        background-color: #fff;
        border-radius: 5px;
        margin-top: 40px;
        margin-bottom: 40px;
        padding: 0 50px 0 100px;
        box-shadow: 0 2px 4px 0 hsla(180,1%,78%,.35);
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
    }
    .poster{
        margin-left: 0;
        padding: 0;
        margin-top: -40px;
        margin-bottom: -40px;
    /* margin-left: -25px; */
        float: left;
        box-sizing: border-box;
        width: 30%
    }
    .detail{
        padding: 30px 45px;
        color: black;
    }
    .main-detail{
        margin-bottom: 30px;
    }
    .name{
        font-size: 20px;
        margin: 0;
    padding: 0;
    font-weight: 600;
    }
    .genre{
        margin: 0;
    margin-bottom: 5px;
    }
    .movie-detail-list{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .list-item{
        padding: 0 15px;
        line-height: 1;
    display: inline-block;
    vertical-align: middle;
    }
    .showtime-container{
      padding-left: 10em;
      padding-right: 10em;
    }
</style>