import React, { useState } from 'react'
import './App.css'
import { Tab } from './components/Tab';

const tabItems = [
  {
    id: 1,
    title: 'Tab 01',
    content: 'Tab 01 ativa',
  },
  {
    id: 2,
    title: 'Tab 02',
    content: 'Tab 02 ativa',
  },
  {
    id: 3,
    title: 'Tab 03',
    content: 'Tab 03 ativa',
  },
];

export default function App() {
  const [active, setActive] = useState(0);

  return (
    <div className="container">
      <div className="tabs">
        {tabItems.map(({ id, title }) => (
        <Tab
          key={title}
          title={title}
          onItemClicked={() => setActive(id)}
          isActive={active === id}
        />
        ))}
      </div>
      <div className="content">
        {tabItems.map(({ id, content }) => {
          return active === id ? content : ''
        })}
      </div>
    </div>
  )
}