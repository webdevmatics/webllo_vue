export default {

methods:{

      fetchBoardsData() {
      	if(!token){
      		return false;
      	}
        axios.get("http://weblloapi.dev/boards?api_token="+token)
        .then(response => {
        this.boards=response.data.boards;

      });
      }
}

}
