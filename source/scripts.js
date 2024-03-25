function echoerr(code) {
  if (code == 500) {
    console.log("The server had an error.")
    alert("Error 500, internal server error\nCheck Console for Details.")
  }else{
    alert("Error " + code + "!")
  }
