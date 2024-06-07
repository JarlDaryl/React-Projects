import { calculateInvestmentResults } from "../util/investment"


export default function Results({input}) {
const resultsData = calculateInvestmentResults(input)
console.log(resultsData)
  return (
    <div>
        <p>Results...</p>
    </div>
  )
}
