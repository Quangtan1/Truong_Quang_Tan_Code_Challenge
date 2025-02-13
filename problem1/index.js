//1: Loop
const sum_to_n_a = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

//2: O(1)time complexity
const sum_to_n_b = (n) => {
  return (n * (n + 1)) / 2;
};

//3: Recursive
const sum_to_n_c = (n) => {
  if (n <= 0) return 0;
  return n + sum_to_n_c(n - 1);
};

console.log("Case 1", sum_to_n_c(4));
