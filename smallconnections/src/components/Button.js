import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  background-color: white;
  color: black;
  white-space: nowrap;
  outline: none;
  border: 3px solid black;
  border-radius: 8px;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 7px;
  margin: 4px;
  font-size: 15px;

  &:hover {
      transform: translateY(-2px);
  }
`