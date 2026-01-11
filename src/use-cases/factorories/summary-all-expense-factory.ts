
import { FsRepository } from "../../repositories/fs/fs-repository.js";
import { SummaryAllExpenseUseCase } from "../summary-expense-use-case.js";

export function makeSummaryAllExpenseUseCase(){
  const fsRepository = new FsRepository()
  const useCase = new SummaryAllExpenseUseCase(fsRepository)

  return useCase
} 