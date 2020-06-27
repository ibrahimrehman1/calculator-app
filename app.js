let arr = "";
function func(x){
    if (x !== "Ans"){
        if (document.getElementById("output").value === "0"){
            if (x !== "+" && x !== "-" && x !== "*" && x !== "/"){
                document.getElementById("output").value = x;
                arr += x;
            }
            else{
                document.getElementById("output").value = 0;
                if (arr.length !== 0){
                    arr += x;
                }
            }
        }
        else{
            if (x !== "+" && x !== "-" && x !== "*" && x !== "/"){
                document.getElementById("output").value += x;
                arr += x;
            }
            else{
                document.getElementById("output").value = 0;
                if (arr.length !== 0){
                    arr += x;
                }
            }

        }
    }
    else if(x === "Ans"){
        if (arr.length === 0){
            alert("Please Enter a Value! ")
        }
        else{
            document.getElementById("output").value = eval(arr);
        }
    }
}

function reset(){
    document.getElementById("output").value = 0;
    arr = ""
}