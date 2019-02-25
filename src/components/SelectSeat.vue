<template>
  <div id="selectseat-container">
    <el-header>
      <Header></Header>
    </el-header>
    <el-main class="main-container">
      <el-row>
        <el-col :span="18">
          <el-row>
            <el-col style="margin-bottom:30px;">
              <ul class="seat-type">
                <li class="theater-box">
                  <div class="theater">
                    <p class="name">โรงภาพยนตร์</p>
                    <p class="number">{{theaterId}}</p>
                  </div>
                </li>
                <li class="seat-item">
                  <el-radio v-model="radio" label="1" v-on:change="padult">ผู้ใหญ่</el-radio>
                  <div class="seat-icon">
                    <img src="../assets/chair_adult.png" style="width: 25%;">
                  </div>
                  <p class="name">450 บาท</p>
                </li>
                <li class="seat-item">
                  <el-radio v-model="radio" label="2" v-on:change="pkid">เด็ก</el-radio>
                  <div class="seat-icon">
                    <img src="../assets/chair_kid.png" style="width: 25%;">
                  </div>
                  <p class="name">200 บาท</p>
                </li>
                <li class="seat-item">
                  <el-radio v-model="radio" label="3" v-on:change="pold">ผู้สูงอายุ</el-radio>
                  <div class="seat-icon">
                    <img src="../assets/chair_old.png" style="width: 25%;">
                  </div>
                  <p class="name">300 บาท</p>
                </li>
              </ul>
            </el-col>
          </el-row>
          <el-main>
            <el-row>
              <el-col :span="3"></el-col>
              <el-col :span="21">
                <div class="screen-wrapper">
                  <div class="screen-text">
                    <span>จอภาพยนตร์</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row" v-for="seat in seats.row" :key="seat">
              <el-col :span="2" class="row-id" style="padding-top:0;">{{seat}}</el-col>
              <el-col :span="2" v-for="num in seats.col" :key="num">
                <button
                  class="button-seat"
                  v-bind:id="seat+num"
                  v-if="!isExist(seat+num)&&!isExist2(seat+num)"
                  v-on:click="buy_seat($event)"
                >
                  <img src="../assets/chair.png" style="width: 50%;">
                </button>
                <button
                  class="button-seat"
                  v-bind:id="seat+num"
                  v-else-if="!isExist(seat+num)"
                  v-on:click="cancle_seat($event)"
                >
                  <img v-if="isExistKid(seat+num)" src="../assets/kid_select.png" style="width: 50%;">
                  <img v-else-if="isExistAdult(seat+num)" src="../assets/adult_select.png" style="width: 50%;">
                  <img v-else-if="isExistold(seat+num)" src="../assets/old_select.png" style="width: 50%;">
                </button>
                <button class="button-seat" v-bind:id="seat+num" v-else>
                  <img src="../assets/unavailable.png" style="width: 50%;">
                </button>
              </el-col>
              <el-col
                :span="2"
                class="row-id"
                style="text-align:right; padding-top:0; padding-bottom:20px;"
              >{{seat}}</el-col>
            </el-row>
          </el-main>
        </el-col>
        <el-col :span="6">
          <div class="sidebar">
          
            <div v-for="cineplex in theaterList" :key="cineplex.cineplexId">
              <div class="summary-info" v-if="cineplex.cineplexId == cineplexId">
                <div v-for="theater in cineplex.cineplexDetail" :key="theater.theaterId">
                  <div v-if="theater.theaterId == theaterId">
                    <div v-for="movie in movieList" :key="movie.movieId">
                      <div v-if="movie.movieId == theater.screeningId">
                        <img v-bind:src="movie.movieThumbnails">
                        <h2 class="movie-name">{{movie.movieTitle}}</h2>
                      </div>
                    </div>
                    <div v-for="showtime in theater.showTimeList" :key="showtime.showDateId">
                      <div v-if="showtime.showDateId == showDateId">
                        <div v-for="round in showtime.showTime" :key="round.showTimeId">
                          <div v-if="round.showTimeId == showTimeId">
                            <div class="info-list">
                              <p class="info"><span>{{round.showTime}} |</span> <span>{{showtime.showDate}}</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 class="location">{{cineplex.cineplexName}}</h3>
                    <h3 class="theater-info">โรงภาพยนตร์ {{theater.theaterId}}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="summary-selected">
              <div class="inner">
                <div>
                  <h3 class="heading">ที่นั่งที่เลือก</h3>
                  <p class="total-price" v-if="this.buy_list_adult.length==0&&this.buy_list_kid.length==0&&this.buy_list_old.length==0">-</p>
                  <p class="total-price" v-else>ผู้ใหญ่:{{showBuyAdult}}<br>เด็ก:{{showBuyKid}}<br>ผู้สูงอายุ:{{showBuyOld}}</p>
                </div>
                <div>
                  <h3 class="heading">ราคารวม</h3>
                  <p class="total-price">{{price_all}} บาท</p>
                </div>
                <el-row style="margin:10px;">
                  <el-button icon="el-icon-circle-check" type="primary" disabled v-if="this.buy_list_adult.length==0&&this.buy_list_kid.length==0&&this.buy_list_old.length==0" round>ดำเนินการต่อ</el-button>
                  <el-button icon="el-icon-circle-check" type="primary" v-else round v-on:click="confirm()">ดำเนินการต่อ</el-button>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import Header from './Header'
