import { Request, Response } from 'express';
import escapeHtml from 'escape-html';

export function helloHttp(req: Request, res: Response) {
  res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`);
}