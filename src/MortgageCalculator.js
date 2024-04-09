import { LitElement, html } from 'lit'
import logo from './assets/mc-logo.png'
import { mortgageStyle } from './MortgageCalculator.style'

export class MortgageCalculator extends LitElement {
  static get styles() {
    return mortgageStyle
  }

  static get properties() {
    return {
      minimumSavingError: { state: true },
      yearsError: { state: true },
      monthlyMortgageCost: { state: true },
      totalMortgageValue: { state: true },
      totalMonthly: { state: true },
      yearsMortgage: { state: true },
      interest: { state: true },
      totalMortgageCost: { state: true },
      totalDwellingCost: { state: true }
    }
  }

  constructor() {
    super()
    this.minimumSavingError = false
    this.yearsError = false
    this.monthlyMortgageCost = 0
    this.totalMortgageValue = 0
    this.totalMonthly = 0
    this.totalMortgageCost = 0
    this.totalDwellingCost = 0

    this.age = 30
    this.monthlyNetIncome = 2000
    this.loansAmount = 0
    this.assetsValue = 0
    this.dwellingValue = 100000
    this.savingsProvided = 20000
    this.yearsMortgage = 25
    this.interest = 3.8
    this.financingPercentage = 85
  }

  connectedCallback() {
    super.connectedCallback()
    this.__handleFormSubmit()
  }

  __formatValues(number) {
    return new Intl.NumberFormat('es-ES', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(number)
  }

  __formatInputNumbers(event) {
    const inputValue = event.target.value
    const formatValue = inputValue.replace(/[^0-9]/g, '')
    const intValue = parseInt(formatValue)
    const isNumber = !isNaN(intValue) && Number.isInteger(intValue)

    if (!isNumber) {
      return formatValue.slice(0, -1)
    } else {
      return formatValue
    }
  }

  __handleAgeInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)
    const intValue = parseInt(stringValueFormated)

