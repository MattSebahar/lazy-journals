from fastapi import FastAPI

# Create the main application instance
app = FastAPI(title="LazyJournals API")

# Define a "route" for the root URL
@app.get("/")
def read_root():
    """Returns a simple hello world message."""
    return {"Hello": "World", "project": "LazyJournals"}