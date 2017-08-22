<template>
	
	<div>
		
		<h2>Cards</h2>


		<v-layout row-sm column child-flex-sm>
				
    	</v-layout>

	</div>

</template>


<script>
	
	export default {

		data() {
			return {
				boards:''
			}
		},

		mounted () {
			// let token= localStorage.getItem('token');
			// console.log(token);
			// axios.get("http://weblloapi.dev/boards?api_token="+token)
			// .then(response => {
			// 	console.log(response);
			// 	this.boards=response.data.boards;
			// });
		}

	}
</script>
