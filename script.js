// Task 2: 
function calculateSumAndAverage(numbers) {
    const totalSum = numbers.reduce((sum, num) => sum + num, 0);
    const average = totalSum / numbers.length;
    return { totalSum, average };
  }
  
  // Example on Task 2:
  const numbers = [10, 20, 30, 40];
  const result = calculateSumAndAverage(numbers);
  console.log("Sum:", result.totalSum); 
  console.log("Average:", result.average); 
  
  // Task 3: 
  function removeDuplicates(strings) {
    return [...new Set(strings)];
  }
  
  // Example on Task 3:
  const strings = ["ear", "eye", "mouth", "eye", "mouth"];
  const uniqueStrings = removeDuplicates(strings);
  console.log(uniqueStrings); 
  