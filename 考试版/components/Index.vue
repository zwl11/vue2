<template>
  <div class="box1">
    <div class="box2">
      <button @click="add" class="add">添加祝福</button>
    </div>
    <div class="content">
      <Item v-for="item in info" :key="item.id" :info="item" ref="item">
        <button @click="change(item.id)">修改</button>
        <button @click="del(item.id)">删除</button>
      </Item>
    </div>
    <!-- <div class="mask" v-show="isShow">
      <ul>
        <li><button @click="changeInfo(info)">修改</button></li>
        <li><button @click="del()">删除</button></li>
      </ul>
    </div> -->
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
      X: "",
      Y: "",
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
      let suiji = Math.floor(Math.random() * 600);
      let suiji2 = Math.floor(Math.random() * 600);
      item.$el.style.top = suiji + "px";
      item.$el.style.left = suiji2 + "px";
    });
  },
  methods: {
    add() {
      router.push("/add");
    },
    ...mapMutations(["del"]),
    change(id) {
      router.push({
        path: `/home/edit/${id}`,
      });
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
</style>