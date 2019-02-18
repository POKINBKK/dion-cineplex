<template>
  <!--หน้า login-->
  <div id="login-container">
    <el-header>
     <Header></Header>
    </el-header>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :span="6" class="cardform-container">
          <el-card class="card-container">
            <el-form ref="form" :model="form" label-width="70px">
              <el-form-item label="ชื่อผู้ใช้">
                <el-input v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item label="รหัสผ่าน" prop="pass">
                <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item style="text-align: left;">
                <el-button type="primary" @click="onSubmit">เข้าสู่ระบบ</el-button>
                <el-button @click="onCancel">ยกเลิก</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div style="text-align: center;padding-top: 1em;padding-left:2em;">
                <p><span>คุณยังไม่ได้สมัครสมาชิก? &nbsp&nbsp</span><el-button type="primary" @click="registerClick" round>สมัครสมาชิก</el-button></p>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import Header from './Header'
import userInfo from '../assets/userinfo.json'

export default {
  name: 'Login',
  components: {
    Header
  },
  data() {
    return {
      form : {
        username: "",
        password: ""
      },
      allUser: userInfo.userList
    }
  },
  methods: {
    onSubmit(){
      for(let item in this.allUser){
        if(this.form.username == this.allUser[item].userName && this.form.password == this.allUser[item].userPassword){
          console.log('pass');
          break;
        }
        else{
          console.log('no');
        }
      }
    },
    onCancel(){
      this.$router.push({path: '/'});
    },
    registerClick(){
      this.$router.push({path: '/register'});
    }
  }
}
</script>

<style scoped>

.cardform-container {
  text-align: center;
}

.card-container {
  width: 25em;
}

</style>