    if (intValue > 79) {
      event.target.value = stringValueFormated.slice(0, -1)
      this.age = parseInt(stringValueFormated.slice(0, -1))
    } else if (stringValueFormated.length === 2 && intValue < 18) {
      event.target.value = 18
      this.age = 18
    } else {
      event.target.value = stringValueFormated
      this.age = intValue
    }
  }

  __handleInterestInput(event) {
    this.interest = Number(event.target.value)
  }

  __handleMonthlyNetIncomeInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)
    const intValue = parseInt(stringValueFormated)

    event.target.value = stringValueFormated
    this.monthlyNetIncome = intValue
  }

  __handleLoansAmountInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)
    const intValue = parseInt(stringValueFormated)

    event.target.value = stringValueFormated
    this.loansAmount = intValue
  }

  __handleAssetsValueInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)
    const intValue = parseInt(stringValueFormated)

    event.target.value = stringValueFormated
    this.assetsValue = intValue
  }

  __handleDwellingValueInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)
    const intValue = parseInt(stringValueFormated)

    event.target.value = stringValueFormated
    this.dwellingValue = intValue
  }

  __handleSavingsProvidedInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)
    const intValue = parseInt(stringValueFormated)

    event.target.value = stringValueFormated
    this.savingsProvided = intValue
  }

  __handleYearsMortgageInput(event) {
    this.yearsMortgage = parseInt(event.target.value)
  }

  __handleFormSubmit(event) {
    event && event.preventDefault()

    const totalYears = this.age + this.yearsMortgage
    if (totalYears > 80) {
      this.yearsError = true
      return
    } else {
      this.yearsError = false
    }

    const debtRadio = this.loansAmount / this.monthlyNetIncome
    const monthlyInterest = this.interest / 1200
    this.totalMonthly = this.yearsMortgage * 12

    const totalAssetsValue = this.assetsValue + this.savingsProvided
    const fortyPercentValue = this.dwellingValue * 0.4

    if (debtRadio <= 0.4 && totalAssetsValue > fortyPercentValue) {
      this.totalMortgageValue = Number(
        this.dwellingValue - this.savingsProvided
      )
    } else if (debtRadio <= 0.4) {
      const minimumSaving = this.dwellingValue * 0.15

      if (this.savingsProvided < minimumSaving) {
        this.minimumSavingError = true
        return
      } else {
        this.minimumSavingError = false
      }

      this.totalMortgageValue = Number(
        this.dwellingValue - this.savingsProvided
      )
    }

    const P = this.totalMortgageValue
    const r = monthlyInterest
    const n = this.totalMonthly

    const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)

    this.monthlyMortgageCost = M
    this.financingPercentage =
      (this.totalMortgageValue / this.dwellingValue) * 100
    this.totalMortgageCost = M * this.totalMonthly
    this.totalDwellingCost = this.totalMortgageCost + this.savingsProvided
  }

  render() {
    return html`
      <div class="app-wrapper">
        <header>
          <img src="${logo}" alt="Logo" />
          <h1>Calcula tu hipoteca</h1>
        </header>

        <section class="content-wrapper">
          <form class="form" @submit=${this.__handleFormSubmit}>
            <div class="age data-inputs">
              <label for="age">Edad</label>
              <input
                type="text"
                id="age"
                min="18"
                max="80"
                value="${this.age}"
                required
                @input=${this.__handleAgeInput}
              />
            </div>

            <div class="monthly-net-income data-inputs">
              <label for="monthly-net-income">Ingresos netos mensuales</label>
              <input
                type="text"
                id="monthly-net-income"
                value="${this.monthlyNetIncome}"
                required
                @input=${this.__handleMonthlyNetIncomeInput}
              />
            </div>

            <div class="loans-amount data-inputs">
              <label for="loans-amount">Importe mensual de tus préstamos</label>
              <input
                type="text"
                id="loans-amount"
                value="${this.loansAmount}"
                @input=${this.__handleLoansAmountInput}
              />
            </div>

            <div class="assets-value data-inputs">
              <label for="assets-value">Valor de activos libres de deuda</label>
              <input
                type="text"
                id="assets-value"
                value="${this.assetsValue}"
                @input=${this.__handleAssetsValueInput}
              />
            </div>

            <div class="dwelling-value data-inputs">
              <label for="dwelling-value">Valor de la vivienda</label>
              <input
                type="text"
                id="dwelling-value"
                required
                min="40000"
                max="4000000"
                value="${this.dwellingValue}"
                @input=${this.__handleDwellingValueInput}
              />
            </div>

            <div class="savings-provided data-inputs">
              <label for="savings-provided">Ahorro aportado</label>
              <input
                type="text"
                id="savings-provided"
                value="${this.savingsProvided}"
                @input=${this.__handleSavingsProvidedInput}
              />
              ${this.minimumSavingError
                ? html`<p class="savings-error notification-error">
                    Tus ahorros deben ser superiores al 15% del valor de la
                    vivienda
                  </p>`
                : ''}
            </div>

            <div class="years-mortgage data-inputs">
              <label for="years-mortgage">Años de hipoteca</label>
              <span id="years-mortgage">${this.yearsMortgage} años</span>
              <input
                type="range"
                id="years-mortgage"
                min="5"
                max="40"
                value="25"
                step="1"
                list="tickmarks"
                @input=${this.__handleYearsMortgageInput}
              />
              <datalist id="tickmarks">
                <option value="5" label="0%"></option>
                <option value="10"></option>
                <option value="15"></option>
                <option value="20"></option>
                <option value="25"></option>
                <option value="30"></option>
                <option value="35"></option>
                <option value="40" label="100%"></option>
              </datalist>
              ${this.yearsError
                ? html`<p class="years-error notification-error">
                    Tu edad más los años de hipoteca no pueden superar 80 años
                  </p>`
                : ''}
            </div>

            <div class="interest data-inputs">
              <label for="interest">Interés</label>
              <span id="interest">${this.interest} %</span>
              <input
                type="range"
                id="interest"
                min="0"
                max="8"
                value="${this.interest}"
                step="0.001"
                list="interest-ticks"
                @input=${this.__handleInterestInput}
              />
              <datalist id="interest-ticks">
                <option value="0" label="0%"></option>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
                <option value="6"></option>
                <option value="7"></option>
                <option value="8" label="100%"></option>
              </datalist>
            </div>

            <button @click=${this._onClick} part="button">Calcular</button>
          </form>

          <div class="result-card">
            <div class="monthly-mortage">
              <p>Tu cuota mensual</p>
              <p>${this.__formatValues(this.monthlyMortgageCost)}€/mes</p>
            </div>
            <div class="resume-mortgage">
              <p>Mensualidades: <span>${this.totalMonthly} meses</span></p>
              <p>
                Porcentaje financiación:
                <span>${this.__formatValues(this.financingPercentage)}%</span>
              </p>
              <p>
                Precio del inmueble:
                <span>${this.__formatValues(this.dwellingValue)}€</span>
              </p>
              <p>
                Ahorro aportado:
                <span>${this.__formatValues(this.savingsProvided)}€</span>
              </p>
              <p>
                Importe hipoteca:
                <span>${this.__formatValues(this.totalMortgageValue)}€</span>
              </p>
              <p>
                Interés hipoteca:
                <span>${this.__formatValues(this.interest)}%</span>
              </p>
              <p>
                Coste total hipoteca:
                <span>${this.__formatValues(this.totalMortgageCost)}€</span>
              </p>
            </div>
            <div class="total-cost-mortgage">
              <p>Coste total del inmueble:</p>
              <p>${this.__formatValues(this.totalDwellingCost)}€</p>
            </div>
          </div>
        </section>
      </div>
    `
  }
}

window.customElements.define('mortgage-calculator', MortgageCalculator)
