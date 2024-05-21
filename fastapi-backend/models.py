"""
matsjfunke
24.04.24

models.py creates the relations of the database
"""
from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float


class Todos(Base):
    __tablename__ = 'transactions'

    id = Column(Integer, primary_key=True, index=True)
    priority = Column(Float)
    task = Column(String)
    description = Column(String)
    scompletion_statu = Column(Boolean)
    date = Column(String)
