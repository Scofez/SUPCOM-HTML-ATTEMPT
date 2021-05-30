const backURL="http://localhost:8080/testing-1.0-SNAPSHOT"


function imageservice(){
fetch(backURL + "/rest/images/image1").then(function(response) {

    return response.json();
  }).then(function(data){
      console.log(data);
      document.getElementById("imgcookie1").src=data.name;
      document.getElementById("imgcookie2").src=data.name;
  })


fetch(backURL + "/rest/images/image2").then(function(response) {

    return response.json();
  }).then(function(data){
      console.log(data);
      document.getElementById("imgfood").src=data.name;
  })
}