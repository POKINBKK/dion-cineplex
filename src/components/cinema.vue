<template>
<el-main style="background-color:#f5f7fb;">
    <div class="select-cinema">
        <div class="select-cinema-header">
            <p>กรุงเทพฯ</p>
        </div>
        <div class="list">
            <div>
                <div class="list-cinema">
                    <p>เซนปิ่น</p>
                </div>
                <div class="list-showtime">
                    <div class="list-showtime-item">
                        <el-row>
                            <el-col :span="4">
                                <div class="left-section">
                                    <p>Digital Cinema</p>
                                </div>
                            </el-col>
                            <el-col :span="20">
                                <div class="right-section">
                                    <ul class="movie-detail-list">
                                        <li class="list-item">
                                            <span>ENG</span>
                                        </li>
                                        <li class="list-item">
                                        </li>
                                    </ul>
                                    <ul class="time-list">
                                        <li class="time-item">
                                            <el-button type="primary">14:00</el-button>
                                        </li>
                                        <li class="time-item">
                                            <el-button type="primary" plain>14:00</el-button>
                                        </li>
                                        <li class="time-item">
                                            <el-button type="primary" plain>14:00</el-button>
                                        </li>
                                    </ul>
                                </div>
                            </el-col>
                        </el-row>    
                    </div>
                </div>
            </div>
            <div>
                <div class="list-cinema">
                    <p>เซนปิ่น</p>
                </div>
                <div class="list-showtime">
                    <div class="list-showtime-item">
                        <el-row>
                            <el-col :span="4">
                                <div class="left-section">
                                    <p>Digital Cinema</p>
                                </div>
                            </el-col>
                            <el-col :span="20">
                                <div class="right-section">
                                    <ul class="movie-detail-list">
                                        <li class="list-item">
                                            <span>ENG</span>
                                        </li>
                                        <li class="list-item">
                                        </li>
                                    </ul>
                                    <ul class="time-list">
                                        <li class="time-item">
                                            <el-button type="primary">14:00</el-button>
                                        </li>
                                        <li class="time-item">
                                            <el-button type="primary" plain>14:00</el-button>
                                        </li>
                                        <li class="time-item">
                                            <el-button type="primary" plain>14:00</el-button>
                                        </li>
                                    </ul>
                                </div>
                            </el-col>
                        </el-row>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</el-main>
</template>

<script>
export default {
  name: 'cinema'
}
</script>

<style scope>
    .select-cinema{
        background-color: #fff;
    border: 1px solid #c6c7c7;
    margin-top: 20px;
    padding-top: 0;
    box-sizing: border-box;
    }
    .select-cinema-header{
        background-color: #2e66cf;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    line-height: 1;
    position: relative;
    padding: 20px;
    }
    .list{
        box-sizing: border-box;
    }
    .list-cinema{
        padding: 20px;
        font-size: 16px;
    color: #114c97;
    line-height: 1;
    font-weight: 600;
    background-color: #e0e5f2;
    }
    .list-showtime{
        padding: 0 20px;
        border: 0;
        box-sizing: border-box;
    }
    .list-showtime-item{
        padding: 20px 0;
        box-sizing: border-box;
    }
    .left-section{
        text-align: center;
    font-size: 18px;
    }
    .right-section{
        padding: 10px 20px;
        font-size: 18px;
    font-weight: 500;
    color: #231f20;
    }
    .movie-detail-list{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .list-item{
        padding-left: 0 15px;
        line-height: 1;
    display: inline-block;
    vertical-align: middle;
    }
    .time-list{
        padding: 0;
    margin: 0;
    list-style: none;
    }
    .time-item{
        margin-right: 20px;
        float: left;
        margin-bottom: 15px;
    }

    .button-showtime.active {
    color: #fff;
    border: none;
    font-weight: 600;
    background: #2e66cf;
    background: linear-gradient(90deg,#2e66cf,#4db0db 75%,#5ab6de);
}
    .button-showtime {
    min-width: 110px;
    height: 40px;
    font-size: 16px;
    color: #1e1f24;
    border: 2px solid #2e66cf;
    line-height: 1;
    background: none;
    padding: 0;
}
</style>
