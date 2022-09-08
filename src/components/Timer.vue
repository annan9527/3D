<template>
  <div class="timer">
    {{ dateFormat(newDate) }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      newDate: new Date(),
      timer: null,
    };
  },
  mounted() {
    //显示当前日期时间
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.newDate = new Date(); // 修改数据date
    }, 1000);
  },
  methods: {
    dateFormat(time) {
      let date = new Date(time);
      let year = date.getFullYear();
      let wk = date.getDay();
      /* 在日期格式中，月份是从0开始的，因此要加0
       * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
       * */
      let month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      let hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      let minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      let seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let week = weeks[wk];
      // 拼接
      return (
        year +
        "年" +
        month +
        "月" +
        day +
        "日" +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds +
        " " +
        week
      );
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.timer {
  width: 400px;
  height: 20px;
  text-align: center;
  line-height: 20px;
}
</style>