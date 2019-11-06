module.exports = {
    child2parent: {
        // Overlay.Popup inherent from Overlay, add this to generate entire d.ts files
        'Overlay.Popup': 'Overlay',
        Dropdown: 'Overlay.Popup',
        'Form.Submit': 'Button',
        'Form.Reset': 'Button',
        Nav: 'Menu',
        'Nav.Group': 'Menu.Group',
        'Nav.Item': 'Menu.Item',
        'Nav.PopupItem': 'Menu.PopupItem',
        'Nav.SubMenu': 'Menu.SubMenu',
        Search: 'Select.AutoComplete',
        'Upload.Card': 'Upload',
        'Upload.Drager': 'Upload',
    },
    components: [
        'divider',
        'affix',
        'animate',
        'badge',
        'balloon',
        'breadcrumb',
        'button',
        'calendar',
        'card',
        'cascader',
        'cascader-select',
        'checkbox',
        'collapse',
        'config-provider',
        'core',
        'date-picker',
        'dialog',
        'drawer',
        'dropdown',
        'field',
        'form',
        'grid',
        'icon',
        'input',
        'loading',
        'locale',
        'menu',
        'menu-button',
        'message',
        'mixin-ui-state',
        'nav',
        'number-picker',
        'overlay',
        'pagination',
        'paragraph',
        'progress',
        'radio',
        'range',
        'rating',
        'search',
        'select',
        'slider',
        'split-button',
        'step',
        'switch',
        'tab',
        'table',
        'tag',
        'time-picker',
        'timeline',
        'transfer',
        'tree',
        'tree-select',
        'util',
        'upload',
        'validate',
        'virtual-list',
        'shell',
        'notification',
        'typography',
    ],
};
