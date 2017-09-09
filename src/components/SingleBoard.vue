<template>
	
	<div >
		
		<h4>Cards for boardId {{boardId}}</h4>

			<v-container grid-list-md fluid>
					<v-layout row>
						<v-flex md3 v-for="list in lists" :key="list.id">
							<v-card  class="grey lighten-2">
								 <v-toolbar class="green white--text" dark dense>
							          <v-toolbar-title>{{list.name}}</v-toolbar-title>
							          <v-spacer></v-spacer>
							          <v-btn icon>
							            <v-icon>more_vert</v-icon>
							          </v-btn>
						        </v-toolbar>

							<board-card :list="list"></board-card>

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
import BoardCard from '@/components/BoardCard'

	export default {
		data() {
			return { 
				boards:'',
				lists:'',
				cards:'',
				boardId:'',
			
		}},
		components:{
			'board-card':BoardCard
		},
		created () {
			this.boardId=this.$route.params.id;
			this.fetchBoardsData();

		},
		beforeRouteUpdate (to,from,next){
			this.boardId=to.params.id;
			this.fetchBoardsData();
			next();
		},
		methods:{
			getLists(){
				this.boards.map((board)=>{
					if(board.id==this.boardId){
						return this.lists=board.lists;
					}	
				})
			},

	      fetchBoardsData() {
	              axios.get("http://weblloapi.dev/boards?api_token="+token)
	              .then(response => {
	              this.boards=response.data.boards;
	              this.getLists();
	      
	            });
	      }
		}
	
}









</script>
