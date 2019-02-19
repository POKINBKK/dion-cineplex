<template>
  <!--หน้า home แหละ-->
  <div id="home-container">
    <el-header>
     <Header></Header>
    </el-header>
    <el-main id="home-main-container">
    <!--Slideshow section-->
    <el-row id="slideshow-row">
      <el-col :span="24">
        <div class="slideshow-container">
          <el-carousel height="450px" indicator-position="outside">
            <el-carousel-item v-for="item in slideShow" :key="item.id">
              <img v-bind:src="item.path" width="100%"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
    <!--MovieSelector Section-->
    <!-- <el-row>
      <el-col class="movieselector-container" :span="24">
        <MovieSelector></MovieSelector>
      </el-col>
    </el-row> -->
    <!--all movie for select section-->
    <el-row>
      <el-col id="moviesection-title" :span="24">
        <h1>ภาพยนตร์</h1>
      </el-col>
    </el-row>
    <el-row id="movie-row">
      <el-col :span="24">
        <Movie></Movie>
      </el-col>
    </el-row>
    </el-main>
  </div>
</template>

<script>
import Movie from './Movie'
import MovieSelector from './MovieSelector'
import Header from './Header'
export default {
  name: 'Home',
  components: {
    Movie,
    MovieSelector,
    Header
  },
  data (){
    return {
      slideShow : [
        {id : 1, path : "https://lh3.googleusercontent.com/sSCt7aIOUS2OKia3gegf7dkzso6x1I5cWXa5dWFXy3vqmfFr6Ob7hOjV9deU0TpKlW2XkDBcgvC_yt1XmvDfjoO8_Ll-OkboUZbeME8Jb3whkcLbedbTbYjAfqvb4DwWQAI66L2OQ4-hdPd55p8pcu-g-ih2BmtVXUFupQoHH9KGqR8MQygrY2zudIFxXkse-yJK0-9dV1_ZkehOqLA5hXeuou04ebQgwOUZ0nyP5TY3TihnuAbnmZx1jRmeGb_b9cvDU56W1ENm26LgysAhP8eiNihiKuOF2aH0ok8YcnhCGYPpYaNm-MmzDSSUP38DO_onk1-Yg4Rg2a0tgQPF3yI-_5_2PX_j5E3wpyWSGldxTuHN8Z_STWgmJbfVE-Z4LX1aQvDdYlImDvQCxG1GNWC9Dw8snOzKjZbAXR1QprDsvkExSYK14uphy_LDMUr7gOuV266ThtwG86s5bYWTzKusMNnUUjCJ_uZ8nA_Pl9bbW5nhJYN5FljssbCkVtomwDB3AHnmlUGsVqmxCzrc9CPWN5knVYrwoCkRryNtn_X6mpc4_WNI5LlcpqV7ZbUdIqSeywhnuTGhoDqrECN-1FaIxpx-34wyKrtgYqA2hf2QkSFbr_KPXlrwP00o9u0Tvwjp7vHiSsYQLXBzVC6Pj0oVwlaBF3pspFBempuJZ_mx4ygIt2ZKvY7p6pnsg-eKrT_khKWnNdWI0pGOBTGeVVPC=w1200-h500-no"},
        {id : 2, path : "https://lh3.googleusercontent.com/Ib_19Nf5mzUkYz2X82RWXf4muz48yHsaZlW28_xmGiUSxbOXaQaGJN_S7waPT9m4YGI7e6LeMU9esDWgDgRO3bNEW7CLepXDy6lbh-MeMYGNOuamNtfuUCILDmMTp7lsntGaiw5EbJGZmDN5e4XNasA47v2C0ATMivE9paoQEPcyAayCOpWPt6zdA0YEnZIIXJrkvpjs---g0gzj0L6nfeRwtgFUi1zJ4ZMpLqgaX8pQS_VV9W6ggfwjhLV1WWj5406-U4aqtj03V-ft6l3D_3fBgSJrjdjWVSJgXczKDemfgWAvphdhzEtNUfu6zp_fLGPiFXAGP_Ar5kT_5eokZ5DzEPe1EkK2rkFaEhirY5jyTWO5iB2zu29UZGeqez6xd92uYTHgxbAVaoRYweBJFSRWMSU8cATXpU1HD4HWL95LCt27T4AQodXZGGo4A6_aBEgF-WcE1fW5r4igxKuym9ZJecasJCD_x_kwugI-KboDb0JHOTr7eBpJy6E3BgFMMaS6NOZAjHKQRNmOYbLfu-zbrrnbkJAl1j7ocll5LzAZ5HcextSDYTmUp59F7WmNOm5UC1fnMKg395fJN4xmJxLbE2yCb91pHzyyGA8VsrMw4zW1mJi3iEvtA7OFYde3GZ4sq80hZPb90Dhtl3OOaz5bCsKn3tLeukcTmxa9ZVPF-Wm5TQPOIFsdp_cfhkrxmyadKd3cHzgIyryIXcfmKWCC=w1200-h500-no"},
        {id : 3, path : "https://lh3.googleusercontent.com/HVPEHRxuwqOMX8rDni0Pim34NHhNE9GMYlL8dCz1hw2DnhjjflY781EfQLbSxERIWlFjt3yAugHCcuPRISWh33lMm9ZzqHPicmAnKtOeLZZBFkHOs7m_YJUZW-zQuogcSDg1JLcsIM6P-li7J7GvKnqXfoUTYz5olQJhhnEoQGAz76T-cKGizqtyBfj_e356sEgJ-Jvk3ub8dUDghm0oscGeGqaDfFfm82DDJbSwpaeB-y_mS7AaHu7-L11VMoj-byCCBl1DtRkF5F3W2lnLOUscBq4Moc4NXswngudM_BlW0DgpiM8TAp0LZPyJ4Co0s61wxMkKqZwoNRI1HRyFNL_CzyNIGGgG2nPPXaCZastPasyGwJmPGMnFIHfrPuBU10iPLI7Two6NgPh_NKlLPKZfmWa9xZLTTI-fJkJ_0KpuI2OCann1Zp8gK8YErmw0qltatjpUdK-D7M067ktTfWX6xWZr5bkLgTNtSPQpD6shNYKa91neVpgaPklY2WprbixVaO1JB5naS32vlkdKfiQcdlRxklqUSVvDf6kXHsOwmLeNqZgo35R58jHofZ1JwS39jrBOqx3RcBKvU-QDykHQH9RZgrF0o_6UTys-xHDlqFPAvHX8kmUpeyzzJlhONKpqahjU6wpj5r-T1l1CLq3daDirBGsSWl672OcwxLET-YNzgdRV3xLgB1Gjgr1LHFemES5SybjF3Ej94RZQq08x=w1200-h500-no"},
        {id : 4, path : "https://lh3.googleusercontent.com/BevVTUd8_MPVNgt9FlfSt941TeiU8Fabh-ccuAwVteBd3zGSZJ3bzShahhNuRsI61YvyDC5Luoxw8UrDc-DW8ODi4BKpBLsgiG-a2JACbHQSwyP3U0p81UByf16SvNIHPO7ASNwbpV6tnIJlGrptVd_oeOWDGRBVqrqDxrEEdPFeBmx16ApUEsXBXvpPCA_Ctu7GCo0vWm3ELxt_V7_Yb0x8Tf8y7smVX8JYwjCyTIZLQNpA8YDivJaX9tZ5n_gVftD3EKgzaMwAfi6i6cM4W80A4pPdX91ArmCG_f49Eh2vSoy0lF8UE8baRj_NmBrmPUj-x4C4jyGbvkbeyso320NGV8pmEAfwfT5_c5mH3s8B2JMF3SohqNmXVduOX59vKBS5_biW__6353O8GtrhI49sPkvUNp4hrosC9Kuk44fjMrtNvx4_cAVeYQUEsI05MAYweM1DV1GM85UdC4Zn5TQykBe3gA12V0d5jVlTDXK224G3qKUWfUSqszldWgxHbfdDNrRoh9IU7DVOcwMhzWhEPOHqBlyaKJGw3HBuUgo3ZArYXMBFf7cGL7yzrSRySLhr7jPiHJo6ZsxRa8J3TNPuOIL_mORF1nMDsebqbyCMedhwxSY5PTJ0cQ4GQWd4uQP44AF_KxndwonBXZufIE9t1GRo68hhYP1Wt3fzbbK0iKC8_A1N6u-SJLjYeAOer5L8teYYYs85sR0MY7t1oSlp=w1200-h500-no"}
      ]
    }
  }
}
</script>

<style scoped>
  .el-carousel__item {
    background-color: #99a9bf;
    text-align: center;
  }
  #home-main-container{
    padding-left: 10em;
    padding-right: 10em;
  }
  .movieselector-container {
        padding-top: 1em;
        padding-left: 10em;
        padding-right: 10em;
        padding-bottom: 2em;
  }

  #moviesection-title {
    text-align: center;
    color: #409EFF;
    padding-bottom: 1em;
  }

</style>
