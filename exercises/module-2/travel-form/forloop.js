let food = travelForm.menu
const checkedInputs = []

for (let i = 0; i < food.length; i++) {
    if(food[i].checked){
        checkedInputs.push(food[i].value)
    }

  
