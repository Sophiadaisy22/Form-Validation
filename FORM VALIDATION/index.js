

const form = document.getElementById("myForm");

const first_error = document.getElementById("first_error");

const last_error = document.getElementById("last_error");

const address_error = document.getElementById("address_error");

const email_error = document.getElementById("email_error");

const number_error = document.getElementById("number_error");

const date_error = document.getElementById("date_error");

const tableA = document.getElementById("table");

const actionButton = document.getElementById("btn");







var  allDataArray = [];

let isEditMode = false;
//let editingIndex = null;
let editingPhoneNumber = null;


//formObject.number == phoneNumber;


function validateForm() {


   
    const first= document.getElementById("first").value;
    const last= document.getElementById("last").value;
    const address= document.getElementById("address").value;
    const email= document.getElementById("email").value;
    const number= document.getElementById("number").value;
    const date= document.getElementById("date").value;
    const Img = document.getElementById('img1');
    const Img1= document.getElementById('img2');
   
   
    const fullName = first +" " + last;

    if (!isEditMode) {
        const duplicateEmail = allDataArray.some(entry => entry.email === email);
        const duplicateNum = allDataArray.some(entry => entry.number === number);
        
        if (duplicateEmail) {
            email_error.innerText = 'Error: Duplicate email!';
            return false;
        }
        
        if (duplicateNum) {
            number_error.innerText = 'Error: Duplicate Phone Number!';
            return false;
        }
    }
    
   
    if (first == "") {
      first_error.innerText = "First name is required!";
      return
    }

    if (last == "") {
        last_error.innerText = "Last name is required!";
        return
    }

    if (address == ""){
        address_error.innerText = "Address is required!";
       return
    }

    if (email == ""){
        email_error.innerText = "Email is required!"; 
        return
    } else if (!validateEmail(email)) {
        email_error.innerText = "Invalid email format!";
        return
    } 
        
    

    if (number == ""){
        number_error.innerText = "Number is required!";
        return
    }  else if (!validatePhoneNumber(number)) {
        number_error.innerText = "Invalid phone number format!";
        return
    }
   

    if (date == ""){
        date_error.innerText = "Date is required!";
        return
        
    }
   
    
   
     if (isEditMode) {
        updateEntry();
    } else {
        saveNewEntry();
    }
     
    

    return true;
   
     }

    

     
function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);

}

function validatePhoneNumber(number) {
    var phonePattern = /^\d{10}$/;
    return phonePattern.test(number);
}


     function saveNewEntry() {
        const first = document.getElementById("first").value;
        const last = document.getElementById("last").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;
        const number = document.getElementById("number").value;
        const date = document.getElementById("date").value;
        const Img = document.getElementById('img1');
        const Img1 = document.getElementById('img2');
    

     let formObject ={
        fullName:first + " " + last,
        address:address,
        email: email,
        number: number,
        date:date,
        image1:Img.src,
        image2:Img1.src
    };

    console.log(formObject)
    allDataArray.push(formObject)

    generateTable();
     document.getElementById('myForm').reset()

}



function updateEntry() {
    if (editingPhoneNumber !== null) {
        const updatedEntry = {
            fullName: document.getElementById("first").value + " " + document.getElementById("last").value,
            address: document.getElementById("address").value,
            email: document.getElementById("email").value,
            number: document.getElementById("number").value,
            date: document.getElementById("date").value,
            image1: document.getElementById('img1').src,
            image2: document.getElementById('img2').src
        };
        const index = allDataArray.findIndex(entry => entry.number === editingPhoneNumber);
        if (index !== -1) {
            allDataArray[index] = updatedEntry;
        }
        generateTable();
        exitEditMode();
    }
}


function editTable(phoneNumber){

    let filtered = allDataArray.find(formObject => formObject.number === phoneNumber);
    if (filtered) {
        // Remove the entry from the array
        allDataArray.splice(phoneNumber, 1);


    let firstName = filtered.fullName.split(/\s+/)[0];
    let lastName = filtered.fullName.split(/\s+/)[1];

    document.getElementById("first").value = firstName;
    document.getElementById("last").value = lastName;
    document.getElementById("email").value = filtered.email;
    document.getElementById("address").value = filtered.address;
    document.getElementById("number").value = filtered.number;
    document.getElementById("date").value = filtered.date;

    enterEditMode(phoneNumber);
    }
}

function enterEditMode(phoneNumber) {
    isEditMode = true;
    editingPhoneNumber = phoneNumber;
    actionButton.textContent = 'Update';
    actionButton.dataset.action = 'update';
}

function exitEditMode() {
    isEditMode = false;
    editingPhoneNumber = null;
    actionButton.textContent = 'Save';
    actionButton.dataset.action = 'save';
    document.getElementById('myForm').reset();
}


// Get Table body
var tableBody = document.getElementById("tableBody");
function generateTable(){
   

if(tableBody !=null){
    tableA.removeChild(tableBody)
    tableBody =null;

    tableBody = document.createElement("tbody");
    tableA.appendChild(tableBody)
}


    allDataArray.forEach(x=> {
      
      //  Create Tr
      let Tr =document.createElement("tr")


      // Create Td
        let Td0 =document.createElement("td")
        let Td1 =document.createElement("td")
        let Td2 =document.createElement("td")
        let Td3 =document.createElement("td")
        let Td4 =document.createElement("td")
        
      

        // Assign Values to Table Cells
        Td0.innerHTML =x.fullName
        Td1.innerHTML =x.email
        Td2.innerHTML =x.number
        Td3.innerHTML =x.date
        let editBtn = document.createElement("button");
        editBtn.classList.add("btnEdit");
        editBtn.innerHTML = "Edit";
        editBtn.type = "button";
        Td4.appendChild(editBtn);
        Td4.addEventListener("click", function(e) {
            //editRow(fullName, address, email, number, date,);
           let phoneNumber = e.target.parentElement.parentElement.children[2].innerHTML;
            editTable(phoneNumber);
           });
          

          fullName =  Tr.appendChild(Td0)
           email = Tr.appendChild(Td1)
           number = Tr.appendChild(Td2)
           date = Tr.appendChild(Td3)
           edit = Tr.appendChild(Td4)
         
        tableBody.appendChild(Tr)
    } 
)
}


// insert images 

 
    document.getElementById("imageUrl1").addEventListener('change', function (event)  {
        const file = event.target.files[0];
        const preview = document.getElementById('img1');
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = ' block'
            };
            reader.readAsDataURL(file);
        } else{
            preview.style.display = 'none';
            preview.src = '';
        }
    });

   
    document.getElementById("imageUrl2").addEventListener('change', function (event)  {
        const file = event.target.files[0];
        const preview1 = document.getElementById('img2');
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                preview1.src = e.target.result;
                preview1.style.display = ' block'
            };
            reader.readAsDataURL(file);
        } else{
            preview1.style.display = 'none';
            preview1.src = '';
        }
    });

    