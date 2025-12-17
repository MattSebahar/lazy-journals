import os

from fastapi import FastAPI, status, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import select, Session
from db import db_setup, get_session

# Create the main app
app = FastAPI(title="LazyJournals API")

# Config CORS for frontend interaction
origins = [
    "http://localhost:5173",      # Vite Localhost
    "http://127.0.0.1:5173",      # Vite Localhost IP
]

# Allow all headers and methods for now 
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,        
    allow_credentials=True,       
    allow_methods=["*"],          
    allow_headers=["*"],          
) 

@app.on_event("startup")
def on_startup():
    
    # Ensure the db is set up
    db_setup()
    print('Database is set up')
    
@app.get("/") # Route for the URL
def get_root():
    """ Placeholder funcion for GET on the root"""
    return {"Hello": "World", "project": "LazyJournals"}

@app.get('/api/health') # Route to check db status
def db_status(session: Session = Depends(get_session)):
    """ Checks the database connection status."""
    
    try:
        result = session.exec(select(1))
        
        # If we can query, return a success status
        return {"status": "healthy", "code": status.HTTP_200_OK}
    
    except Exception as e:
        # If there's an error, raise an HTTP exception
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                            detail=f"Database connection error: {e}")