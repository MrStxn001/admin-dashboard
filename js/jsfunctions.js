function CheckfromAuth1(txt)
{
    var _txt = document.getElementById(txt);
    alert(_txt);
    if ( isNaN(_txt) == true )
    {
        if (_txt.value.length == 0)
        {
            alert('Please enter the Field Value.');
            return false;
        }
        else
        {
            return true;
        }
    }
    else
    {
        alert('Please enter the Field Value.');
        return false;
    }
}
 