import { PropType } from "vue";
import Form, { Properties } from "devextreme/ui/form";
import {  ContentReadyEvent , DisposingEvent , EditorEnterKeyEvent , FieldDataChangedEvent , InitializedEvent , OptionChangedEvent ,} from "devextreme/ui/form";
import { defineComponent } from "vue";
import { prepareComponentConfig } from "./core/index";
import { prepareConfigurationComponentConfig } from "./core/index";
import { 
 ClickEvent  as ButtonOptionsClickEvent,
 ContentReadyEvent  as ButtonOptionsContentReadyEvent,
 DisposingEvent  as ButtonOptionsDisposingEvent,
 InitializedEvent  as ButtonOptionsInitializedEvent,
 OptionChangedEvent  as ButtonOptionsOptionChangedEvent,
} from "devextreme/ui/button";
import { 
 ContentReadyEvent  as TabPanelOptionsContentReadyEvent,
 DisposingEvent  as TabPanelOptionsDisposingEvent,
 InitializedEvent  as TabPanelOptionsInitializedEvent,
 ItemClickEvent  as TabPanelOptionsItemClickEvent,
 ItemContextMenuEvent  as TabPanelOptionsItemContextMenuEvent,
 ItemHoldEvent  as TabPanelOptionsItemHoldEvent,
 ItemRenderedEvent  as TabPanelOptionsItemRenderedEvent,
 OptionChangedEvent  as TabPanelOptionsOptionChangedEvent,
 SelectionChangedEvent  as TabPanelOptionsSelectionChangedEvent,
 SelectionChangingEvent  as TabPanelOptionsSelectionChangingEvent,
 TitleClickEvent  as TabPanelOptionsTitleClickEvent,
 TitleHoldEvent  as TabPanelOptionsTitleHoldEvent,
 TitleRenderedEvent  as TabPanelOptionsTitleRenderedEvent,
} from "devextreme/ui/tab_panel";

type AccessibleOptions = Pick<Properties,
  "accessKey" |
  "activeStateEnabled" |
  "alignItemLabels" |
  "alignItemLabelsInAllGroups" |
  "colCount" |
  "colCountByScreen" |
  "customizeItem" |
  "disabled" |
  "elementAttr" |
  "focusStateEnabled" |
  "formData" |
  "height" |
  "hint" |
  "hoverStateEnabled" |
  "isDirty" |
  "items" |
  "labelLocation" |
  "labelMode" |
  "minColWidth" |
  "onContentReady" |
  "onDisposing" |
  "onEditorEnterKey" |
  "onFieldDataChanged" |
  "onInitialized" |
  "onOptionChanged" |
  "optionalMark" |
  "readOnly" |
  "requiredMark" |
  "requiredMessage" |
  "rtlEnabled" |
  "screenByWidth" |
  "scrollingEnabled" |
  "showColonAfterLabel" |
  "showOptionalMark" |
  "showRequiredMark" |
  "showValidationSummary" |
  "tabIndex" |
  "validationGroup" |
  "visible" |
  "width"
>;

interface DxForm extends AccessibleOptions {
  readonly instance?: Form;
}

