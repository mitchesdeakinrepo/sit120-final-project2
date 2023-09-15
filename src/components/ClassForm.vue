<template>
	<br />
	<div class="formcontainer">
		<div class="containerH">
			<h1>
				Add a new Class! <br />
				<span class="smallerH1">enter details below</span>
			</h1>
		</div>
		<div class="form">
			<div class="formbox">
				<p class="formbuble">Class Name:</p>

				<input
					style="font-size: 2vh"
					type="text"
					name="classname"
					placeholder="Enter your Class "
				/>
			</div>

			<div class="formbox">
				<p class="formbuble">When:</p>
				<input style="font-size: 2vh" type="datetime-local" />
			</div>

			<div class="formbox">
				<p class="formbuble">Repeating?</p>
				<select name="repeating" id="repeat">
					<option value="no selection">Frequency:</option>
					<option value="jack knowsall">Daily</option>
					<option value="alisia issmart">Weekly</option>
					<option value="carlos mcbigbrain">Fortnightly</option>
					<option value="adam de teach">Monthly</option>
				</select>
			</div>

			<div class="formbox">
				<p class="formbuble">Extra Details?:</p>

				<textarea
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
	name: "ClassForm",
	methods: {
		cancelForm() {
			this.$emit("cancelclass");
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
