<template>
    <el-main>
        <el-row>
            <el-col>
                <div class="heading">
                    <p>{{fname}} {{lname}}</p>
                    <p>{{email}}</p>
                </div>
                <div class="total-pay">
                    <p><span>ยอดชำระเงิน 450 bath</span></p>
                </div>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
export default {
  data() {
    return {
     fname: "poom",
     lname: "netrakom",
     email:"xxxxx@xxxxx.com"
      
    };
  }
};
</script>


<style scoped>
    .total-pay{
        padding-top: 20px;
        text-align: center;
        color: #2d64cf;
    font-size: 22px;
    
    line-height: 1;
    }
    .heading {
  color: #2d64cf;
  font-weight: 700;
  font-size: 20px;
  padding-top: 10px;
  text-align: center;
}
</style>
