export default {

methods:{

      fetchBoardsData() {
      	if(!token){
      		return false;
      	}
        axios.get("/boards")
        .then(response => {
        this.boards=response.data.boards;

      });
      }
}

}
