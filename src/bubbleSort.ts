export const bubbleSort = (arr: number[]): number[] => {
  let i: number
  let j: number

  for (i = 0; i < (arr.length - 1); i++) {
    let swapped: boolean = false

    for (j = 0; j < (arr.length - i - 1); j++) {
      // check between two value, value at index j and j + 1
      // if true, swap them
      // ">" for ascending and "<" for descending
      if (arr[j] < arr[j + 1]) {
        const temp: number = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp

        swapped = true
      }
    }

    if (!swapped) return arr
  }

  return arr
}

const unsortedArr: number[] = [55, 43, 82, 90, 12, 1, 3, 2, 9]

console.log(bubbleSort(unsortedArr))
