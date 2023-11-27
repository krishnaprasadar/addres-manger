
var selectedRow = null;

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}
function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("validationDefault01").value;
    formData["mail"] = document.getElementById("validationDefault02").value;
    formData["address"] = document.getElementById("validationDefault03").value;
    formData["telephone"] = document.getElementById("validationDefault05").value;
    formData["country"] = document.getElementById("validationDefault04").value;
    return formData;
}
function insertNewRecord(data){
    console.log(data);
    var table = document.getElementById('list').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.mail;
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.telephone;
    cell4 = newRow.insertCell(3)
    cell4.innerHTML = data.address;
    cell5 = newRow.insertCell(4)
    cell5.innerHTML = data.country;
    cell5 = newRow.insertCell(5)
    cell5.innerHTML = `<button class = " btn btn-primary ms-1" onClick="onEdit(this)">Edit</button>
                       <button class = " btn btn-primary ms-1" onClick="onDelete(this)">Delete</button>`;


}
function resetForm(){
    document.getElementById("validationDefault01").value = "";
    document.getElementById("validationDefault02").value = "";
    document.getElementById("validationDefault03").value = "";
    document.getElementById("validationDefault04").value = "";
    document.getElementById("validationDefault05").value = "";
    selectedRow = null;
}
function onEdit(td){
    tag = document.getElementById('tag').innerHTML = "EDIT ADDRESS";

    selectedRow = td.parentElement.parentElement;
    document.getElementById("validationDefault01").value = selectedRow.cells[0].innerHTML;
    document.getElementById("validationDefault02").value = selectedRow.cells[1].innerHTML;
    document.getElementById("validationDefault05").value = selectedRow.cells[2].innerHTML;
    document.getElementById("validationDefault03").value = selectedRow.cells[3].innerHTML;
    document.getElementById("validationDefault04").value = selectedRow.cells[4].innerHTML;

}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.mail;
    selectedRow.cells[2].innerHTML = formData.telephone;
    selectedRow.cells[3].innerHTML = formData.address;
    selectedRow.cells[4].innerHTML = formData.country;
    tag = document.getElementById('tag').innerHTML = "ADD ADDRESS";

}
function onDelete(td){
    if(confirm('Confirm Delete ?')){
    row = td.parentElement.parentElement;
    document.getElementById('list').deleteRow(row.rowIndex);
    resetForm();
    }
}