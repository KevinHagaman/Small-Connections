import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify'

const initialState = {
  name: '',
  state: '',
  zipcode: '',
  businesstype: '',
}

function App() {
  const [businesses, setBusiness] = useState([])
  const [business, updateBusiness] = useState(initialState)
  async function fetchBusiness() {
    const businesses = await API.get('productapi', '/products')
    setBusiness(businesses.data.Items)
  }
  async function createBusiness() {
    const { name, state, zipcode, businesstype } = business
    if (!name || !state || !zipcode || businesstype) return
    const data = {
      body: { ...business, price: parseInt(business.price) }
    }
    await API.post('businessapi', '/businesses', data)
    console.log('businesssuccessfully created...')
    updateBusiness(initialState)
    fetchBusiness()
  }
  const updateBusinessInput = key => event => {
    updateBusiness({ ...business, [key]: event.target.value })
  }
  useEffect(() => {
    fetchBusiness()
  }, [])
  return (
    <div className="App">
      {
        businesses.map((business, index) => (
          <div key={index}>
            <h3>{business.name}</h3>
            <p>{business.state}</p>
            <h4>${business.zipcode}</h4>
            <p>{business.businesstype}</p>
          </div>
        ))
      }
      <div style={form}>
        <input
          placeholder="Business name"
          value={business.name}
          onChange={updateBusinessInput("name")}
          style={input}
        />
        <input
          placeholder="Business State"
          value={business.state}
          onChange={updateBusinessInput("state")}
          style={input}
        />
        <input
          placeholder="Business zipcode"
          value={business.zipcode}
          onChange={updateBusinessInput("zipcode")}
          style={input}
        />
        <button style={button} onClick={createBusiness}>Create Business</button>
      </div>
    </div>
  );
}

const button = {
  padding: '10px 40px',
  width: 400,
  margin:  '0px auto'
}

const input = {
  padding: 7,
  width: 400,
  margin: '0px auto 6px'
}

const form = {
  display: 'flex', flexDirection: 'column', padding: 60
}

export default App;