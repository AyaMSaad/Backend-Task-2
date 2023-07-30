const yargs=require("yargs")
const data =require("./data")
//add person
 yargs.command({
    command:"add",
    describe:"to add person with ID",
    builder :{
        fname:{
            describe: " to add first name",
            demandOption: true,
            type :"string"
        },
        lname:{
            describe: " to add last name",
            demandOption: true,
            type :"string"
        },
        age:{
            describe: " to add age ",
            demandOption: true,
            type :"string"
        },
        city:{
            describe: "to add city",
            demandOption: true,
            type :"string"
        }
    },
    handler: (x)=>{
        data.addPerson(x.id, x.fname, x.lname, x.age, x.city)
    }
 })

 //delete data (id 4,6)
  yargs.command({
     command:"delete",
     describe:" to delete data for id 4 and id 6",
     handler: (x)=> {
        data.deleteData(x.id)
     }
})

//list all data
yargs.command ({
    command :"list",
    describe : "list all data",
    handler : ()=>{
        data.listData()
    }
 })

//read only 5th person
yargs.command ({
    command : "read",
    describe : "to read data of fifth person",
    builder : {
        id : {
            describe : "this is id description in read command",
            demandOption : false,
            type : "string"
        }
    },
    handler : (x)=> {
        data.readData (x.id)
    }
 })
yargs.parse()