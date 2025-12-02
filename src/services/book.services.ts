import bookRepository from "../repository/book.repository";
import { Book, Prisma, ReadingStatus } from "../../generated/prisma";

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
  async updateBookStatus(id: number, status: string): Promise<Book> {
    return await bookRepository.updateBook(
      { status: status as ReadingStatus },
      id
    );
  }

  async addReview(id: number, rating?: number, review?: string): Promise<Book> {
    const updateData: Prisma.BookUpdateInput = {};

    if (rating !== undefined) {
      updateData.rating = rating;
    }

    if (review !== undefined) {
      updateData.review = review;
    }

    return await bookRepository.updateBook(updateData, id);
  }
}

export default new BookService();
