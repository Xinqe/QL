function removeFourInASequenceChars(input: string): string {
    const result: string[] = [];
  
    for (let i = 0; i < input.length; i++) {
      const currentChar = input[i];
      const lastIndex = result.length - 1;
  
      if (
        lastIndex >= 2 &&
        currentChar === result[lastIndex] &&
        currentChar === result[lastIndex - 1] &&
        currentChar === result[lastIndex - 2]
      ) {
        continue;
      }
  
      result.push(currentChar);
    }
  
    return result.join('');
  }
  
  
  var x = removeFourInASequenceChars('ffdttttyy');
  console.log(x);
  console.log(x === 'ffdtttyy');
  var y = removeFourInASequenceChars('iiikigggg');
  console.log(y);
  console.log(y === 'iiikiggg');
  
  var z = removeFourInASequenceChars('aaaabbbccccdddd');
  console.log(z);
  console.log(z === 'aaabbbcccddd');

// this function would literally iterate every single character in the string and compare if there is a 4th sequence
// of the same character. 

// if this would manage 20 millions characters or higher, it would probably be good to
// make this function an async function and await it due to it will take longer time.
// usage would be for an example var x = await removeConsecutiveLetters('40 million chars');

// tested on https://www.typescriptlang.org/play