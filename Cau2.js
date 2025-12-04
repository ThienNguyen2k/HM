let math = Number(prompt("Nhập điểm toán: "));
let physical = Number(prompt("Nhập điểm lý: "));;
let chemistry = Number(prompt("Nhập điểm hóa: "));;
let avarage = (math + physical + chemistry) / 3;

if(avarage >= 8.0) {
    alert("Rank A");
} else if (avarage >= 6.5) {
    alert("Rank B");
} else if (avarage >= 5.0) {
    alert("Rank C");
}else {
    alert("Rank D");
}
