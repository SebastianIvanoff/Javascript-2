const fetchData = () => {
  fetch("todos.json")
    .then((res) => res.json())
    .then((data) => {})
    .catch((err) => console.log(err));
};

const getData = async () => {
  try {
    const res = await fetch("todos.json");

    if (!res.status === 200) {
      throw new Error("Du det där gick jätte dåligt");
    }

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(err.message);
  }
};

getData();

const test = async () => {

        const res = await fetch("user.json");
        const data = await res.json();
   
   window.HTMLBodyElement.innerHTML += `<p></p>`
};


test()