const componentConfig = {
  props: {
    accessKey: String,
    activeStateEnabled: Boolean,
    alignItemLabels: Boolean,
    alignItemLabelsInAllGroups: Boolean,
    colCount: [Number, String] as PropType<number | "auto">,
    colCountByScreen: Object,
    customizeItem: Function as PropType<(item: Object | Object | Object | Object | Object) => void>,
    disabled: Boolean,
    elementAttr: Object,
    focusStateEnabled: Boolean,
    formData: {},
    height: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    hint: String,
    hoverStateEnabled: Boolean,
    isDirty: Boolean,
    items: Array as PropType<Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object>>,
    labelLocation: String as PropType<"left" | "right" | "top">,
    labelMode: String as PropType<"static" | "floating" | "hidden" | "outside">,
    minColWidth: Number,
    onContentReady: Function as PropType<(e: ContentReadyEvent) => void>,
    onDisposing: Function as PropType<(e: DisposingEvent) => void>,
    onEditorEnterKey: Function as PropType<(e: EditorEnterKeyEvent) => void>,
    onFieldDataChanged: Function as PropType<(e: FieldDataChangedEvent) => void>,
    onInitialized: Function as PropType<(e: InitializedEvent) => void>,
    onOptionChanged: Function as PropType<(e: OptionChangedEvent) => void>,
    optionalMark: String,
    readOnly: Boolean,
    requiredMark: String,
    requiredMessage: String,
    rtlEnabled: Boolean,
    screenByWidth: Function as PropType<() => void>,
    scrollingEnabled: Boolean,
    showColonAfterLabel: Boolean,
    showOptionalMark: Boolean,
    showRequiredMark: Boolean,
    showValidationSummary: Boolean,
    tabIndex: Number,
    validationGroup: String,
    visible: Boolean,
    width: [Function, Number, String] as PropType<(() => (number | string)) | number | string>
  },
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:alignItemLabels": null,
    "update:alignItemLabelsInAllGroups": null,
    "update:colCount": null,
    "update:colCountByScreen": null,
    "update:customizeItem": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:focusStateEnabled": null,
    "update:formData": null,
    "update:height": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:isDirty": null,
    "update:items": null,
    "update:labelLocation": null,
    "update:labelMode": null,
    "update:minColWidth": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onEditorEnterKey": null,
    "update:onFieldDataChanged": null,
    "update:onInitialized": null,
    "update:onOptionChanged": null,
    "update:optionalMark": null,
    "update:readOnly": null,
    "update:requiredMark": null,
    "update:requiredMessage": null,
    "update:rtlEnabled": null,
    "update:screenByWidth": null,
    "update:scrollingEnabled": null,
    "update:showColonAfterLabel": null,
    "update:showOptionalMark": null,
    "update:showRequiredMark": null,
    "update:showValidationSummary": null,
    "update:tabIndex": null,
    "update:validationGroup": null,
    "update:visible": null,
    "update:width": null,
  },
  computed: {
    instance(): Form {
      return (this as any).$_instance;
    }
  },
  beforeCreate() {
    (this as any).$_WidgetClass = Form;
    (this as any).$_hasAsyncTemplate = true;
    (this as any).$_expectedChildren = {
      ButtonItem: { isCollectionItem: true, optionName: "items" },
      colCountByScreen: { isCollectionItem: false, optionName: "colCountByScreen" },
      EmptyItem: { isCollectionItem: true, optionName: "items" },
      GroupItem: { isCollectionItem: true, optionName: "items" },
      item: { isCollectionItem: true, optionName: "items" },
      SimpleItem: { isCollectionItem: true, optionName: "items" },
      TabbedItem: { isCollectionItem: true, optionName: "items" }
    };
  }
};

prepareComponentConfig(componentConfig);

const DxForm = defineComponent(componentConfig);


const DxAsyncRuleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:ignoreEmptyValue": null,
    "update:message": null,
    "update:reevaluate": null,
    "update:type": null,
    "update:validationCallback": null,
  },
  props: {
    ignoreEmptyValue: Boolean,
    message: String,
    reevaluate: Boolean,
    type: String as PropType<"required" | "numeric" | "range" | "stringLength" | "custom" | "compare" | "pattern" | "email" | "async">,
    validationCallback: Function as PropType<(options: Object) => any>
  }
};

prepareConfigurationComponentConfig(DxAsyncRuleConfig);

const DxAsyncRule = defineComponent(DxAsyncRuleConfig);

(DxAsyncRule as any).$_optionName = "validationRules";
(DxAsyncRule as any).$_isCollectionItem = true;
(DxAsyncRule as any).$_predefinedProps = {
  type: "async"
};

const DxButtonItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:buttonOptions": null,
    "update:colSpan": null,
    "update:cssClass": null,
    "update:horizontalAlignment": null,
    "update:itemType": null,
    "update:name": null,
    "update:verticalAlignment": null,
    "update:visible": null,
    "update:visibleIndex": null,
  },
  props: {
    buttonOptions: Object,
    colSpan: Number,
    cssClass: String,
    horizontalAlignment: String as PropType<"center" | "left" | "right">,
    itemType: String as PropType<"empty" | "group" | "simple" | "tabbed" | "button">,
    name: String,
    verticalAlignment: String as PropType<"bottom" | "center" | "top">,
    visible: Boolean,
    visibleIndex: Number
  }
};

prepareConfigurationComponentConfig(DxButtonItemConfig);

const DxButtonItem = defineComponent(DxButtonItemConfig);

