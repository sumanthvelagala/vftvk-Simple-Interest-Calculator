function compute()
{
    var principal= document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var Years=document.getElementById("Years").value;
    var interest=principal*Years*rate/100;
    var year=new Date().getFullYear()+parseInt(Years);
    if(principal<=0)
    {
        alert("Enter a postive value");
        principal.focus();
        return false;
    }
    else
    {
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>\<br\>";
        return true;
    }
    

}
function update_rate()
{
    var rate_value=document.getElementById("rate").value;
    document.getElementById("rate_value").innerText=rate_value; 
}
        