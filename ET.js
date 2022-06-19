function saveToLocalStorage(event) {
    event.preventDefault();
    const Description = event.target.descrip.value;
    const Amount = event.target.amount.value;
    const Category = event.target.category.value;
    const obj = {
        Description,
        Amount,
        Category
    }
    localStorage.setItem(obj, JSON.stringify(obj))
    showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)
        for(var i =0; i< localstoragekeys.length; i++){
            const key = localstoragekeys[i]
            const userDetailsString = localStorageObj[key];
            const userDetailsObj = JSON.parse(userDetailsString);
            showNewUserOnScreen(userDetailsObj)
        }
})

function showNewUserOnScreen(user){
    document.getElementById('amount').value = " ";
    document.getElementById('descrip').value = " ";
    document.getElementById('category').value =" ";
    // console.log(localStorage.getItem(user.emailId))
        if(localStorage.getItem(user.amount) !== null){
             removeUserFromScreen(user.amount)
        }

    const parentNode = document.getElementById('listOfExpense');
    const childHTML = `<li id=${user.amount}> ${user.descrip} - ${user.amount}
    <button onclick=editUserDetails('${user.amount}','${user.descrip}','${user.category}')> Edit </button>
    <button onclick=deleteUser('${user.amount}')> Delete </button>
    </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User
function editUserDetails(amount, descrip,category){
    document.getElementById('amount').value = Amount;
    document.getElementById('descrip').value = Description;
    document.getElementById('category').value = Category;
     deleteUser(amount)
}

// deleteExpense

function deleteUser(amount){
    console.log(amount)
    localStorage.removeItem(amount);
    removeUserFromScreen(amount);

}

function removeUserFromScreen(amount){
    const parentNode = document.getElementById('listOfExpense');
    const childNodeToBeDeleted = document.getElementById(amount);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}