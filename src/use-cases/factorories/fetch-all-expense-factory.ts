
import { FsRepository } from "../../repositories/fs/fs-repository.js";
import { FeatchAllExpenseUseCase } from "../fetch-all-expense-use-case.js";

export function makeFetchExpenseUseCase(){
  const fsRepository = new FsRepository()
  const useCase = new FeatchAllExpenseUseCase(fsRepository)

  return useCase
} 