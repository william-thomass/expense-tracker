import type { ExpenseTrackerRepository } from "../repositories/expense-tracker-repository.js";
interface SummaryAllExpenseRequest{
  month?: string | undefined
}

interface SummaryAllExpenseResponse{
  total: number
}

export class SummaryAllExpenseUseCase{
  constructor(private expenseRepository: ExpenseTrackerRepository ){}

  async execute({
    month,
  }:SummaryAllExpenseRequest):Promise<SummaryAllExpenseResponse>{

   

  const summary = await this.expenseRepository.summary(month)

    return {total: summary}
  }
}
