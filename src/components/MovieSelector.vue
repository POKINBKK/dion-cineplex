 <template>
 <!--ตัวselectorแบบเมเจอร์-->
  <div id="movieselector-container">
    <el-row>
      <el-col :span="24">
        <el-card>
          <el-row :gutter="20" type="flex" class="selectormenu-container" justify="space-around">
            <el-col :span="6">
              <el-button plain class="selectormenu-btn" size="big" v-on:click="theatorState">โรงภาพยนตร์ทั้งหมด <i class="el-icon-arrow-down"></i></el-button>
            </el-col>
            <el-col :span="6">
              <el-button plain class="selectormenu-btn" size="big" v-on:click="movieState">ภาพยนตร์ทั้งหมด <i class="el-icon-arrow-down"></i></el-button>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" round class="submitmenu-btn" size="big">รอบฉาย</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-collapse-transition>
        <el-col :span="24" v-if="theater" class="theater-list">
          <div class="theaterlist-container"><p>all theator</p></div>
        </el-col>
      </el-collapse-transition>
    </el-row>
    <el-row>
      <el-collapse-transition>
        <el-col :span="24" v-if="movie" class="movie-list">
          <div class="movielist-container"><p>all movie</p></div>
        </el-col>
      </el-collapse-transition>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'MovieSelector',
  data() {
    return{
      theater: false,
      movie: false,
      tState: false,
      mState: false,
    }
  },
  methods: {
    theatorState: function (event){
      if(event){
        this.theater = true
        this.movie = false
      }
    },
    movieState: function (event){
      if(event){
        this.theater = false
        this.movie = true
      }
    },
  }
}
</script>

<style scoped>

  .selectormenu-btn {
    font-family: 'Kanit', sans-serif;
    padding-left: 3em;
    padding-right: 3em;
  }

  .selectormenu-container {
    text-align: center;
    padding-left: 2em;
    padding-right: 2em;
  }

  
  .submitmenu-btn {
    font-family: 'Kanit', sans-serif;
    padding-left: 3em;
    padding-right: 3em;
  }

  .theater-list {
    position: absolute;
    z-index: 9999;
  }

  .movie-list {
    position: absolute;
    z-index: 9999;
  }
  .theaterlist-container {
    margin-top: -1em;
    width: 100%;
    height: 500px;
    background-color: white;
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
    .movielist-container {
    margin-top: -1em;
    width: 100%;
    height: 500px;
    background-color: white;
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }



</style>