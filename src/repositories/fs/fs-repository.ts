import fs from 'node:fs/promises'
import type { ExpenseTracker, ExpenseTrackerRepository } from '../expense-tracker-repository.js';
import path from 'node:path';



export class FsRepository implements ExpenseTrackerRepository{
 private filePath = path.resolve(process.cwd(), 'db.json')

  async summary(month?: string): Promise<number> {
    let expenses = await this.findAll()

    if(month){
      const monthId = Number(month) - 1  // janery = 0

      

      expenses = expenses.filter(item => {
        const expenseDate = new Date(item.date)
        const isMonth = expenseDate.getMonth() === monthId
        const isYear = expenseDate.getFullYear() === 2026

        return isMonth && isYear
      })
    }

    

    const summary = expenses.reduce((accumulator, summaryAmount) =>{
      return accumulator + summaryAmount.amount
    }, 0)
    
    return summary
  }

  async update(data: ExpenseTracker): Promise<ExpenseTracker> {
    const expenses = await this.findAll()

    const expense = expenses.map(item => {
      if(item.id === data.id){
        return {
          ...item,
          ...data
        }
      }
      return item
    })

    const existsExpense = expense.some(item => item.id === data.id)
    if(!existsExpense){
     throw new Error(' Expense not found ')
    }

    await fs.writeFile(
      this.filePath,
      JSON.stringify(expense, null, 2),
      'utf-8'
    )

    return {...data}

  }

  async delete(id: string): Promise<ExpenseTracker> {
    const expense = await this.findAll()

    const  deleteExpense =  expense.find( item => item.id === id)
    
    if(!deleteExpense){
      throw new Error('Id not found, try again!')
    }
    const newExpense = expense.filter(item => item.id !== id)

    await fs.writeFile(
      this.filePath,
      JSON.stringify(newExpense, null, 2),
      'utf-8'
    )

    return deleteExpense
  }
  
   async findById(id: string): Promise<ExpenseTracker> {
    const expense = await this.findAll()
    const expenseId = expense.find( item => item.id === id)
    
    if(!expenseId){
      throw new Error('Id not found')
    }

    return expenseId
  }
 

  async findAll(): Promise<ExpenseTracker[]> {
    try {
    const listExpense = await fs.readFile(this.filePath,'utf-8')

    const list: ExpenseTracker[] = JSON.parse(listExpense)
    return list

    } catch (error) {
     return []
    }
  }
   
 async create(data: Omit<ExpenseTracker, 'id' | 'date'>): Promise<ExpenseTracker> {
   const expense = await this.findAll()
   
   const lastID = expense.length > 0 ? Math.max(...expense.map(item => Number(item.id))) : 0

   const newExpense = {
    ...data,
    id: String(lastID + 1),
    date: new Date(),
 }

 expense.push(newExpense)

 await fs.writeFile(
  this.filePath,
  JSON.stringify(expense, null, 2),
  'utf-8',
 )

 return newExpense
  }


}
