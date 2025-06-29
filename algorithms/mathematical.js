const mathematicalAlgorithms = {
    "GCD": {
        "Python": `def gcd(a, b):
    while b:
        a, b = b, a % b
    return a`,
        "C": `int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}`,
        "C++": `int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}`,
        "Java": `int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}`
    },

    "Prime": {
        "Python": `def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True`,
        "C": `int is_prime(int n) {
    if (n <= 1) return 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}`,
        "C++": `bool is_prime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}`,
        "Java": `boolean isprime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}`
    },

    "Factorial": {
        "Python": `def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)`,
        "C": `int factorial(int n) 
{
    if (n == 0) return 1;
    return n * factorial(n - 1);
}`,
        "C++": `int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}`,
        "Java": `int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}`
    }
}; 