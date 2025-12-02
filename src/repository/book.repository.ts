import prisma from "../config/database";
import { Book, Prisma } from "../../generated/prisma";

class BookRepository {
  async findAll(): Promise<Book[]> {
    const books = await prisma.book.findMany({
      orderBy: { createdAt: "desc" },
    });

    return books;
  }
  async findById(id: number): Promise<Book | null> {
    return await prisma.book.findFirst({
      where: { id: id },
    });
  }
  async create(data: Prisma.BookCreateInput): Promise<Book> {
    return await prisma.book.create({ data });
  }
  async updateBook(data: Prisma.BookUpdateInput, id: number): Promise<Book> {
    return await prisma.book.update({
      where: { id: id },
      data: data,
    });
  }
  async deleteBook(id: number): Promise<Book> {
    return await prisma.book.delete({
      where: { id: id },
    });
  }
}

export default new BookRepository();