(DxButtonItem as any).$_optionName = "items";
(DxButtonItem as any).$_isCollectionItem = true;
(DxButtonItem as any).$_predefinedProps = {
  itemType: "button"
};
(DxButtonItem as any).$_expectedChildren = {
  buttonOptions: { isCollectionItem: false, optionName: "buttonOptions" }
};

const DxButtonOptionsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:bindingOptions": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:focusStateEnabled": null,
    "update:height": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:icon": null,
    "update:onClick": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onInitialized": null,
    "update:onOptionChanged": null,
    "update:rtlEnabled": null,
    "update:stylingMode": null,
    "update:tabIndex": null,
    "update:template": null,
    "update:text": null,
    "update:type": null,
    "update:useSubmitBehavior": null,
    "update:validationGroup": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    accessKey: String,
    activeStateEnabled: Boolean,
    bindingOptions: Object,
    disabled: Boolean,
    elementAttr: Object,
    focusStateEnabled: Boolean,
    height: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    hint: String,
    hoverStateEnabled: Boolean,
    icon: String,
    onClick: Function as PropType<(e: ButtonOptionsClickEvent) => void>,
    onContentReady: Function as PropType<(e: ButtonOptionsContentReadyEvent) => void>,
    onDisposing: Function as PropType<(e: ButtonOptionsDisposingEvent) => void>,
    onInitialized: Function as PropType<(e: ButtonOptionsInitializedEvent) => void>,
    onOptionChanged: Function as PropType<(e: ButtonOptionsOptionChangedEvent) => void>,
    rtlEnabled: Boolean,
    stylingMode: String as PropType<"text" | "outlined" | "contained">,
    tabIndex: Number,
    template: {},
    text: String,
    type: String as PropType<"danger" | "default" | "normal" | "success">,
    useSubmitBehavior: Boolean,
    validationGroup: String,
    visible: Boolean,
    width: [Function, Number, String] as PropType<(() => (number | string)) | number | string>
  }
};

prepareConfigurationComponentConfig(DxButtonOptionsConfig);

const DxButtonOptions = defineComponent(DxButtonOptionsConfig);

(DxButtonOptions as any).$_optionName = "buttonOptions";

const DxColCountByScreenConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:lg": null,
    "update:md": null,
    "update:sm": null,
    "update:xs": null,
  },
  props: {
    lg: Number,
    md: Number,
    sm: Number,
    xs: Number
  }
};

prepareConfigurationComponentConfig(DxColCountByScreenConfig);

const DxColCountByScreen = defineComponent(DxColCountByScreenConfig);

(DxColCountByScreen as any).$_optionName = "colCountByScreen";

const DxCompareRuleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:comparisonTarget": null,
    "update:comparisonType": null,
    "update:ignoreEmptyValue": null,
    "update:message": null,
    "update:type": null,
  },
  props: {
    comparisonTarget: Function as PropType<() => any>,
    comparisonType: String as PropType<"!=" | "!==" | "<" | "<=" | "==" | "===" | ">" | ">=">,
    ignoreEmptyValue: Boolean,
    message: String,
    type: String as PropType<"required" | "numeric" | "range" | "stringLength" | "custom" | "compare" | "pattern" | "email" | "async">
  }
};

prepareConfigurationComponentConfig(DxCompareRuleConfig);

const DxCompareRule = defineComponent(DxCompareRuleConfig);

(DxCompareRule as any).$_optionName = "validationRules";
(DxCompareRule as any).$_isCollectionItem = true;
(DxCompareRule as any).$_predefinedProps = {
  type: "compare"
};

const DxCustomRuleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:ignoreEmptyValue": null,
    "update:message": null,
    "update:reevaluate": null,
    "update:type": null,
    "update:validationCallback": null,
  },
  props: {
    ignoreEmptyValue: Boolean,
    message: String,
    reevaluate: Boolean,
    type: String as PropType<"required" | "numeric" | "range" | "stringLength" | "custom" | "compare" | "pattern" | "email" | "async">,
    validationCallback: Function as PropType<(options: Object) => Boolean>
  }
};

prepareConfigurationComponentConfig(DxCustomRuleConfig);

const DxCustomRule = defineComponent(DxCustomRuleConfig);

