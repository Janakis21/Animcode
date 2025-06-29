const stringAlgorithms = {
    "Palindrome Check": {
        "Python": `def is_palindrome(s):
    return s == s[::-1]`,
        "C": `int is_palindrome(char str[]) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - i - 1]) return 0;
    }
    return 1;
}`,
        "C++": `bool is_palindrome(string str) {
    int len = str.length();
    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - i - 1]) return false;
    }
    return true;
}`,
        "Java": `boolean isPalindrome(String str) {
    int len = str.length();
    for (int i = 0; i < len / 2; i++) {
        if (str.charAt(i) != str.charAt(len - i - 1)) return false;
    }
    return true;
}`
    },

    "Anagram Check": {
        "Python": `def are_anagrams(s1, s2):
    return sorted(s1) == sorted(s2)`,
        "C": `int are_anagrams(char str1[], char str2[]) {
    int count[256] = {0};
    for (int i = 0; str1[i]; i++)
        count[str1[i]]++;
    for (int i = 0; str2[i]; i++)
        count[str2[i]]--;
    for (int i = 0; i < 256; i++)
        if (count[i]) return 0;
    return 1;
}`,
        "C++": `bool are_anagrams(string str1, string str2) {
    sort(str1.begin(), str1.end());
    sort(str2.begin(), str2.end());
    return str1 == str2;
}`,
        "Java": `boolean areAnagrams(String str1, String str2) {
    char[] arr1 = str1.toCharArray();
    char[] arr2 = str2.toCharArray();
    Arrays.sort(arr1);
    Arrays.sort(arr2);
    return Arrays.equals(arr1, arr2);
}`
    },

    "String Reversal": {
        "Python": `def reverse_string(s):
    return s[::-1]`,
        "C": `void reverse_string(char str[]) {
    int n = strlen(str);
    for (int i = 0; i < n / 2; i++) {
        char temp = str[i];
        str[i] = str[n - i - 1];
        str[n - i - 1] = temp;
    }
}`,
        "C++": `void reverse_string(string& str) {
    reverse(str.begin(), str.end());
}`,
        "Java": `void reverseString(StringBuilder str) {
    str.reverse();
}`
    }
};
