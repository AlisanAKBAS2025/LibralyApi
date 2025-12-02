import { Category, Prisma } from "../../generated/prisma";
import categoryRepository from "../repository/category.repository";

class CategoryServices {
  async getAllCategory(): Promise<Category[]> {
    return await categoryRepository.getAllCategory();
  }
  async getCategoryById(id: number): Promise<Category | null> {
    return await categoryRepository.getCategoryById(id);
  }
  async createCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
    return await categoryRepository.createCategory(data);
  }
  async updateCategory(
    data: Prisma.CategoryUpdateInput,
    id: number
  ): Promise<Category> {
    return await categoryRepository.updateCategory(data, id);
  }
  async deleteCategory(id: number): Promise<Category> {
    return await categoryRepository.deleteCategory(id);
  }
}
export default new CategoryServices();
