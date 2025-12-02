import { Request, Response } from "express";
import bookServices from "../services/book.services";
import { validateId } from "../utils/validate";
import ResponseHelper from "../utils/responseHelper";

const getBooksList = async (req: Request, res: Response) => {
  try {
    const bookList = await bookServices.getAllBooks();
    ResponseHelper.success(res, bookList, "Kitaplar başaryla getirildi");
  } catch (error) {
    ResponseHelper.error(res, "Kitaplar getirilirken hata oluştu", 500, error);
  }
};

const getBookById = async (req: Request, res: Response) => {
  try {
    const id = validateId(req.params.id, res);
    if (id === null) return;

    const data = await bookServices.getById(id);
    if (!data) {
      return ResponseHelper.notFound(res, "Kitap bulunamadı");
    }
    ResponseHelper.success(res, data, "Kitap başarıyla getirildi");
  } catch (error) {
    ResponseHelper.error(res, "Kitap getirilirken hata oluştu", 500, error);
  }
};

const createBook = async (req: Request, res: Response) => {
  try {
    const json = req.body;
    const book = await bookServices.createBooks(json);
    ResponseHelper.created(res, book, "Kitap başarıyla oluşturuldu");
  } catch (error) {
    ResponseHelper.error(res, "Kitap oluşturulurken hata oluştu", 500, error);
  }
};

const updateBook = async (req: Request, res: Response) => {
  try {
    const id = validateId(req.params.id, res);
    if (id === null) return;

    const data = req.body;
    const book = await bookServices.updateBook(data, id);
    ResponseHelper.success(res, book, "Kitap başarıyla güncellendi");
  } catch (error) {
    ResponseHelper.error(res, "Kitap güncellenirken hata oluştu", 500, error);
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const id = validateId(req.params.id, res);
    if (id === null) return;

    await bookServices.deleteBook(id);
    ResponseHelper.success(res, { id }, "Kitap başarıyla silindi");
  } catch (error) {
    ResponseHelper.error(res, "Kitap silinirken hata oluştu", 500, error);
  }
};

export default {
  getBooksList,
  createBook,
  updateBook,
  deleteBook,
  getBookById,
};
