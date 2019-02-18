<template>
  <div id="register-container">
    <el-header>
     <Header></Header>
    </el-header>
    <el-main>
      <el-row>
        <el-col>
          <div class="box-wrap">
            <div class="heading">สมัครสมาชิก</div>
            <br>
            <el-form
              class="form1"
              ref="form"
              label-position="top"
              :model="sizeForm"
              label-width="120px"
              size="mini"
              inline="true"
            >
              <el-form-item label="ชื่อ" style="width:47%;">
                <el-input v-model="userForm.fname"></el-input>
              </el-form-item>
              <el-form-item label="นามสกุล" style="width:47%;">
                <el-input v-model="userForm.lname"></el-input>
              </el-form-item>
              <el-form-item label="E-mail" style="width:97%;">
                <el-input v-model="userForm.email"></el-input>
              </el-form-item>
              <el-form-item label="Username" style="width:97%;">
                <el-input v-model="userForm.username"></el-input>
              </el-form-item>
              <el-form-item label="Password" style="width:47%;">
                <el-input v-model="userForm.password1"></el-input>
              </el-form-item>
              <el-form-item label="Re-Password" style="width:47%;">
                <el-input v-model="userForm.password2"></el-input>
              </el-form-item><br><br>
              <el-form-item size="large" style="width:97%;margin:0;">
                <el-button  type="primary" @click="onSubmit" style="width:100%;">Create</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'Register',
  components: {
    Header
  },
  data() {
    return {
      userForm: {
        fname: "",
        lname: "",
        email: "",
        username: "",
        password1: "",
        password2: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
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
.ti {
  color: #2d64cf;
  font-size: 24px;

  line-height: 1;
  margin: 0 0 10px;
}
.form1 {
  margin: 1%;
}
</style>
