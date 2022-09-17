function exchange() {
    let Input = document.getElementById("currencyin").value;
    let Unit1 = document.getElementById("unit1").value;
    let Unit2 = document.getElementById("unit2").value;
    let result;
    if (Unit1 === "VND") {
        if (Unit2 === "VND") {
            result = Input + " VND";
        } else {
            result = Input / 23000 + " USD";
        }
    } else if (Unit2 === "VND") {
        result = Input * 23000 + " VND";
    } else {
        result = Input + " USD";
    }
    document.getElementById("result").innerHTML = result;
}