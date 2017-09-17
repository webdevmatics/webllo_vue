<template>
	
	<div>
			<v-list class="grey lighten-3">

			<draggable v-model="cards" :options="{group:'cards'}" @add="onAdd" style="min-height: 15px" :listId="list.id">
			       <li v-for="card in cards" :key="card.id" :cardId="card.id">
				        <v-list-tile avatar >
				      		<v-list-tile-content>
				              <v-list-tile-title
				               style="border-radius:5px"
				               class="white">
				               		<div class="pl-3 py-2" >{{card.name}}</div>
				               </v-list-tile-title>

			            	</v-list-tile-content>
				        </v-list-tile avatar>
			        </li>
			</draggable>

		 <v-list-tile @keyup.esc="editCardId=null">
		          	<v-text-field @click.stop v-model="cardData.name" label="Card Name" v-if="list.id==editCardId" @keyup.enter="createCard(list.id)"></v-text-field>
		          	<a @click="editCardId=list.id" v-else>Add card</a>
		  </v-list-tile> 
		         
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
		},
		updateCard(cardId,listId){
			axios.put('/card/'+cardId,{lists_id:listId})
			.then(response=>{
				console.log(response);
			});
		},
		destroyCard(cardId){
				axios.delete('/card/'+cardId)
			.then(response=>{
				console.log(response);
			});
		},
		onAdd(evt){
			console.log(evt);
			let fromListId= evt.from.getAttribute('listId');
			let cardId= evt.item.getAttribute('cardId');
			let toListId= evt.to.getAttribute('listId');

			this.updateCard(cardId,toListId);
		}
	}
		
}
	










</script>
