import datetime
from pydantic import BaseModel


#Post



class HotTake(BaseModel):
    name: str 
    hot_take: str
    category: str

class HotTakeRes(HotTake):
    id: int
    created: datetime.datetime