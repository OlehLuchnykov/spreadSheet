import * as GC from '@grapecity/spread-sheets';
import { Designer } from '@grapecity/spread-sheets-designer-react';
import React from 'react';

const SpreadSheet = () => {
  const designerState = [];

  function getDesigner(designer) {
    const workbook = designer.getWorkbook();
    designerState.push(designer)
    workbook.bind(GC.Spread.Sheets.Events.EnterCell, function () {
      designerState.forEach(item => {
        item._container.classList.remove('active');
      });
      designer._container.classList.add('active');
    });
    if (designerState.length > 0 && designerState.every(item => !item._container.classList.contains('active'))) {
      designerState[0]._container.classList.add('active');
    }
  }
  return (
    <div className={'wrapper'}>
      <Designer styleInfo={{height: '500px'}} designerInitialized={designer => { getDesigner(designer) }}></Designer>
      <Designer styleInfo={{height: '500px'}} designerInitialized={designer => { getDesigner(designer) }}></Designer>
      <Designer styleInfo={{height: '500px'}} designerInitialized={designer => { getDesigner(designer) }}></Designer>
      <Designer styleInfo={{height: '500px'}} designerInitialized={designer => { getDesigner(designer) }}></Designer>
      <Designer styleInfo={{height: '500px'}} designerInitialized={designer => { getDesigner(designer) }}></Designer>
    </div>
  )
}

export default SpreadSheet;
