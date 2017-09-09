<template>
	
	<div >
			<v-list class="grey lighten-3">
	           <v-list-tile avatar v-for="card in cards" v-bind:key="card.id">
		            <v-list-tile-content>
		              <v-list-tile-title
		               style="border-radius:5px"
		               class="white">
		               <div class="pl-3 py-2" >{{card.name}}</div>
		                </v-list-tile-title>

		            </v-list-tile-content>
		          </v-list-tile>

		          <v-list-tile>
		          	<a href="#">Add card</a>
		          </v-list-tile>
		 </v-list>
	</div>

</template>


<script>
	
	export default {
		props:['list'],
		data() {
			return { 
				cards:'',
		}
	},

	created(){
		this.cards=this.list.cards;
	}
		
}
	










</script>
