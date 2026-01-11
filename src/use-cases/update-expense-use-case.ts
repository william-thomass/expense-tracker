import type { ExpenseTracker, ExpenseTrackerRepository } from "../repositories/expense-tracker-repository.js";
interface UpdateExpenseRequest{
 id: string
 description?: string 
 amount?: number
}

interface UpdateExpenseResponse{
  expense: ExpenseTracker
}

export class UpdateExpenseUseCase{
  constructor(private expenseRespository: ExpenseTrackerRepository ){}

  async execute({
   id,
   description,
   amount
  }:UpdateExpenseRequest):Promise<UpdateExpenseResponse>{

    const expense = await this.expenseRespository.findById(id)

    if(!expense){
      throw new Error('Expense not found')
    }


    const expenseData: ExpenseTracker = {
      ...expense,
      description: description ?? expense.description,
      amount: amount ?? expense.amount,
    }

    const expenseUpdate = await this.expenseRespository.update(expenseData)

    return  { expense: expenseUpdate }
  }
}
