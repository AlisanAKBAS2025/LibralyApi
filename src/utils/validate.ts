import { Response } from "express";

export const validateId = (
  idParam: string | undefined,
  res: Response
): number | null => {
  if (!idParam) {
    res.status(400).json({ error: "ID parametresi gerekli" });
    return null;
  }

  const id = parseInt(idParam);
  if (isNaN(id)) {
    res.status(400).json({ error: "Geçersiz ID formatı" });
    return null;
  }

  return id;
};
