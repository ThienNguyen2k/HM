let n, m;
let matrix = [];

// 1. Khởi tạo mảng n x m
function initMatrix() {
    n = Number(prompt("Nhập số hàng n: "));
    m = Number(prompt("Nhập số cột m: "));

    matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < m; j++) {
            matrix[i][j] = 0;
        }
    }

    alert("Đã khởi tạo ma trận " + n + " x " + m);
}

// 2. Nhập giá trị cho mảng
function inputMatrix() {
    if (!matrix.length) {
        alert("Bạn phải khởi tạo mảng trước!");
        return;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let val = Number(prompt("Nhập giá trị tại [" + i + "][" + j + "]:"));
            matrix[i][j] = val;
        }
    }

    alert("Đã nhập xong giá trị cho mảng!");
}

// 3. In mảng ra bằng alert
function printMatrix() {
    if (!matrix.length) {
        alert("Mảng chưa được khởi tạo!");
        return;
    }

    let text = "Ma trận " + n + "x" + m + ":\n\n";

    for (let i = 0; i < n; i++) {
        text += matrix[i].join("  ") + "\n";
    }

    alert(text);
}

// 4. Tính tổng
function sumMatrix() {
    if (!matrix.length) {
        alert("Mảng chưa được khởi tạo!");
        return;
    }

    let sum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            sum += matrix[i][j];
        }
    }

    alert("Tổng tất cả phần tử trong ma trận là: " + sum);
}

// 5. Kiểm tra số tồn tại
function checkExist() {
    if (!matrix.length) {
        alert("Mảng chưa được khởi tạo!");
        return;
    }

    let x = Number(prompt("Nhập số cần kiểm tra: "));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === x) {
                alert("Số " + x + " tồn tại tại vị trí [" + i + "][" + j + "]");
                return;
            }
        }
    }

    alert("Số " + x + " không tồn tại trong ma trận.");
}

// 6. Sắp xếp tăng dần
function sortMatrixAsc() {
    if (!matrix.length) {
        alert("Mảng chưa được khởi tạo!");
        return;
    }

    // Phẳng mảng ra 1 chiều
    let flat = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            flat.push(matrix[i][j]);
        }
    }

    // Sắp xếp
    flat.sort((a, b) => a - b);

    // Trả về mảng 2 chiều
    let index = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matrix[i][j] = flat[index++];
        }
    }

    alert("Đã sắp xếp tăng dần toàn bộ ma trận!");
    printMatrix();
}

// 7. MENU
function menuEx2() {
    while (true) {
        let choice = Number(prompt(
            "=== EX2 - MẢNG 2 CHIỀU ===\n\n" +
            "1. Khởi tạo mảng n x m\n" +
            "2. Nhập giá trị cho mảng\n" +
            "3. In mảng\n" +
            "4. Tính tổng\n" +
            "5. Kiểm tra số tồn tại\n" +
            "6. Sắp xếp tăng dần\n" +
            "0. Thoát\n\n" +
            "Nhập lựa chọn:"
        ));

        switch (choice) {
            case 1: initMatrix(); break;
            case 2: inputMatrix(); break;
            case 3: printMatrix(); break;
            case 4: sumMatrix(); break;
            case 5: checkExist(); break;
            case 6: sortMatrixAsc(); break;
            case 0: alert("Thoát chương trình!"); return;
            default: alert("Lựa chọn không hợp lệ!");
        }
    }
}

menuEx2();
