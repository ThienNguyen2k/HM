const a = Number(prompt("Nhập a: "));
const b = Number(prompt("Nhập b: "));

if (a === 0) {
    if (b === 0) {
        alert("Phương trình vô số nghiệm");
    } else {
        alert("Phương trình vô nghiệm");
    }
} else {
    const x = -b / a;
    alert("Nghiệm của phương trình là x = " + x);
}