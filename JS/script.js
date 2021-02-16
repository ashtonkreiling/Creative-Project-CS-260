
function onClick(event) {
      const value = document.getElementById('firstName').value;
      if(value === "") {
        return;
      }
      const nationalizeURL = "https://api.nationalize.io?name="+ value;
      fetch(nationalizeURL)
        .then(function(response){
          return response.json();
        }).then(function(json){
          mostLikelyCountry = json.country[0].country_id;
          const agifyURL = "https://api.agify.io?name="+ value
          + "&country_id=" + mostLikelyCountry;
          fetch(agifyURL)
            .then(function(response){
              return response.json();
            }).then(function(json){
              document.getElementById("age").defaultValue = json.age;
            })
          const genderizeURL = "https://api.genderize.io?name="+ value +
          "&country_id=" + mostLikelyCountry;
          fetch(genderizeURL)
            .then(function(response){
              return response.json();
            }).then(function(json){
              document.getElementById("gender").defaultValue = json.gender;
            })
        });
        const lastNameVal = document.getElementById("lastName").value;
        if(lastNameVal != "" && value != "") {
          suggestedUserName = document.getElementById("firstName").value + "_" +
          document.getElementById("lastName").value + "_"  +
          Math.floor((Math.random() * 10000));
          document.getElementById("username").defaultValue = suggestedUserName;
        }
}

document.getElementById('firstName').addEventListener("click", onClick);
document.getElementById('lastName').addEventListener("click", onClick);
document.getElementById('age').addEventListener("click", onClick);
document.getElementById('gender').addEventListener("click", onClick);
document.getElementById('username').addEventListener("click", onClick);
document.getElementById('password').addEventListener("click", onClick);
