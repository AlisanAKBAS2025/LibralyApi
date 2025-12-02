import { Request, Response } from "express";
import autorService from "../services/author.services";
import { validateId } from "../utils/validate";
import ResponseHelper from "../utils/responseHelper";

const getAuthorById = async (req: Request, res: Response) => {
  try {
    const id = validateId(req.params.id, res);
    if (id === null) return;

    const data = await autorService.getAuthorById(id);
    if (!data) {
      return ResponseHelper.notFound(res, "Yazar bulunamadı");
    }
    ResponseHelper.success(res, data, "Yazar başarıyla getirildi");
  } catch (error) {
    ResponseHelper.error(res, "Yazar getirilirken hata oluştu", 500, error);
  }
};

const listAllAuthor = async (req: Request, res: Response) => {
  try {
    const data = await autorService.ListAllAuthor();
    ResponseHelper.success(res, data, "Yazarlar başarıyla getirildi");
  } catch (error) {
    ResponseHelper.error(res, "Yazarlar getirilirken hata oluştu", 500, error);
  }
};

const createAuthor = async (req: Request, res: Response) => {
  try {
    const json = req.body;
    const data = await autorService.createAuthor(json);
    ResponseHelper.created(res, data, "Yazar başarıyla oluşturuldu");
  } catch (error) {
    ResponseHelper.error(res, "Yazar oluşturulurken hata oluştu", 500, error);
  }
};

const updateAuthor = async (req: Request, res: Response) => {
  try {
    const id = validateId(req.params.id, res);
    if (id === null) return;

    const json = req.body;
    const data = await autorService.updateAuthor(json, id);
    ResponseHelper.success(res, data, "Yazar başarıyla güncellendi");
  } catch (error) {
    ResponseHelper.error(res, "Yazar güncellenirken hata oluştu", 500, error);
  }
};

const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const id = validateId(req.params.id, res);
    if (id === null) return;

    await autorService.deleteAuthor(id);
    ResponseHelper.success(res, { id }, "Yazar başarıyla silindi");
  } catch (error) {
    ResponseHelper.error(res, "Yazar silinirken hata oluştu", 500, error);
  }
};

export default {
  getAuthorById,
  listAllAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
