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
    formData["budget"] = document.getElementById("budget").value;
    formData["fee"] = document.getElementById("fee").value;
    formData["id"] = document.getElementById("id").value;
    formData["date"] = document.getElementById("date").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("financelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.budget;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fee;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.id;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.salary;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("budget").value = "";
    document.getElementById("fee").value = "";
    document.getElementById("id").value = "";
    document.getElementById("date").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("budget").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fee").value = selectedRow.cells[1].innerHTML;
    document.getElementById("id").value = selectedRow.cells[2].innerHTML;
    document.getElementById("date").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.budget;
    selectedRow.cells[1].innerHTML = formData.fee;
    selectedRow.cells[2].innerHTML = formData.id;
    selectedRow.cells[3].innerHTML = formData.date;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("financelist").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("id").value == "") {
        isValid = false;
        document.getElementById("id").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("budgetValidationError").classList.contains("hide"))
            document.getElementById("budgetValidationError").classList.add("hide");
    }
    return isValid;
}