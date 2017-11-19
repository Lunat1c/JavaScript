function sum(start, end) {
  var array = []
  var val = 0
  for(var i = 0; i + start <= end; i++) {
    val = start + i;
    array.push(val)
  }

  return array
}

console.log(sum(5,8))
