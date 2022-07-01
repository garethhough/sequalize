# sequelize
Using the below scripts you can add, list, update and remove films and actors with the sequelize table.

To add an entry use
node src/app.js --add --title "newTitle" --actor "newActor"

To list contents of the table use node
src/app.js --list

To update an entry in the table use 
node src/app.js --update --title "movieToBeUpdated" --newtitle "newMovie"  --newactor "newActor"

To remove an entry from the table use 
node src/app.js --delete --title "moveYouWishToDelete"
