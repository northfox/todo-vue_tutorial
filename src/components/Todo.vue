<template>
<div>
  {{ msg }}
  <form>
    <button @click="addTodo()">Add task</button>
    <button @click="removeTodo()">Delete finished tasks</button>
    <p>
      input
      <input name="task" type="text" value="" v-model="newTodo"/>
    </p>
    <p>task: {{ newTodo }}</p>
  </form>
  <div class="task-list">
    <label class="task-list__item"
           v-for="todo in todos"
           :key="todo.key"
           v-bind:class="{ 'task-list__item--checked': todo.done }">
      <input name="" type="checkbox" value="" v-model="todo.done">
      <input name="" type="checkbox" value="" v-model="todo.editing">
      <input name="" type="text" value=""
             v-if="todo.editing" v-model="todo.text"
             @keyup.enter="todo.editing = !todo.editing"/>
      <span v-else>{{ todo.text }}</span>
    </label>
  </div>
</div>
</template>

<script>
export default {
  name: 'TodoItem',
  data () {
    return {
      msg: 'Welcome to your Vue.js app',
      todos: [
        { key: 1, text: 'vue-router', done: false },
        { key: 2, text: 'vuex', done: false },
        { key: 3, text: 'vue-loader', done: false },
        { key: 4, text: 'vue-loader2', done: false },
        { key: 5, text: 'awesome-vue', done: true }
      ],
      newTodo: ''
    }
  },
  methods: {
    addTodo: function (event) {
      let text = this.newTodo && this.newTodo.trim()
      if (!text) {
        return
      }
      this.todos.push({
        key: this.todos.length + 1,
        text: text,
        done: false
      })
      this.newTodo = ''
    },
    removeTodo: function (event) {
      for (let i = this.todos.length - 1; i >= 0; i--) {
        if (this.todos[i].done) this.todos.splice(i, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin flex-vender() {
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
}

.task-list {
    @include flex-vender;
    flex-direction: column;
    align-items: center;
    &__item {
        width: 270px;
        text-align: left;
        $element: #{&};
        &--checked {
            @extend #{$element};
            color: #85a6c6;
        }
    }
  }
</style>
