import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import logger from "../utils/logger";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body as any);
    return res.status(200).json({ user });
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}