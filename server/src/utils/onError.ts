import { ErrorRequestHandler } from "express";
import { FgRed, Reset } from "./colors.js";
import fs from 'fs';
import path from "path";

const onError: ErrorRequestHandler = (err, req, res, _) => {
  console.log(`${FgRed}%s${Reset}`, err);

  if (err.status != 500) {
    res.status(err.status).json({
      status: err.status,
      message: err.message
    });
  }

  fs.appendFileSync(path.join(process.cwd(), 'log.txt'),
    `${new Date()} ||| ${err.status} ||| ${req.url} ||| ${err.name} ||| ${err.message}\n`);

  res.status(err.status).json({
    status: err.status,
    message: 'Something went wrong. Try again later'
  });

  process.exit();
};

export default onError;
