import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Buttom from './buttom'
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import {Dropdown, Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from 'i18next';
// Contains the value and text for the options
const languages =[
  {
    code :"en",
    name :"english",
    country_code :"en"
  },
  {
    code :"fa",
    name :"فارسی",
    country_code :"IR"
  }
]
function App() {
  
    // It is a hook imported from 'react-i18next'
    const { t } = useTranslation(); 
    return (
        <div className="App">
          <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Select language
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>i18n.changeLanguage("en")} href="#/action-1">EN</Dropdown.Item>
    <Dropdown.Item  onClick={()=>i18n.changeLanguage("fa")} href="#/action-2">FA</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
   <h2>{t('wlc_to_react')}</h2>
        </div>
    );
}
  
export default App;