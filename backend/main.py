import os
from fastapi import FastAPI
from sqlmodel import  SQLModel, create_engine, Session, select

# --- Database Setup ---
# Load the database URL
DATABASE_URL = os.getenv("DATABASE_URL")

# Create the database engine with moderate security
engine = create_engine(DATABASE_URL, echo=True, connect_args={"sslmode": "require"})

def db_setup():
    """ Sets up the database by creating all tables."""
    SQLModel.metadata.create_all(engine)


# --- API Setup ---
# Create the main application instance
app = FastAPI(title="LazyJournals API")

@app.on_event("startup")
def on_startup():
    # db_setup()
    print('Database is set up (not yet executed)')
    
# Define a "route" for the root URL
@app.get("/")
def read_root():
    """Returns a simple hello world message."""
    return {"Hello": "World", "project": "LazyJournals"}

@app.get('/api/db-status')
def db_status():
    """ Checks the database connection status."""
    try:
        with Session(engine) as sesh:
            result = sesh.exec(select(1))
            
        return {"status": "Database connection successful"}
    except Exception as e:
        return {"status": "Database connection error", "error": str(e)}