import type { ExpenseTracker, ExpenseTrackerRepository } from "../repositories/expense-tracker-repository.js";
interface SummaryAllExpenseRequest{
  
}

interface SummaryAllExpenseResponse{
  total: number
}

export class SummaryAllExpenseUseCase{
  constructor(private expenseRespository: ExpenseTrackerRepository ){}

  async execute():Promise<SummaryAllExpenseResponse>{

const summary = await this.expenseRespository.summary()

    return {total: summary}
  }
}
