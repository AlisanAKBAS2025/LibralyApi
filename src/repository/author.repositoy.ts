import { prisma } from "../config/database";
import { Author, Prisma } from "../../generated/prisma";

class AuthorRepository {
  async findById(id: number): Promise<Author | null> {
    return await prisma.author.findFirst({
      where: { id: id },
      include: {
        books: true,
      },
    });
  }
  async allList(): Promise<Author[]> {
    return await prisma.author.findMany({
      include: {
        books: true,
      },
    });
  }
  async createAuthor(data: Prisma.AuthorCreateInput): Promise<Author> {
    return await prisma.author.create({ data });
  }
  async updateAuthor(
    data: Prisma.AuthorUpdateInput,
    id: number
  ): Promise<Author> {
    return await prisma.author.update({
      where: { id: id },
      data: data,
    });
  }
  async deleteAuthor(id: number): Promise<Author> {
    return await prisma.author.delete({
      where: { id: id },
    });
  }
}
export default new AuthorRepository();
