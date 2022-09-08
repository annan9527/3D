<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <!-- 左侧模块 -->
      <div class="box">
        <div class="heard">
          <div>亡人数</div>
          <div class="size">{{ number }}</div>
        </div>
        <!-- <transition>
          <div class="left" @click="close" v-show="isshows">开</div>
        </transition> -->
        <!-- <transition name="draw"> -->
        <!-- <div class="center" v-show="!isshow"> -->
        <!-- <Timer v-show="!isshow"></Timer>
        <Death v-show="!isshow"></Death> -->
        <!-- </div> -->
        <!-- </transition> -->
        <!-- <div class="rigth" @click="close" v-show="!isshow">关</div> -->
        <Timer></Timer>
        <Death></Death>
      </div>
      <div class="map">
        <Map></Map>
      </div>
      <div class="school">
        <SchoolRankings></SchoolRankings>
      </div>
      <div class="news">
        <News></News>
      </div>
      <div class="menu">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            综合指挥系统<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="seeTable('黄金糕狮子头')"
              >后台指挥系统</el-dropdown-item
            >
            <el-dropdown-item @click.native="seeTable('狮子头狮子头')"
              >监控指挥系统</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 渐变色 -->
        <div class="color">
          <Color></Color>
        </div>
        <!-- 进度条 -->
        <div> 进度条</div>
        <div style="width:200px;">
          <el-progress :percentage="50" type="line" stroke-linecap="butt"></el-progress>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import Death from "../../components/Death.vue";
import Timer from "../../components/Timer.vue";
import Map from "../../components/Map.vue";
import SchoolRankings from "../../components/SchoolRankings.vue";
import News from "../../components/News.vue";
import Color from "../../components/Color.vue";

export default {
  data() {
    return {
      number: "00,045,625",
      isshow: false,
      isshows: false,
    };
  },
  methods: {
    close() {
      this.isshow = !this.isshow;
      if (this.isshows) {
        this.isshows = false;
      } else {
        setTimeout(() => {
          this.isshows = true;
        }, 800);
      }
    },
    // 下拉菜单点击事件
    seeTable(val) {
      console.log(val);
    },
  },
  created() {},
  components: { Death, Timer, Map, SchoolRankings, News, Color },
};
</script >

<style lang="scss" scoped>
@import "../../assets/style/index.scss";
.box {
  width: 400px;
  border: 1px solid #fff;
  .heard {
    width: 400px;
  }
  .size {
    font-size: 50px;
    color: rgb(233, 192, 6);
    font-family: led;
  }
  // .left {
  //   width: 20px;
  //   height: 100%;
  //   // background-color: aqua;
  // }
  // .center {
  //   // background-image: url(../../assets/image/OIP-C.jpg);
  //  width: 300px;
  // }
  // .rigth {
  //   width: 20px;
  //   height: 100%;
  //   background-color: rgb(10, 151, 176);
  // }
  // .draw-enter-active,
  // .draw-leave-active {
  //   transition: all 0.5s ease;
  // }
  // .draw-enter,
  // .draw-leave-to {
  //   width: 0px;
  // }
}
.map {
  // background-color: blueviolet;
  position: absolute;
 top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 900px;
  
}
.school {
  top: 0;
  right: 10px;
  position: absolute;
  width: 450px;
  height: 200px;
  border: 1px solid #fff;
}
.news {
  top: 450px;
  right: 10px;
  position: absolute;
  width: 450px;
  height: 150px;
  border: 1px solid #fff;

}
.menu {
  top: 600px;
  right: 10px;
  position: absolute;
  width: 450px;
  height: 150px;
  border: 1px solid #fff;
 
.color {
  top: 0;
   position: absolute;
   right: 50%;
}

}

.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>