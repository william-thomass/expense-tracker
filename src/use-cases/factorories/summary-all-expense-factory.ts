
import { FsRepository } from "../../repositories/fs/fs-repository.js";
import { SummayAllExpenseUseCase } from "../suammy-expense-use-case.js";

export function makeSummaryAllExpenseUseCase(){
  const fsRepository = new FsRepository()
  const useCase = new SummayAllExpenseUseCase(fsRepository)

  return useCase
} 