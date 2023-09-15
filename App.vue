<template>
	<div id="buttonholder" class="buttoncontainer">
		<app1
			@show-event-form="showEventForm"
			@show-class-form="showClassForm"
		></app1>
	</div>

	<div id="app">
		<template v-if="showeventForm">
			<EventForm @cancelevent="cancelEventForm" />
		</template>
		<template v-else-if="showclassForm">
			<ClassForm @cancelclass="cancelClassForm" />
		</template>
		<template v-else>
			<CalendarMonth />
		</template>
	</div>
</template>

<script>
import CalendarMonth from ".src/components/CalendarMonth.vue";
import App1 from "./App1.vue";
import EventForm from ".src/components/EventForm.vue";
import ClassForm from ".src/components/ClassForm.vue";

export default {
	name: "App",

	components: {
		CalendarMonth,
		app1: App1,
		EventForm,
		ClassForm,
	},
	data() {
		return {
			showeventForm: false,
			showclassForm: false,
		};
	},
	methods: {
		showEventForm() {
			this.showeventForm = true;
		},
		showClassForm() {
			this.showclassForm = true;
		},
		cancelEventForm() {
			this.showeventForm = false;
		},
		cancelClassForm() {
			this.showclassForm = false;
		},
	},
};
</script>

<style>
#app {
	display: inline-flex;
	flex-direction: column;
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #44b9de;
	width: 100%;
	overflow: auto;
	height: 100%;
}

body {
	font-family: sans-serif;
	font-weight: 100;
	--grey-100: #1a1c22;
	--grey-200: #44b9de;
	--grey-300: #b5c0cd;
	--grey-800: #000000;
	--grid-gap: 1px;
	--day-label-size: 20px;
}

ol,
li {
	padding: 0;
	margin: 0;
	list-style: none;
}

.calendar-month-header {
	display: flex;
	justify-content: space-between;
	background-color: #1a1c22;
	padding: 10px;
}
</style>
