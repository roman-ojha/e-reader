import { PrismaClient } from "@prisma/client";
import { StandaloneServerContextFunctionArgument } from "@apollo/server/standalone";
const prisma = new PrismaClient();

type Request = StandaloneServerContextFunctionArgument["req"];
type Response = StandaloneServerContextFunctionArgument["res"];

export interface Context {
  req: Request;
  res: Response;
  db: PrismaClient;
}

export async function createContext({
  req,
  res,
}: StandaloneServerContextFunctionArgument): Promise<Context> {
  return {
    req,
    res,
    db: prisma,
  };
}
