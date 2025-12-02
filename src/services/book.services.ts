import bookRepository from "../repository/book.repository";
import { Book, Prisma } from "../../generated/prisma";

class BookService {
  async getAllBooks(): Promise<Book[]> {
    return await bookRepository.findAll();
  }
  async getById(id: number): Promise<Book | null> {
    return await bookRepository.findById(id);
  }
  async createBooks(data: Prisma.BookCreateInput): Promise<Book> {
    return await bookRepository.create(data);
  }
  async updateBook(data: Prisma.BookUpdateInput, id: number): Promise<Book> {
    return await bookRepository.updateBook(data, id);
  }
  async deleteBook(id: number): Promise<Book> {
    return await bookRepository.deleteBook(id);
  }
}

export default new BookService();
