<template>
	
	<div >
			<v-list class="grey lighten-3">

			<draggable v-model="cards">
			    <transition-group>
			        <div v-for="card in cards" :key="card.id">
			            {{card.name}}
			        </div>
			    </transition-group>
			</draggable>



	           <!-- <v-list-tile avatar v-for="card in cards" v-bind:key="card.id">
		            <v-list-tile-content>
		              <v-list-tile-title
		               style="border-radius:5px"
		               class="white">
		               <div class="pl-3 py-2" >{{card.name}}</div>
		                </v-list-tile-title>

		            </v-list-tile-content>
		          </v-list-tile>

		          <v-list-tile @keyup.esc="editCardId=null">
		          	<v-text-field @click.stop v-model="cardData.name" label="Card Name" v-if="list.id==editCardId" @keyup.enter="createCard(list.id)"></v-text-field>
		          	<a @click="editCardId=list.id" v-else>Add card</a>
		          </v-list-tile> -->
		 </v-list>
	</div>

</template>


<script>
import draggable from 'vuedraggable'
	
	export default {
		props:['list'],
		components:{draggable},
		data() {
			return { 
				cards:'',
				cardData:{name:''},
				editCardId:''
		}
	},

	created(){
		this.cards=this.list.cards;
	},

	methods:{
		createCard(listId) {
			this.editCardId=listId;

			axios.post('/boards/'+this.list.board_id+"/list/"+this.list.id+"/card",{name:this.cardData.name})
			.then(response=>{
				console.log(response);
				this.cards.push(response.data.card);

				this.cardData="";
				this.editCardId="";
			});
		}
	}
		
}
	










</script>
