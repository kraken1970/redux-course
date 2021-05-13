import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchCustomers } from './asyncAction/customers'
import { addCashAction, getCashAction } from './store/cashReducer'
import {
  addCustomerAction,
  removeCustomerAction,
} from './store/customerReducer'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state) => state.cash.cash)
  const customers = useSelector((state) => state.customers.customers)

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now() / 100000,
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className={'app'}>
      <div style={{ fontSize: '3rem', marginBottom: 10 }}>Баланс: {cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счёт
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счёта
        </button>

        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Получить клиентов из базы
        </button>
      </div>

      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              style={{
                fontSize: '2rem',
                border: '1px solid black',
                marginTop: 10,
                padding: 5,
              }}
              key={customer.id}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <span style={{ fontSize: '2rem', marginTop: 20 }}>
          Клиенты отсутствуют!
        </span>
      )}
    </div>
  )
}

export default App
