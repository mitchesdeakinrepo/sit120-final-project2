<template style="display: flex; flex-direction: column">
	<div class="contentboxtodo">
		<div class="buttonholder">
			<div class="contentbutton">
				<button class="todobutton" @click="showTodoForm">Create To-Do</button>
			</div>
		</div>
	</div>

	<div style="width: 100%" class="todocontent">
		<template v-if="showtodoForm">
			<ToDoForm :addTodo="addTask" @cancelevent="cancelForm" />
		</template>
		<template v-else>
			<ToDoList :todos="todos" @removeTask="removeTask" />
		</template>
	</div>
</template>

<script>
import ToDoForm from "./src/components/ToDoForm.vue";
import ToDoList from "./src/components/ToDoList.vue";

export default {
	name: "ToDoApp",

	components: {
		ToDoForm,
		ToDoList,
	},

	emits: ["cancelevent"],

	data() {
		return {
			showtodoForm: false,
			todos: [],
		};
	},

	methods: {
		showTodoForm() {
			this.showtodoForm = true;
		},

		addTask(task) {
			this.todos.push(task);
			this.showtodoForm = false;
		},

		cancelForm() {
			this.showtodoForm = false;
		},

		removeTask(task) {
			this.todos = this.todos.filter((t) => !t.done);
		},
	},
};
</script>

<style>
/*content box for the other pages */
.contentboxtodo {
	width: 90%;
	height: 90%;
	display: flex;
	align-items: center;
	flex-direction: column;
	flex-wrap: nowrap;
	background-color: #1a1c22;
}
.buttonholder {
	display: flex;
	height: 100%;
	width: 100%;
}
.contentbutton {
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.todobutton {
	height: 75%;
	width: 100%;
	font-size: 3vw;
}
</style>
