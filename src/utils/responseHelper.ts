import { Response } from "express";
interface ApiRespons<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
  timestamp: string;
}

class ResponseHandeler {
  static success<T>(
    res: Response,
    data: T,
    message: string = "success",
    statusCode: number = 200
  ) {
    const response: ApiRespons<T> = {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    };
    return res.status(statusCode).json(response);
  }
  static created<T>(
    res: Response,
    data: T,
    message: string = "Create success."
  ) {
    return this.success(res, data, message, 201);
  }
  static error(
    res: Response,
    message: string = "Something wrong",
    statusCode: number = 500,
    error?: any
  ) {
    const response: ApiRespons = {
      success: false,
      message,
      error: error?.message || error,
      timestamp: new Date().toISOString(),
    };
    return res.status(statusCode).json(response);
  }
  static notFound(res: Response, message: string = "NotFound") {
    return this.error(res, message, 404);
  }
  static bedRequest(
    res: Response,
    message: string = "invalid request",
    error?: any
  ) {
    return this.error(res, message, 400);
  }
  static unauthorized(res: Response, message: string = "Ubauthorized Access") {
    return this.error(res, message, 401);
  }
  static forbidden(res: Response, message: string = "Access Ban") {
    return this.error(res, message, 403);
  }
}
export default ResponseHandeler;
