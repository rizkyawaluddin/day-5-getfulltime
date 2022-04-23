function submitData() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);



    if (name == '' ) {
        return alert("Nama wajib diisi")
    } 
    
    else if (email == '' ) {
        return alert("Email wajib diisi")
    } 
    
    else if (phone == '' ) {
        return alert("Phone wajib diisi")
    }
    
    else if (subject == '' ) {
        return alert("Subject wajib diisi")
    }
    
    else if (message == '' ) {
        return alert("Message wajib diisi")
    }

    let emailReceiver = 'rizkyawaluddin010498@gmail.com'

    let a = document.createElement('a') 
    // a = anchor
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo my name ${name} 
    ${message} please call me ${phone}`

    a.click() // menjalankan tag ancor/ mengklik tag anchor
    
    let dataObject = {
        namaLengkap: name,
        email: email,
        phoneNumber: phone,
        subject: subject,
        message: message
    }

    console.log(dataObject);
}