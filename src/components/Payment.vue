<template>
  <div id="payment-container">
    <el-header>
      <Header></Header>
    </el-header>
    <el-main class="payment-confirm-container">
        <el-row>
            <el-col>
                <div class="nameinfo">
                    <p>คุณ {{userinfo.firstname}} {{userinfo.lastname}}</p>
                    <p>Email : {{userinfo.email}}</p>
                </div>
                <div class="total-pay">
                    <p><span>ยอดชำระเงิน {{paymentinfo.price}} bath</span></p>
                </div>
            </el-col>
        </el-row>
      <el-row>
        <el-col>
          <div class="box-wrap">
            <div class="heading">ยืนยันการซื้อบัตรชมภาพยนตร์</div>
            <div>
              <Ticket 
              v-bind:showTimeId="this.paymentinfo.showTimeId" 
              v-bind:adult_seat="this.paymentinfo.adult_seat"
              v-bind:kid_seat="this.paymentinfo.kid_seat"
              v-bind:old_seat="this.paymentinfo.old_seat"
              >
              </Ticket>
            </div>
            <div class="heading">เลือกช่องทางการชำระเงิน</div>
            <div class="btn-wrap">
              <div class="payment-method">
                <div class="inner" @click="member=true;kbank=false;credit=false">
                  <div class="method">
                      <img src="../assets/member.png" style="width:60%;">
                    <span class="method-label">บัตรสมาชิก</span>
                  </div>
                </div>
                <div class="inner" @click="member=false;kbank=true;credit=false">
                  <div class="method">
                      <img src="../assets/k-bank.png" style="width:70%;">
                    <span class="method-label" >KBank</span>
                  </div>
                </div>
                <div class="inner" @click="member=false;kbank=false;credit=true">
                  <div class="method">
                      <img src="../assets/credit.png" style="width:60%;">
                    <span class="method-label" >บัตรเครดิต / บัตรเดบิต</span>
                  </div>
                </div>
              </div>
            </div>

            <div style="padding-top: 1em;">
              <div v-if="member">
                <h2 style="text-align: center;">กรุณากรอกข้อมูลสมาชิก</h2>
                <div class="form-container">
                <el-input class="input-form" placeholder="หมายเลขสมาชิก" v-model="member_section.member_id"></el-input>
                <el-input type="password" class="input-form" placeholder="รหัสผ่าน" v-model="password"></el-input>
                <div style="text-align: center;padding-top: 1.5em;">
                  <el-button type="primary" icon="el-icon-circle-check" @click="confirmForm">ยืนยันการสั่งซื้อ</el-button>
                </div>
                </div>
              </div>
              <div v-if="kbank">
                <div class="form-container">
                  <el-input type="password" class="input-form" placeholder="รหัสผ่าน" v-model="password"></el-input>
                  </div>
                <div style="text-align: center;padding-top: 1.5em;">
                  <el-button icon="el-icon-circle-check" type="primary" @click="confirmForm">ยืนยันการสั่งซื้อ</el-button>
                </div>
                </div>
              <div v-if="credit">
                <h2 style="text-align: center;">กรุณากรอกข้อมูลบัตร</h2>
                <div class="form-container">
                <el-input class="input-form" placeholder="ชื่อผู้ถือบัตร" v-model="credit_section.name"></el-input>
                <el-input class="input-form" placeholder="หมายเลขบัตร" v-model="credit_section.card_id"></el-input>
                <div class="ddyy-cvv-container">
                  <el-input class="input-form-min" placeholder="ดด/ปป" v-model="credit_section.ddyy"></el-input>
                  <el-input class="input-form-min" placeholder="CVV" v-model="credit_section.cvv"></el-input>
                </div>
                <el-input type="password" class="input-form" placeholder="รหัสผ่าน" v-model="password"></el-input>
                <div style="text-align: center;padding-top: 1.5em;">
                  <el-button icon="el-icon-circle-check" type="primary" @click="confirmForm">ยืนยันการสั่งซื้อ</el-button>
                </div>
                </div>
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
import Ticket from './Ticket'

