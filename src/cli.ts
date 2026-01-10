import { makeCreateExpenseUseCase } from "./use-cases/factorories/create-expense-factory.js"

const [,, command, ...args] = process.argv

export async function run(){

  switch (command) {
    case 'add':
      const description = args[0] as any
      const amount  = args[1] as any
      
      
    if(!description || !amount){
     return console.log(`Description and amount is requireted`)
    }
    
    const makeCreateUseCase = makeCreateExpenseUseCase()
    await makeCreateUseCase.execute({
      description,
      amount
    })

    console.log(`✅ Expense ${description} created sucessfully`)

  
  break;
  
    default:
      break;
  }

}

run()