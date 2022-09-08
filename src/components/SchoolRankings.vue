<template>
  <div ref="chart4" style="width: 100%; height: 100%"></div>
</template>
    
    <script>
import * as echarts from "echarts";

export default {
  methods: {
    initCharts4() {
      const data = [2528, 3018, 4928, 1858, 3002, 2695, 2695, 2695, 2695];
      let myChart = echarts.init(this.$refs.chart4);
      myChart.setOption({
        title: {
          text: "驾校排名",
          textStyle: {
            color: "#ccc",
          },
        },
        grid: {
          left: 60,
          right: 20,
          top: 50,
          bottom: 40,
        },
        legend: {
          show: true,
          icon: "circle",
          orient: "horizontal",
          top: "90.5%",
          right: "center",
          itemWidth: 16.5,
          itemHeight: 6,
          textStyle: {
            color: "#C9C8CD",
            fontSize: 14,
          },
        },
        xAxis: [
          {
            data: [
              "星光",
              "金盾",
              "长城",
              "星光",
              "金盾",
              "长城",
              "星光",
              "金盾",
              "长城",
            ],
            axisLabel: {
              show: true,
              textStyle: {
                color: "#aaaaaa",
                fontSize: 12,
              },
              margin: 10, //刻度标签与轴线之间的距离。
            },
            axisLine: {
              show: true, //不显示x轴
            },
            axisTick: {
              show: false, //不显示刻度
            },
            boundaryGap: true,
            splitLine: {
              show: false,
              width: 1,
              lineStyle: {
                type: "solid",
                color: "#03202E",
              },
            },
          },
        ],
        yAxis: [
          {
            show: true,
            axisLabel: {
              interval: "auto",
              show: true,
              textStyle: {
                fontSize: 14,
                color: "#fff",
              },
            },
            splitLine: {
              show: true,
              width: 2,
              lineStyle: {
                color: "#03202E",
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(49,176,255,0.5)",
              },
            },
          },
        ],
        series: [
          {
            //柱底圆片
            name: "",
            type: "pictorialBar",
            symbolSize: [15, 8], //调整截面形状
            symbolOffset: [0, 4],
            z: 12,
            itemStyle: {
              normal: {
                color: "#183E96",
              },
            },
            data: data,
          },
          //柱体
          {
            name: "",
            type: "bar",
            barWidth: 15,
            barGap: "0%",
            itemStyle: {
              color: () => {
                return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#01AEF6",
                  },
                  {
                    offset: 1,
                    color: "rgba(16,36,95,0.6)",
                  },
                ]);
              },
              opacity: 1,
            },
            data: data,
          },
          //柱顶圆片
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [15, 8], //调整截面形状
            symbolOffset: [0, -5],
            z: 12,
            symbolPosition: "end",
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#fff",
              },
            },
            itemStyle: {
              normal: {
                color: "#17E1FF",
              },
            },
            data: data,
          },
        ],
      });
    },
  },
  //调用
  mounted() {
    this.$nextTick(function () {
      this.initCharts4();
    });
  },
};
</script>
    
    <style lang="scss" scoped>
</style>