import { Request, Response } from "express";
import categoryServices from "../services/category.services";
import { validateId } from "../utils/validate";
import ResponseHelper from "../utils/responseHelper";

const getCategoryById = async (req: Request, res: Response) => {
  try {
    const id = validateId(req.params.id, res);
    if (id === null) return;

    const data = await categoryServices.getCategoryById(id);
    if (!data) {
      return ResponseHelper.notFound(res, "Kategori bulunamadı");
    }
    ResponseHelper.success(res, data, "Kategori başarıyla getirildi");
  } catch (error) {
    ResponseHelper.error(res, "Kategori getirilirken hata oluştu", 500, error);
  }
};

const listAllCategories = async (req: Request, res: Response) => {
  try {
    const data = await categoryServices.getAllCategory();
    ResponseHelper.success(res, data, "Kategoriler başarıyla getirildi");
  } catch (error) {
    ResponseHelper.error(
      res,
      "Kategoriler getirilirken hata oluştu",
      500,
      error
    );
  }
};

const createCategory = async (req: Request, res: Response) => {
  try {
    const json = req.body;
    const data = await categoryServices.createCategory(json);
    ResponseHelper.created(res, data, "Kategori başarıyla oluşturuldu");
  } catch (error) {
    ResponseHelper.error(
      res,
      "Kategori oluşturulurken hata oluştu",
      500,
      error
    );
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const id = validateId(req.params.id, res);
    if (id === null) return;

    const json = req.body;
    const data = await categoryServices.updateCategory(json, id);
    ResponseHelper.success(res, data, "Kategori başarıyla güncellendi");
  } catch (error) {
    ResponseHelper.error(
      res,
      "Kategori güncellenirken hata oluştu",
      500,
      error
    );
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const id = validateId(req.params.id, res);
    if (id === null) return;

    await categoryServices.deleteCategory(id);
    ResponseHelper.success(res, { id }, "Kategori başarıyla silindi");
  } catch (error) {
    ResponseHelper.error(res, "Kategori silinirken hata oluştu", 500, error);
  }
};

export default {
  getCategoryById,
  listAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
