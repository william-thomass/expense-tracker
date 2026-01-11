export interface ExpenseTracker{
  id: string
  date: Date
  description: string
  amount : number

}

export interface ExpenseTrackerRepository{
  create(data: Omit<ExpenseTracker, 'id' | 'date'>):Promise<ExpenseTracker>
  findAll(data?: ExpenseTracker): Promise<ExpenseTracker[]>
  findById(id: string): Promise<ExpenseTracker[]>
  update(id:string): Promise<ExpenseTracker[]>
  delete(id:string): Promise<ExpenseTracker>
  summary(month?: string):Promise<number>
}