import os 
from sqlmodel import  SQLModel, create_engine, Session

# Load the database URL
DATABASE_URL = os.getenv("DATABASE_URL")

# Create the database engine with moderate security
engine = create_engine(DATABASE_URL, echo=True, connect_args={"sslmode": "require"})

def db_setup():
    """ For dev purposes, set up the db by creating all tables."""
    SQLModel.metadata.create_all(engine)
    
def get_session():
    """ Threads a new session for each interaction"""
    # Create a new session
    with Session(engine) as session:
        yield session
        
    # Yielding returns to clean
