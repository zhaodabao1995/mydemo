<template>
  <div id="myChart" :style="{left:'center', height: '300px'}"></div>
</template>

<script>
import axios from 'axios'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入折线图。

require('echarts/lib/chart/line')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件and工具箱组件。
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/toolbox')

export default {
  name: 'hello',
  data() {
    return {

    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {

      return new Promise(function (resolve, reject) {
        axios.get('http://localhost:8080/mb/getAVGSugar', {
          params: {
            openid: 8888
          }
        })
          .then(function (res) {
            var jsonObj = JSON.parse(JSON.stringify(res.data.result));
            console.log(res.data.result);
            var arr = [];
            var categories = [];
            for (var i = 0; i < jsonObj.length; i++) {
              arr.push(jsonObj[i].sugarContent);
              categories.push(jsonObj[i].createDate);
            }
            let myChart = echarts.init(document.getElementById('myChart'), null, { renderer: 'svg' })


            myChart.setOption({
              title: { text: "ECharts 入门示例" },
              tooltip: {},
              toolbox: {
                feature: {
                  dataView: {},
                  saveAsImage: {
                    pixelRatio: 2
                  },
                  restore: {}
                }
              },
              xAxis: {
                data: categories
              },
              yAxis: {},
              dataZoom: [
                // {   // 这个dataZoom组件，默认控制x轴。
                //   type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                //   start: 10,      // 左边在 10% 的位置。
                //   end: 60         // 右边在 60% 的位置。
                // },
                {   // 这个dataZoom组件，也控制x轴。
                  type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
                  start: 10,      // 左边在 10% 的位置。
                  end: 60         // 右边在 60% 的位置。
                }
              ],
              series: [
                {
                  name: '销量',
                  smooth: true,
                  type: 'line',
                  data: arr
                }
              ]
            })
            resolve()

          }).catch(function (error) {
            console.log(error);
          });

      })    }  }

}
</script> 


<style lang="stylus" rel="stylesheet/stylus">
.app {
  color: read;
}
</style>
