import { Router } from "express";
import controllers from "../controllers/index";

const router = Router();

//Book routers
router.get("/books/:id", controllers.bookController.getBookById);
router.get("/books", controllers.bookController.getBooksList);
router.post("/books", controllers.bookController.createBook);
router.put("/books/:id", controllers.bookController.updateBook);
router.delete("/books/:id", controllers.bookController.deleteBook);

//Aurhor Router
router.get("/author", controllers.authorController.listAllAuthor);
router.get("/author/:id", controllers.authorController.getAuthorById);
router.post("/author", controllers.authorController.createAuthor);
router.put("/auther/:id", controllers.authorController.updateAuthor);
router.delete("/author/:id", controllers.authorController.deleteAuthor);

//Category Rouer

export default router;
