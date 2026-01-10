import type { ExpenseTracker, ExpenseTrackerRepository } from "../repositories/expense-tracker-repository.js";
interface DeleteExpenseRequest{
  id: string

}

interface DeleteExpenseResponse{
  expense: ExpenseTracker
}

export class DeleteExpenseUseCase{
  constructor(private expenseRespository: ExpenseTrackerRepository ){}

  async execute({
    id,
  }:DeleteExpenseRequest):Promise<DeleteExpenseResponse>{


    if(!id){
      throw new Error('Description and amount requerited')
    }

    const expense = await this.expenseRespository.delete(id)

    return { expense }
  }
}
