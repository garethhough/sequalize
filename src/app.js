const { title } = require("process");
const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie } = require("./movie/function");
const { listMovies } = require("./movie/function");
const { updateMovie } = require("./movie/function");
const { deleteMovie } = require("./movie/function");

const app = async (yargsObj) => {
    try {
        await sequelize.sync({alter: true});
        if (yargsObj.add) {
            //add something to movie table
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});
        } else if (yargsObj.list) {
            //list movie table contents
           const movies = await listMovies(); 
            console.log(movies);
        } else if (yargsObj.update) {
            //update entry in movie table
            await updateMovie({title: yargsObj.title}, {title: yargs.title, actor: yargsObj.actor});
        } else if (yargsObj.delete) {
            //delete entry from movie table 
            await deleteMovie({title: yargsObj.title});
        } else {
            console.log("Incorrect command");
        }
    } catch (error) {
        console.log(error);
    } finally {
        await sequelize.close();
    }
}

app(yargs.argv);