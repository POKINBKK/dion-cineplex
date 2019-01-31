<template>
    <el-row style="padding-bottom: 20px;">
        <ul class="progressbar">
          <li class="active">เลือกรอบฉาย</li>
          <li>เลือกที่นั่ง</li>
          <li>การชำระเงิน</li>
          <li>สิ้นสุด</li>
        </ul>
    </el-row>
</template>

<script>
export default {
  name: 'stepbar'
}
</script>

<style scoped>
  .progressbar {
      counter-reset: step;
  }
  .progressbar li {
      list-style-type: none;
      width: 25%;
      float: left;
      font-size: 12px;
      position: relative;
      text-align: center;
      text-transform: uppercase;
      color: #7d7d7d;
  }
  .progressbar li:before {
      width: 30px;
      height: 30px;
      content: counter(step);
      counter-increment: step;
      line-height: 30px;
      border: 2px solid #7d7d7d;
      display: block;
      text-align: center;
      margin: 0 auto 10px auto;
      border-radius: 50%;
      background-color: white;
  }
  .progressbar li:after {
      width: 100%;
      height: 2px;
      content: '';
      position: absolute;
      background-color: #7d7d7d;
      top: 15px;
      left: -50%;
      z-index: -1;
  }
  .progressbar li:first-child:after {
      content: none;
  }
  .progressbar li.active {
      color: rgb(92, 95, 247);
  }
  .progressbar li.active:before {
      border-color: #6865ff;
  }
  .progressbar li.active + li:after {
      background-color: #6865ff;
  }
</style>