import theaterjson from '../assets/theater.json'
import moviejson from '../assets/movielist.json'
// SelectSeat()
export default {
  name: "SelectSeat",
  components: {
    Header
  },
  data() {
    return {
      radio: "1",
      seats: {
        row: ["J", "I", "H", "G", "F", "E", "D", "C", "B", "A"],
        col: ["1", "2", "3", "4", "5", "6", "7", "8"]
      },
      buy_list_adult: [],
      buy_list_kid: [],
      buy_list_old: [],
      price_all: 0,
      price: 450,
      state: "",
      showTimeId: this.$route.params.id,
      theaterList: theaterjson.cineplexList,
      movieList: moviejson.nowShowingList,
      confiirmData: {
                      showTimeId: this.$route.params.id,
                      all_seat: [],
                      adult_seat: [],
                      kid_seat: [],
                      old_seat: [],
                      price: 0
                    }
    };
  },
  methods: {
    unavilable(seatid){
      return false;
    },
    isExist: function(e) {
      for (var i = 0; i < this.bought_list.length; i++) {
        if (this.bought_list[i] == e) {
          return true;
        }
      }
      return false;
    },
    isExist2: function(e) {
      for (var i = 0; i < this.buy_list_adult.length; i++) {
        if (this.buy_list_adult[i] == e) {
          return true;
          // break
        }
      }
      for (var i = 0; i < this.buy_list_kid.length; i++) {
        if (this.buy_list_kid[i] == e) {
          return true;
          // break
        }
      }
      for (var i = 0; i < this.buy_list_old.length; i++) {
        if (this.buy_list_old[i] == e) {
          return true;
          // break
        }
      }
      return false;
    },
    isExistAdult:function(e){
      for (var i = 0; i < this.buy_list_adult.length; i++) {
        if (this.buy_list_adult[i] == e) {
          return true;       
          // break
        }
      }
      return false;
    },
    isExistKid:function(e){
      for (var i = 0; i < this.buy_list_kid.length; i++) {
        if (this.buy_list_kid[i] == e) {
          return true;
          // break
        }
      }
      return false;
    },
    isExistold:function(e){
      for (var i = 0; i < this.buy_list_old.length; i++) {
        if (this.buy_list_old[i] == e) {
          return true;
          // break
        }
      }
      return false;
    },
    buy_seat: function(event) {
      let targetId = event.currentTarget.id;
      if (this.price == 450) {
        this.buy_list_adult.push(targetId);
      } else if (this.price == 200) {
        this.buy_list_kid.push(targetId);
      } else if (this.price == 300) {
        this.buy_list_old.push(targetId);
      }
      this.price_all =
        this.buy_list_kid.length * 200 + this.buy_list_adult.length * 450 + this.buy_list_old.length * 300;
      console.log(targetId);
      console.log(this.price);
    },
    cancle_seat: function(event) {
      let targetId = event.currentTarget.id;
      let index = this.buy_list_adult.indexOf(targetId);
      let index2 = this.buy_list_kid.indexOf(targetId);
      let index3 = this.buy_list_old.indexOf(targetId);
      if (index != -1) {
        this.buy_list_adult.splice(index, 1);
      }
      if (index2 != -1) {
        this.buy_list_kid.splice(index2, 1);
      }
      if (index3 != -1) {
        this.buy_list_old.splice(index3, 1);
      }
      this.price_all =
        this.buy_list_kid.length * 200 + this.buy_list_adult.length * 450 + this.buy_list_old.length * 300;
      console.log(targetId);
    },
    confirm: function() {
      for (var i = 0; i < this.buy_list_adult.length; i++) {
        this.bought_list.push(this.buy_list_adult[i]);
        this.confiirmData.adult_seat.push(this.buy_list_adult[i]);
        this.confiirmData.all_seat.push(this.buy_list_adult[i]);
        console.log(this.buy_list_adult[i]);
      }
      for (var i = 0; i < this.buy_list_kid.length; i++) {
        this.bought_list.push(this.buy_list_kid[i]);
        this.confiirmData.kid_seat.push(this.buy_list_kid[i]);
        this.confiirmData.all_seat.push(this.buy_list_kid[i]);
        console.log(this.buy_list_kid[i]);
      }
      for (var i = 0; i < this.buy_list_old.length; i++) {
        this.bought_list.push(this.buy_list_old[i]);
        this.confiirmData.old_seat.push(this.buy_list_old[i]);
        this.confiirmData.all_seat.push(this.buy_list_old[i]);
        console.log(this.buy_list_old[i]);
      }
      this.confiirmData.price = this.price_all;

      window.localStorage.setItem("confirmData", JSON.stringify(this.confiirmData));
      this.$router.push({path: '/payment'});

      this.buy_list_old = [];
      this.buy_list_adult = [];
      this.buy_list_kid = [];
      this.price_all = 0;
    },
    pkid: function() {
      this.price = 200;
    },
    padult: function() {
      this.price = 450;
    },
    pold: function() {
      this.price = 300;
    }
  },
  computed: {
    cineplexId() {
      return this.showTimeId.slice(0, 2);
    },
    theaterId() {
      return this.showTimeId.slice(2, 4);
    },
    showDateId() {
      return this.showTimeId.slice(8, 16);
    },
    showBuyAdult() {
      let result = ""
      for(let i = 0; i < this.buy_list_adult.length;i++){
        result = result + " " + this.buy_list_adult[i];
      }
      return result;
    },
    showBuyKid() {
      let result = ""
      for(let i = 0; i < this.buy_list_kid.length;i++){
        result = result + " " + this.buy_list_kid[i];
      }
      return result;
    },
    showBuyOld() {
      let result = ""
      for(let i = 0; i < this.buy_list_old.length;i++){
        result = result + " " + this.buy_list_old[i];
      }
      return result;
    },
    bought_list(){
      let all_unavailable = JSON.parse(window.localStorage.getItem('unavailable'));
      let result = [];
      for(let i = 0;i<all_unavailable.length;i++){
        if(all_unavailable[i].showTimeId==this.showTimeId){
          result = all_unavailable[i].seats;
        }
      }
      return result;
    }
  }

};
</script>


