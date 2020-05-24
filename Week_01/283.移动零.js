/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let lastFoundZeroIndex = 0,
		len = nums.length
	for (let cur = 0; cur < len; cur++) {
		if (nums[cur] !== 0) {
			;[nums[lastFoundZeroIndex++], nums[cur]] = [
				nums[cur],
				nums[lastFoundZeroIndex],
			]
		}
	}
}
// @lc code=end
