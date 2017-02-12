import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';



class UserList extends Component{
	componentWillMount(){
		this.props.fetchUsers();
console.log('Users object!!!',this.props.users)
	}

	renderUser(user){
   const nudge ={
   	marginLeft:5,
   	fontWeight:'bold'
   }
	 return(
   	<div className='card card-block' key={user.name}>
   		<h4 className='card-title'>{user.name}</h4>
   		<p className='card-text'>Company:<span style={nudge}>{user.company.name}</span></p>
   		<a className='btn btn-primary' href={'mailto'+user.email}>email</a>
   	</div>

	 	)
	}
	render(){
		return(
		    <div className='user-list'>
		     {this.props.users.map(this.renderUser)}
		    </div>
		)
	}
}
function mapStateToProps(state){
	return {users:state.users}
}

export default connect(mapStateToProps, actions)(UserList)