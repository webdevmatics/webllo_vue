<template>
	<div class="text-md-center">
		<h2>Login</h2>
		<v-layout>
			<v-flex xs6 offset-xs3>
				<v-card>
					<v-card-text>
						<v-text-field
						v-model="login.email"
						label="Email"
						required
						>
						</v-text-field>

						<v-text-field
						v-model="login.password"
						label="Password"
						type="password"
						required

						>
						</v-text-field>
					</v-card-text>

					<v-btn class="mb-3" success @click='logItIn'>Login</v-btn>
				</v-card>
			</v-flex>

		</v-layout>
		
	</div>	
</template>


<script>
	export default {
		data() {
			return {
				login:{
					email:"",
					password:""
				}
			}
		},
		methods:{
			logItIn(){
				axios.post('http://weblloapi.dev/login',this.login)
				.then(response => {
					let token=response.data.user.api_token;

					localStorage.setItem('token',token);

					Event.$emit('login');

					this.$router.push('/');
				});
			}
		}
	}
</script>
