<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
        <span class="checkBtn" 
          v-on:click="toggleComplete(todoItem, index)" 
          v-bind:class="{checkBtnCompleted: todoItem.completed}">
          <font-awesome-icon icon="fa-solid fa-check"/>
        </span>
        <span v-bind:class="{textCompleted: todoItem.completed}">
          {{ todoItem.item }}
        </span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <font-awesome-icon icon="fa-solid fa-trash-can" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeTodo: function(todoItem, index) {
      this.$emit('removeTodoItem',todoItem,index);
    },
    toggleComplete: function(todoItem, index) {
      this.$emit('toggleTodoItem',todoItem, index);
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>