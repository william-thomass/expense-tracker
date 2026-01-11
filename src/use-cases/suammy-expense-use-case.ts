import type { ExpenseTracker, ExpenseTrackerRepository } from "../repositories/expense-tracker-repository.js";
interface SummayAllExpenseRequest{
  
}

interface SummayAllExpenseResponse{
  total: number
}

export class SummayAllExpenseUseCase{
  constructor(private expenseRespository: ExpenseTrackerRepository ){}

  async execute():Promise<SummayAllExpenseResponse>{

const summary = await this.expenseRespository.summary()

    return {total: summary}
  }
}
