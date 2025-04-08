import java.util.HashMap;
import java.util.Map;

class Solution {
    public int fib(int n) {
        Map<Integer, Integer> cache = new HashMap<>();
        return Solution.getFib(n, cache);
    }

    public static int getFib(int n, Map<Integer, Integer> cache) {
        if (cache.containsKey(n)) {
            return cache.get(n);
        }

        if (n <= 1) {
            return n;
        }

        return Solution.getFib(n - 2, cache) + Solution.getFib(n - 1, cache);

    }
}
