import type { ExpenseTracker, ExpenseTrackerRepository } from "../repositories/expense-tracker-repository.js";
interface FetchAllExpenseRequest{
  data?: ExpenseTracker
}

interface FetchAllExpenseResponse{
  expense: ExpenseTracker[]
}

export class FeatchAllExpenseUseCase{
  constructor(private expenseRespository: ExpenseTrackerRepository ){}

  async execute({
    data,
  }:FetchAllExpenseRequest):Promise<FetchAllExpenseResponse>{

  

   const expense = await this.expenseRespository.findAll(data)

    return {expense}
  }
}
