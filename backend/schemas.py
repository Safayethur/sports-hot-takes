import datetime
from pydantic import BaseModel

class HotTake(BaseModel):
    username: str
    category: str
    hot_take: str

class HotTakeResp(HotTake):
    id: int
    created: datetime.datetime
