// import { bubbleSort } from './bubbleSort'

const binarySearch = (arr: number[], find: number): number => {
  let index: number = -1
  let mid: number
  let firstIndex: number = 0
  let lastIndex: number = (arr.length - 1)

  while (firstIndex <= lastIndex) {
    mid = Math.floor((firstIndex + lastIndex) / 2)

    if (find === arr[mid]) {
      index = mid
      break
    } else if (find < arr[mid]) {
      lastIndex = mid - 1
    } else if (find > arr[mid]) {
      firstIndex = mid + 1
    }
  }

  return index
}

const sortedArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const idx = binarySearch(sortedArr, 10)

console.log(idx)
