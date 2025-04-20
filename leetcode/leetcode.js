const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const newArr = [];

const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    const exists = newArr.includes(element);

    if (!exists) {
      newArr.push(element);
    }
  }

  return newArr.length;
};

const removeElement = function (nums, val) {
  nums = nums.filter((num) => num !== val);
  return nums.length;
};
