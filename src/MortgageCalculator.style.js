import { css } from 'lit'

export const mortgageStyle = css`
  @font-face {
    font-family: 'Ubuntu';
    src: url(https://fonts.googleapis.com/css?family=Ubuntu:300);
  }

  :host {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    color: #000;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 3rem;
  }

  h1 {
    will-change: filter;
    transition: filter 300ms;

    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 1.4em;
    line-height: 2;
    font-weight: 500;
    text-rendering: optimizeLegibility;
    text-align: center;
  }

  .card {
    padding: 2em;
  }

  .content-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    padding: 4rem;
    background-color: #1c5468d9;
    border: 0px solid #000000;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
  }

  .form > div > label {
    width: 100%;
    text-align: center;
    font-weight: 600;
  }

  .data-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }

  .data-inputs > label {
    margin-bottom: 0.2rem;
    color: #fff;
  }

  .data-inputs > span {
    color: #fff;
  }

  input {
    border-radius: 5px;
    border: 2px solid #626161;
    padding: 0.3rem;
    width: -webkit-fill-available;
    background-color: #ffffffad;
    color: #000;
    font-weight: bold;
    text-align: center;
    font-size: 0.9rem;
    letter-spacing: 0.07rem;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    background: #ffffffad;
    border-radius: 10px;
    outline: none;
    margin: 0;
    padding: 0;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #1c5468d9;
    border-radius: 50%;
    cursor: pointer;
  }

  input[type='range']::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #1c5468d9;
    border-radius: 50%;
    cursor: pointer;
  }

  .notification-error {
    border: 1px solid red;
    color: red;
    padding: 0.3rem;
    background-color: #fff;
    border-radius: 5px;
    font-weight: bold;
  }

  button {
    border-radius: 8px;
    border: 2px solid #fff;
    margin-top: 1.5rem;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: rgb(19, 206, 66);
    color: #fff;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: rgb(255 255 255);
    background-color: #f0f8fffc;
    color: rgb(19, 206, 66);
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto;
  }

  .result-card {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border: 0px solid #000000;
    background-color: #ffffff61;
    padding: 2rem;
    text-align: left;
    width: 100%;
    min-width: 15rem;
    max-width: 18rem;
  }

  .monthly-mortage {
    text-align: center;
    font-weight: bold;
    border-radius: 8px;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border: 2px solid #26a65e8f;
  }

  .resume-mortgage {
    text-align: center;
    font-weight: bold;
    border-radius: 8px;
    padding: 0.5rem;
    border: 2px solid #02a1bf;
  }

  .resume-mortgage > p {
    display: flex;
    justify-content: space-between;
  }

  .total-cost-mortgage {
    text-align: center;
    font-weight: bold;
    border-radius: 8px;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 2px solid #a626268f;
  }

  @media (min-width: 860px) {
    .content-wrapper {
      gap: 2rem;
    }
  }

  @media (min-width: 1024px) {
    .content-wrapper {
      gap: 5rem;
    }
  }
`
