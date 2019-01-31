<template>
    <div class="date">
        <div class="container">
            <div class="list">
                <div class="day">
                    <h1 class="days">วันนี้</h1>
                    <p class="date">1/1/1</p>
                </div>
                    
                <div class="day">
                    <h1 class="days">พรุ่งนี้</h1>
                    <p class="date">2/1/1</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'showtime'
}
</script>

<style scope>
 .date{
    background-color: #fff;
    border-top: 1px solid #c6c7c7;
    border-bottom: 1px solid #c6c7c7;
    position: relative;
    box-sizing: border-box;
 }
 .container{
     width: 1170px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
 }
 .day{
     width: 190px;
     text-align: center;
    position: relative;
    cursor: pointer;
    float: left;
    height: 100%;
 }
 .days{
     font-weight: 600;
     font-size: 18px;
 }
 .date{
     font-size: 16px;
     margin-top: 5px;
 }
</style>
