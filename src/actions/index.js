import {FETCH_USERS} from './types'

// export const FETCH_USERS ='fetch_users';

export function fetchUsers(){
	console.log('This is FETCH_USERS',FETCH_USERS)
	return{
		type:FETCH_USERS,
		payload:[
    {name:'Johnny Boy'},
    {name:'DkemBe Mtumbo'},
    {name:'Rick Flair'},
    {name:'Joyce the Choice'}

		]
	}
}