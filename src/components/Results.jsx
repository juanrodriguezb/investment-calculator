import {calculateInvestmentResults, formatter} from '../util/investment';

export default function Results({userInput}) {

    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = 
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;
    
    return (
            <table id='result'>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsData.map((data) => {
                        const totalInterestValue = data.valueEndOfYear - (data.annualInvestment * data.year) - initialInvestment;
                        const totalAmountInvested = data.valueEndOfYear - totalInterestValue;

                        return (
                            <tr key={data.year}>
                                <td>{data.year}</td>
                                <td>{formatter.format(data.valueEndOfYear)}</td>
                                <td>{formatter.format(data.interest)}</td>
                                <td>{formatter.format(totalInterestValue)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    )
}