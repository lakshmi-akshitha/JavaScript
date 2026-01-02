console.log("Hello JS!")

// var, 2015 ES6 -> let, const 

{
    var userName = "Tom"
    var userName = "Cruise"

    // let cannot be redclared but can be updated 
    let itemName = "Tomato"
    // let itemName = "Potato"
    itemName = "Potato"

    console.log(itemName)

    let itemBrand  // can be declared without initialization
    itemBrand = "FreshFarm"
    console.log(itemBrand)

    // const cannot be redclared or updated
    const price = 20
    // const price =30
    // price = 40

    console.log(price)


    // const quantity     -> must be initialized during declaration
}


{
    const itemName = "Mango"
    let price = 60
    console.log(itemName, price)
}

{
    const itemName = "Banana"
    let price = 60
    console.log(itemName, price)
}


// data types
const primitive_data_types = "number, string, boolean, undefined, null, symbol, bigint"
const reference_data_types = "objects (array, function, object)"

// object
const student = {
    name: "John",
    age: 22,
    isEnrolled: true,
    marks: null
}

console.log(student, student.name, student["age"] + 2, student["isEnrolled"])


// keys in an object can be changed
