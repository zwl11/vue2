<template>
  <div>
    <button @click="isShow = !isShow">点我切换动画</button>

    <transition appear name="aa">
      <div v-show="isShow" class="box"></div>
    </transition>

    <button @click="show = !show">切换</button>

    <transition
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__bounceInUp"
      leave-active-class="animate__zoomOutUp"
    >
      <h1 v-show="show">滴滴滴滴滴滴滴</h1>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Animate1",
  data() {
    return {
      isShow: true,
      show: true,
    };
  },
};
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  background-color: blueviolet;
}

/* .aa-enter-active,
.aa-leave-active {
  transition: 0.5s ease-in-out;
}
.aa-enter,
.aa-leave-to {
  width: 0;
  height: 0;
  opacity: 0;
} */
/* .aa-enter-active,
.aa-leave-active {
  transition: 0.5s ease-in-out;
}
.aa-enter,
.aa-leave-to {
  width: 0;
  height: 0;
  opacity: 0;
} */

.aa-enter-active,
.aa-leave-active {
  /* 定义过渡时间, 速度曲线, 过渡延迟 */
  transition: 0.5s ease-in-out;
  /* transition-delay: 1s; */
}
.aa-enter,
.aa-leave-to {
  width: 0;
  height: 0;
  opacity: 0;
}
</style>