(DxCustomRule as any).$_optionName = "validationRules";
(DxCustomRule as any).$_isCollectionItem = true;
(DxCustomRule as any).$_predefinedProps = {
  type: "custom"
};

const DxEmailRuleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:ignoreEmptyValue": null,
    "update:message": null,
    "update:type": null,
  },
  props: {
    ignoreEmptyValue: Boolean,
    message: String,
    type: String as PropType<"required" | "numeric" | "range" | "stringLength" | "custom" | "compare" | "pattern" | "email" | "async">
  }
};

prepareConfigurationComponentConfig(DxEmailRuleConfig);

const DxEmailRule = defineComponent(DxEmailRuleConfig);

(DxEmailRule as any).$_optionName = "validationRules";
(DxEmailRule as any).$_isCollectionItem = true;
(DxEmailRule as any).$_predefinedProps = {
  type: "email"
};

const DxEmptyItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:colSpan": null,
    "update:cssClass": null,
    "update:itemType": null,
    "update:name": null,
    "update:visible": null,
    "update:visibleIndex": null,
  },
  props: {
    colSpan: Number,
    cssClass: String,
    itemType: String as PropType<"empty" | "group" | "simple" | "tabbed" | "button">,
    name: String,
    visible: Boolean,
    visibleIndex: Number
  }
};

prepareConfigurationComponentConfig(DxEmptyItemConfig);

const DxEmptyItem = defineComponent(DxEmptyItemConfig);

(DxEmptyItem as any).$_optionName = "items";
(DxEmptyItem as any).$_isCollectionItem = true;
(DxEmptyItem as any).$_predefinedProps = {
  itemType: "empty"
};

const DxGroupItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:alignItemLabels": null,
    "update:caption": null,
    "update:captionTemplate": null,
    "update:colCount": null,
    "update:colCountByScreen": null,
    "update:colSpan": null,
    "update:cssClass": null,
    "update:items": null,
    "update:itemType": null,
    "update:name": null,
    "update:template": null,
    "update:visible": null,
    "update:visibleIndex": null,
  },
  props: {
    alignItemLabels: Boolean,
    caption: String,
    captionTemplate: {},
    colCount: Number,
    colCountByScreen: Object,
    colSpan: Number,
    cssClass: String,
    items: Array as PropType<Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object>>,
    itemType: String as PropType<"empty" | "group" | "simple" | "tabbed" | "button">,
    name: String,
    template: {},
    visible: Boolean,
    visibleIndex: Number
  }
};

prepareConfigurationComponentConfig(DxGroupItemConfig);

const DxGroupItem = defineComponent(DxGroupItemConfig);

(DxGroupItem as any).$_optionName = "items";
(DxGroupItem as any).$_isCollectionItem = true;
(DxGroupItem as any).$_predefinedProps = {
  itemType: "group"
};
(DxGroupItem as any).$_expectedChildren = {
  colCountByScreen: { isCollectionItem: false, optionName: "colCountByScreen" }
};

const DxItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:alignItemLabels": null,
    "update:badge": null,
    "update:buttonOptions": null,
    "update:caption": null,
    "update:captionTemplate": null,
    "update:colCount": null,
    "update:colCountByScreen": null,
    "update:colSpan": null,
    "update:cssClass": null,
    "update:dataField": null,
    "update:disabled": null,
    "update:editorOptions": null,
    "update:editorType": null,
    "update:helpText": null,
    "update:horizontalAlignment": null,
    "update:html": null,
    "update:icon": null,
    "update:isRequired": null,
    "update:items": null,
    "update:itemType": null,
    "update:label": null,
    "update:name": null,
    "update:tabPanelOptions": null,
    "update:tabs": null,
    "update:tabTemplate": null,
    "update:template": null,
    "update:text": null,
    "update:title": null,
    "update:validationRules": null,
    "update:verticalAlignment": null,
    "update:visible": null,
    "update:visibleIndex": null,
  },
  props: {
    alignItemLabels: Boolean,
    badge: String,
    buttonOptions: Object,
    caption: String,
    captionTemplate: {},
    colCount: Number,
    colCountByScreen: Object,
    colSpan: Number,
    cssClass: String,
    dataField: String,
    disabled: Boolean,
    editorOptions: {},
    editorType: String as PropType<"dxAutocomplete" | "dxCalendar" | "dxCheckBox" | "dxColorBox" | "dxDateBox" | "dxDateRangeBox" | "dxDropDownBox" | "dxHtmlEditor" | "dxLookup" | "dxNumberBox" | "dxRadioGroup" | "dxRangeSlider" | "dxSelectBox" | "dxSlider" | "dxSwitch" | "dxTagBox" | "dxTextArea" | "dxTextBox">,
    helpText: String,
    horizontalAlignment: String as PropType<"center" | "left" | "right">,
    html: String,
    icon: String,
    isRequired: Boolean,
    items: Array as PropType<Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object>>,
    itemType: String as PropType<"empty" | "group" | "simple" | "tabbed" | "button">,
    label: Object,
    name: String,
    tabPanelOptions: Object,
    tabs: Array as PropType<Array<Object>>,
    tabTemplate: {},
    template: {},
    text: String,
    title: String,
    validationRules: Array as PropType<Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object>>,
    verticalAlignment: String as PropType<"bottom" | "center" | "top">,
    visible: Boolean,
    visibleIndex: Number
  }
};

