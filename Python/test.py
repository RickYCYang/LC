from pydantic import BaseModel
from typing import Union


class DpDmnd(BaseModel):
    cust_faml: str
    casd_qty: int
    nsd_qty: int = 200


class DpDmndSegment(DpDmnd):
    segment: str


class DpDmndDevice(DpDmnd):
    device: str


dmnd_data: Union[DpDmndSegment, DpDmndDevice]


class DpDmndAdj:
    def __init__(self, cust_faml) -> None:
        self.dmnd_data = None
        self.cust_faml = cust_faml
        self.subscribe()

    def edit_casd(self, casd_qty):
        self.dmnd_data.casd_qty = casd_qty

    def edit_nsd(self, nsd_qty):
        self.dmnd_data.nsd_qty = nsd_qty

    def load_dmnd_data(self):
        raise NotImplementedError

    def subscribe(self):
        print("scribed")


class DpDmndAdjSegment(DpDmndAdj):
    def __init__(self, cust_faml, segment, casd_qty):
        super().__init__(cust_faml)
        self.load_dmnd_data(cust_faml=cust_faml, segment=segment, casd_qty=casd_qty)

    def load_dmnd_data(self, cust_faml, segment, casd_qty):
        self.dmnd_data = DpDmndSegment(
            cust_faml=cust_faml, segment=segment, casd_qty=casd_qty
        )


class DpDmndAdjDevice(DpDmndAdj):
    def __init__(self, cust_faml, device, casd_qty):
        super().__init__(cust_faml)
        self.load_dmnd_data(cust_faml=cust_faml, device=device, casd_qty=casd_qty)

    def load_dmnd_data(self, cust_faml, device, casd_qty):
        self.dmnd_data = DpDmndDevice(
            cust_faml=cust_faml, device=device, casd_qty=casd_qty
        )


dp_dmnd_adj_segment = DpDmndAdjSegment("C651", "AP", 100)
print(dp_dmnd_adj_segment.dmnd_data)
dp_dmnd_adj_segment.edit_casd(200)
print(dp_dmnd_adj_segment.dmnd_data)
print(dp_dmnd_adj_segment.cust_faml)

dp_dmnd_adj_device = DpDmndAdjDevice("C651", "TM1234", 300)
print(dp_dmnd_adj_device.dmnd_data)
dp_dmnd_adj_device.edit_casd(200)
print(dp_dmnd_adj_device.dmnd_data)

dp_dmnd_adj_segment2 = DpDmndAdjSegment("NVIDIA", "BS", 800)
print(dp_dmnd_adj_segment2.dmnd_data)
dp_dmnd_adj_segment2.edit_casd(200)
print(dp_dmnd_adj_segment2.dmnd_data)
print(dp_dmnd_adj_segment2.cust_faml)
