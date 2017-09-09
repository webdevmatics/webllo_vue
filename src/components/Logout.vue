<template>
	
	<div>
		
		<h2>You are logged out!</h2>
	</div>

</template>


<script>
	
	export default {

		created () {

			if(!token) {
				return false;
			}
			axios.get("http://weblloapi.dev/logout?api_token="+token)
			.then(response => {
				localStorage.removeItem('token');
				Event.$emit('logout');
			});
		}

	}
</script>
