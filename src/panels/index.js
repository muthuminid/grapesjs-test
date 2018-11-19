import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear
} from './../consts';

export default (editor, config) => {
  const pn = editor.Panels;
  const eConfig = editor.getConfig();
  const crc = 'create-comp';
  const mvc = 'move-comp';
  const swv = 'sw-visibility';
  const expt = 'export-template';
  const osm = 'open-sm';
  const otm = 'open-tm';
  const ola = 'open-layers';
  const obl = 'open-blocks';
  const ful = 'fullscreen';
  const prv = 'preview';
  const titleAttr = 'title';
  const tooltipPosAttr = 'data-tooltip-pos';

  // Remove devices configuration
  eConfig.showDevices = 0;

  pn.getPanels().reset([{
    id: 'commands',
    labels: [{
      id: 'title',
      // className: 'fa fa-square-o',
      label: 'Template Example'
    }]
  },{
    id: 'options',
    buttons: [
      {
        id: swv,
        command: swv,
        context: swv,
        className: 'fa fa-square-o',
        attributes: {[titleAttr]: 'Show borders'}
      },
      {
        id: prv,
        context: prv,
        command: e => e.runCommand(prv),
        className: 'fa fa-eye',
        attributes: {[titleAttr]: 'Preview'}
      },
      {
        id: ful,
        command: ful,
        context: ful,
        className: 'fa fa-arrows-alt',
        attributes: {[titleAttr]: 'Full screen'}
      },
      {
        id: expt,
        className: 'fa fa-code',
        command: e => e.runCommand(expt),
        attributes: {[titleAttr]: 'View code'}
      },
      {
        id: 'undo',
        className: 'fa fa-undo',
        command: e => e.runCommand('core:undo'),
        attributes: {[titleAttr]: 'Undo'}
      },
      {
        id: 'redo',
        className: 'fa fa-repeat',
        command: e => e.runCommand('core:redo'),
        attributes: {[titleAttr]: 'Redo'}
      },
      {
        id: cmdClear,
        className: 'fa fa-trash',
        command: e => e.runCommand(cmdClear),
        attributes: {[titleAttr]: 'Delete'}
      },
      {
        id: 'saveTemplate',
        className: 'saveTmp',
        label: 'Save Template',
        command: 'saveTemplate'
      }
    // {
    //   id: cmdImport,
    //   className: 'fa fa-download',
    //   command: e => e.runCommand(cmdImport),
    // },
    ],
  },{
    id: 'views',
    buttons  : [
      {
        id: obl,
        command: obl,
        className: 'fa fa-th-large viewsBtn blocksBtn'
      },
      {
        id: ola,
        command: ola,
        className: 'fa fa-bars viewsBtn tokensBtn'
      },
      {
      id: osm,
      command: osm,
      active: true,
      className: 'fa fa-paint-brush viewsBtn styleBtn'
      }
    ],
  }]);

  const openBl = pn.getButton('views', obl);
  editor.on('load', () => openBl && openBl.set('active', 1));

  // On component change show the Style Manager
  config.showStylesOnChange && editor.on('component:selected', () => {
    const openSmBtn = pn.getButton('views', osm);
    const openLayersBtn = pn.getButton('views', ola);

    // Don't switch when the Layer Manager is on or
    // there is no selected component
    if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
      openSmBtn && openSmBtn.set('active', 1);
    }
  });

  // Update tooltip
  let toolTip = (coll) => {
    // console.log(coll);
    coll.each((item) => {
      var attr = item.get('attributes');
      attr[tooltipPosAttr] = 'bottom';
      item.set('attributes', attr);
    });
  }
  // Add tooltip show
  let viewPanel = pn.getPanel('options');
  toolTip(viewPanel.get('buttons'));

}
