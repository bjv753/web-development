@ -0,0 +1,30 @@
const form = document["add-item"]
console.dir(1111, form)

// Submit Event

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const li = document.createElement('li')
    const newitem = form.newitem.value
    li.textContent = newitem
    form.newitem.value = ""

    //Delete Button
        //Access the event
        // Event.parentNode gives you acccess to the button's parent
        // Remove that item from the list look up removeChild()



    document.getElementById("list").appendChild(li)
})

//Edit Button
    //Create new element, edit button
    //Add event listener to that button
        //onClick create an input field
        //Add the current value to the input
        //Add a submit edit button
        //The submit edit button converts back to normal with new value