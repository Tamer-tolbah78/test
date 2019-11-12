import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.module'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books: Book[];
  constructor() {
    this.books= [
      {
        bookName: 'Game of Thrones',
    authorName: 'George R.R. Martin'
      },
      {
        bookName: 'Lord Of The Rings',
    authorName: 'John Ronald'
      },
      {
        bookName: 'Criss Cross',
    authorName: 'James Patterson'
      },
      {
        bookName: 'The Family Upstairs',
    authorName: 'Lisa Jewell'
      },
      {
        bookName: 'Harry Potter',
    authorName: 'Joanne Rowling'
      },
      {
        bookName: 'The Andromeda Evolution',
    authorName: 'Michael Crichton'
      },
      {
        bookName: 'A Minute to Midnight',
    authorName: 'David Baldacci'
      },
      {
        bookName: 'Tom Clancy Code of Honor',
    authorName: 'Marc Cameron'
      },
      {
        bookName: 'Spy',
    authorName: 'Danielle Steel'
      },
      {
        bookName: 'The Dinky Donkey',
    authorName: 'Craig Smith'
      },
      {
        bookName: 'Ali Cross',
    authorName: 'James Patterson'
      },
      {
        bookName: 'Supernova',
    authorName: 'Marissa Meyer'
      }
    ]
   }
   getBooks = () => {return this.books}
  ngOnInit() {
}
}