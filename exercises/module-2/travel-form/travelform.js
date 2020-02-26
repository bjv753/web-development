const form = document.travelForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let firstN = travelForm.firstName.value
    let lastN = travelForm.lastName.value
    let age = travelForm.age.value
    let gender = travelForm.gender.value
    let destination = travelForm.city.value

    let food = travelForm.menu
    const checkedInputs = []

    for (let i = 0; i < food.length; i++){
        if (food[i].checked){
            checkedInputs.push(food[i].value)
        }
    }

    alert(
        `
        First Name: ${firstN}
        Last Name: ${lastN}
        Age: ${age}
        Gender: ${gender}
        Destination: ${destination}
        Dietary Restrictions: ${checkedInputs}
        `
        )
})