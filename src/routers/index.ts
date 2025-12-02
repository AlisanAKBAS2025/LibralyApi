import { Router } from "express";
import controllers from "../controllers/index";

const router = Router();

// ==================== BOOKS ====================
router.get("/books", controllers.bookController.getBooksList);
router.get("/books/:id", controllers.bookController.getBookById);
router.post("/books", controllers.bookController.createBook);
router.put("/books/:id", controllers.bookController.updateBook);
router.delete("/books/:id", controllers.bookController.deleteBook);
router.patch("/books/:id/status", controllers.bookController.updateBookStatus);
router.patch("/books/:id/review", controllers.bookController.addBookReview);

// ==================== AUTHORS ====================
router.get("/authors", controllers.authorController.listAllAuthors);
router.get("/authors/:id", controllers.authorController.getAuthorById);
router.post("/authors", controllers.authorController.createAuthor);
router.put("/authors/:id", controllers.authorController.updateAuthor);
router.delete("/authors/:id", controllers.authorController.deleteAuthor);

// ==================== CATEGORIES ====================
router.get("/categories", controllers.categoryController.listAllCategories);
router.get("/categories/:id", controllers.categoryController.getCategoryById);
router.post("/categories", controllers.categoryController.createCategory);
router.put("/categories/:id", controllers.categoryController.updateCategory);
router.delete("/categories/:id", controllers.categoryController.deleteCategory);

export default router;
