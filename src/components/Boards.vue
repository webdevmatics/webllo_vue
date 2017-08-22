<template>
	
	<div>
		
		<h2>Your Boards</h2>


		<v-layout row-sm column child-flex-sm>
				<div v-for='board in boards' :key='board.id'>
					<router-link :to ="{path:'/boards/:id',params:{id:board.id}}">
					      <v-card dark class="primary ma-1" style="cursor:pointer" >
						        <v-card-text>{{board.name}}</v-card-text>
					      </v-card>
			      </router-link>
		      	</div>
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
			let token= localStorage.getItem('token');
			console.log(token);
			axios.get("http://weblloapi.dev/boards?api_token="+token)
			.then(response => {
				console.log(response);
				this.boards=response.data.boards;
			});
		}

	}
</script>
