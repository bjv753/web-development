Object.keys

let obj = {
    key1: "value",
    key2: "value2",
    key3: "value3"
}

Object.keys(obj).forEach(key => {
  let value = obj[key];
  console.log("key")
})