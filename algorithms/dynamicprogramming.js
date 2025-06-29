const dynamicProgramming = {
    "Fibonacci Sequence": {
        "Python": `def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)
}


Explanation:
This is a recursive solution.
If n is less than or equal to 0, return 0.
If n is 1, return 1.
Otherwise, recursively call the function to compute fibonacci(n-1) and fibonacci(n-2) and return their sum.
`,
        "C": `int fibonacci(int n) {
    if (n <= 0) 
       return 0;
    if (n == 1) 
       return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}`,
        "C++": `int fibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}`,
        "Java": `int fibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}`
    },

    "Knapsack Problem": {
        "Python": `def knapsack(weight, value, W, n):
    if n == 0 or W == 0:
        return 0
    if weight[n-1] > W:
        return knapsack(weight, value, W, n-1)
    else:
        return max(value[n-1] + knapsack(weight, value, W - weight[n-1], n-1), 
                   knapsack(weight, value, W, n-1))`,
        "C": `int knapsack(int weight[], int value[], int W, int n)
 {
    if (n == 0 || W == 0)
	return 0;
    if (weight[n-1] > W)
        return knapsack(weight, value, W, n-1);
    else
        return max(value[n-1] + knapsack(weight, value, W - weight[n-1], n-1), knapsack(weight, value, W, n-1));
}`,
        "C++": `int knapsack(vector<int>& weight, vector<int>& value, int W, int n) {
    if (n == 0 || W == 0) return 0;
    if (weight[n-1] > W)
        return knapsack(weight, value, W, n-1);
    else
        return max(value[n-1] + knapsack(weight, value, W - weight[n-1], n-1), 
                   knapsack(weight, value, W, n-1));
}`,
        "Java": `int knapsack(int[] weight, int[] value, int W, int n)
 {
    if (n == 0 || W == 0) return 0;
    if (weight[n-1] > W)
        return knapsack(weight, value, W, n-1);
    else
        return Math.max(value[n-1] + knapsack(weight, value, W - weight[n-1], n-1), 
                        knapsack(weight, value, W, n-1));
}`
    },

    "Longest Common Subsequence": {
        "Python": `def lcs(X, Y, m, n):
    if m == 0 or n == 0:
        return 0
    if X[m-1] == Y[n-1]:
        return 1 + lcs(X, Y, m-1, n-1)
    else:
        return max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n))`,
        "C": `int lcs(char X[], char Y[], int m, int n) {
    if (m == 0 || n == 0) return 0;
    if (X[m-1] == Y[n-1]) return 1 + lcs(X, Y, m-1, n-1);
    else return max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n));
}`,
        "C++": `int lcs(string X, string Y, int m, int n) 
{
    if (m == 0 || n == 0)  
	  return 0;
    if (X[m-1] == Y[n-1])
          return 1 + lcs(X, Y, m-1, n-1);
    else return max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n));
}`,
        "Java": `int lcs(String X, String Y, int m, int n)
 {
    if (m == 0 || n == 0) return 0;
    if (X.charAt(m-1) == Y.charAt(n-1))
    	return 1 + lcs(X, Y, m-1, n-1);
    else 
	return Math.max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n));
}`
    }
};
