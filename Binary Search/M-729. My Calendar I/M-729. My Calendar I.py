class MyCalendar:
    def __init__(self):
        self.calendar = []

    def book(self, start: int, end: int) -> bool:
        l, r = 0, len(self.calendar) - 1
        while l <= r:
            mid = (l + r) // 2
            event_start, event_end = self.calendar[mid]
            if event_end > start and event_start < end:
                return False

            if start >= event_end:
                l = mid + 1
            else:
                r = mid - 1

        self.calendar.insert(l, [start, end])
        return True


# Your MyCalendar object will be instantiated and called as such:
# obj = MyCalendar()
# param_1 = obj.book(start,end)
obj = MyCalendar()
print(obj.book(10, 20))  # true
print(obj.book(15, 25))  # false
print(obj.book(20, 30))  # true
