export default store => next => action => {
    console.log('-----', 'generateID', action);
    action.payload.id = makeid();
    const creationDate = new Date();
    action.payload.creationDate = creationDate.getFullYear().toString() + '-' + '0' + creationDate.getDay() + '-' + '0' + creationDate.getMonth();
    next(action);
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }