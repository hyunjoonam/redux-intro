// EXERCISE 4
// This one is supposed to be a simple todo list
// The reducer is unimplemented - give it a shot!
// The subscribe callback is already implemented, let it inform how you write your reducer
// HINT - The ADD_TODO action also has a property called todoText

/* <h1> Exercise 4 </h1>
<input id="todo-text" />
<button id="add-todo">Add Todo</button>
<ul id="todos">
	
</ul> */

let defaultTodos = {
	todos: []
}

// write a reducer that updated the todos array whenever a ADD_TODO action is dispatched
let reducer4 = (state = defaultTodos, action) => {
	if (action.type == "ADD_TODO") {
		// let todoText = action.todoText; === same as below
		let { todoText } = action;

		
		return {
			todos: state.todos.concat(todoText)
		};


		// it works and different way (see above) but WRONG WAY TO DO IN REDUX
		// state.todos.push(todoText); 
		// return state;
	}
	return state;
};
// defaultTodos;

let store4 = Redux.createStore(reducer4);

let addTodoHTML = document.getElementById('add-todo')
let inputHTML = document.getElementById('todo-text')
let todosListHTML = document.getElementById('todos');

store4.subscribe(()=>{
	let { todos } = store4.getState();
	
	let list = ``;
	todos.forEach(todo => {
		list += `<li>${todo}</li>`
	})
	todosListHTML.innerHTML = list;
	
})

addTodoHTML.addEventListener('click', (e)=>{
	store4.dispatch({
		type: "ADD_TODO",
		todoText: inputHTML.value
	})
})