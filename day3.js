// 3. No Pairs Allowed
// For each word in a list, determine the minimum number of character replacements needed so that no two adjacent characters are the same.
// If any two adjacent characters in a string are equal, one of them must be changed.
// Calculate the minimum number of substitutions required for each word.
// Example
// words = ['add', 'boook', 'break']
// ﻿﻿'add': change one d' (1 change)
// ﻿﻿'boook: change the middle 'o' (1 change)
// ﻿﻿'break': no changes necessary (0 changes)
// The return array is [1, 1, 0].
// Function Description
// Complete the function minimalOperations in the editor with the following parameter(s):
// string words[n]: an array of strings
// Returns
// int[n]: each element / is the minimum
// substitutions for words[i]
// Constraints
// ﻿﻿1 ≤ n≤ 100
// ﻿﻿2 ≤ length of words[i] ≤ 105
// console.log(minimalOperations(["ab", "aab", "abb", "abab", "abaaaba"]));
// // 預期 [0, 1, 1, 0, 1]
// ﻿﻿Each character of words[i is in the range ascil[a-z].

// 遇到一樣的，count++

function minimalOperations(words) {
  return words.map((word) => {
    let count = 0;
  
    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i + 1]) {
        count++;
        i++;
      }
    }
    return count;
  });
}

console.log(minimalOperations(["abb", "aab", "abb", "abab", "abaaaba"]));
