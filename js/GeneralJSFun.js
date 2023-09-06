function IS_iNT(txt) {
    txt.value = txt.value.replace(/[^0-9\n\r]+/g, '');
}

function IS_DignUMERIC(txt) {
    txt.value = txt.value.replace(/[^0-9\n\r.]+/g, '');
}

function IS_aLPHA(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z \n\r\/]+/g, '');
}