export function convertFizzBuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
}


export function generateFizzBuzzArray(n) {
  const limit = Number(n) || 0;
  const out = [];
  for (let i = 1; i <= limit; i++) out.push(convertFizzBuzz(i));
  return out;
}

export function generateFizzBuzzString(n) {
  return generateFizzBuzzArray(n).join(", ");
}