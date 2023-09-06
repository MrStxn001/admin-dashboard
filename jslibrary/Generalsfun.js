function IS_nUMERIC(txt) {
    txt.value = txt.value.replace(/[^0-9\n\r.]+/g, '');
}

function IS_dECIMAL(txt) {
    txt.value = txt.value.replace(/[^0-9\n\r.]+/g, '');
    //var myNumber = txt.value;
    //var myNumberWithTwoDecimalPlaces = parseFloat(myNumber).toFixed(2); //12.23
    //txt.value = 
}