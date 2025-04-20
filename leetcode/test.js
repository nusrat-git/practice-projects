const nums = [0, 1, 2, 2, 3, 0, 4, 2];

const removeDuplicates = (nums) => {
  if (nums.length == 0) return;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

const removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

const salary = [1000, 2000, 3000];

const average = (salary) => {
  let total = 0;

  for (let i = 0; i < salary.length - 1; i++) {
    for (let j = 0; j < salary.length - 1; j++) {
      if (salary[j] > salary[j + 1]) {
        let temp = salary[j];
        salary[j] = salary[j + 1];
        salary[j + 1] = temp;
      }
    }
  }

  for (let i = 1; i < salary.length - 1; i++) {
    total += salary[i];
  }

  const avg = total / (salary.length - 2);
  return avg;
};
