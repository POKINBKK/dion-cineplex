<template>
  <div id="profile-container">
    <el-header>
     <Header></Header>
    </el-header>
    <el-main id="profile-main-container">
      <el-row>
        <el-col>
          <el-tabs tab-position="left" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Profile" name="first">
              <div class="heading">Profile</div>
              <div class="user-info">
                <el-row>
                  <el-col class="bought">ชื่อ : {{fname}} {{lname}}</el-col>
                  <el-col class="bought">Username : {{user}}</el-col>
                  <el-col class="bought">E-mail : {{mail}}</el-col>
                </el-row>
                <div style="text-align:center;">
                  <el-button icon="el-icon-circle-close" type="danger" @click="logoutClick">ออกจากระบบ</el-button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="ประวัติการซื้อ" name="second">
              <div class="heading">ประวัติการซื้อ</div>
              <div v-for="item in ticket" :key="item.timestamp" class="head">
                <Ticket 
                v-bind:showTimeId="item.showTimeId"
                v-bind:adult_seat="item.adult_seat"
                v-bind:kid_seat="item.kid_seat"
                v-bind:old_seat="item.old_seat"
                v-bind:timestamp="item.timestamp"
                @removeTicket="removeTicket"
                >
                </Ticket>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import Header from './Header'
import Ticket from './Ticket'

export default {
  name: 'Profile',
  components: {
    Header,
    Ticket
  },
  data() {
    return {
      dialogVisible: false,
      userinfo: JSON.parse(window.localStorage.getItem('user')),
      activeName: "first"
    };
  },
  computed: {
    fname(){
      return this.userinfo.firstname;
    },
    lname(){
      return this.userinfo.lastname;
    },
    user(){
      return this.userinfo.username;
    },
    mail(){
      return this.userinfo.email;
    },
    ticket(){
      return this.userinfo.ticket;
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    logoutClick(){
      window.localStorage.setItem('loginstate', false);
      this.$router.push({path: '/'});
    },
    removeTicket(value){
      this.$notify({
          title: 'ขอคืนเงินสำเร็จ',
          message: 'ท่านสามารถตรวจสอบการขอคืนเงินได้ที่Emailของท่าน',
          type: 'success',
          position: 'top-left'
        });
      let all_unavailable = JSON.parse(window.localStorage.getItem('unavailable'));
      let tickets = this.userinfo.ticket;
      for(let i = 0;i<tickets.length;i++){
        if(tickets[i].timestamp == value){
          for(let j = 0;j<all_unavailable.length;j++){
            if(all_unavailable[j].showTimeId == tickets[i].showTimeId){
                for(let k = 0;k<tickets[i].adult_seat.length;k++){
                  let index = all_unavailable[j].seats.indexOf(tickets[i].adult_seat[k]);
                  all_unavailable[j].seats.splice(index, 1);
                }
                for(let k = 0;k<tickets[i].kid_seat.length;k++){
                  let index = all_unavailable[j].seats.indexOf(tickets[i].kid_seat[k]);
                  all_unavailable[j].seats.splice(index, 1);
                }
                for(let k = 0;k<tickets[i].old_seat.length;k++){
                  let index = all_unavailable[j].seats.indexOf(tickets[i].old_seat[k]);
                  all_unavailable[j].seats.splice(index, 1);
                }
            }
          }
          let index = this.userinfo.ticket.indexOf(tickets[i]);
          this.userinfo.ticket.splice(index, 1);
        }
      }

      window.localStorage.setItem('user',JSON.stringify(this.userinfo));
      window.localStorage.setItem('unavailable',JSON.stringify(all_unavailable));
    }
  }
};
</script>

<style scoped>
.user-info{
  text-align: center;
  font-size: 24px;
}

#profile-main-container{
  padding-left: 10em;
  padding-right: 10em;
}
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
  font-size: 28px;
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