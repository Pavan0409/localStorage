function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.userName.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phonenumber', phonenumber);
    const obj = {
        name,
        email,
        phonenumber
    }
    localStorage.setItem('userDetails',JSON.stringify(obj));
}