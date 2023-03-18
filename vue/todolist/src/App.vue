<template>
  <div id="App" class="box">
    <MyHeader @addtodo="addtodo"></MyHeader>
    <MyList :todos="todos"></MyList>
    <MyFooter
      :todos="todos"
      @checkAllTodo="checkAllTodo"
      @clearTodo="clearTodo"
    ></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addtodo(todo) {
      // console.log('接收数据',x);
      this.todos.unshift(todo);
    },
    //勾选或取消一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    //删除一个todo
    deltodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    //全选或取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除已完成
    clearTodo() {
      //过滤出假的留下真的给回原数组
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    this.$bus.$on("deltodo", this.deltodo);
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo", "deltodo");
  },
};
</script>

<style>
/* main */

* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
input {
  cursor: pointer;
}

.box {
  margin: 200px auto;
  width: 600px;
  background-color: #ccc;
  border: 1px solid #918989;
  border-radius: 5px;
}

.pick {
  float: left;
  width: 20px;
  height: 20px;
  margin-top: 10px;
  margin-left: 10px;
}

span {
  display: inline-block;
  width: 70%;
  height: 100%;
  padding-left: 100px;
  font-size: 20px;
}
</style>
