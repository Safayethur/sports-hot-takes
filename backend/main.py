import datetime
import math
import random
import time
from fastapi import FastAPI, HTTPException, status
import psycopg2
from psycopg2.extras import RealDictCursor
import schema

#Create Instance

app = FastAPI()

#PSychoPG DB

while True:
    try:
        konect = psycopg2.connect(host='localhost', database='phantom', user='postgres', password='2542', cursor_factory=RealDictCursor)
        cursor = konect.cursor()
        print("Database Connection Successful")
        break
    except Exception as error:
        print("Database Connection Failed")
        print("Error: ", error)
        time.sleep(13)


#Homepage
stuff = {}

@app.get('/')
def home():
    return {'Welcome':'Whats good bitch'}

@app.post('/hot/take', status_code=status.HTTP_201_CREATED)
def createHotTake(payload: schema.HotTake):
    cursor.execute(""" INSERT INTO HotTakes (name, hot_take, category) VALUES (%s, %s, %s) RETURNING *; """, (payload.name, payload.hot_take, payload.category))
    hot_take = cursor.fetchone()
    konect.commit()
    return hot_take

