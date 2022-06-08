import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Buttom from './buttom'
  
// Contains the value and text for the options

function App() {
  
    // It is a hook imported from 'react-i18next'
    const { t } = useTranslation(); 
    return (
        <div className="App">
          <Buttom />
   <h2>{t('wlc_to_react')}</h2>
        </div>
    );
}
  
export default App;