function binarySearch(arr = [12, 16, 18, 19, 23, 26, 29, 31], e) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor(right / 2);
  let found = null;

  while ((found = null)) {
    if (mid > e) {
      arr.slice(0, mid);
      left = mid;
    } else if (mid < e) {
      arr.slice(mid, right);
      right = mid;
    }

    found = [left, right];

    return found;
  }

  return -1;
}

binarySearch([12, 16, 18, 19, 23, 26, 29, 31], 18);
