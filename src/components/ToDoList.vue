<template>
	<section class="todos_list">
		<div class="listcontainer">
			<h4>Your To-do List:</h4>
			<div class="list">
				<div
					v-for="(todo, index) in todos_asc"
					:class="`todo-item ${todo.done && 'done'}`"
				>
					<label>
						<input
							class="checkbox"
							type="checkbox"
							v-model="todo.done"
							@change="handleCheckboxChange(index)"
						/>
					</label>
					<div class="todo-content">
						<input class="todocontent" type="text" v-model="todo.content" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "ToDoList",
	props: {
		todos: Array,
	},
	computed: {
		todos_asc() {
			return this.todos.sort((a, b) => b.createdAt - a.createdAt);
		},
	},
	methods: {
		handleCheckboxChange(index) {
			setTimeout(() => {
				if (this.todos[index] && this.todos[index].done) {
					// Check if the task is still marked as done after 3 seconds
					this.$emit("removeTask", index); // Emit an event to request task removal
				}
			}, 3000);
		},
	},
};
</script>

<!-- Add the following styles for your ToDoList.vue elements -->
<style>
.todos_list {
	width: 100%;
	justify-content: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px; /* Adjust as needed */
}

.listcontainer {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #1a1c22;
	width: 90%;
	border-radius: 30px;
	padding: 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h4 {
	color: #d9d9d9;
	font-size: 24px;
}

.todo-item {
	background-color: #1a1c22;
	border: 2px solid #3d3a50;
	border-radius: 10px;
	padding: 10px;
	margin: 10px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.todo-item.done {
	background-color: #3d3a50; /* Adjust as needed */
}

.checkbox {
	margin-right: 10px;
}

.todo-content {
	flex-grow: 1;
}

.todocontent input[type="text"] {
	width: 100%;
	padding: 5px;
	background-color: #3d3a50; /* Background color for the text box */
	border: 1px solid #580ef6; /* Border color for the text box */
	border-radius: 5px;
	color: #d9d9d9; /* Text color */
	font-size: 16px; /* Font size */
	outline: none; /* Remove the default input outline */
}

.delete {
	background-color: #1a1c22;
	border: 1px solid #3d3a50;
	border-radius: 5px;
	color: #580ef6;
	cursor: pointer;
	padding: 5px 10px;
	transition: background-color 0.3s ease;
}

.delete:hover {
	background-color: #580ef6;
	color: #1a1c22;
}
</style>
