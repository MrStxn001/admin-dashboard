 
   var state = 'none';

function showhide(layer_ref) {

    if (state == 'block') {
        state = 'none';
    }
    else {
        state = 'block';
    }
    if (document.all) { //IS IE 4 or 5 (or 6 beta) 
        eval("document.all." + layer_ref + ".style.display = state");
    }
    if (document.layers) { //IS NETSCAPE 4 or below 
        document.layers[layer_ref].display = state;
    }
    if (document.getElementById && !document.all) {
        hza = document.getElementById(layer_ref);
        hza.style.display = state;
    }
}


function SelectAll(id) {
    //get reference of GridView control
    var grid = document.getElementById("<%= dg.ClientID %>");
    //variable to contain the cell of the grid
    var cell;

    if (grid.rows.length > 0) {
        //loop starts from 1. rows[0] points to the header.
        for (i = 1; i < grid.rows.length; i++) {
            //get the reference of first column
            cell = grid.rows[i].cells[0];

            //loop according to the number of childNodes in the cell
            for (j = 0; j < cell.childNodes.length; j++) {
                //if childNode type is CheckBox                 
                if (cell.childNodes[j].type == "checkbox") {
                    //assign the status of the Select All checkbox to the cell checkbox within the grid
                    cell.childNodes[j].checked = document.getElementById(id).checked;
                }
            }
        }
    }
}


//--> 
 