prepareConfigurationComponentConfig(DxItemConfig);

const DxItem = defineComponent(DxItemConfig);

(DxItem as any).$_optionName = "items";
(DxItem as any).$_isCollectionItem = true;

const DxLabelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:alignment": null,
    "update:location": null,
    "update:showColon": null,
    "update:template": null,
    "update:text": null,
    "update:visible": null,
  },
  props: {
    alignment: String as PropType<"center" | "left" | "right">,
    location: String as PropType<"left" | "right" | "top">,
    showColon: Boolean,
    template: {},
    text: String,
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxLabelConfig);

const DxLabel = defineComponent(DxLabelConfig);

(DxLabel as any).$_optionName = "label";

const DxNumericRuleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:ignoreEmptyValue": null,
    "update:message": null,
    "update:type": null,
  },
  props: {
    ignoreEmptyValue: Boolean,
    message: String,
    type: String as PropType<"required" | "numeric" | "range" | "stringLength" | "custom" | "compare" | "pattern" | "email" | "async">
  }
};

prepareConfigurationComponentConfig(DxNumericRuleConfig);

const DxNumericRule = defineComponent(DxNumericRuleConfig);

(DxNumericRule as any).$_optionName = "validationRules";
(DxNumericRule as any).$_isCollectionItem = true;
(DxNumericRule as any).$_predefinedProps = {
  type: "numeric"
};

const DxPatternRuleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:ignoreEmptyValue": null,
    "update:message": null,
    "update:pattern": null,
    "update:type": null,
  },
  props: {
    ignoreEmptyValue: Boolean,
    message: String,
    pattern: [RegExp, String],
    type: String as PropType<"required" | "numeric" | "range" | "stringLength" | "custom" | "compare" | "pattern" | "email" | "async">
  }
};

prepareConfigurationComponentConfig(DxPatternRuleConfig);

const DxPatternRule = defineComponent(DxPatternRuleConfig);

(DxPatternRule as any).$_optionName = "validationRules";
(DxPatternRule as any).$_isCollectionItem = true;
(DxPatternRule as any).$_predefinedProps = {
  type: "pattern"
};

const DxRangeRuleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:ignoreEmptyValue": null,
    "update:max": null,
    "update:message": null,
    "update:min": null,
    "update:reevaluate": null,
    "update:type": null,
  },
  props: {
    ignoreEmptyValue: Boolean,
    max: [Date, Number, String],
    message: String,
    min: [Date, Number, String],
    reevaluate: Boolean,
    type: String as PropType<"required" | "numeric" | "range" | "stringLength" | "custom" | "compare" | "pattern" | "email" | "async">
  }
};

prepareConfigurationComponentConfig(DxRangeRuleConfig);

const DxRangeRule = defineComponent(DxRangeRuleConfig);

(DxRangeRule as any).$_optionName = "validationRules";
(DxRangeRule as any).$_isCollectionItem = true;
(DxRangeRule as any).$_predefinedProps = {
  type: "range"
};

const DxRequiredRuleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:message": null,
    "update:trim": null,
    "update:type": null,
  },
  props: {
    message: String,
    trim: Boolean,
    type: String as PropType<"required" | "numeric" | "range" | "stringLength" | "custom" | "compare" | "pattern" | "email" | "async">
  }
};

