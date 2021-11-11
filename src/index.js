import "./image/logo.png";
import "./image/start_content.jpg";
import "./image/arrow.svg"
import "./styles/main.scss";


class Post {
    constructor(title) {
        this.title = title,
        this.date = new Date()
    }
    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON()
        })
    }
};


console.log('fdfhfdudjcj');
console.log('9irijgovjdi');