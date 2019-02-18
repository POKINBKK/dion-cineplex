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
        {id : 1, path : "https://lh3.googleusercontent.com/1StXKxtZJe-9iv0ZxxUnraIvmziwC8X0GvAy1ncNpTPPgUSxs_LVwCvVLIginaDMg32Wb2zteV-809P5Oq7LMfoPAxV4PFQ_DdkxEp5YMb7Y6rSLccivis5eEGXSLDcCfQWs2g8a_mnGmmI19GPWr7NYQta1VSFz4vn5Tt5BGZ289MKTmpxBk4f40OSY5Xat8oLVf8SQbWvMhXR8HjAFeLnoooMenBBIzHobf6T9SdxyFnpwr_xpXEixN_2XmbHeTRdpAe_5mUeHmFmrqC1pJRIWGU1Vt2wmJGKpygBzTWglLy5WvFIffio26EX2xvYow02kMNTA3uU0Ng_zig7bAk3FAT7yoReMgfya9t9VpVqpZoGHESLSknPywyCxXc9vNFmjs_iOFnaWgv4fQrAT_EeGxbzwnuEdtov04WjBoheDUlBSKDj2BDMAsUX4kErsTK2QGECqz4wQd828U8aGJDgV0z_TTFR9TEAEaXkCEPyvuBtjIw9LqOO08ph25uB8rIpMfpY5CvRzipt3ezIVJPNnqa_peYbSy2Mrb8-1KZmDlcujZpkkiRc84qIdJEGvEzGNacWAqf7vNKgEpVFry98owmsSi4C3dndniq4Jg6rGk_N2qWnawgzLPzUPZe640lkXN-mpsVHu9sVQyds26GibNiZ9yA4=w1200-h500-no"},
        {id : 2, path : "https://lh3.googleusercontent.com/u2oWjK4_5T_oboF9iij-VKwIabDLBTEw4XWvqBEmJIJdU8JraT0rrDVeE2PZK4SADkQJl1E7N95oMLPYpmA7abLbSta29vlymvtFFXpkEPMTH4U6MI1QFM0M7qMcqdaNVv0_R-LCN6zQp9nuaZaU0hMmp0W5PWMtNqkYtSiWOKWhRvM8IErH_FguCfQlVqil5JH-sGWBEV-3IvcUqo-sU0TIWAlrQ9z8OOpAHNrCsLWRAMzr5qc-GWF7ixgPnsU5HpRZkmqcoWfydS1HtcD0KGHSPKxK8NcUEaNDGg1FT68gkJhFPNy4RAsXJnCuj7h6H4MXgRE2au-5rPS_5Kf5IGczUtxg3LnBVMYwVa-1bWmMik7BQAmdxZJ137XzEOtP7RNBQqJCWeh-fnege8QsCObqCGLGCUsLWpYt0Upag3o7cxsNCXrLI7GLD3jqqLW0UYgNyPWfAxmxR51BRT4L4frlR1OjdDZt9Vru1-fP1BrM82zQisYso4NYXInaO8n-9F8bh4mrTlgO98AOBfU7U4zZheWBIGUi1oE0tWYw4GDw6HZV-vPwdziunbLch78cVV7HuTieZDE_ednFjWOR-hlWU-xkBq-FA-TIb9SZ_J_8eRhHhF-19wsFmdyg9f1uOqt7axDzWSPeXmA3khnnSxAOunbB2ZU=w1200-h500-no"},
        {id : 3, path : "https://lh3.googleusercontent.com/k7l7sUOuYrA9hyXDG7OETUgIA2Y81szcFQqAY3L1WQuErXdCjV48-drs9Muz2SFuM4Wp_oulRXQpvuHeM62acU4uaOQVi2nXUyqy8EtzUInW9-jI5NdnWulAwhqdvlvtM_JDDOY_s22BSgvY27aZwAZPt0SrQD0pzOTgv85llLWciZ0ZN4TxLWPst92E9EDIRkVs6JIstOGNUh467B2Pn0Jk9Af0vBk52eIRvX65L-srjMWYMa6w-ii040Fk82rJbNV2rP5zcwWsXWIf7rGXmgxFHShcVIzyhphbAhTaRx2Xv2O71Nvw2tXc_2jzLznSNWQ_C2dVS38zo88JpV0Zz6uDYx_2ZGBAIp-4lE7fhnlmUnEP7ptYNbRh4_fIbrSbIhsmoZm_WkHSJXY0oadDchk2TsQoPmk9ZaWVMF8QWz3yoxgLej4ehfDdjPZ3YFsXm3zN4keIcyXvZRUyBNxMhPlGk7sSPsIv5iFOe78SuxuCfJyUZeeOJShQxZ-SA-AVoWpJhEWXzqQ4lZ40bBeL33qqnEmIkZ3ilHKKoJHVNCnJ0_2zhSoG3eQaUd9IDRTOVc0LY0QtpjEpu0dtpK3SraGlzBXTNwETlS50wZdpF2X30fEfUNU2i4HOQLDXczoyw5-NrpAjCxfDQh_t1gY3rgCrypq_8-8=w1200-h500-no"},
        {id : 4, path : "https://lh3.googleusercontent.com/3yKC0cCc1gjvBCCeP7Rz1xtbI84m5F_c3l7KjV_2r2Aa_o50FGuX6XwUuljf1QInMVqfZOlz7bwdNxTXhuM5AtlKwtHbdg6yZ5U4xh3GvDS8x9mzw5NznoeMSFw2p_cIsD2O_yBPAM4ET1FzDvUnExth2UvCF2BCH3A3aykJ6moP61tvTMx7Qr6ydXAripXuvNeQpl1mp18fEFbdbJGH4jpO-FA-3D5z7Iglo0gh9qeyb0WZLUAhW9ZmYZYnM9VziEeMKip4eddIMQwCnlIaQrcq9t6ylKvxcXObnGBWBke3NhLot1Kg4peTzbguTkabWR-Gh8bl71Zat1Y2Lv_P9WaUmSMviOPAnyn7_1F0_OZnHdsaIRgme5QO80RqQetGEpjzUC7LPcThhrhVuS5SXvoZzl8ER-7spdwY7N9jyv13Y0-79O-DfjRC9qjt7HHDmpFph1z33zTJYqQtXoUgqOQjweV3WBTCU7rwptS86wcmscD6F7Oh1SbTtoq75DReBXek5zcVNXf2aWWqIlBqd072otqyS5SVLIbQOySy7KGd72g66rmZl_Up9n6Fxbfz6D-vDIAHuHNNtL0rIJtbjDIj-lf5QkZPfRPBOgnXAXFmqUaA2bDxo_LrsSIjYzmEQQZz44_rR8i_6jErwyfIhJNOIHMBsjU=w1200-h500-no"}
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
