// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);


//object literal
// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };

// const book2 = {
//     title: 'Book Two',
//     author: 'Jane Doe',
//     year: '2016',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };

// // console.log(book1.getSummary());
// console.log(Object.values(book2));

//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;


// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} 
    in ${this.year}`;
};


// Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018',
    'Jan');

console.log(mag1);










// // getAge 
// Book.prototype.getAge = function() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
// };

// // Revise / Change Year

// Book.prototype.revise = function(newYear) 
// {
//     this.year = newYear;
//     this.revised = true; 
// };

// // Instantiate an Object
// const book1 = new Book('Book 1', 'John Doe', '2013');
// const book2 = new Book('Book 2', 'Jane Doe', '2016');


// console.log(book2);
// book1.revise('2018');
// console.log(book2);