<style scope>
.main-container {
  padding-left: 10em;
  padding-right: 10em;
}

.seat-type {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  display: table;
  table-layout: fixed;
}
.theater-box {
  display: table-cell;
  vertical-align: top;
  padding: 0 5px;
  word-break: break-word;
}
.theater {
  text-align: center;
  display: inline-block;
  border: 1px solid #c6c7c7;
  padding: 15px;
}
.name {
  font-size: 14px;
  margin-top: 0;
}
.price {
}
.number {
  font-size: 48px;
  line-height: 0.75;
  margin: 0;
}
.seat-item {
  display: table-cell;
  vertical-align: top;
  padding: 0 5px;
  word-break: break-word;
  font-size: 16px;
  line-height: 1;
  text-align: center;
}
.screen-wrapper {
  position: relative;
  height: 50px;
  border-top: 5px solid;
  border-color: #2d64cf;
}
.screen-text {
  font-size: 20px;
  letter-spacing: 0.1em;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
}
.row-id {
  color: #c6c7c7;
  font-weight: 700;
  padding: 10px 0;
}
.row {
  position: relative;
}
.sidebar {
  margin-top: 3px;
  padding: 20px;
  background-color: #f5f7fb;
}
.movie-name {
  font-size: 18px;
  font-weight: 600;
}
.info-list {
  padding: 0;
  margin: 0 -15px 40px;
}
.info {
  color: #2d64cf;
  padding: 0 15px;
  margin: 0;
}
.theater-info {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0;
}
.location {
  color: #2d64cf;
  margin-top: 5px;
}
.summary-selected {
  margin-top: 10px;
}
.inner {
  text-align: center;
  padding: 10px;
  background-color: #fff;
}
.heading {
  margin-bottom: 5px;
  color: #1e1f24;
  font-size: 14px;
  font-weight: 500;
}
.total-price {
  color: #2d64cf;
  font-size: 20px;
  font-weight: 200;
  line-height: 1;
  margin: 0 0 10px;
}
button {
  border: 0;
  background: white;
}
</style>



