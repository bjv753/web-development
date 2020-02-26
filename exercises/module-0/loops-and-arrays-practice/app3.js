Object.entries

let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
  }
  
  Object.entries(obj).forEach(entry => {
    let key = entry[0];
    let value = entry[1];
    console.log("obj")
  })