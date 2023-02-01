import React from 'react';
import "@grapecity/spread-sheets-print";
import "@grapecity/spread-sheets-shapes";
import "@grapecity/spread-sheets-slicers";
import "@grapecity/spread-sheets-pivot-addon";
import "@grapecity/spread-sheets-tablesheet";
import "@grapecity/spread-sheets-io";
import '@grapecity/spread-sheets-designer-resources-en';
import '@grapecity/spread-sheets-designer';
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css"
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css"
import "./custom.css"
import SpreadSheet from './components/SpreadSheet';

function App() {
  return (
    <SpreadSheet />
  );
}

export default App;
