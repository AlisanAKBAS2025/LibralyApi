import authorRepository from "../repository/author.repositoy";
import { Author, Prisma } from "../../generated/prisma";

class AuthorServices {
  async getAuthorById(id: number): Promise<Author | null> {
    return await authorRepository.findById(id);
  }
  async listAllAuthors(): Promise<Author[]> {
    return await authorRepository.allList();
  }
  async createAuthor(data: Prisma.AuthorCreateInput): Promise<Author> {
    return await authorRepository.createAuthor(data);
  }
  async updateAuthor(
    data: Prisma.BookUpdateInput,
    id: number
  ): Promise<Author> {
    return await authorRepository.updateAuthor(data, id);
  }
  async deleteAuthor(id: number): Promise<Author> {
    return await authorRepository.deleteAuthor(id);
  }
}
export default new AuthorServices();
