import { Category, Prisma } from "../../generated/prisma";
import { prisma } from "../config/database";

class CategoryRepository {
  async getAllCategory(): Promise<Category[]> {
    return await prisma.category.findMany({
      orderBy: { name: "desc" },
      include: {
        booksCategories: {
          include: { book: true },
        },
      },
    });
  }
  async getCategoryById(id: number): Promise<Category | null> {
    return await prisma.category.findFirst({
      where: { id: id },
      include: {
        booksCategories: {
          include: { book: true },
        },
      },
    });
  }
  async createCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
    return await prisma.category.create({ data });
  }
  async updateCategory(
    data: Prisma.CategoryUpdateInput,
    id: number
  ): Promise<Category> {
    return await prisma.category.update({
      where: { id: id },
      data: data,
    });
  }
  async deleteCategory(id: number): Promise<Category> {
    return await prisma.category.delete({
      where: { id: id },
    });
  }
}
export default new CategoryRepository();
