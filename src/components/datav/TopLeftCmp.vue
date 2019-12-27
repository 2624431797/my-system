<template>
  <div class="top-left-cmp">
    <div class="dc-left">
      <dv-border-box-5>
        <div class="main-value"><span>{{ mainval }}</span>件</div>
        <div class="compare-value"><span>同比</span>{{ comval }}</div>
        <div class="compare-value"><span>环比</span>{{ cirval }}</div>
      </dv-border-box-5>
      <div class="dc-text">
        运维人均工作量
        <dv-decoration-3 style="width:200px;height:20px;" />
      </div>
    </div>
    <div class="dc-right">
      <div class="dc-text">
        当月维修任务量
        <dv-decoration-3 style="width:200px;height:20px;" />
      </div>
      <dv-border-box-5 :reverse="true">
        <div class="main-value"><span>{{ nowmainval }}</span>件 / 日</div>
        <div class="compare-value"><span>同比</span>{{ nowcomval }}</div>
        <div class="compare-value"><span>环比</span>{{ nowcirval }}</div>
      </dv-border-box-5>
    </div>
  </div>
</template>

<script>
import { getMainStaff } from "@/mock/mock"
export default {
    name: 'TopLeftCmp',
    data(){
        return {
            mainval : null,
            comval : null,
            cirval : null,
            nowmainval : null,
            nowcomval : null,
            nowcirval : null,
        }
    },
    methods : {
        initLoad(){
            getMainStaff().then(res => {
                this.mainval = res.TopLeftCmp.mainval
                this.comval = res.TopLeftCmp.comval
                this.cirval = res.TopLeftCmp.cirval
                this.nowmainval = res.TopLeftCmp.nowmainval
                this.nowcomval = res.TopLeftCmp.nowcomval
                this.nowcirval = res.TopLeftCmp.nowcirval
            })
        }
    },
    created(){
        this.initLoad()
    }
}
</script>

<style lang="less">
.top-left-cmp {
    display: flex;
    .dc-left, .dc-right {
        width: 50%;
    }
    .dv-border-box-5 {
        height: 60%;
    }
    .dc-text {
        display: flex;
        flex-direction: column;
        height: 40%;
        font-size: 20px;
        padding: 20px;
        box-sizing: border-box;
    }
    .dc-left .dc-text {
        align-items: flex-end;
        justify-content: center;
    }
    .dc-right .dc-text {
        justify-content: flex-start;
        padding-top: 20px;
    }
    .dc-left .dv-border-box-5 {
        padding: 22px;
        box-sizing: border-box;
    }
    .dc-right .dv-border-box-5 {
        padding: 12px;
        padding-left: 75px;
        box-sizing: border-box;
    }
    .main-value {
        font-weight: bold;
        font-size: 30px;
        span {
            font-size: 50px;
            color: #00c0ff;
            margin-right: 15px;
        }
    }
    .compare-value {
        height: 35px;
        line-height: 35px;
        font-size: 18px;
        span {
            margin-right: 30px;
        }
    }
}
</style>
