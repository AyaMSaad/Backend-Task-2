const fs = require("fs")

//add data
const addPerson = (id , fname , lname , age , city ) => {
        const allData = loadData()
        const duplicatedData = allData.filter ((obj) => {
            return obj.id === id
        })
        console.log(duplicatedData)

        if (duplicatedData.length == 0) {
        allData.push ({
            id : id,
            fname : fname,
            lname : lname,
            age : age,
            city : city
        })
        saveAllData(allData)
        console.log(allData)
    }
    else {
        console.log("ERROR : DUPLICATED ID")
    }
  }

//load data
  const loadData = () => {
    try {
         const dataJson = fs.readFileSync ("persons.json").toString()
        return JSON.parse (dataJson)
    }
    catch {
             return []
    }
  }

//save data
  const saveAllData = (allData) => {
      const saveAllDataJson = JSON.stringify(allData)
      fs.writeFileSync("persons.json" , saveAllDataJson)
  }

//delete data
 const deleteData = (id) => {
        const allData = loadData()
        const dataToKeep = allData.filter ((obj) => {
            //return obj.id !== id
             return obj.id !== 4 && obj.id !== 6;
        })
        saveAllData(dataToKeep)
        console.log(dataToKeep)
 }

//list data
 const listData = () => {
        const allData = loadData()
        allData.forEach ((obj) => {
        console.log(" FirstName : " + obj.fname + "      " , " LastName : " + obj.lname + "       " , " city : " + obj.city)
        })
    }

//read data
const readData = (id) => {
    const allData = loadData()
    const itemNeeded = allData.find((obj) => {
        return obj.id == "5"
    })
    console.log(itemNeeded)
}

module.exports = {
    addPerson,
    deleteData,
    listData,
    readData,
}