prepareConfigurationComponentConfig(DxRequiredRuleConfig);

const DxRequiredRule = defineComponent(DxRequiredRuleConfig);

(DxRequiredRule as any).$_optionName = "validationRules";
(DxRequiredRule as any).$_isCollectionItem = true;
(DxRequiredRule as any).$_predefinedProps = {
  type: "required"
};

const DxSimpleItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:colSpan": null,
    "update:cssClass": null,
    "update:dataField": null,
    "update:editorOptions": null,
    "update:editorType": null,
    "update:helpText": null,
    "update:isRequired": null,
    "update:itemType": null,
    "update:label": null,
    "update:name": null,
    "update:template": null,
    "update:validationRules": null,
    "update:visible": null,
    "update:visibleIndex": null,
  },
  props: {
    colSpan: Number,
    cssClass: String,
    dataField: String,
    editorOptions: {},
    editorType: String as PropType<"dxAutocomplete" | "dxCalendar" | "dxCheckBox" | "dxColorBox" | "dxDateBox" | "dxDateRangeBox" | "dxDropDownBox" | "dxHtmlEditor" | "dxLookup" | "dxNumberBox" | "dxRadioGroup" | "dxRangeSlider" | "dxSelectBox" | "dxSlider" | "dxSwitch" | "dxTagBox" | "dxTextArea" | "dxTextBox">,
    helpText: String,
    isRequired: Boolean,
    itemType: String as PropType<"empty" | "group" | "simple" | "tabbed" | "button">,
    label: Object,
    name: String,
    template: {},
    validationRules: Array as PropType<Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object>>,
    visible: Boolean,
    visibleIndex: Number
  }
};

prepareConfigurationComponentConfig(DxSimpleItemConfig);

const DxSimpleItem = defineComponent(DxSimpleItemConfig);

(DxSimpleItem as any).$_optionName = "items";
(DxSimpleItem as any).$_isCollectionItem = true;
(DxSimpleItem as any).$_predefinedProps = {
  itemType: "simple"
};
(DxSimpleItem as any).$_expectedChildren = {
  AsyncRule: { isCollectionItem: true, optionName: "validationRules" },
  CompareRule: { isCollectionItem: true, optionName: "validationRules" },
  CustomRule: { isCollectionItem: true, optionName: "validationRules" },
  EmailRule: { isCollectionItem: true, optionName: "validationRules" },
  label: { isCollectionItem: false, optionName: "label" },
  NumericRule: { isCollectionItem: true, optionName: "validationRules" },
  PatternRule: { isCollectionItem: true, optionName: "validationRules" },
  RangeRule: { isCollectionItem: true, optionName: "validationRules" },
  RequiredRule: { isCollectionItem: true, optionName: "validationRules" },
  StringLengthRule: { isCollectionItem: true, optionName: "validationRules" },
  validationRule: { isCollectionItem: true, optionName: "validationRules" }
};

const DxStringLengthRuleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:ignoreEmptyValue": null,
    "update:max": null,
    "update:message": null,
    "update:min": null,
    "update:trim": null,
    "update:type": null,
  },
  props: {
    ignoreEmptyValue: Boolean,
    max: Number,
    message: String,
    min: Number,
    trim: Boolean,
    type: String as PropType<"required" | "numeric" | "range" | "stringLength" | "custom" | "compare" | "pattern" | "email" | "async">
  }
};

prepareConfigurationComponentConfig(DxStringLengthRuleConfig);

const DxStringLengthRule = defineComponent(DxStringLengthRuleConfig);

(DxStringLengthRule as any).$_optionName = "validationRules";
(DxStringLengthRule as any).$_isCollectionItem = true;
(DxStringLengthRule as any).$_predefinedProps = {
  type: "stringLength"
};

const DxTabConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:alignItemLabels": null,
    "update:badge": null,
    "update:colCount": null,
    "update:colCountByScreen": null,
    "update:disabled": null,
    "update:icon": null,
    "update:items": null,
    "update:tabTemplate": null,
    "update:template": null,
    "update:title": null,
  },
  props: {
    alignItemLabels: Boolean,
    badge: String,
    colCount: Number,
    colCountByScreen: Object,
    disabled: Boolean,
    icon: String,
    items: Array as PropType<Array<Object> | Array<Object> | Array<Object> | Array<Object> | Array<Object>>,
    tabTemplate: {},
    template: {},
    title: String
  }
};

