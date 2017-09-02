<template>
	
	<div >
		
		<h4>Cards</h4>

			<v-container grid-list-md fluid>
					<v-layout row>
						<v-flex md3 v-for="i in 6">
							<v-card  class="grey lighten-2">
								 <v-toolbar class="green white--text" dark dense>
							          <v-toolbar-title>Backlog</v-toolbar-title>
							          <v-spacer></v-spacer>
							          <v-btn icon>
							            <v-icon>more_vert</v-icon>
							          </v-btn>
						        </v-toolbar>

								<v-list class="grey lighten-3">
						           <v-list-tile avatar v-for="item in items" v-bind:key="item.title">
							            <v-list-tile-content>
							              <v-list-tile-title
							               style="border-radius:5px"
							               class="white">
							               <div class="pl-3 py-2" >{{item.title}}</div>
							                </v-list-tile-title>

							            </v-list-tile-content>
							          </v-list-tile>

							          <v-list-tile>
							          	<a href="#">Add link</a>
							          </v-list-tile>
						        </v-list>

							</v-card>
						</v-flex>

						<v-flex md3>
							<v-card>
								<v-card-title class='grey lighten-1'>
									<v-btn flat small class="primary">Add a list ...</v-btn>
									
								</v-card-title>
							</v-card>
						</v-flex>
						
			    	</v-layout>
			</v-container>
	</div>

</template>


<script>
	
	export default {
		data() {
			return { 
			        items: [
			          { icon: true, title: 'Jason Oner', avatar: '/static/doc-images/lists/1.jpg' },
			          { title: 'Travis Howard', avatar: '/static/doc-images/lists/2.jpg' },
			          { title: 'Ali Connors', avatar: '/static/doc-images/lists/3.jpg' },
			          { title: 'Cindy Baker', avatar: '/static/doc-images/lists/4.jpg' }
			        ],
				boards:''
			
		}},
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
