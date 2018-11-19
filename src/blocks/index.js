export default (editor, config) => {
  const bm = editor.BlockManager;
  bm.getAll().reset();
  // const toAdd = name => config.blocks.indexOf(name) >= 0;

  // Layouts
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

  bm.add('sect8.4', {
    label: '8*4 Section',
    category: 'Layout',
    attributes: {class:'gjs-fonts gjs-f-b4'},
    content: `<table style="${tableStyleStr}">
      <tr>
        <td style="${cellStyleStr} width: 33.33%"></td>
        <td style="${cellStyleStr} width: 66.66%"></td>
      </tr>
      </table>`,
  });

  bm.add('sect4.8', {
    label: '4*8 Section',
    category: 'Layout',
    attributes: {class:'gjs-fonts gjs-f-b4'},
    content: `<table style="${tableStyleStr}">
      <tr>
        <td style="${cellStyleStr} width: 66.66%"></td>
        <td style="${cellStyleStr} width: 33.33%"></td>
      </tr>
      </table>`,
  });

  bm.add('sect3.9', {
    label: '3*9 Section',
    category: 'Layout',
    attributes: {class:'gjs-fonts gjs-f-b4'},
    content: `<table style="${tableStyleStr}">
      <tr>
        <td style="${cellStyleStr} width: 25%"></td>
        <td style="${cellStyleStr} width: 75%"></td>
      </tr>
      </table>`,
  });

  bm.add('sect9.3', {
    label: '9*3 Section',
    category: 'Layout',
    attributes: {class:'gjs-fonts gjs-f-b4'},
    content: `<table style="${tableStyleStr}">
      <tr>
        <td style="${cellStyleStr} width: 75%"></td>
        <td style="${cellStyleStr} width: 25%"></td>
      </tr>
      </table>`,
  });

  // Layout Elements
  bm.add('text', {
    category: 'Layout Element',
    label: 'Text',
    attributes: {class:'gjs-fonts gjs-f-text'},
    content: {
      type: 'text',
      content: 'Insert your text here',
      style: { padding: '10px' },
      activeOnRender: 1
    },  
  });

  bm.add('text-basic', {
    category: 'Layout Element',
    label: 'Text section',
    attributes: { class: 'gjs-fonts gjs-f-h1p' },
    content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`
  });

  bm.add('quote', {
    label: 'Quote',
    category: 'Layout Element',
    attributes: { class: 'fa fa-quote-right' },
    content: `<blockquote>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit"
      </blockquote>`
  });

  bm.add('image', {
    label: 'Image',
    category: 'Layout Element',
    attributes: {class:'gjs-fonts gjs-f-image'},
    content: {
      type:'image',
      style: {color:'black'},
      activeOnRender: 1
    },
  });
}
