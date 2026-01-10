import type { ExpenseTracker, ExpenseTrackerRepository } from "../repositories/expense-tracker-repository.js";
interface CreateExpenseRequest{
  description: string
  amount: number
}

interface CreateExpenseResponse{
  expense: ExpenseTracker
}

export class CreateExpenseUseCase{
  constructor(private expenseRespository: ExpenseTrackerRepository ){}

  async execute({
    description,
    amount
  }:CreateExpenseRequest):Promise<CreateExpenseResponse>{


    if(!description || !amount){
      throw new Error('Description and amount requerited')
    }

    const expense = await this.expenseRespository.create({
      description,
      amount,
    })

    return { expense }
  }
}
