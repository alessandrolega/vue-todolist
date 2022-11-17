var app = new Vue({
    el: '#app',
    data: {
      todoList: [
        {
          testo: 'comprare il pane',
          done: false
        },
        {
          testo: 'comprare il latte',
          done: false
        }
      ],
      index: 0,
      newText: '',
      todoDone: []
    },
    beforeUpdate() {
      
      this.todoList.forEach( (elem, index)=>{
        if( elem.done == true ){
          this.todoDone.push( elem );
          this.todoList.splice( index,1 );
        }
      } );
    },
  
    methods: {
      removeElement(index, elem){
        
        console.log( index )
        
        if( elem.done == true ){
          this.todoDone.splice( index, 1 );
        } else {
          this.todoList.splice( index, 1 );
        }
      },
      todoCompleted(index, elem){
        
  
        if( elem.done == false ){
          elem.done = true;
        } else {
          elem.done = false;
        }
      },
      addLine () {
        this.todoList.push({ testo: this.newText, done: false });
     }
    },

    }
  )












