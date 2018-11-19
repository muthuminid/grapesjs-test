import openImport from './openImport';
import {
  cmdImport,
  cmdClear
} from './../consts';

export default (editor, config) => {
  const cm = editor.Commands;
  const txtConfirm = config.textCleanCanvas;

  cm.add(cmdImport, openImport(editor, config));
  cm.add(cmdClear, e => confirm(txtConfirm) && e.runCommand('core:canvas-clear'));

  // save template command
  cm.add('saveTemplate', {
    run: (editor, saveBtn) => {
      console.log('save');
      saveBtn.set('active', false)
    }
  });

  var rte = editor.RichTextEditor;
  let s = rte.getAll();

  rte.add('fontName', {
    icon: `<select class="gjs-field">
          <option>Arial</option>
          <option>Helvetica</option>
          <option>Courier</option>
          <option>Comic Sans MS</option>
          <option>Impact</option>
          <option>Tahoma</option>
          <option>Georgia</option>
        </select>`,
    event: 'change',
    result: (rte, action) => rte.exec('fontName', action.btn.firstChild.value),
    update: (rte, action) => {
      const value = rte.doc.queryCommandValue(action.name);
      if (value != 'false') {
        action.btn.firstChild.value = value;
      }
    }
  });

  rte.add('fontSize', {
    icon: `<select class="gjs-field">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </select>`,
    event: 'change',
    result: (rte, action) => rte.exec('fontSize', action.btn.firstChild.value),
    update: (rte, action) => {
      const value = rte.doc.queryCommandValue(action.name);
      if (value != 'false') {
        action.btn.firstChild.value = value;
      }
    }
  });

  rte.add('justifyCenter', {
    icon: `<i class="fa fa-align-center"></i>`,
    event: 'click',
    result: rte => rte.exec('justifyCenter')
  });

  rte.add('justifyLeft', {
    icon: `<i class="fa fa-align-left"></i>`,
    event: 'click',
    result: rte => rte.exec('justifyLeft')
  });

  rte.add('justifyRight', {
    icon: `<i class="fa fa-align-right"></i>`,
    event: 'click',
    result: rte => rte.exec('justifyRight')
  });

  rte.add('indent', {
    icon: `<i class="fa fa-indent"></i>`,
    event: 'click',
    result: (rte, action) => rte.exec('indent', action.btn.firstChild.value),
    update: (rte, action) => {
      const value = rte.doc.queryCommandValue(action.name);
      if (value != 'false') { // value is a string
        action.btn.firstChild.value = value;
      }
    }
  });

  rte.add('outdent', {
    icon: `<i class="fa fa-outdent"></i>`,
    event: 'click',
    result: (rte, action) => rte.exec('outdent', action.btn.firstChild.value),
    update: (rte, action) => {
      const value = rte.doc.queryCommandValue(action.name);
      if (value != 'false') {
        action.btn.firstChild.value = value;
      }
    }
  });

  rte.add('insertUnorderedList', {
    icon: `<i class="fa fa-list-ul"></i>`,
    event: 'click',
    result: (rte) => rte.exec('insertUnorderedList'),
  });

  rte.add('insertOrderedList', {
    icon: `<i class="fa fa-list-ol"></i>`,
    event: 'click',
    result: (rte) => rte.exec('insertOrderedList'),
  });

  rte.add('foreColor', {
    icon: `<i class="fa fa-fill-drip"></i>`,
    event: 'click',
    result: (rte) => rte.exec('foreColor', "#993300")
  });

  // rte.add('bold', {
  //   icon: '<b>B</b>',
  //   attributes: {title: 'Bold',},
  //   result: rte => rte.exec('bold')
  // });
  // rte.add('link', {
  //   icon: document.getElementById('t'),
  //   attributes: {title: 'Link',},
  //   // Example on it's easy to wrap a selected content
  //   result: rte => rte.insertHTML(`<a href="#">${rte.selection()}</a>`)
  // });
}
