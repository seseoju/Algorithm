/**
 * [1, 7, 3, 6, 5, 6] 배열의 pivot index를 찾는 문제
 * pivot index: 왼쪽 요소들의 합과 오른쪽 요소들의 합이 같게 되는 인덱스
 * 위 예시의 pivot index: 3(1 + 7 + 3 = 5 + 6)
 * 오른쪽 합 = 전체 합 - 현재 요소 - 왼쪽 요소들의 합
 * 순회하며 왼쪽 합을 누적하고, 매번 O(1)의 연산을 통해 양쪽 합을 비교한다.
 * 만족하는 인덱스 없는 경우, -1 
 */

const pivotIndex = (nums) => {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    let leftSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (sum - nums[i] - leftSum === leftSum) return i;
        leftSum += nums[i];
    }

    return -1;
};
