<template>
  <div class="box1">
    <div class="box2">
      <button @click="add" class="add">添加祝福</button>
    </div>
    <div class="content">
      <Item
        v-for="item in info"
        :key="item.id"
        :info="item"
        ref="item"
        @contextmenu.native.prevent="clickMenu(item.id, $event)"
      >
      </Item>
    </div>
    <div class="mask" v-show="isShow" @click="isShow = !isShow">
      <transition name="menu">
        <ul class="btns" ref="menu" v-show="isShow">
          <li><button @click="change(id)">修改</button></li>
          <li><button @click="del(id)">删除</button></li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import { mapState, mapMutations } from "vuex";
import Item from "./Item.vue";
export default {
  name: "Index",
  data() {
    return {
      isShow: false,
      id: "",
    };
  },
  components: {
    Item,
  },
  computed: {
    ...mapState(["info"]),
  },
  mounted() {
    this.$refs.item.forEach((item) => {
      let suiji = Math.floor(Math.random() * 400);
      let suiji2 = Math.floor(Math.random() * 1100);
      item.$el.style.top = suiji + "px";
      item.$el.style.left = suiji2 + "px";
    });
  },
  methods: {
    add() {
      router.push({ name: "edit" });
    },
    ...mapMutations(["del"]),
    change(id) {
      router.push(`/home/edit/${id}`);
    },
    clickMenu(id, e) {
      this.id = id;
      this.isShow = true;
      let menu = this.$refs.menu;
      //   console.log(e);
      //   console.log(this.$refs.menu);
      menu.style.top = e.pageY + "px";
      menu.style.left = e.pageX + "px";
    },
  },
};
</script>

<style>
.add {
  text-align: center;
}
/* .content {
  margin: 50px;
} */
.box1 {
  position: relative;
}
.box2 {
  text-align: center;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(230, 230, 230, 0.4);
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.btns {
  position: absolute;
  left: 50%;
  top: 50%;
}
.menu-enter-active,
.menu-leave-active {
  transition: 0.3s;
}
.menu-enter,
.menu-leave-to {
  transform: translateY(-5000%);
}
</style>