<template>
  <ul>
    <li>
      <input
        type="checkbox"
        name=""
        id=""
        class="pick"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 如下代码也能实现功能 但不建议使用v-mode,因为违反原则修改了props，只是vue没有监测到,修改藏在对象里的属性可以，不藏在对象里会报错 -->
      <!-- <input type="checkbox" name=""id="" class="pick" v-model="todo.done" /> -->
      <span>{{ todo.title }}</span>
      <button class="del" @click="handletodo(todo.id)">删除</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MyItem",
  //声明接受todo对象
  props: ["todo"],
  methods: {
    handleCheck(id) {
      //将对应的todo对象的done值取反
      // this.checkTodo(id);
      this.$bus.$emit('checkTodo',id)
    },
    handletodo(id){
      //  this.deltodo(id)
      this.$bus.$emit('deltodo',id)

    }
  },
};
</script>

<style scoped>
/* list */
.list ul {
  width: 100%;
}

.list ul li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: none;
  border-bottom: 1px #dcdcdc solid;
}
 li:hover {
  background-color: rgb(139, 131, 131);
  box-shadow: 2px 2px #dcdcdc;
  cursor: pointer;
}

.list ul li .del {
  width: 40px;
  height: 30px;
}

</style>