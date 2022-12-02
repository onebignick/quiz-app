import os
import pymongo
import json
from dotenv import load_dotenv

from pymongo import MongoClient, InsertOne

current_directory = os.getcwd()
# Load environment variables
load_dotenv()

# MongoDB URI
uri = os.getenv('URI')

client = pymongo.MongoClient(uri)
database = client["countries-data"]
database["countries"].drop()
collection = database["countries"]

jsonDir = current_directory + "\server\countries.json"

to_insert=[]
with open(jsonDir) as file:
    data = json.load(file)
    for object in data:
        collection.insert_one(object)
        print(f"Added: {object} to database")

test1 = collection.find_one({"input":"afghanistan"})
print(test1['displayName'])
client.close()


