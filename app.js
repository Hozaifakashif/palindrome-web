function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the original and reversed strings are the same
    return cleanStr === reversedStr;
}

function checkPalindrome() {
    const userInput = prompt("Enter a word:");
    
    if (!userInput) {
        alert("You didn't enter anything!");
        return;
    }
    
    if (isPalindrome(userInput)) {
        alert("This is a palindrome Word.");
    } else {
        alert("This is not a palindrome Word.");
    }
}

checkPalindrome();
