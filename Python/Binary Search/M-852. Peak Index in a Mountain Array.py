class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        n = len(arr)
        l, r = 0, n - 1
        while l <= r:
            mid = (l + r) >> 1
            if (
                mid > 0
                and mid < n
                and arr[mid] > arr[mid - 1]
                and arr[mid] > arr[mid + 1]
            ):
                return mid

            if mid == 0 or arr[mid] > arr[mid - 1]:
                l = mid + 1
            else:
                r = mid - 1
