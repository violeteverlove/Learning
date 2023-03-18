<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(使用@或v-on)  -->
    <School v-on:childtofather="getSchoolName" @demo="m1"></School>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法使用ref) -->
    <Student ref="student"></Student>
  </div>
</template>

<script>
//引入组件
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  data() {
    return {
      msg: "你好啊！",
    };
  },
  components: {
    School,
    Student,
  },
  methods: {
    getSchoolName(name) {
      console.log("getSchoolName被调用了", name);
    },
    m1() {
      console.log("demo事件被触发了");
    },
    getStudentName(name) {
      console.log("getSchoolName被调用了", name);
    },
  },
  mounted() {
    this.$refs.student.$on("chitofat", this.getStudentName);
  },
};
</script>

<style>
</style>