prepareConfigurationComponentConfig(DxTabConfig);

const DxTab = defineComponent(DxTabConfig);

(DxTab as any).$_optionName = "tabs";
(DxTab as any).$_isCollectionItem = true;
(DxTab as any).$_expectedChildren = {
  colCountByScreen: { isCollectionItem: false, optionName: "colCountByScreen" }
};

const DxTabbedItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:colSpan": null,
    "update:cssClass": null,
    "update:itemType": null,
    "update:name": null,
    "update:tabPanelOptions": null,
    "update:tabs": null,
    "update:visible": null,
    "update:visibleIndex": null,
  },
  props: {
    colSpan: Number,
    cssClass: String,
    itemType: String as PropType<"empty" | "group" | "simple" | "tabbed" | "button">,
    name: String,
    tabPanelOptions: Object,
    tabs: Array as PropType<Array<Object>>,
    visible: Boolean,
    visibleIndex: Number
  }
};

prepareConfigurationComponentConfig(DxTabbedItemConfig);

const DxTabbedItem = defineComponent(DxTabbedItemConfig);

(DxTabbedItem as any).$_optionName = "items";
(DxTabbedItem as any).$_isCollectionItem = true;
(DxTabbedItem as any).$_predefinedProps = {
  itemType: "tabbed"
};
(DxTabbedItem as any).$_expectedChildren = {
  tab: { isCollectionItem: true, optionName: "tabs" },
  tabPanelOptions: { isCollectionItem: false, optionName: "tabPanelOptions" }
};

const DxTabPanelOptionsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:animationEnabled": null,
    "update:bindingOptions": null,
    "update:dataSource": null,
    "update:deferRendering": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:focusStateEnabled": null,
    "update:height": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:iconPosition": null,
    "update:itemHoldTimeout": null,
    "update:items": null,
    "update:itemTemplate": null,
    "update:itemTitleTemplate": null,
    "update:loop": null,
    "update:noDataText": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onInitialized": null,
    "update:onItemClick": null,
    "update:onItemContextMenu": null,
    "update:onItemHold": null,
    "update:onItemRendered": null,
    "update:onOptionChanged": null,
    "update:onSelectionChanged": null,
    "update:onSelectionChanging": null,
    "update:onTitleClick": null,
    "update:onTitleHold": null,
    "update:onTitleRendered": null,
    "update:repaintChangesOnly": null,
    "update:rtlEnabled": null,
    "update:scrollByContent": null,
    "update:scrollingEnabled": null,
    "update:selectedIndex": null,
    "update:selectedItem": null,
    "update:showNavButtons": null,
    "update:stylingMode": null,
    "update:swipeEnabled": null,
    "update:tabIndex": null,
    "update:tabsPosition": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    accessKey: String,
    activeStateEnabled: Boolean,
    animationEnabled: Boolean,
    bindingOptions: Object,
    dataSource: {},
    deferRendering: Boolean,
    disabled: Boolean,
    elementAttr: Object,
    focusStateEnabled: Boolean,
    height: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    hint: String,
    hoverStateEnabled: Boolean,
    iconPosition: String as PropType<"top" | "end" | "bottom" | "start">,
    itemHoldTimeout: Number,
    items: Array as PropType<Array<any> | Array<Object> | Array<string>>,
    itemTemplate: {},
    itemTitleTemplate: {},
    loop: Boolean,
    noDataText: String,
    onContentReady: Function as PropType<(e: TabPanelOptionsContentReadyEvent) => void>,
    onDisposing: Function as PropType<(e: TabPanelOptionsDisposingEvent) => void>,
    onInitialized: Function as PropType<(e: TabPanelOptionsInitializedEvent) => void>,
    onItemClick: Function as PropType<(e: TabPanelOptionsItemClickEvent) => void>,
    onItemContextMenu: Function as PropType<(e: TabPanelOptionsItemContextMenuEvent) => void>,
    onItemHold: Function as PropType<(e: TabPanelOptionsItemHoldEvent) => void>,
    onItemRendered: Function as PropType<(e: TabPanelOptionsItemRenderedEvent) => void>,
    onOptionChanged: Function as PropType<(e: TabPanelOptionsOptionChangedEvent) => void>,
    onSelectionChanged: Function as PropType<(e: TabPanelOptionsSelectionChangedEvent) => void>,
    onSelectionChanging: Function as PropType<(e: TabPanelOptionsSelectionChangingEvent) => void>,
    onTitleClick: Function as PropType<(e: TabPanelOptionsTitleClickEvent) => void>,
    onTitleHold: Function as PropType<(e: TabPanelOptionsTitleHoldEvent) => void>,
    onTitleRendered: Function as PropType<(e: TabPanelOptionsTitleRenderedEvent) => void>,
    repaintChangesOnly: Boolean,
    rtlEnabled: Boolean,
    scrollByContent: Boolean,
    scrollingEnabled: Boolean,
    selectedIndex: Number,
    selectedItem: {},
    showNavButtons: Boolean,
    stylingMode: String as PropType<"primary" | "secondary">,
    swipeEnabled: Boolean,
    tabIndex: Number,
    tabsPosition: String as PropType<"bottom" | "left" | "right" | "top">,
    visible: Boolean,
    width: [Function, Number, String] as PropType<(() => (number | string)) | number | string>
  }
};

