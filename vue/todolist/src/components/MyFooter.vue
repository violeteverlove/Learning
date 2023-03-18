<template>
  <footer v-show="total">
    <!-- <input type="checkbox" name="" id="" class="pick" :checked="isAll" @change="checkAll" /> -->
    <input type="checkbox" name="" id="" class="pick" v-model="isAll" />
    <span>已完成{{ donetotal }}/全部{{ total }}</span>
    <input type="button" name="" id="" class="delall" @click="clearAll" value="清除已完成" />
  </footer>
</template>

<script>
export default {
  name: "MyFooter",
  props: ['todos'],
  computed: {
    total() {
      return this.todos.length;
    },
    donetotal() {
      // var i = 0;
      // this.todos.forEach((todo) => {
      //   if (todo.done == true) {
      //     i++;
      //   }
      // });
      // return i;
      return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0);
    },
    isAll: {
      get() {
        return this.total === this.donetotal && this.donetotal > 0;
      },
      set(value) {
        this.$emit('checkAllTodo',value);
      },
    },
  },
  methods: {
    // checkAll(e) {
    //   this.checkAllTodo(e.target.checked);
    // },
    clearAll(){
     this.$emit('clearTodo')
    }
  }
};
</script>

<style>
/* footer */

footer {
  height: 40px;
  line-height: 40px;
}

.delall {
  width: 70px;
  height: 30px;
}

footer span {
  display: inline-block;
  width: 65%;
  height: 100%;
  padding-left: 100px;
  font-size: 20px;
}
</style>