export default {
  name: 'Payment',
  components: {
    Header,
    Ticket
  },
  data() {
    return {
      userinfo: JSON.parse(window.localStorage.getItem('user')),
      paymentinfo: JSON.parse(window.localStorage.getItem('confirmData')),
      member: false,
      kbank: false,
      credit: false,
      member_section : {
        member_id: '',
      },
      credit_section: {
        name: '',
        card_id: '',
        ddyy: '',
        cvv: ''
      },
      password: ''

    };
  },
  methods: {
    confirmForm(){
      if(this.member){
        if(this.member_section.member_id==''){
          this.$notify.error({
          title: 'การยืนยันการชำระเงินผิดพลาด',
          message: 'กรุณาระบุข้อมูลให้ครบถ้วน',
          position: 'top-left'
        });
        } else {
          this.confirmPayment()
        }
      }
      else if(this.credit){
        if(this.credit_section.name=='' || this.credit_section.card_id=='' || this.credit_section.ddyy=='' || this.credit_section.cvv==''){
          this.$notify.error({
          title: 'การยืนยันการชำระเงินผิดพลาด',
          message: 'กรุณาระบุข้อมูลให้ครบถ้วน',
          position: 'top-left'
        });
        } else {
          this.confirmPayment()
        }
      }
      else {
        this.confirmPayment()
      }
    },
    confirmPayment() {
        if(this.password != this.userinfo.password){
          this.$notify.error({
          title: 'การยืนยันการชำระเงินผิดพลาด',
          message: 'กรุณาใส่รหัสผ่านให้ถูกต้อง',
          position: 'top-left'
        });
        }
      else{
      let infouser = JSON.parse(window.localStorage.getItem('user'));
        let ticket = {
          showTimeId: this.paymentinfo.showTimeId,
          adult_seat: this.paymentinfo.adult_seat,
          kid_seat: this.paymentinfo.kid_seat,
          old_seat: this.paymentinfo.old_seat,
          price: this.paymentinfo.price,
          timestamp: new Date().toUTCString()
        }
        infouser.ticket.push(ticket);
        window.localStorage.setItem('user', JSON.stringify(infouser));

        let unavailable = JSON.parse(window.localStorage.getItem('unavailable'));
        let changeState = true;
        if(unavailable.length != 0){
        for(let i = 0;i<unavailable.length;i++){
          if(unavailable[i].showTimeId == this.paymentinfo.showTimeId){
            for(let j = 0;j<this.paymentinfo.all_seat.length;j++){
              unavailable[i].seats.push(this.paymentinfo.all_seat[j]);
              changeState = false;
            }
          }
        }
        }
        
        if(changeState){
          let first_unavailable = {
            showTimeId: this.paymentinfo.showTimeId,
            seats: this.paymentinfo.all_seat
          };
          unavailable.push(first_unavailable);
        }

        window.localStorage.setItem('unavailable', JSON.stringify(unavailable));

        this.paymentinfo = {
          showTimeId: '',
          adult_seat: [],
          kid_seat: [],
          old_seat: [],
          all_seat: [],
          price: 0
        }

        window.localStorage.setItem('confirmData', JSON.stringify(this.paymentinfo));

        this.$notify({
          title: 'ยืนยันการสั่งซื้อ',
          message: 'ตรวจสอบการสั่งซื้อได้ที่Email: '+ this.userinfo.email + ' ของท่าน',
          type: 'success',
          position: 'top-left'
        });
        this.$router.push({path: '/'});
      }
      },
  }
};
</script>


<style scoped>
  .form-container {
    margin: auto;
    width: 50%;
  }
  .input-form{
    width: 100%;
    padding-top: 2em;
  }
    .input-form-min{
    width: 48%;
    padding-top: 2em;
  }
      .input-form-min:nth-child(2){
    width: 48%;
    padding-top: 2em;
    padding-left: 2%;
  }
  .ddyy-cvv-container{
    display: inline-block;
  }
    .total-pay{
        padding-top: 20px;
        text-align: center;
        color: #2d64cf;
    font-size: 22px;
    
    line-height: 1;
    }
    .nameinfo {
  color: #2d64cf;
  font-weight: 700;
  font-size: 20px;
  padding-top: 10px;
  text-align: center;
}
.box-wrap {
  margin-left: 20%;
  margin-right: 20%;
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
.btn-wrap {
  max-width: 350px;
  margin: 0 auto;
}
.payment-method {
  margin: 15px -5px 10px;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
}
.inner {
  padding: 5px;
  width: 33.33333333%;
  margin-right: 10px;
}
.method {
  text-align: center;
  padding: 5px 5px 10px;
  margin: 0;
  border: 1px solid #c6c7c7;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-out;
}
.method:hover {
  text-align: center;
  padding: 5px 5px 10px;
  margin: 0;
  border: 1px solid #2d64cf;
  box-shadow: inset 0 0 0 2px #2d64cf;
  color:#2d64cf;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-out;
}
.method-label {
  font-weight: 500;
  display: block;
  line-height: 1;
  transition: all 0.2s ease-out;
}
.seat {
  color: #2d64cf;
  font-size: 24px;
  
  line-height: 1;
  margin: 0 0 10px;
}
.box-seat{
    text-align: center;
    /* margin-left: 10%;
    margin-right: 10%; */
    margin-top: 15px;
}
</style>