//1. Nhập dữ liệu mảng
const arr = [];
for(let input = 0; input < 10; input++) {
    let num = Number(prompt("Nhập phần tử thứ " + (input + 1) + ":" ));
    arr.push(num);
}

// 2. In mảng
function printArr() {
    let showarr = arr;
    alert("Mảng của hàm này là: " + showarr);
}

// 3. Tìm số trong mảng
function checkArr() {
    let check = Number(prompt("Vui lòng nhập số vào: "));
    for(let i in arr) {
        if(arr[i] === check) {
            alert("Số " + check + " này tồn tại trong hàm.");
            return;
        }
    }
    alert("Số " + check + " này không tồn tại trong hàm.");
}

// 4. Tìm giá trị lớn nhất trong mảng.
function bigArr() {
    let big = arr[0];
    for(let max in arr) {
        if (arr[max] > big) {
            big = arr[max];
        }
    }
    alert("Số lớn nhất là: " + big);
}

//5. Tính tổng trong mảng.
function sumArr() {
    let sum = arr[0];
    for(let z in arr) {
        sum += arr[z];
    }
    alert("Tổng của mảng là: " + sum);
    return sum;
}

// 6. Sắp xếp mảng giảm dần.
function sortArr() {
    arr.sort((a, b) => b - a);
    alert("Mảng sau khi sắp xếp giảm dần là: " + arr);
}

// 7. Menu
function menu() {
    while (true) {
        let choice = Number(prompt(
            "===== MENU =====\n" +
            "1. In mảng\n" +
            "2. Kiểm tra số tồn tại\n" +
            "3. Tìm số lớn nhất\n" +
            "4. Tính tổng mảng\n" +
            "5. Sắp xếp giảm dần\n" +
            "0. Thoát\n" +
            "-------------------\n" +
            "Nhập lựa chọn:"
        ));

        switch (choice) {
            case 1: printArr(); break;
            case 2: checkArr(); break;
            case 3: bigArr(); break;
            case 4: sumArr(); break;
            case 5: sortArr(); break;
            case 0: alert("Thoát chương trình!"); return;
            default: alert("Lựa chọn không hợp lệ!");
        }
    }
}
menu();
