const a = Number(prompt("Nhập a:"));
const b = Number(prompt("Nhập b:"));
const c = Number(prompt("Nhập c:"));

if (a === 0) {
    if (b === 0) {

        if (c === 0) {
            alert("Vô số nghiệm");
        } else {
            alert("Vô nghiệm");
        }

    } else {
        const x = -c / b;
        alert("Phương trình trở thành bậc 1, nghiệm x = " + x);
    }

} else {
    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        alert("Phương trình vô nghiệm");
    } else if (delta === 0) {1
        const x = -b / (2 * a);
        alert("Phương trình có nghiệm kép x = " + x);
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("x1 = " + x1 + ", x2 = " + x2);
    }
}