<!-- this will be the event form-->
<template>
	<br />
	<div class="formcontainer">
		<div class="containerH">
			<h1>
				Add an event! <br />
				<span class="smallerH1">enter details below</span>
			</h1>
		</div>
		<div class="form">
			<div class="formbox">
				<p class="formbuble">Event Name:</p>

				<input
					style="font-size: 2vh"
					type="text"
					name="eventname"
					placeholder="Enter your event "
				/>
			</div>

			<div class="formbox">
				<p class="formbuble">When:</p>
				<input style="font-size: 2vh" type="date" />
			</div>

			<div class="formbox">
				<p class="formbuble">Extra Details?:</p>

				<textarea
					type="password"
					name="details"
					placeholder="Add extra details here"
					cols="20"
					style="font-size: 2vh"
				/>
			</div>
			<br />

			<input
				style="color: #d9d9d9; font-size: 2vh"
				class="loginB"
				type="submit"
				value="Add Event"
			/>
			<br />

			<button style="font-size: 2vh" class="Or" @click="cancelForm">
				Cancel
			</button>
			<br />
		</div>
	</div>
</template>

<script>
export default {
	name: "EventForm",
	methods: {
		cancelForm() {
			this.$emit("cancelevent");
		},
	},
};
</script>

<style>
.formcontainer {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 2vh;
}
.containerH {
	border: solid;
}
.form {
	border: solid;
}
.formbuble {
	background-color: #3d3a50;
	padding: 2px 5px 2px 5px;
}
</style>
