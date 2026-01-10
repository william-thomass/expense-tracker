export interface ExpenseTracker{
  id: string
  date: Date
  description: string
  amount : string

}

export interface ExpenseTrackerRepository{
  create(data: Omit<ExpenseTracker, 'id' | 'date'>):Promise<ExpenseTracker>
  findAll(data?: ExpenseTracker): Promise<ExpenseTracker[]>
}