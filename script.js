function firstNonRepeatedChar(str) {
 // Wri
	const count = {};
	    // Step 1: Count each character
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    // Step 2: Find the first character with count 1
    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
