const dis=document.getElementById("display");
function appendtodispalyfuncion(input){
    dis.value+=input;

}
function cleardisplay(){
    dis.value=" ";
}
function calculte(){
    try{
        dis.value=eval(dis.value);
    }
    catch(error){
        dis.value="ERROR";
    }
    
}
function deletevalue() {
    const ak = document.getElementById('display');
    ak.value = ak.value.slice(0, -1);
}
