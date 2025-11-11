let display = ()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then((users)=>{
    let row = '';
    for(let user of users){
         row = row + `<tr>
                   <td>${user.id}</td>
                   <td>${user.name}</td>
                   <td>${user.email}</td>
                   <td>${user.address.city}</td>
                   </tr>`
    }
    document.getElementById("tbody_data").innerHTML = row
  })
  .catch((err) => {console.log("error fetching :",err)})
}