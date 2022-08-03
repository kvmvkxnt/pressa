import { Request, NextFunction, Response } from "express";

export type Route = (req: Request, res: Response, next: NextFunction) => void;
