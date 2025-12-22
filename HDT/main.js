// Bai 1
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isRead = false; 
  }

  markAsRead() {
    this.isRead = true;
  }

  getSummary() {
    const status = this.isRead ? "Đã đọc" : "Chưa đọc";
    return `Sách "${this.title}" của tác giả ${this.author}. (${status})`;
  }
}

const book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
console.log(book1.getSummary()); 
book1.markAsRead();
console.log(book1.getSummary()); 

// Bai 2
class Employee {
  #salary;

  constructor(salary) {
    if (salary < 0) {
      this.#salary = 0;
    } else {
      this.#salary = salary;
    }
  }

  get salary() {
    return this.#salary;
  }

  set salary(newSalary) {
    if (newSalary < 0) {
      console.log("Lương không được âm! Giữ nguyên lương cũ.");
      return;
    }
    this.#salary = newSalary;
  }
}

class Developer extends Employee {
  constructor(salary, language) {
    super(salary);
    this.language = language;
  }

  getInfo() {
    return `Developer - Language: ${this.language}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(salary, teamSize) {
    super(salary);
    this.teamSize = teamSize;
  }

  getInfo() {
    return `Manager - Team size: ${this.teamSize}, Salary: ${this.salary}`;
  }
}

const dev1 = new Developer(1500, "JavaScript");
console.log(dev1.getInfo());

dev1.salary = 2000;
console.log("Lương mới dev1:", dev1.salary); 

dev1.salary = -500; 
console.log("Lương sau khi set âm dev1:", dev1.salary);

const manager1 = new Manager(3000, 8);
console.log(manager1.getInfo());
