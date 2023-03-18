<template>
  <header>
    <input
      type="text"
      name=""
      id="top"
      placeholder="请输入"
      v-model="title"
      @keyup.enter="add"
    />
  </header>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  // props: ["addtodo"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {
      if (!this.title.trim()) {
        alert("输入不能为空");
      } else {
        //将用户的输入包装成todo对象
        const todo = { id: nanoid(), title: this.title, done: false };
        //通知App组件添加一个todo对象
       this.$emit('addtodo',todo)
        //清空输入
        this.title = "";
      }
    },
  },
};
</script>

<style>
/* header */

header {
  width: 100%;
  height: 40px;
}

#top {
  height: 35px;
  width: 560px;
  background-color: #ccc;
  border: none;
  border-bottom: 1px #dcdcdc solid;
  outline: none;
  padding-left: 40px;
  font-size: 20px;
}
</style>