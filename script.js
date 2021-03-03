var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["vendor_name"] = document.getElementById("vendor_name").value;
    formData["project_name"] = document.getElementById("project_name").value;
    formData["deal_id"] = document.getElementById("deal_id").value;
    formData["project_cost"] = document.getElementById("project_cost").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("teamlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.vendor_name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.project_name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.deal_id;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.project_cost;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("vendor_name").value = "";
    document.getElementById("project_name").value = "";
    document.getElementById("deal_id").value = "";
    document.getElementById("project_cost").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("vendor_name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("project_name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("deal_id").value = selectedRow.cells[2].innerHTML;
    document.getElementById("project_cost").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.vendor_name;
    selectedRow.cells[1].innerHTML = formData.project_name;
    selectedRow.cells[2].innerHTML = formData.deal_id;
    selectedRow.cells[3].innerHTML = formData.project_cost;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("teamlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("vendor_name").value == "") {
        isValid = false;
        document.getElementById("vendor_nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("vendor_nameValidationError").classList.contains("hide"))
            document.getElementById("fvendor_nameValidationError").classList.add("hide");
    }
    return isValid;
}