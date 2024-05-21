"""
matsjfunke
24.04.24

main.py contains the API endpoints
"""
from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated, List
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine

import models
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


# allow the frontend to access endpoints
origins = [
    "http://localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


# ensure typesafety
class TodosBase(BaseModel):
    priority: str
    task: str
    description: str
    completion_status: bool
    date: str


class TodosModel(TodosBase):
    # adds ID field
    id: int

    # Set orm_mode to True to allow using this model with ORMs (Object Relational Mappers) like SQLAlchemy
    class Config:
        orm_mode = True


# connects to database / provides a database session to the endpoint.
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Dependency to inject the database session into the endpoint
db_dependency = Annotated[Session, Depends(get_db)]

# creates sqlite tables if main.py is run
models.Base.metadata.create_all(bind=engine)


@app.post("/todos", response_model=TodosModel)
async def create_todo(todo: TodosBase, db: db_dependency):
    db_todo = models.Todos(priority=todo.priority, task=todo.task, description=todo.description, completion_status=todo.completion_status, date=todo.date)
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo


@app.get("/todos", response_model=List[TodosModel])
async def get_todos(db: db_dependency, skip: int = 0, limit: int = 100):
    todos = db.query(models.Todos).offset(skip).limit(limit).all()
    return todos

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
