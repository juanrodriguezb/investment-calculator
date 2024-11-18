import logo from '../assets/investment-calculator-logo.png'

export default function Header({headerLabel}) {
    return (
        <header id="header">
            <img src={logo} alt="calculator logo"/>
            <h1>{headerLabel}</h1>
        </header>
    )
}