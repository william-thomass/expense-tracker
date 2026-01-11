
import { FsRepository } from "../../repositories/fs/fs-repository.js";
import { UpdateExpenseUseCase } from "../update-expense-use-case.js";

export function makeUpdateExpenseUseCase(){
  const fsRepository = new FsRepository()
  const useCase = new UpdateExpenseUseCase(fsRepository)

  return useCase
} 