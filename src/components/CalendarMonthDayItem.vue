<template>
	<li
		class="calendar-day"
		:class="{
			'calendar-day--not-current': !day.isCurrentMonth,
			'calendar-day--today': isToday,
			'calendar-day--selected': isSelected,
		}"
		@click="selectDay"
	>
		<span>{{ label }}</span>
	</li>
</template>

<script>
import dayjs from "dayjs";

export default {
	name: "CalendarMonthDayItem",

	props: {
		selectedDate: {
			type: Object,
			default: null,
		},

		day: {
			type: Object,
			required: true,
		},

		isCurrentMonth: {
			type: Boolean,
			default: false,
		},

		isToday: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		label() {
			return dayjs(this.day.date).format("D");
		},

		isSelected() {
			return this.day.date === this.selectedDate?.format("YYYY-MM-DD");
		},
	},

	methods: {
		selectDay() {
			this.$emit("dateSelected", this.day.date);
		},
	},
};
</script>

<style scoped>
.calendar-day {
	position: relative;
	min-height: 100px;
	font-size: 16px;
	background-color: #3e4e63;
	color: var(--grey-800);
	padding: 5px;
}

.calendar-day > span {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 2px;
	width: var(--day-label-size);
	height: var(--day-label-size);
}

.calendar-day--not-current {
	background-color: var(--grey-100);
	color: var(--grey-300);
}

.calendar-day--today {
	padding-top: 4px;
}

.calendar-day--today > span {
	color: #fff;
	border-radius: 9999px;
	background-color: var(--grey-800);
}

.calendar-day--selected {
	background-color: #0ef6cc;
}
</style>
