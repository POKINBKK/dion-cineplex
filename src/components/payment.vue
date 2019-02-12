<template>
  <div id="app">
    <el-main>
      <el-row>
        <el-col>
          <div class="box-wrap">
            <div class="heading">ยืนยันการซื้อบัตรชมภาพยนตร์</div>
            <div class="box-seat">
                <p class="seat">ผู้ใหญ่:{{buy_list_adult}}</p>
                <p class="seat">เด็ก:{{buy_list_kid}}</p>
            </div>
            <div class="heading">เลือกช่องทางการชำระเงิน</div>
            <div class="btn-wrap">
              <div class="payment-method">
                <div class="inner">
                  <div class="method">
                      <img src="../assets/now-showing/member.png" style="width:60%;">
                    <span class="method-label">บัตรสมาชิก</span>
                  </div>
                </div>
                <div class="inner">
                  <div class="method">
                      <img src="../assets/now-showing/k-bank.png" style="width:70%;">
                    <span class="method-label">KBank</span>
                  </div>
                </div>
                <div class="inner">
                  <div class="method">
                      <img src="../assets/now-showing/credit.png" style="width:60%;">
                    <span class="method-label">บัตรเครดิต / บัตรเดบิต</span>
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
export default {
  data() {
    return {
      buy_list_adult: ["j1","j2","j3"],
      buy_list_kid: ["j4","j5","j6","j7","j7","j7","j7","j7","j7","j7"]
    };
  }
};
</script>


<style scoped>
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
