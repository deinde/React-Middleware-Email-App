// import {FETCH_USERS} from './types';
import axios from 'axios';


// export const FETCH_USERS ='fetch_users';
export const FETCH_USERS = 'fetch_users';
export function fetchUsers(){
const request = axios.get('https://jsonplaceholder.typicode.com/users');

	return{
		type:FETCH_USERS,
		payload:request
	}
}

//dummy beginning data
// export function fetchUsers(){
// const request = axios.get('https://jsonplaceholder.typicode.com/users')
// 	return{
// 		type:FETCH_USERS,
// 		payload:[
//     {name:'Johnny Boy'},
//     {name:'DkemBe Mtumbo'},
//     {name:'Rick Flair'},
//     {name:'Joyce the Choice'}

// 		]
// 	}
// }