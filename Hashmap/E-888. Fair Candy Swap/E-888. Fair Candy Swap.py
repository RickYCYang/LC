class Solution:
    def fairCandySwap(self, aliceSizes: list[int], bobSizes: list[int]) -> list[int]:
        alice_sum = 0
        bob_sum = 0
        bob_set = set()

        for alice in aliceSizes:
            alice_sum += alice

        for bob in bobSizes:
            bob_sum += bob
            bob_set.add(bob)

        half = (alice_sum + bob_sum) / 2

        for alice_exchange in aliceSizes:
            bob_exchange = half - (alice_sum - alice_exchange)
            if bob_exchange in bob_set:
                return [alice_exchange, bob_exchange]
