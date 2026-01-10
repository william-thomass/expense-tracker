import { makeCreateExpenseUseCase } from "./use-cases/factorories/create-expense-factory.js"
import { makeDeleteExpenseUseCase } from "./use-cases/factorories/delete-expense-factory.js"
import { makeFetchExpenseUseCase } from "./use-cases/factorories/fetch-all-expense-factory.js"

const [,, command, ...args] = process.argv

export async function run(){

  switch (command) {
    case 'add':{
      const description = args[0]
      const amount  = Number(args[1])
      
    

    if(!description || !amount){
     return console.log(`Description and amount is requireted`)
    }
    
    const makeCreateUseCase = makeCreateExpenseUseCase()
    await makeCreateUseCase.execute({
      description,
      amount
    })

    console.log(`✅ Expense ${description} created sucessfully`)

  }
  break;
  case "list":{
    const makeFetchUseCase = makeFetchExpenseUseCase()
    const {expense }= await makeFetchUseCase.execute({})
    
    if(!expense){
      return console.log('Not found expense!')
    }
     if(expense.length <= 0){
      return console.log('Not found expense created!')
    }
    
    console.table(expense)
  }
  break;
  case "delete":{
    const id  = args[0] as string

    if(!id){
      console.log('Use: npm run expense -- delete <id>')
    }

    const makeDeleteUseCase = makeDeleteExpenseUseCase()
    await makeDeleteUseCase.execute({id})

    console.log(`❌ Expense ${id} deleted sucessfully`)
  }
  break;
    default:
      break;
  }

}

run()