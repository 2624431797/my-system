<template>
  <div id="data-view">
      <dv-border-box-1 class="main-container">
        <div class="mc-top">
          <Top-Left-Cmp />
          <Top-Middle-Cmp />
          <Top-right-Cmp />
        </div>
        <div class="mc-bottom">
          <dv-border-box-6 class="bottom-left-container">
            <dv-decoration-4 class="mcb-decoration-1" style="width:5px;height:45%;" />
            <dv-decoration-4 class="mcb-decoration-2" style="width:5px;height:45%;" />
            <Bottom-Left-Chart-1 />
            <Bottom-Left-Chart-2 />
          </dv-border-box-6>
          <div class="bottom-right-container">
            <Bottom-Right-Table-1 />
            <Bottom-Right-Table-2 />
            <Bottom-Right-Table-3 />
            <Bottom-Right-Table-4 />
          </div>
        </div>
      </dv-border-box-1>
  </div>
</template>

<script>
import TopLeftCmp from '@/components/datav/TopLeftCmp'
import TopMiddleCmp from '@/components/datav/TopMiddleCmp'
import TopRightCmp from '@/components/datav/TopRightCmp'

import BottomLeftChart1 from '@/components/datav/BottomLeftChart1'
import BottomLeftChart2 from '@/components/datav/BottomLeftChart2'

import BottomRightTable1 from '@/components/datav/BottomRightTable1'
import BottomRightTable2 from '@/components/datav/BottomRightTable2'
import BottomRightTable3 from '@/components/datav/BottomRightTable3'
import BottomRightTable4 from '@/components/datav/BottomRightTable4'

export default {
    name: 'DataView',
    components: {
        TopLeftCmp,
        TopMiddleCmp,
        TopRightCmp,
        BottomLeftChart1,
        BottomLeftChart2,
        BottomRightTable1,
        BottomRightTable2,
        BottomRightTable3,
        BottomRightTable4
    },
    data () {
        return {}
    }
}
</script>

<style lang="less">
#data-view {
    width: 100%;
    height: 100%;
    color: #fff;
    border-radius: 5px;
    background-image: url('../../components/datav/img/bg.png');
    #dv-full-screen-container {
        background-size: 100% 100%;
        box-shadow: 0 0 3px blue;
        display: flex;
        flex-direction: column;
    }

  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .mh-left {
      font-size: 20px;
      color: rgb(1,134,187);

      a:visited {
        color: rgb(1,134,187);
      }
    }

    .mh-middle {
      font-size: 30px;
    }

    .mh-left, .mh-right {
      width: 450px;
    }
  }

  .main-container {
    height: 100%;

    .mc-top, .mc-bottom {
      padding: 30px;
      display: flex;
    }

    .mc-top {
      height: 100%;
    }

    .mc-bottom {
      height: 600px;
    }

    .top-left-cmp, .bottom-left-container {
      width: 32%;
    }

    .top-middle-cmp, .top-right-cmp {
      width: 34%;
    }

    .bottom-left-container {
      position: relative;

      .border-box-content {
        display: flex;
      }

      .mcb-decoration-1, .mcb-decoration-2 {
        position: absolute;
        left: 50%;
        margin-left: -2px;
      }

      .mcb-decoration-1 {
        top: 5%;
        transform: rotate(180deg);
      }

      .mcb-decoration-2 {
        top: 50%;
      }

      .bottom-left-chart-1, .bottom-left-chart-2 {
        width: 50%;
        height: 100%;
      }
    }

    .bottom-right-container {
      width: 68%;
      padding-left: 30px;
      box-sizing: border-box;
      display: flex;
    }
  }
}
</style>
