<template>
  <div id="theater-container">
    <el-header>
     <Header></Header>
    </el-header>
    <el-main id="theater-main-container">
      <el-row>
        <el-col :span="24">
          <ShowDate v-bind:Cid="cinemaId"></ShowDate>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import Header from './Header';
import ShowDate from './ShowDate'
import theaterInfo from '../assets/theater.json';
import movieInfo from '../assets/movielist.json';

export default {
  name: 'Theater',
  components : {
    Header,
    ShowDate
  },
  data (){
    return{
      cinemaId: this.$route.params.id
    }
  }
}

</script>

<style scoped>

#theater-main-container {
  padding-left: 10em;
  padding-right: 10em;
}
</style>
