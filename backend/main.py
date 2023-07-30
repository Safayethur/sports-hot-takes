
from time import sleep
from fastapi import FastAPI, HTTPException, status
import psycopg2
from psycopg2.extras import RealDictCursor
import schemas
#Connect to DB 
while True:

    try:
        konnect = psycopg2.connect(database='phantom', user='postgres', password='2542', cursor_factory=RealDictCursor)
        kursor = konnect.cursor()
        print("Phantom Connected")
        break

    except psycopg2.Error as e:
        print('Phantom Missed')
        print(f'Error: {e}')
        sleep(13)    
    


app = FastAPI()

@app.get('/new', status_code=status.HTTP_200_OK)
def makeTable():
    try:
        kursor.execute(""" CREATE TABLE HotTakes(id SERIAL NOT NULL, username character varying NOT NULL, category character varying NOT NULL, hot_take character varying NOT NULL, created time with time zone NOT NULL DEFAULT NOW(), PRIMARY KEY (id) );""")
    except psycopg2.Error as e:
        raise HTTPException(status_code=status.HTTP_412_PRECONDITION_FAILED, detail=f'{e}')
    konnect.commit()
    return {'Message: Table Created'}

@app.get('/hottake', status_code=status.HTTP_200_OK)
def getHotTakes():
    kursor.execute(""" SELECT * FROM HotTakes""")
    return kursor.fetchall()


@app.post('/hottake', response_model=schemas.HotTakeResp, status_code=status.HTTP_201_CREATED)
def createHotTake(payload: schemas.HotTake):
    kursor.execute("""INSERT INTO HotTakes (username, category, hot_take) VALUES(%s, %s, %s) RETURNING *;""", (payload.username, payload.category, payload.hot_take))
    konnect.commit()
    hot_take = kursor.fetchone()
    return hot_take
