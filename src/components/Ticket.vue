<template>
  <div class="ticket-container">
    <el-card class="box">
      <el-row>
        <el-col :span="6">
          <img v-bind:src="movieThumbnails" class="poster" width="100%">
        </el-col>
          <el-col :span="15">
            <el-row class="info">
              <el-col class="bought">เรื่อง : {{movieName}}</el-col>
              <el-col class="bought">โรงภาพยนตร์ที่ {{theaterId}}</el-col>
              <el-col class="bought">สาขา {{cineplexName}}</el-col>
              <el-col class="bought">รอบฉาย : {{showTime}} | {{showDate}}</el-col>
              <el-col class="bought">
              ที่นั่ง :
                <ul>
                  <li>ผู้ใหญ่ : {{adult_string}}</li>
                  <li>เด็ก : {{kid_string}}</li>
                  <li>ผู้สูงอายุ : {{old_string}}</li>
                </ul>
              </el-col>
              <el-col v-if="this.$route.name=='Profile'" class="bought">เวลาที่สั่งซื้อ : {{timestamp}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="3" style="float:right">
            <div style="padding-top: 7em;">
            <el-button v-if="this.$route.name=='Profile'" type="danger" @click="removeItem">Refund</el-button>
            </div>
          </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import moviejson from '../assets/movielist.json'
import theaterjson from '../assets/theater.json'

export default {
  name: 'Ticket',
  props: ['showTimeId', 'adult_seat', 'kid_seat', 'old_seat', 'timestamp'],
  data(){
    return{
      movieList: moviejson.nowShowingList,
      theaterList: theaterjson.cineplexList
    }
  },
  computed: {
      movieThumbnails(){
      let cineplexId = this.showTimeId.slice(0, 2);
      let theaterId = this.showTimeId.slice(2,4);
      let dateId = this.showTimeId.slice(8, 16);
      let result = '';
      for(let i = 0;i<this.theaterList.length;i++){
        if(cineplexId == this.theaterList[i].cineplexId){
          let theater = this.theaterList[i].cineplexDetail;
          for(let j=0;j<theater.length;j++){
            if(theaterId == theater[j].theaterId){
              let movieId = theater[j].screeningId;
              for(let k = 0;k<this.movieList.length;k++){
                if(this.movieList[k].movieId == movieId){
                  result = this.movieList[k].movieThumbnails;
                }
              }
            }
          }
        }
      }
      return result;
    },
      movieName(){
      let cineplexId = this.showTimeId.slice(0, 2);
      let theaterId = this.showTimeId.slice(2,4);
      let dateId = this.showTimeId.slice(8, 16);
      let result = '';
      for(let i = 0;i<this.theaterList.length;i++){
        if(cineplexId == this.theaterList[i].cineplexId){
          let theater = this.theaterList[i].cineplexDetail;
          for(let j=0;j<theater.length;j++){
            if(theaterId == theater[j].theaterId){
              let movieId = theater[j].screeningId;
              for(let k = 0;k<this.movieList.length;k++){
                if(this.movieList[k].movieId == movieId){
                  result = this.movieList[k].movieTitle;
                }
              }
            }
          }
        }
      }
      return result;
    },
    showTime(){
      let cineplexId = this.showTimeId.slice(0, 2);
      let theaterId = this.showTimeId.slice(2,4);
      let dateId = this.showTimeId.slice(8, 16);
      let result = '';
      for(let i = 0;i<this.theaterList.length;i++){
        if(cineplexId == this.theaterList[i].cineplexId){
          let theater = this.theaterList[i].cineplexDetail;
          for(let j=0;j<theater.length;j++){
            if(theaterId == theater[j].theaterId){
              let showTimeList = theater[j].showTimeList;
              for(let k = 0;k<showTimeList.length;k++){
                if(dateId == showTimeList[k].showDateId){
                  let round = showTimeList[k].showTime;
                  for(let l = 0; l < round.length;l++){
                    if(this.showTimeId == round[l].showTimeId){
                      result = round[l].showTime;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return result;
    },
    showDate(){
      let cineplexId = this.showTimeId.slice(0, 2);
      let theaterId = this.showTimeId.slice(2,4);
      let dateId = this.showTimeId.slice(8, 16);
      let result = '';
      for(let i = 0;i<this.theaterList.length;i++){
        if(cineplexId == this.theaterList[i].cineplexId){
          let theater = this.theaterList[i].cineplexDetail;
          for(let j=0;j<theater.length;j++){
            if(theaterId == theater[j].theaterId){
              let showTimeList = theater[j].showTimeList;
              for(let k = 0;k<showTimeList.length;k++){
                if(dateId == showTimeList[k].showDateId){
                  result = showTimeList[k].showDate;
                }
              }
            }
          }
        }
      }
      return result;
    },
    theaterId(){
      return this.showTimeId.slice(2,4);
    },
    cineplexName(){
      let cineplexId = this.showTimeId.slice(0, 2);
      let result = '';
      for(let i = 0;i<this.theaterList.length;i++){
        if(cineplexId == this.theaterList[i].cineplexId){
          result = this.theaterList[i].cineplexName;
        }
      }
      return result;
    },
    adult_string(){
      let result = ""
      for(let i = 0;i<this.adult_seat.length;i++){
        result = result + " " + this.adult_seat[i];
      }
      if(result==""){
        return "-";
      } else {
        return result;
      }
    },
    kid_string(){
      let result = ""
      for(let i = 0;i<this.kid_seat.length;i++){
        result = result + " " + this.kid_seat[i];
      }
      if(result==""){
        return "-";
      } else {
        return result;
      }
    },
    old_string(){
      let result = ""
      for(let i = 0;i<this.old_seat.length;i++){
        result = result + " " + this.old_seat[i];
      }
      if(result==""){
        return "-";
      } else {
        return result;
      }
    }
  },
  methods: {
    removeItem(){
      let userinfo = JSON.parse(window.localStorage.getItem('user'));
      let tickets = userinfo.ticket;
      console.log(tickets);
      for(let i = 0;i<tickets.length;i++){
        console.log("-------")
        console.log(tickets[i].showTimeId === this.showTimeId);
        console.log(tickets[i].adult_seat.toString() == this.adult_seat.toString());
        console.log(tickets[i].kid_seat.toString() == this.kid_seat.toString());
        console.log(tickets[i].old_seat.toString() == this.old_seat.toString());
        console.log(tickets[i].timestamp === this.timestamp);
        if(tickets[i].showTimeId === this.showTimeId && tickets[i].adult_seat.toString() === this.adult_seat.toString() && tickets[i].kid_seat.toString() === this.kid_seat.toString() && tickets[i].old_seat.toString() === this.old_seat.toString() && tickets[i].timestamp === this.timestamp){
          console.log(i);
          tickets.splice(i, 1);
          break;
        }
      }
      userinfo.ticket = tickets;

      window.localStorage.setItem('user',JSON.stringify(userinfo));
    }
  }
}
</script>


<style scoped>
.head {
  color: #2d64cf;
  font-size: 16px;
  padding-top: 10px;
  text-align: center;
  font-weight: 200;
}
.bought {
  margin-bottom: 5px;
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

ul {
  margin-top: -2px;
}
</style>

