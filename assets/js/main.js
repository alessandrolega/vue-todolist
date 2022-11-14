var app = new Vue({
    el: '#app',
    data: {
      todoList : [
        {
            text: 'Comprare il pane',
            done : false
        },

        {
            text: 'Comprare il pesce',
            done : false
        }
      ]
    },
    methods: {
        todoComplete(index){
            this.todoList[index].done = true;

        }
    }
  })