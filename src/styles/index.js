export default (editor, config) => {
  const sm = editor.StyleManager;
  const csm = config.customStyleManager;
  // console.log(sm.getSectors())
  sm.getSectors().reset(csm && csm.length ? csm : [
    {
      name: config.textGeneral,
      open: true,
      buildProps: ['text-align', 'background-color', 'border'],
      properties: [{
        property: 'text-align',
        list: [
            { value: 'left', className: 'fa fa-align-left' },
            { value: 'center', className: 'fa fa-align-center'  },
            { value: 'right', className: 'fa fa-align-right' },
            { value: 'justify', className: 'fa fa-align-justify' },
        ],
      }]
    },
      // {
      //   name: config.textTypography,
      //   open: true,
      //   buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
      //   properties: [{
      //     property: 'text-align',
      //     list: [
      //       { value: 'left', className: 'fa fa-align-left' },
      //       { value: 'center', className: 'fa fa-align-center'  },
      //       { value: 'right', className: 'fa fa-align-right' },
      //       { value: 'justify', className: 'fa fa-align-justify' },
      //     ],
      //   }]
      // },
      // {
      //   name: config.textDecorations,
      //   open: true,
      //   buildProps: [ 'background-color', 'border'],
      // },
      // {
      //   name: config.textExtra,
      //   open: false,
      //   buildProps: ['transition', 'perspective', 'transform'],
      // }
      // {
      //   name: config.textLayout,
      //   open: false,
      //   buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
      // },
      ]);
    }
