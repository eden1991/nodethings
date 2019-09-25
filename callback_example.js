function notify(something){
    console.log(something);
  }
  
  function taskOne(callback){
    // calling the notify function
    callback("Task finished");
  }
  
  // passing notify function
  taskOne(notify);