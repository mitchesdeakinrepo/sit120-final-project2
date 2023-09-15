<template>
	<div class="buttonholder" id="app1">
		<div id="buttonholder" class="buttonholder">
			<div class="contentbutton">
				<button class="todobutton" @click="showClassForm">Create Class</button>
			</div>
			<div class="contentbutton">
				<button class="todobutton" @click="showEventForm">Add Event</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "App1",
	methods: {
		showEventForm() {
			this.$emit("show-event-form");
		},
		showClassForm() {
			this.$emit("show-class-form");
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
