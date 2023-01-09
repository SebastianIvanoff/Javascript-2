// GET POST PUT PATCH DELETE

//GET - Hämtar data, okrypterat
//POST - Skriva data, krypterad i en body
//PUT - uppdatera HELA ett objekt, skickas i en body
//PATCH - uppdaterar delar av ett objekt, skickas i en body
//DELETE - tar bort ett objekt

const getRequest = (endpoint, callback) => {
  const http = new XMLHttpRequest();

  http.addEventListener("readystatechange", () => {
    console.log(http.readyState);
    console.log(http.status);
    if (http.status === 200 && http.readyState === 4) {
      const data = JSON.parse(http.responseText);
      //console.log(data);
      callback(undefined, data);
    } else if (http.readyState === 4) {
      console.log("Could not get the data");
      callback("Could not get the data");
    }
  });

  http.open("GET", "todos.json");
  http.send();
};

getRequest("todos.json", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
