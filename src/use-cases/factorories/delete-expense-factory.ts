
import { FsRepository } from "../../repositories/fs/fs-repository.js";
import { DeleteExpenseUseCase } from "../delete-expense-use-case.js";

export function makeDeleteExpenseUseCase(){
  const fsRepository = new FsRepository()
  const useCase = new DeleteExpenseUseCase(fsRepository)

  return useCase
} 