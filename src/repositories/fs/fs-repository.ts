import fs from 'node:fs/promises'
import type { ExpenseTracker, ExpenseTrackerRepository } from '../expense-tracker-repository.js';
import path from 'node:path';

export class FsRepository implements ExpenseTrackerRepository{
  private filePath = path.resolve(process.cwd(), 'db.json')

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