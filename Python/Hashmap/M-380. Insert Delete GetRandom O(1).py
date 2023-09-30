from random import random
import math


class RandomizedSet:
    def __init__(self):
        self.data_map = {}  # dictionary, aka map, aka hashtable, aka hashmap
        self.data = []  # list aka array

    def insert(self, val: int) -> bool:

        # the problem indicates we need to return False if the item
        # is already in the RandomizedSet---checking if it's in the
        # dictionary is on average O(1) where as
        # checking the array is on average O(n)

        if val in self.data_map:
            return False

        # add the element to the dictionary. Setting the value as the
        # length of the list will accurately point to the index of the
        # new element. (len(some_list) is equal to the index of the last item +1)
        self.data_map[val] = len(self.data)

        # add to the list
        self.data.append(val)

        return True

    def remove(self, val: int) -> bool:
        if not val in self.data_map:
            return False

        last_element = self.data[-1]
        remove_el_idx = self.data_map.get(val)
        self.data_map[last_element] = remove_el_idx
        self.data[remove_el_idx] = last_element

        self.data[-1] = val
        self.data.pop()
        self.data_map.pop(val)
        return True

    def getRandom(self) -> int:
        # if running outside of leetcode, you need to `import random`.
        # random.choice will randomly select an element from the list of data.
        return self.data[math.floor(random() * len(self.data))]


obj = RandomizedSet()
print(obj.insert(3))  # true
print(obj.insert(3))  # false
print(obj.getRandom())
print(obj.getRandom())
print(obj.insert(1))  # true
print(obj.remove(3))  # true
print(obj.getRandom())
print(obj.getRandom())
print(obj.insert(0))  # true
print(obj.remove(0))  # true
