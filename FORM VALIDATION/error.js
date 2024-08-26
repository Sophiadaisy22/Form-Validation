
// function SubmitForm(){
//     alert("It works")
// }
/**btn.addEventListener('click', (e)=> {


    var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (first.value === '' || first == null)
    {
        e.preventDefault();
        first_message.innerHTML = "First Name is required!"
    }

    if (last.value === '' || last == null)
        {
            e.preventDefault();
            last_message.innerHTML = "Last Name is required!"
        }





    //if (email.match(email_check))




})
 
/**





})**/


 /**function generateTable(){

        var table = document.createElement("table");
        table.border = "1";
    
        
    
        for (var i = 0; i < allData.length; i++) {
            var row = table.insertRow(i + 1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            
            cell1.textContent = allData[i].fullName;
            cell2.textContent = allData[i].address;
            cell3.textContent = allData[i].email;
            cell4.textContent = allData[i].number;
            cell5.textContent = allData[i].date;   
        }
    
        var tableContainer = document.getElementById("tableContainer");
        tableContainer.innerHTML = ""; 
        tableContainer.appendChild(table);
    
    }**/




























/** btn = () => {

        let isValid = true;

        if (isValid) {
            const tableContainer = document.getElementById('tableContainer');
            tableContainer.innerHTML = '';
            const table = document.createElement('table');
            const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');
                ['first', 'last', 'address','email','number','date'].forEach(text => {
                    const th = document.createElement('th');
                    th.textContent = text;
                    headerRow.appendChild(th);
                });
                thead.appendChild(headerRow);
                table.appendChild(thead);

                

        }
    }**/
   
