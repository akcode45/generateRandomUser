// fetch("http://localhost:3000/teacher")
// .then((res) => res.json())
// .then((data)=>{
//     data.forEach(element => {
//         const div = document.createElement('div')
//         div.innerHTML = `<h1>${element.name}</h1>
//                          <h2>${element.departement}</h2>`
//         document.body.appendChild(div)
//     });
// })

fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
        const date =data.results[0].dob.date
        const formattedDate = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
        const dataArray = data.results[0]
        const addr = data.results[0].location

        const addressString = `${addr.street.number},${addr.street.name},${addr.city},${addr.state},${addr.country}`

        document.getElementById('name').innerHTML = `${dataArray.name.title} ${dataArray.name.first} ${dataArray.name.last}`
        document.getElementById('id').innerHTML = `${dataArray.id.value || "Id not present"}`
        document.getElementById('gender').innerHTML = `${dataArray.gender}`
        document.getElementById('dob').innerHTML = `${formattedDate}`
        document.getElementById('phone').innerHTML = `${dataArray.phone}`
        document.getElementById('email').innerHTML = `${dataArray.email}`
        document.getElementById('address').innerHTML = `${addressString}`
        document.getElementById('userpic').innerHTML = `<img src="${data.results[0].picture.large}">`
    })