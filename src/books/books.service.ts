import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {

  data: Book[] = [];
  nextId: number;

  create(createBookDto: CreateBookDto) {
    if (this.data.length == 0) {
      this.nextId == 0;
    }
    else{
      this.nextId == this.data.length;
    }
    this.data.push(new Book(this.nextId, createBookDto.title,createBookDto.author, createBookDto.isbn, createBookDto.publishYear));
  }

  findAll() {
    return this.data;
  }

  findOne(id: number) {
    return this.data.find(x => x.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    let index = this.data.findIndex(x => x.id === id);
    this.data[index] = new Book(id, updateBookDto.title,updateBookDto.author, updateBookDto.isbn, updateBookDto.publishYear);
  }

  remove(id: number) {
    let index = this.data.findIndex(x => x.id === id);
    this.data.splice(index, 1);
  }
}
