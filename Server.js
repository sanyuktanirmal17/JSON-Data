// rest api using express library 
const express = require('express')
const app = express()

const PORT = 3000;
app.listen(PORT, () => console.log('listening at http://localhost:${PORT}'))

app.use(express.static('public'))

// write data to json file 
const User = {
    firstName : "'Sanyukta",
    lastName : "Nirmal",
    email : "abc@gmail.com",
    address : "taljai pathar"

}

const fs = require('fs')

const saveData = (data, file) => {
    const finished = (error) => {
        if (error){
            console.error(error)
            return;
        }
    }
    const jsonData = JSON.stringify(data, null, 2)
   // console.log(User)
   fs.writeFile('User.json', jsonData, finished)
    console.log(jsonData)

}

saveData(User, 'secondUSer.json')
