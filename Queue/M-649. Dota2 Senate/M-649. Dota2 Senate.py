class Solution:
    @classmethod
    def predictPartyVictory(self, senate: str) -> str:
        radiants, dires = [], []
        n = len(senate)
        for i in range(n):
            if senate[i] == "R":
                radiants.append(i)
            else:
                dires.append(i)

        while len(radiants) and len(dires):
            if radiants[0] < dires[0]:
                radiants.append(n + radiants[0])
            else:
                dires.append(n + dires[0])
            radiants.pop(0)
            dires.pop(0)

        return "Radiant" if len(radiants) else "Dire"


testData = [
    {
        "senate": "RD",
        "ans": "Radiant",
    },
    {
        "senate": "RDD",
        "ans": "Dire",
    },
]

for data in testData:
    print(data["ans"] == Solution.predictPartyVictory(data["senate"]))
