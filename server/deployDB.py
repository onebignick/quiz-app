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
collection = database["countries"]

jsonDir = current_directory + "\server\countries.json"

with open(jsonDir) as file:
    for jsonObject in file:
        print(jsonObject)




