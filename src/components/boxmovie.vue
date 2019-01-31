<template>
        <el-main style="background-color : #f5f7fb;">
                <div class="box">
                    <div class="box-detail">
                        <div class="poster">
                            <img src="../assets/now-showing/movie-1.jpg">
                        </div>
                        <div class="detail">
                            <div class="main-detail">
                                <h1 class="name">อลิตา แบทเทิล แองเจิ้ล</h1>
                            </div>
                                <p class="gnere">หมวดหมู่: Adventure</p>
                                <ul class="movie-detail-list">
                                    <li class="list-item" style="padding-left:0;">เรทผู้ชม: TBC</li>
                                    <li class="list-item" style="border-left: 1px solid #c6c7c7;">125 นาที</li><br>
                                    <el-button style="margin-top:30px;">รายละเอียดภาพยนตร์</el-button>
                                </ul>
                        </div>
                    </div>
                </div>
        </el-main>
</template>

<script>
export default {
  name: 'boxmovie'
}
</script>

<style scoped>
    .box{
        margin-left: 8.333333%;
        width: 83.333333%;
        /* float: left; */
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
        box-sizing: border-box;
    }
    .box-detail{
        background-color: #fff;
        border-radius: 5px;
        margin-top: 40px;
        margin-bottom: 40px;
        padding: 0 50px 0 100px;
        box-shadow: 0 2px 4px 0 hsla(180,1%,78%,.35);
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
    }
    .poster{
        margin-left: 0;
        padding: 0;
        margin-top: -40px;
        margin-bottom: -40px;
    /* margin-left: -25px; */
        float: left;
        box-sizing: border-box;
        width: 30%
    }
    .detail{
        padding: 30px 45px;
        color: black;
    }
    .main-detail{
        margin-bottom: 30px;
    }
    .name{
        font-size: 20px;
        margin: 0;
    padding: 0;
    font-weight: 600;
    }
    .genre{
        margin: 0;
    margin-bottom: 5px;
    }
    .movie-detail-list{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .list-item{
        padding: 0 15px;
        line-height: 1;
    display: inline-block;
    vertical-align: middle;
    }
</style>
