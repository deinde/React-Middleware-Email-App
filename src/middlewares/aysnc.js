export default function({dispatch}){
	return next => action =>{
	//if action does not have a payload
	//or if the payload does not have a .then (then) property
	//send it to the next middleware next(action)	
  if(!action.payload || !action.payload.then){
  	return next(action);
  }
 //make sure the actions promise resolves!!
 action.payload
 //below is the resolved promise
  .then(function(response){
  //WE ARE CREATING A NEW ACTION HERE!!!!	
 //below is the new!!! action!! which is extending the 
 //old action type, but replacing old payload with resolved
 //new payload which is the(resolved response!!)
 //BASICALLY KEEP OLD ACTION TYPE, BUT REPLACE PROMISE WITH
 //RESOLVED RESPONSE!!
  	const newAction = {...action,payload:response};
  	//below dispatch force sends action to top
  	//of all reducers and funnel through all reducers and middlewares again
  	//instead of just moving to the next middleware or reducer
  	//The next time it hits this middleware, it will no longer be
  	//a promise!! It will be a response, therefore it will be pushed 
  	// to the next action reducer!!! ie:
  	// if(!action.payload || !action.payload.then){
  	//return next(action);
  	// will catch it and send it to next
  		dispatch(newAction)
  
  
    });

	}
}