var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Leer los datos textbox 
function readFormData() {
    var formData = {};
    formData["idFamily"] = document.getElementById("idFamily").value;
    formData["names"] = document.getElementById("names").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["direc"] = document.getElementById("direc").value;
    formData["fono"] = document.getElementById("fono").value;
    formData["codt"] = document.getElementById("codt").value;
    return formData;
}

//Insert los registros
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.idFamily;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.names;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.qty;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.direc;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.fono;
        cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.codt;
        cell4 = newRow.insertCell(6);
        cell4.innerHTML = `<button onClick="onEdit(this)">Editar</button> <button onClick="onDelete(this)">Eliminar</button>`;
}

//Creando las columnas de la tabla
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("idFamily").value = selectedRow.cells[0].innerHTML;
    document.getElementById("names").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("direc").value = selectedRow.cells[3].innerHTML;
    document.getElementById("fono").value = selectedRow.cells[4].innerHTML;
    document.getElementById("codt").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.idFamily;
    selectedRow.cells[1].innerHTML = formData.names;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.direc;
    selectedRow.cells[4].innerHTML = formData.fono;
    selectedRow.cells[5].innerHTML = formData.codt;
}

//Eliminando Registros
function onDelete(td) {
    if (confirm('Necesitas Eliminar el REGISTRO?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Limpiando campos (CANCELAR)
function resetForm() {
    document.getElementById("idFamily").value = '';
    document.getElementById("names").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("direc").value = '';
    document.getElementById("fono").value = '';
    document.getElementById("codt").value = '';
    selectedRow = null;
}
