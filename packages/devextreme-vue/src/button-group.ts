import { PropType } from "vue";
import ButtonGroup, { Properties } from "devextreme/ui/button_group";
import {  ContentReadyEvent , DisposingEvent , InitializedEvent , ItemClickEvent , OptionChangedEvent , SelectionChangedEvent ,} from "devextreme/ui/button_group";
import { defineComponent } from "vue";
import { prepareComponentConfig } from "./core/index";
import { prepareConfigurationComponentConfig } from "./core/index";

type AccessibleOptions = Pick<Properties,
  "accessKey" |
  "activeStateEnabled" |
  "buttonTemplate" |
  "disabled" |
  "elementAttr" |
  "focusStateEnabled" |
  "height" |
  "hint" |
  "hoverStateEnabled" |
  "items" |
  "keyExpr" |
  "onContentReady" |
  "onDisposing" |
  "onInitialized" |
  "onItemClick" |
  "onOptionChanged" |
  "onSelectionChanged" |
  "rtlEnabled" |
  "selectedItemKeys" |
  "selectedItems" |
  "selectionMode" |
  "stylingMode" |
  "tabIndex" |
  "visible" |
  "width"
>;

interface DxButtonGroup extends AccessibleOptions {
  readonly instance?: ButtonGroup;
}

const componentConfig = {
  props: {
    accessKey: String,
    activeStateEnabled: Boolean,
    buttonTemplate: {},
    disabled: Boolean,
    elementAttr: Object,
    focusStateEnabled: Boolean,
    height: [Function, Number, String] as PropType<(() => (Number | string)) | (Number) | (String)>,
    hint: String,
    hoverStateEnabled: Boolean,
    items: Array as PropType<Object[]>,
    keyExpr: [Function, String] as PropType<(() => void) | (String)>,
    onContentReady: Function as PropType<(e: ContentReadyEvent) => void>,
    onDisposing: Function as PropType<(e: DisposingEvent) => void>,
    onInitialized: Function as PropType<(e: InitializedEvent) => void>,
    onItemClick: Function as PropType<(e: ItemClickEvent) => void>,
    onOptionChanged: Function as PropType<(e: OptionChangedEvent) => void>,
    onSelectionChanged: Function as PropType<(e: SelectionChangedEvent) => void>,
    rtlEnabled: Boolean,
    selectedItemKeys: Array as PropType<any[]>,
    selectedItems: Array as PropType<any[]>,
    selectionMode: String as PropType<"single" | "multiple" | "none">,
    stylingMode: String as PropType<"text" | "outlined" | "contained">,
    tabIndex: Number,
    visible: Boolean,
    width: [Function, Number, String] as PropType<(() => (Number | string)) | (Number) | (String)>
  },
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:buttonTemplate": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:focusStateEnabled": null,
    "update:height": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:items": null,
    "update:keyExpr": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onInitialized": null,
    "update:onItemClick": null,
    "update:onOptionChanged": null,
    "update:onSelectionChanged": null,
    "update:rtlEnabled": null,
    "update:selectedItemKeys": null,
    "update:selectedItems": null,
    "update:selectionMode": null,
    "update:stylingMode": null,
    "update:tabIndex": null,
    "update:visible": null,
    "update:width": null,
  },
  computed: {
    instance(): ButtonGroup {
      return (this as any).$_instance;
    }
  },
  beforeCreate() {
    (this as any).$_WidgetClass = ButtonGroup;
    (this as any).$_hasAsyncTemplate = true;
    (this as any).$_expectedChildren = {
      item: { isCollectionItem: true, optionName: "items" }
    };
  }
};

prepareComponentConfig(componentConfig);

const DxButtonGroup = defineComponent(componentConfig);


const DxItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:hint": null,
    "update:icon": null,
    "update:template": null,
    "update:text": null,
    "update:type": null,
    "update:visible": null,
  },
  props: {
    disabled: Boolean,
    elementAttr: Object,
    hint: String,
    icon: String,
    template: {},
    text: String,
    type: String as PropType<"danger" | "default" | "normal" | "success">,
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxItemConfig);

const DxItem = defineComponent(DxItemConfig);

(DxItem as any).$_optionName = "items";
(DxItem as any).$_isCollectionItem = true;

export default DxButtonGroup;
export {
  DxButtonGroup,
  DxItem
};
import type * as DxButtonGroupTypes from "devextreme/ui/button_group_types";
export { DxButtonGroupTypes };
