function GetPrint() {
    window.print();
}

function BtnAdd() {
    var templateRow = document.getElementById("TRow");
    var newRow = templateRow.cloneNode(true);
    newRow.classList.remove("d-none");

    var inputs = newRow.querySelectorAll("input");
    inputs.forEach(function (input) {
        input.value = '';
    });

    var rowIndex = document.querySelectorAll("#TBody tr").length;
    newRow.querySelector("th").innerHTML = rowIndex;

    document.getElementById("TBody").appendChild(newRow);
}

function BtnDel(button) {
    var row = button.closest("tr");
    row.remove();
    GetTotal();

    var rows = document.querySelectorAll("#TBody tr");
    rows.forEach(function (row, index) {
        row.querySelector("th").innerHTML = index;
    });
}

function Calc(input) {
    var row = input.closest("tr");
    var index = row.rowIndex;

    var qty = document.getElementsByName("qty")[index - 1].value;
    var rate = document.getElementsByName("rate")[index - 1].value;

    var amt = qty * rate;
    document.getElementsByName("amt")[index - 1].value = amt;

    GetTotal();
}

function GetTotal() {
    var sum = 0;
    var amts = document.getElementsByName("amt");

    for (var index = 0; index < amts.length; index++) {
        var amt = amts[index].value;
        sum = parseFloat(sum) + parseFloat(amt);
    }

    document.getElementById("FTotal").value = sum;

    var gst = document.getElementById("FGST").value;
    var net = parseFloat(sum) + parseFloat(gst);
    document.getElementById("FNet").value = net;
}