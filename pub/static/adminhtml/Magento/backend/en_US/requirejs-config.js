(function(require){
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    'waitSeconds': 0,
    'map': {
        '*': {
            'ko': 'knockoutjs/knockout',
            'knockout': 'knockoutjs/knockout',
            'mageUtils': 'mage/utils/main',
            'rjsResolver': 'mage/requirejs/resolver'
        }
    },
    'shim': {
        'jquery/jquery-migrate': ['jquery'],
        'jquery/jstree/jquery.hotkeys': ['jquery'],
        'jquery/hover-intent': ['jquery'],
        'mage/adminhtml/backup': ['prototype'],
        'mage/captcha': ['prototype'],
        'mage/common': ['jquery'],
        'mage/new-gallery': ['jquery'],
        'mage/webapi': ['jquery'],
        'jquery/ui': ['jquery'],
        'MutationObserver': ['es6-collections'],
        'moment': {
            'exports': 'moment'
        },
        'matchMedia': {
            'exports': 'mediaCheck'
        },
        'jquery/jquery-storageapi': {
            'deps': ['jquery/jquery.cookie']
        }
    },
    'paths': {
        'jquery/validate': 'jquery/jquery.validate',
        'jquery/hover-intent': 'jquery/jquery.hoverIntent',
        'jquery/file-uploader': 'jquery/fileUploader/jquery.fileupload-fp',
        'prototype': 'legacy-build.min',
        'jquery/jquery-storageapi': 'jquery/jquery.storageapi.min',
        'text': 'mage/requirejs/text',
        'domReady': 'requirejs/domReady',
        'spectrum': 'jquery/spectrum/spectrum',
        'tinycolor': 'jquery/spectrum/tinycolor'
    },
    'deps': [
        'jquery/jquery-migrate'
    ],
    'config': {
        'mixins': {
            'jquery/jstree/jquery.jstree': {
                'mage/backend/jstree-mixin': true
            },
            'jquery': {
                'jquery/patches/jquery': true
            }
        },
        'text': {
            'headers': {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    }
};

require(['jquery'], function ($) {
    'use strict';

    $.noConflict();
});

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    'shim': {
        'extjs/ext-tree': [
            'prototype'
        ],
        'extjs/ext-tree-checkbox': [
            'extjs/ext-tree',
            'extjs/defaults'
        ],
        'jquery/editableMultiselect/js/jquery.editable': [
            'jquery'
        ]
    },
    'bundles': {
        'js/theme': [
            'globalNavigation',
            'globalSearch',
            'modalPopup',
            'useDefault',
            'loadingPopup',
            'collapsable'
        ]
    },
    'map': {
        '*': {
            'translateInline':      'mage/translate-inline',
            'form':                 'mage/backend/form',
            'button':               'mage/backend/button',
            'accordion':            'mage/accordion',
            'actionLink':           'mage/backend/action-link',
            'validation':           'mage/backend/validation',
            'notification':         'mage/backend/notification',
            'loader':               'mage/loader_old',
            'loaderAjax':           'mage/loader_old',
            'floatingHeader':       'mage/backend/floating-header',
            'suggest':              'mage/backend/suggest',
            'mediabrowser':         'jquery/jstree/jquery.jstree',
            'tabs':                 'mage/backend/tabs',
            'treeSuggest':          'mage/backend/tree-suggest',
            'calendar':             'mage/calendar',
            'dropdown':             'mage/dropdown_old',
            'collapsible':          'mage/collapsible',
            'menu':                 'mage/backend/menu',
            'jstree':               'jquery/jstree/jquery.jstree',
            'details':              'jquery/jquery.details'
        }
    },
    'deps': [
        'js/theme',
        'mage/backend/bootstrap',
        'mage/adminhtml/globals'
    ],
    'paths': {
        'jquery/ui': 'jquery/jquery-ui-1.9.2'
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'mediaUploader':  'Magento_Backend/js/media-uploader'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            eavInputTypes: 'Magento_Eav/js/input-types'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            systemMessageDialog: 'Magento_AdminNotification/system/notification',
            toolbarEntry:   'Magento_AdminNotification/toolbar_entry'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    paths: {
        'customer/template': 'Magento_Customer/templates'
    },
    map: {
        '*': {
            addressTabs:            'Magento_Customer/edit/tab/js/addresses',
            dataItemDeleteButton:   'Magento_Customer/edit/tab/js/addresses',
            observableInputs:       'Magento_Customer/edit/tab/js/addresses'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            popupWindow:            'mage/popup-window',
            confirmRedirect:        'Magento_Security/js/confirm-redirect'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            rolesTree: 'Magento_User/js/roles-tree',
            deleteUserAccount: 'Magento_User/js/delete-user-account'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            folderTree: 'Magento_Cms/js/folder-tree'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            categoryForm:         'Magento_Catalog/catalog/category/form',
            newCategoryDialog:    'Magento_Catalog/js/new-category-dialog',
            categoryTree:         'Magento_Catalog/js/category-tree',
            productGallery:       'Magento_Catalog/js/product-gallery',
            baseImage:            'Magento_Catalog/catalog/base-image-uploader',
            productAttributes:    'Magento_Catalog/catalog/product-attributes',
            categoryCheckboxTree: 'Magento_Catalog/js/category-checkbox-tree'
        }
    },
    deps: [
        'Magento_Catalog/catalog/product'
    ],
    config: {
        mixins: {
            'Magento_Catalog/js/components/use-parent-settings/select': {
                'Magento_Catalog/js/components/use-parent-settings/toggle-disabled-mixin': true
            },
            'Magento_Catalog/js/components/use-parent-settings/textarea': {
                'Magento_Catalog/js/components/use-parent-settings/toggle-disabled-mixin': true
            },
            'Magento_Catalog/js/components/use-parent-settings/single-checkbox': {
                'Magento_Catalog/js/components/use-parent-settings/toggle-disabled-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            integration: 'Magento_Integration/js/integration'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            orderEditDialog: 'Magento_Sales/order/edit/message'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            transparent: 'Magento_Payment/js/transparent'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    shim: {
        'tiny_mce_4/tinymce.min': {
            exports: 'tinyMCE'
        }
    },
    paths: {
        'ui/template': 'Magento_Ui/templates'
    },
    map: {
        '*': {
            uiElement:      'Magento_Ui/js/lib/core/element/element',
            uiCollection:   'Magento_Ui/js/lib/core/collection',
            uiComponent:    'Magento_Ui/js/lib/core/collection',
            uiClass:        'Magento_Ui/js/lib/core/class',
            uiEvents:       'Magento_Ui/js/lib/core/events',
            uiRegistry:     'Magento_Ui/js/lib/registry/registry',
            consoleLogger:  'Magento_Ui/js/lib/logger/console-logger',
            uiLayout:       'Magento_Ui/js/core/renderer/layout',
            buttonAdapter:  'Magento_Ui/js/form/button-adapter',
            tinymce4:       'tiny_mce_4/tinymce.min',
            wysiwygAdapter: 'mage/adminhtml/wysiwyg/tiny_mce/tinymce4Adapter'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            groupedProduct: 'Magento_GroupedProduct/js/grouped-product'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            newVideoDialog:  'Magento_ProductVideo/js/new-video-dialog',
            openVideoModal:  'Magento_ProductVideo/js/video-modal'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            testConnection: 'Magento_AdvancedSearch/js/testconnection'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            swatchesProductAttributes: 'Magento_Swatches/js/product-attributes'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    shim: {
        'Magento_Tinymce3/tiny_mce/tiny_mce_src': {
            'exports': 'tinymce'
        }
    },
    map: {
        '*': {
            'tinymceDeprecated': 'Magento_Tinymce3/tiny_mce/tiny_mce_src'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            fptAttribute: 'Magento_Weee/js/fpt-attribute'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    'paths': {
        'fancybox': 'Dotdigitalgroup_Email/js/node_modules/fancybox/jquery.fancybox.pack'
    },
    'shim': {
        'fancybox': {
            exports: 'fancybox',
            'deps': ['jquery']
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    paths: {
        jscolor: 'Nwdthemes_Base/js/jscolor.min'
    },
    shim: {
        jscolor: {
            exports: 'jscolor'
        }
    }
};
require.config(config);
})();
(function() {
var config = {
    paths: {
        admin:                  'Nwdthemes_Revslider/admin/assets/js/admin.min',
        contextMenu:            'Nwdthemes_Revslider/admin/assets/js/context_menu.min',
        cssEditor:              'Nwdthemes_Revslider/admin/assets/js/css_editor.min',
        editLayers:             'Nwdthemes_Revslider/admin/assets/js/edit_layers.min',
        editLayersTimeline:     'Nwdthemes_Revslider/admin/assets/js/edit_layers_timeline.min',
        revAddonAdmin:          'Nwdthemes_Revslider/admin/assets/js/rev_addon-admin',
        revAdmin:               'Nwdthemes_Revslider/admin/assets/js/rev_admin',
        settings:               'Nwdthemes_Revslider/admin/assets/js/settings.min',
        show_premium_dialog:    'Nwdthemes_Revslider/admin/assets/js/show_premium_dialog.min',
        tipsy:                  'Nwdthemes_Revslider/admin/assets/js/jquery.tipsy',
        rsCodeMirror:           'Nwdthemes_Revslider/admin/assets/js/codemirror/rs_codemirror',
        codemirror:             'Nwdthemes_Revslider/admin/assets/js/codemirror/codemirror',
        cmMatchHighlighter:     'Nwdthemes_Revslider/admin/assets/js/codemirror/util/match-highlighter',
        cmCss:                  'Nwdthemes_Revslider/admin/assets/js/codemirror/css',
        cmXml:                  'Nwdthemes_Revslider/admin/assets/js/codemirror/xml',
        cmSearchCursor:         'Nwdthemes_Revslider/admin/assets/js/codemirror/util/searchcursor',
        perfectScrollbar:       'Nwdthemes_Revslider/framework/js/perfectScrollbar.min',
        colorPicker:            'Nwdthemes_Revslider/framework/js/color-picker.min',
        galleryBrowser:         'Nwdthemes_Revslider/framework/js/browser',
        iris:                   'Nwdthemes_Revslider/framework/js/iris.min',
        loading:                'Nwdthemes_Revslider/framework/js/loading',
        wpUtil:                 'Nwdthemes_Revslider/framework/js/wp-util.min',
        touchSwipe:             'Nwdthemes_Revslider/public/assets/js/tools/TouchSwipe',
        themepunchGS:           'Nwdthemes_Revslider/public/assets/js/tools/themepunch_gs',
        TweenLite:              'Nwdthemes_Revslider/public/assets/js/tools/TweenLite',
        TimelineLite:           'Nwdthemes_Revslider/public/assets/js/tools/TimelineLite',
        EasePack:               'Nwdthemes_Revslider/public/assets/js/tools/easing/EasePack',
        CSSPlugin:              'Nwdthemes_Revslider/public/assets/js/tools/CSSPlugin',
        SplitText:              'Nwdthemes_Revslider/public/assets/js/tools/SplitText',
        waitForImages:          'Nwdthemes_Revslider/public/assets/js/tools/waitForImages',
        themepunchTools:        'Nwdthemes_Revslider/public/assets/js/jquery.themepunch.tools.min',
        themepunchRevolution:   'Nwdthemes_Revslider/public/assets/js/jquery.themepunch.revolution.min',
        tpColorPicker:          'Nwdthemes_Revslider/public/assets/js/tp-color-picker.min',
        'jquery/file-uploader': 'jquery/fileUploader/jquery.fileupload-fp',
        prototype:              'legacy-build.min',
        vimeoPlayer:            'Nwdthemes_Revslider/public/assets/js/vimeo.player.min'
    },
    shim: {
        admin: {
            deps: ['jquery', 'galleryBrowser', 'rev_lang', 'loading', 'themepunchTools', 'settings'],
            exports: 'UniteAdminRev'
        },
        contextMenu: {
            deps: ['jquery', 'themepunchTools'],
            exports: 'tpLayerContextMenu'
        },
        cssEditor: {
            deps: ['jquery', 'rsCodeMirror', 'admin'],
            exports: 'UniteCssEditorRev'
        },
        editLayers: {
            deps: ['jquery', 'tpColorPicker', 'themepunchTools', 'loading', 'wpUtil', 'perfectScrollbar', 'contextMenu', 'admin', 'editLayersTimeline', 'settings', 'cssEditor'],
            exports: 'UniteLayersRev'
        },
        editLayersTimeline: {
            deps: ['jquery', 'themepunchTools', 'settings', 'admin'],
            exports: 'tpLayerTimelinesRev'
        },
        galleryBrowser: {
            deps: ['Magento_Variable/variables']
        },
        revAddonAdmin: {
            deps: ['jquery', 'admin', 'themepunchTools', 'loading', 'rev_slider_addon']
        },
        revAdmin: {
            deps: ['jquery', 'settings', 'admin', 'rsCodeMirror', 'rev_lang', 'loading', 'editLayers', 'editLayersTimeline', 'perfectScrollbar'],
            exports: 'RevSliderAdmin'
        },
        settings: {
            deps: ['jquery', 'tipsy', 'themepunchTools'],
            exports: 'RevSliderSettings'
        },
        show_premium_dialog: {
            deps: ['jquery'],
            exports: 'show_premium_dialog'
        },
        tipsy: {
            deps: ['jquery']
        },
        codemirror: {
            exports: 'CodeMirror'
        },
        cmMatchHighlighter: {
            deps: ['codemirror'],
            exports: 'CodeMirror'
        },
        cmSearchCursor: {
            deps: ['codemirror'],
            exports: 'CodeMirror'
        },
        cmCss: {
            deps: ['codemirror'],
            exports: 'CodeMirror'
        },
        cmXml: {
            deps: ['codemirror'],
            exports: 'CodeMirror'
        },
        rsCodeMirror: {
            deps: ['codemirror'],
            exports: 'CodeMirror'
        },
        perfectScrollbar: {
            deps: ['jquery']
        },
        colorPicker: {
            deps: ['jquery/ui', 'iris']
        },
        iris: {
            deps: ['jquery/ui']
        },
        loading: {
            deps: ['jquery', 'themepunchTools'],
            exports: 'showWaitAMinute'
        },
        wpUtil: {
            deps: ['jquery', 'underscore']
        },
        themepunchTools: {
            deps: ['themepunchGS', 'TweenLite', 'TimelineLite', 'EasePack', 'CSSPlugin', 'SplitText', 'waitForImages', 'touchSwipe', 'perfectScrollbar'],
            exports: 'punchgs'
        },
        themepunchRevolution: {
            deps: ['jquery', 'themepunchTools'],
            exports: 'jQuery'
        },
        tpColorPicker: {
            deps: ['colorPicker']
        }
    }
};
require.config(config);
})();
(function() {
/**
 */

var config = {
    paths: {
        touchPunch: 'Redgiant_Core/js/jquery.ui.touch-punch.min',
        rgDevbridgeAutocomplete: 'Redgiant_Core/js/jquery.autocomplete.min'
    },
    shim: {
        rgDevbridgeAutocomplete: ["jquery"],
        touchPunch: ['jquery', 'jquery/ui']
    }
};

require.config(config);
})();
(function() {
var config = {
    paths: {
        temandoShippingComponentry: 'Temando_Shipping/static/js/main'
    }
};

require.config(config);
})();



})(require);