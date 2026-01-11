import { makeCreateExpenseUseCase } from "./use-cases/factorories/create-expense-factory.js"
import { makeDeleteExpenseUseCase } from "./use-cases/factorories/delete-expense-factory.js"
import { makeFetchExpenseUseCase } from "./use-cases/factorories/fetch-all-expense-factory.js"
import { makeSummaryAllExpenseUseCase } from "./use-cases/factorories/summary-all-expense-factory.js"
import { makeUpdateExpenseUseCase } from "./use-cases/factorories/update-expense-factory.js"

const [,, command, ...args] = process.argv

function getFlagValue(flag: string): string | null {
  const flagIndex = args.indexOf(flag)
  
 
  if (flagIndex === -1) return null

  const valueStartIndex = flagIndex + 1
  
 
  const nextFlagIndex = args.findIndex((arg, index) => 
    index > flagIndex && arg.startsWith('--')
  );


  const valueEndIndex = nextFlagIndex !== -1 ? nextFlagIndex : args.length


  return args.slice(valueStartIndex, valueEndIndex).join(' ').trim()
}

export async function run(){

  switch (command) {
    case 'add':{

      
      const description = getFlagValue('--description')
      const amountStr  = getFlagValue('--amount')
      const amount = Number(amountStr) 
      


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
  case "summary":{
    const  month  = getFlagValue('--month')

    const summaryAllExpenseUseCase = makeSummaryAllExpenseUseCase()
    const {total} = await summaryAllExpenseUseCase.execute({month : month || undefined})

   console.log(`Summary expenses: R$${total}`)
  }
  break
  case 'update':{
    const id = args[0] as string
    const description = getFlagValue('--description')  as string
    const amountStr = getFlagValue('--amount')
    const amount = Number(amountStr)
    
    if(!id){
      console.log('Id not found, Use: npx tsx update <id> --description or --amount')
      return
    }

    if(! description || amount){
      return console.log(' Write --description <value> or --amount <value>')
    }

    const makeUpdateUseCase = makeUpdateExpenseUseCase()
    await makeUpdateUseCase.execute({
      id,
      description,
      amount,
    })

    console.log(`✅ Expense ${id} updated successful!`);
  }
    default:
      break;
  }

}

run()