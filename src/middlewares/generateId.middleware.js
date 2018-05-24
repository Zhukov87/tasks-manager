export default store => next => action => {
    //console.log('-----', 'generateID', action);
    if(action.type == 'ADD_TASK') {
      action.payload.id = makeid();
      const creationDate = new Date();
      action.payload.creationDate = creationDate.getFullYear() + '-' + ('0' + (creationDate.getMonth() + 1)).slice(-2) + '-' + ('0' + creationDate.getDate()).slice(-2);
    }
    next(action);
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }