"""
matsjfunke
24.04.24

models.py creates the relations of the database
"""
from database import Base
from sqlalchemy import Column, Integer, String, Boolean


class Todos(Base):
    __tablename__ = 'transactions'

    id = Column(Integer, primary_key=True, index=True)
    priority = Column(String)
    task = Column(String)
    description = Column(String)
    completion_status = Column(Boolean)
    date = Column(String)
