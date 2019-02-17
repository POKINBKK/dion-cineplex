<template>
  <div id="app">
    <el-main>
      <el-row>
        <el-col>
          <el-tabs tab-position="left" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Profile" name="first">
              <div class="heading">Profile</div>
              <div class="head">
                <el-row>
                  <el-col class="bought">ชื่อ : {{fname}}</el-col>
                  <el-col class="bought">นามสกุล : {{lname}}</el-col>
                  <el-col class="bought">Username : {{user}}</el-col>
                  <el-col class="bought">E-mail : {{mail}}</el-col>
                </el-row>
                <div style="text-align:center;">
                  <el-button type="danger">Logout</el-button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="ประวัติการซื้อ" name="second">
              <div class="heading">ประวัติการซื้อ</div>
              <div class="head">
                <el-card v-for="set in bought_list" :key="set" class="box">
                  <el-row>
                  <el-col :span="6">
                    <img src="../assets/now-showing/movie-1.jpg" class="poster">
                  </el-col>
                  <el-col :span="15">
                    <el-row class="info">
                      <el-col class="bought">ชื่อหนัง : {{set.movie}}</el-col>
                      <el-col class="bought">โรงหนัง : {{set.cinema}} โรง: {{set.theater}}</el-col>
                      <el-col class="bought">วัน : {{set.show_day}} เวลา : {{set.show_time}}</el-col>
                      <el-col class="bought">ที่นั่ง : {{set.seat}}</el-col>
                      <el-col class="bought">เวลาที่สั่งซื้อ : {{set.time}}</el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="3" style="float:right">
                    <el-button type="danger">Refund</el-button>
                  </el-col>
                  </el-row>
                </el-card>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      fname: "123",
      lname: "321",
      user: "456",
      mail: "654",
      bought_list: [
        {
          pic: "../assets/now-showing/movie-1.jpg",
          seat: ["j3", "j4"],
          time: "10/02/62",
          movie: "Alita",
          cinema: "ลาดกระบัง",
          theater: 1,
          show_day: "11/02/62",
          show_time: "15.30"
        },
        {
          pic: "../assets/now-showing/movie-1.jpg",
          seat: ["i5", "i4", "i6", "i7"],
          time: "14/02/62 09.11",
          movie: "Friend Zone",
          cinema: "ลาดกระบัง",
          theater: 1,
          show_day: "15/02/62",
          show_time: "15.30"
        },
        {
          pic: "../assets/now-showing/movie-1.jpg",
          seat: ["c1", "c2", "c3"],
          time: "16/02/62 00.21",
          movie: "Marvel",
          cinema: "ลาดกระบัง",
          theater: 1,
          show_day: "17/02/62",
          show_time: "15.30"
        }
      ],
      bought_time: ["10/02/62 15.23", "14/02/62 09.11", "16/02/62 00.21"],
      movie: []
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.box-wrap {
  margin-left: 30%;
  margin-right: 30%;
  margin-top: -1px;
  padding: 20px;
  background-color: #fff;
  border: 2px solid #2d64cf;
  border-radius: 5px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}
.heading {
  color: #2d64cf;
  font-size: 20px;
  padding-top: 10px;
  text-align: center;
  font-weight: 600;
}
.head {
  color: #2d64cf;
  font-size: 16px;
  padding-top: 10px;
  text-align: center;
  font-weight: 200;
}
.bought {
  margin-bottom: 15px;
}
.info {
  text-align: left;
  /* margin-top: 5%; */
}
.poster {
  width: 80%;
  float: right;
  margin-right: 15%;
}
.box{
  margin-top: 5%;
  margin-right: 15%;
  margin-left: 15%;
}
</style>