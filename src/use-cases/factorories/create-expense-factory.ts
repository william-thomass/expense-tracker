
import { FsRepository } from "../../repositories/fs/fs-repository.js";
import { CreateExpenseUseCase } from "../create-expense-use-case.js";

export function makeCreateExpenseUseCase(){
  const fsRepository = new FsRepository()
  const useCase = new CreateExpenseUseCase(fsRepository)

  return useCase
} 