prepareConfigurationComponentConfig(DxTabPanelOptionsConfig);

const DxTabPanelOptions = defineComponent(DxTabPanelOptionsConfig);

(DxTabPanelOptions as any).$_optionName = "tabPanelOptions";
(DxTabPanelOptions as any).$_expectedChildren = {
  item: { isCollectionItem: true, optionName: "items" },
  tabPanelOptionsItem: { isCollectionItem: true, optionName: "items" }
};

const DxTabPanelOptionsItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:badge": null,
    "update:disabled": null,
    "update:html": null,
    "update:icon": null,
    "update:tabTemplate": null,
    "update:template": null,
    "update:text": null,
    "update:title": null,
    "update:visible": null,
  },
  props: {
    badge: String,
    disabled: Boolean,
    html: String,
    icon: String,
    tabTemplate: {},
    template: {},
    text: String,
    title: String,
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxTabPanelOptionsItemConfig);

const DxTabPanelOptionsItem = defineComponent(DxTabPanelOptionsItemConfig);

(DxTabPanelOptionsItem as any).$_optionName = "items";
(DxTabPanelOptionsItem as any).$_isCollectionItem = true;

const DxValidationRuleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:comparisonTarget": null,
    "update:comparisonType": null,
    "update:ignoreEmptyValue": null,
    "update:max": null,
    "update:message": null,
    "update:min": null,
    "update:pattern": null,
    "update:reevaluate": null,
    "update:trim": null,
    "update:type": null,
    "update:validationCallback": null,
  },
  props: {
    comparisonTarget: Function as PropType<() => any>,
    comparisonType: String as PropType<"!=" | "!==" | "<" | "<=" | "==" | "===" | ">" | ">=">,
    ignoreEmptyValue: Boolean,
    max: [Date, Number, String],
    message: String,
    min: [Date, Number, String],
    pattern: [RegExp, String],
    reevaluate: Boolean,
    trim: Boolean,
    type: String as PropType<"required" | "numeric" | "range" | "stringLength" | "custom" | "compare" | "pattern" | "email" | "async">,
    validationCallback: Function as PropType<(options: Object) => Boolean>
  }
};

prepareConfigurationComponentConfig(DxValidationRuleConfig);

const DxValidationRule = defineComponent(DxValidationRuleConfig);

(DxValidationRule as any).$_optionName = "validationRules";
(DxValidationRule as any).$_isCollectionItem = true;
(DxValidationRule as any).$_predefinedProps = {
  type: "required"
};

export default DxForm;
export {
  DxForm,
  DxAsyncRule,
  DxButtonItem,
  DxButtonOptions,
  DxColCountByScreen,
  DxCompareRule,
  DxCustomRule,
  DxEmailRule,
  DxEmptyItem,
  DxGroupItem,
  DxItem,
  DxLabel,
  DxNumericRule,
  DxPatternRule,
  DxRangeRule,
  DxRequiredRule,
  DxSimpleItem,
  DxStringLengthRule,
  DxTab,
  DxTabbedItem,
  DxTabPanelOptions,
  DxTabPanelOptionsItem,
  DxValidationRule
};
import type * as DxFormTypes from "devextreme/ui/form_types";
export { DxFormTypes };
