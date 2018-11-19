export default() => {
  let tableStyleStr = '';
  let cellStyleStr = '';
  let cellStyle = {
    padding: 0,
    margin: 0,
    'vertical-align': 'top',
  };
  let tableStyle = {
    height: '150px',
    margin: '0 auto 10px auto',
    padding: '5px 5px 5px 5px',
    width: '100%'
  };
  for (let prop in tableStyle){
    tableStyleStr += `${prop}: ${tableStyle[prop]}; `;
  }
  for (let prop in cellStyle){
    cellStyleStr += `${prop}: ${cellStyle[prop]}; `;
  }
  bm.add('sect100', {
    label: '1 Section',
    category: 'Layout',
    attributes: {class:'gjs-fonts gjs-f-b1'},
    content: `<table style="${tableStyleStr}">
      <tr>
        <td style="${cellStyleStr}"></td>
      </tr>
      </table>`,
  });

  bm.add('sect50', {
    label: '2 Section',
    category: 'Layout',
    attributes: {class:'gjs-fonts gjs-f-b2'},
    content: `<table style="${tableStyleStr}">
      <tr>
        <td style="${cellStyleStr} width: 50%"></td>
        <td style="${cellStyleStr} width: 50%"></td>
      </tr>
      </table>`,
  });

  bm.add('sect30', {
    label: '3 Section',
    category: 'Layout',
    attributes: {class:'gjs-fonts gjs-f-b3'},
    content: `<table style="${tableStyleStr}">
      <tr>
        <td style="${cellStyleStr} width: 33.333%"></td>
        <td style="${cellStyleStr} width: 33.333%"></td>
        <td style="${cellStyleStr} width: 33.333%"></td>
      </tr>
      </table>`,
  });

  bm.add('sect25', {
    label: '4 Section',
    category: 'Layout',
    attributes: {class:'gjs-fonts gjs-f-b4'},
    content: `<table style="${tableStyleStr}">
      <tr>
        <td style="${cellStyleStr} width: 25%"></td>
        <td style="${cellStyleStr} width: 25%"></td>
        <td style="${cellStyleStr} width: 25%"></td>
        <td style="${cellStyleStr} width: 25%"></td>
      </tr>
      </table>`,
  });
}