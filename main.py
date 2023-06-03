from fastapi import FastAPI, Request
import mysql.connector
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware import Middleware


import mysql.connector
import json


middleware = [Middleware(CORSMiddleware, allow_origins=[
                         '*'], allow_credentials=True, allow_methods=['*'], allow_headers=['*'])]
app = FastAPI(middleware=middleware)
origins = [
    "http://localhost",
    "http://localhost:4200"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/signin")
async def SignIn(r: Request):
    mydb = mysql.connector.connect(
        host="localhost", user="root", password="", database="grc")
    mycursor = mydb.cursor()
    rsult = json.loads(await r.body())
    mycursor.execute(
        f"SELECT type_p FROM `personnel` WHERE (login_p='{rsult['email']}' AND pwd_p='{rsult['pw']}')")
    myresult = mycursor.fetchall()
    y = json.dumps(myresult, default=str)
    return y


@app.post("/signin_client")
async def SignIn(r: Request):
    mydb = mysql.connector.connect(
        host="localhost", user="root", password="", database="grc")
    mycursor = mydb.cursor()
    rsult = json.loads(await r.body())
    mycursor.execute(
        f"SELECT * FROM `client` WHERE (login_client='{rsult['email']}' AND pwd_client='{rsult['pw']}')")
    myresult = mycursor.fetchall()
    y = json.dumps(myresult, default=str)
    return y
