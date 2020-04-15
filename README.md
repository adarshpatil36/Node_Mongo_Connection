# Node_Mongo_Connection
Basic code to connect node with mogodb

1. Install Mongodb and node in system
2. Go to the respective directory and use following commands to import documents in the collection 
a. mongoimport --db "DB_NAME" --collection "COLLECTION_NAME" --jsonArray --file "JSON_FILE_NAME"
eg: mongoimport --db moviehub --collection movies --jsonArray --file movie.json
b. mongo
c. show dbs  "To see databases"
d. use "DB_NAME" "To use the database"
e. show collections
f. db."COLLECTION_NAME".find()   "To see documents from the collection COLLECTION_NAME"
g. Run the index.js to console the documents.
    node index.js
