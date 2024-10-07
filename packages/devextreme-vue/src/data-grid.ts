export { ExplicitTypes } from "devextreme/ui/data_grid";
import { PropType } from "vue";
import DataGrid, { Properties } from "devextreme/ui/data_grid";
import { 
AdaptiveDetailRowPreparingEvent,
CellClickEvent,
CellDblClickEvent,
CellHoverChangedEvent,
CellPreparedEvent,
ContentReadyEvent,
ContextMenuPreparingEvent,
DataErrorOccurredEvent,
DisposingEvent,
EditCanceledEvent,
EditCancelingEvent,
EditingStartEvent,
EditorPreparedEvent,
EditorPreparingEvent,
ExportingEvent,
FocusedCellChangedEvent,
FocusedCellChangingEvent,
FocusedRowChangedEvent,
FocusedRowChangingEvent,
InitializedEvent,
InitNewRowEvent,
KeyDownEvent,
OptionChangedEvent,
RowClickEvent,
RowCollapsedEvent,
RowCollapsingEvent,
RowDblClickEvent,
RowExpandedEvent,
RowExpandingEvent,
RowInsertedEvent,
RowInsertingEvent,
RowPreparedEvent,
RowRemovedEvent,
RowRemovingEvent,
RowUpdatedEvent,
RowUpdatingEvent,
RowValidatingEvent,
SavedEvent,
SavingEvent,
SelectionChangedEvent,
ToolbarPreparingEvent,
ColumnButtonClickEvent,
 } from "devextreme/ui/data_grid";
import { 
ContentReadyEvent as FilterBuilderContentReadyEvent,
DisposingEvent as FilterBuilderDisposingEvent,
EditorPreparedEvent as FilterBuilderEditorPreparedEvent,
EditorPreparingEvent as FilterBuilderEditorPreparingEvent,
InitializedEvent as FilterBuilderInitializedEvent,
OptionChangedEvent as FilterBuilderOptionChangedEvent,
ValueChangedEvent,
 } from "devextreme/ui/filter_builder";
import { 
ContentReadyEvent as FormContentReadyEvent,
DisposingEvent as FormDisposingEvent,
EditorEnterKeyEvent,
FieldDataChangedEvent,
InitializedEvent as FormInitializedEvent,
OptionChangedEvent as FormOptionChangedEvent,
 } from "devextreme/ui/form";
import { defineComponent } from "vue";
import { prepareComponentConfig } from "./core/index";
import { prepareConfigurationComponentConfig } from "./core/index";

type AccessibleOptions = Pick<Properties,
  "accessKey" |
  "activeStateEnabled" |
  "allowColumnReordering" |
  "allowColumnResizing" |
  "autoNavigateToFocusedRow" |
  "cacheEnabled" |
  "cellHintEnabled" |
  "columnAutoWidth" |
  "columnChooser" |
  "columnFixing" |
  "columnHidingEnabled" |
  "columnMinWidth" |
  "columnResizingMode" |
  "columns" |
  "columnWidth" |
  "customizeColumns" |
  "dataRowTemplate" |
  "dataSource" |
  "dateSerializationFormat" |
  "disabled" |
  "editing" |
  "elementAttr" |
  "errorRowEnabled" |
  "export" |
  "filterBuilder" |
  "filterBuilderPopup" |
  "filterPanel" |
  "filterRow" |
  "filterSyncEnabled" |
  "filterValue" |
  "focusedColumnIndex" |
  "focusedRowEnabled" |
  "focusedRowIndex" |
  "focusedRowKey" |
  "grouping" |
  "groupPanel" |
  "headerFilter" |
  "height" |
  "highlightChanges" |
  "hint" |
  "hoverStateEnabled" |
  "keyboardNavigation" |
  "keyExpr" |
  "loadPanel" |
  "masterDetail" |
  "noDataText" |
  "onAdaptiveDetailRowPreparing" |
  "onCellClick" |
  "onCellDblClick" |
  "onCellHoverChanged" |
  "onCellPrepared" |
  "onContentReady" |
  "onContextMenuPreparing" |
  "onDataErrorOccurred" |
  "onDisposing" |
  "onEditCanceled" |
  "onEditCanceling" |
  "onEditingStart" |
  "onEditorPrepared" |
  "onEditorPreparing" |
  "onExporting" |
  "onFocusedCellChanged" |
  "onFocusedCellChanging" |
  "onFocusedRowChanged" |
  "onFocusedRowChanging" |
  "onInitialized" |
  "onInitNewRow" |
  "onKeyDown" |
  "onOptionChanged" |
  "onRowClick" |
  "onRowCollapsed" |
  "onRowCollapsing" |
  "onRowDblClick" |
  "onRowExpanded" |
  "onRowExpanding" |
  "onRowInserted" |
  "onRowInserting" |
  "onRowPrepared" |
  "onRowRemoved" |
  "onRowRemoving" |
  "onRowUpdated" |
  "onRowUpdating" |
  "onRowValidating" |
  "onSaved" |
  "onSaving" |
  "onSelectionChanged" |
  "onToolbarPreparing" |
  "pager" |
  "paging" |
  "remoteOperations" |
  "renderAsync" |
  "repaintChangesOnly" |
  "rowAlternationEnabled" |
  "rowDragging" |
  "rowTemplate" |
  "rtlEnabled" |
  "scrolling" |
  "searchPanel" |
  "selectedRowKeys" |
  "selection" |
  "selectionFilter" |
  "showBorders" |
  "showColumnHeaders" |
  "showColumnLines" |
  "showRowLines" |
  "sortByGroupSummaryInfo" |
  "sorting" |
  "stateStoring" |
  "summary" |
  "syncLookupFilterValues" |
  "tabIndex" |
  "toolbar" |
  "twoWayBindingEnabled" |
  "visible" |
  "width" |
  "wordWrapEnabled"
>;

interface DxDataGrid extends AccessibleOptions {
  readonly instance?: DataGrid;
}

const componentConfig = {
  props: {
    accessKey: String,
    activeStateEnabled: Boolean,
    allowColumnReordering: Boolean,
    allowColumnResizing: Boolean,
    autoNavigateToFocusedRow: Boolean,
    cacheEnabled: Boolean,
    cellHintEnabled: Boolean,
    columnAutoWidth: Boolean,
    columnChooser: Object,
    columnFixing: Object,
    columnHidingEnabled: Boolean,
    columnMinWidth: Number,
    columnResizingMode: String as PropType<"nextColumn" | "widget">,
    columns: Array as PropType<Array<Object> | Array<string>>,
    columnWidth: [Number, String] as PropType<number | "auto">,
    customizeColumns: Function as PropType<(columns: Array<Object>) => void>,
    dataRowTemplate: {},
    dataSource: {},
    dateSerializationFormat: String,
    disabled: Boolean,
    editing: Object,
    elementAttr: Object,
    errorRowEnabled: Boolean,
    export: Object,
    filterBuilder: Object,
    filterBuilderPopup: Object,
    filterPanel: Object,
    filterRow: Object,
    filterSyncEnabled: [Boolean, String] as PropType<Boolean | "auto">,
    filterValue: [Array, Function, String] as PropType<Array<any> | Function | string>,
    focusedColumnIndex: Number,
    focusedRowEnabled: Boolean,
    focusedRowIndex: Number,
    focusedRowKey: {},
    grouping: Object,
    groupPanel: Object,
    headerFilter: Object,
    height: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    highlightChanges: Boolean,
    hint: String,
    hoverStateEnabled: Boolean,
    keyboardNavigation: Object,
    keyExpr: [Array, String] as PropType<Array<string> | string>,
    loadPanel: Object,
    masterDetail: Object,
    noDataText: String,
    onAdaptiveDetailRowPreparing: Function as PropType<(e: AdaptiveDetailRowPreparingEvent) => void>,
    onCellClick: Function as PropType<(e: CellClickEvent) => void>,
    onCellDblClick: Function as PropType<(e: CellDblClickEvent) => void>,
    onCellHoverChanged: Function as PropType<(e: CellHoverChangedEvent) => void>,
    onCellPrepared: Function as PropType<(e: CellPreparedEvent) => void>,
    onContentReady: Function as PropType<(e: ContentReadyEvent) => void>,
    onContextMenuPreparing: Function as PropType<(e: ContextMenuPreparingEvent) => void>,
    onDataErrorOccurred: Function as PropType<(e: DataErrorOccurredEvent) => void>,
    onDisposing: Function as PropType<(e: DisposingEvent) => void>,
    onEditCanceled: Function as PropType<(e: EditCanceledEvent) => void>,
    onEditCanceling: Function as PropType<(e: EditCancelingEvent) => void>,
    onEditingStart: Function as PropType<(e: EditingStartEvent) => void>,
    onEditorPrepared: Function as PropType<(e: EditorPreparedEvent) => void>,
    onEditorPreparing: Function as PropType<(e: EditorPreparingEvent) => void>,
    onExporting: Function as PropType<(e: ExportingEvent) => void>,
    onFocusedCellChanged: Function as PropType<(e: FocusedCellChangedEvent) => void>,
    onFocusedCellChanging: Function as PropType<(e: FocusedCellChangingEvent) => void>,
    onFocusedRowChanged: Function as PropType<(e: FocusedRowChangedEvent) => void>,
    onFocusedRowChanging: Function as PropType<(e: FocusedRowChangingEvent) => void>,
    onInitialized: Function as PropType<(e: InitializedEvent) => void>,
    onInitNewRow: Function as PropType<(e: InitNewRowEvent) => void>,
    onKeyDown: Function as PropType<(e: KeyDownEvent) => void>,
    onOptionChanged: Function as PropType<(e: OptionChangedEvent) => void>,
    onRowClick: Function as PropType<(e: RowClickEvent) => void>,
    onRowCollapsed: Function as PropType<(e: RowCollapsedEvent) => void>,
    onRowCollapsing: Function as PropType<(e: RowCollapsingEvent) => void>,
    onRowDblClick: Function as PropType<(e: RowDblClickEvent) => void>,
    onRowExpanded: Function as PropType<(e: RowExpandedEvent) => void>,
    onRowExpanding: Function as PropType<(e: RowExpandingEvent) => void>,
    onRowInserted: Function as PropType<(e: RowInsertedEvent) => void>,
    onRowInserting: Function as PropType<(e: RowInsertingEvent) => void>,
    onRowPrepared: Function as PropType<(e: RowPreparedEvent) => void>,
    onRowRemoved: Function as PropType<(e: RowRemovedEvent) => void>,
    onRowRemoving: Function as PropType<(e: RowRemovingEvent) => void>,
    onRowUpdated: Function as PropType<(e: RowUpdatedEvent) => void>,
    onRowUpdating: Function as PropType<(e: RowUpdatingEvent) => void>,
    onRowValidating: Function as PropType<(e: RowValidatingEvent) => void>,
    onSaved: Function as PropType<(e: SavedEvent) => void>,
    onSaving: Function as PropType<(e: SavingEvent) => void>,
    onSelectionChanged: Function as PropType<(e: SelectionChangedEvent) => void>,
    onToolbarPreparing: Function as PropType<(e: ToolbarPreparingEvent) => void>,
    pager: Object,
    paging: Object,
    remoteOperations: [Boolean, Object, String] as PropType<Boolean | Object | "auto">,
    renderAsync: Boolean,
    repaintChangesOnly: Boolean,
    rowAlternationEnabled: Boolean,
    rowDragging: Object,
    rowTemplate: {},
    rtlEnabled: Boolean,
    scrolling: Object,
    searchPanel: Object,
    selectedRowKeys: Array as PropType<Array<any>>,
    selection: Object,
    selectionFilter: [Array, Function, String] as PropType<Array<any> | Function | string>,
    showBorders: Boolean,
    showColumnHeaders: Boolean,
    showColumnLines: Boolean,
    showRowLines: Boolean,
    sortByGroupSummaryInfo: Array as PropType<Array<Object>>,
    sorting: Object,
    stateStoring: Object,
    summary: Object,
    syncLookupFilterValues: Boolean,
    tabIndex: Number,
    toolbar: Object,
    twoWayBindingEnabled: Boolean,
    visible: Boolean,
    width: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    wordWrapEnabled: Boolean
  },
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:allowColumnReordering": null,
    "update:allowColumnResizing": null,
    "update:autoNavigateToFocusedRow": null,
    "update:cacheEnabled": null,
    "update:cellHintEnabled": null,
    "update:columnAutoWidth": null,
    "update:columnChooser": null,
    "update:columnFixing": null,
    "update:columnHidingEnabled": null,
    "update:columnMinWidth": null,
    "update:columnResizingMode": null,
    "update:columns": null,
    "update:columnWidth": null,
    "update:customizeColumns": null,
    "update:dataRowTemplate": null,
    "update:dataSource": null,
    "update:dateSerializationFormat": null,
    "update:disabled": null,
    "update:editing": null,
    "update:elementAttr": null,
    "update:errorRowEnabled": null,
    "update:export": null,
    "update:filterBuilder": null,
    "update:filterBuilderPopup": null,
    "update:filterPanel": null,
    "update:filterRow": null,
    "update:filterSyncEnabled": null,
    "update:filterValue": null,
    "update:focusedColumnIndex": null,
    "update:focusedRowEnabled": null,
    "update:focusedRowIndex": null,
    "update:focusedRowKey": null,
    "update:grouping": null,
    "update:groupPanel": null,
    "update:headerFilter": null,
    "update:height": null,
    "update:highlightChanges": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:keyboardNavigation": null,
    "update:keyExpr": null,
    "update:loadPanel": null,
    "update:masterDetail": null,
    "update:noDataText": null,
    "update:onAdaptiveDetailRowPreparing": null,
    "update:onCellClick": null,
    "update:onCellDblClick": null,
    "update:onCellHoverChanged": null,
    "update:onCellPrepared": null,
    "update:onContentReady": null,
    "update:onContextMenuPreparing": null,
    "update:onDataErrorOccurred": null,
    "update:onDisposing": null,
    "update:onEditCanceled": null,
    "update:onEditCanceling": null,
    "update:onEditingStart": null,
    "update:onEditorPrepared": null,
    "update:onEditorPreparing": null,
    "update:onExporting": null,
    "update:onFocusedCellChanged": null,
    "update:onFocusedCellChanging": null,
    "update:onFocusedRowChanged": null,
    "update:onFocusedRowChanging": null,
    "update:onInitialized": null,
    "update:onInitNewRow": null,
    "update:onKeyDown": null,
    "update:onOptionChanged": null,
    "update:onRowClick": null,
    "update:onRowCollapsed": null,
    "update:onRowCollapsing": null,
    "update:onRowDblClick": null,
    "update:onRowExpanded": null,
    "update:onRowExpanding": null,
    "update:onRowInserted": null,
    "update:onRowInserting": null,
    "update:onRowPrepared": null,
    "update:onRowRemoved": null,
    "update:onRowRemoving": null,
    "update:onRowUpdated": null,
    "update:onRowUpdating": null,
    "update:onRowValidating": null,
    "update:onSaved": null,
    "update:onSaving": null,
    "update:onSelectionChanged": null,
    "update:onToolbarPreparing": null,
    "update:pager": null,
    "update:paging": null,
    "update:remoteOperations": null,
    "update:renderAsync": null,
    "update:repaintChangesOnly": null,
    "update:rowAlternationEnabled": null,
    "update:rowDragging": null,
    "update:rowTemplate": null,
    "update:rtlEnabled": null,
    "update:scrolling": null,
    "update:searchPanel": null,
    "update:selectedRowKeys": null,
    "update:selection": null,
    "update:selectionFilter": null,
    "update:showBorders": null,
    "update:showColumnHeaders": null,
    "update:showColumnLines": null,
    "update:showRowLines": null,
    "update:sortByGroupSummaryInfo": null,
    "update:sorting": null,
    "update:stateStoring": null,
    "update:summary": null,
    "update:syncLookupFilterValues": null,
    "update:tabIndex": null,
    "update:toolbar": null,
    "update:twoWayBindingEnabled": null,
    "update:visible": null,
    "update:width": null,
    "update:wordWrapEnabled": null,
  },
  computed: {
    instance(): DataGrid {
      return (this as any).$_instance;
    }
  },
  beforeCreate() {
    (this as any).$_WidgetClass = DataGrid;
    (this as any).$_hasAsyncTemplate = false;
    (this as any).$_expectedChildren = {
      column: { isCollectionItem: true, optionName: "columns" },
      columnChooser: { isCollectionItem: false, optionName: "columnChooser" },
      columnFixing: { isCollectionItem: false, optionName: "columnFixing" },
      dataGridHeaderFilter: { isCollectionItem: false, optionName: "headerFilter" },
      dataGridSelection: { isCollectionItem: false, optionName: "selection" },
      editing: { isCollectionItem: false, optionName: "editing" },
      export: { isCollectionItem: false, optionName: "export" },
      filterBuilder: { isCollectionItem: false, optionName: "filterBuilder" },
      filterBuilderPopup: { isCollectionItem: false, optionName: "filterBuilderPopup" },
      filterPanel: { isCollectionItem: false, optionName: "filterPanel" },
      filterRow: { isCollectionItem: false, optionName: "filterRow" },
      grouping: { isCollectionItem: false, optionName: "grouping" },
      groupPanel: { isCollectionItem: false, optionName: "groupPanel" },
      headerFilter: { isCollectionItem: false, optionName: "headerFilter" },
      keyboardNavigation: { isCollectionItem: false, optionName: "keyboardNavigation" },
      loadPanel: { isCollectionItem: false, optionName: "loadPanel" },
      masterDetail: { isCollectionItem: false, optionName: "masterDetail" },
      pager: { isCollectionItem: false, optionName: "pager" },
      paging: { isCollectionItem: false, optionName: "paging" },
      remoteOperations: { isCollectionItem: false, optionName: "remoteOperations" },
      rowDragging: { isCollectionItem: false, optionName: "rowDragging" },
      scrolling: { isCollectionItem: false, optionName: "scrolling" },
      searchPanel: { isCollectionItem: false, optionName: "searchPanel" },
      selection: { isCollectionItem: false, optionName: "selection" },
      sortByGroupSummaryInfo: { isCollectionItem: true, optionName: "sortByGroupSummaryInfo" },
      sorting: { isCollectionItem: false, optionName: "sorting" },
      stateStoring: { isCollectionItem: false, optionName: "stateStoring" },
      summary: { isCollectionItem: false, optionName: "summary" },
      toolbar: { isCollectionItem: false, optionName: "toolbar" }
    };
  }
};

prepareComponentConfig(componentConfig);

const DxDataGrid = defineComponent(componentConfig);


const DxAnimationConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:hide": null,
    "update:show": null,
  },
  props: {
    hide: [Object, Number, String],
    show: [Object, Number, String]
  }
};

prepareConfigurationComponentConfig(DxAnimationConfig);

const DxAnimation = defineComponent(DxAnimationConfig);

(DxAnimation as any).$_optionName = "animation";
(DxAnimation as any).$_expectedChildren = {
  hide: { isCollectionItem: false, optionName: "hide" },
  show: { isCollectionItem: false, optionName: "show" }
};

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

const DxAtConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:x": null,
    "update:y": null,
  },
  props: {
    x: String as PropType<"center" | "left" | "right">,
    y: String as PropType<"bottom" | "center" | "top">
  }
};

prepareConfigurationComponentConfig(DxAtConfig);

const DxAt = defineComponent(DxAtConfig);

(DxAt as any).$_optionName = "at";

const DxBoundaryOffsetConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:x": null,
    "update:y": null,
  },
  props: {
    x: Number,
    y: Number
  }
};

prepareConfigurationComponentConfig(DxBoundaryOffsetConfig);

const DxBoundaryOffset = defineComponent(DxBoundaryOffsetConfig);

(DxBoundaryOffset as any).$_optionName = "boundaryOffset";

const DxButtonConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:cssClass": null,
    "update:disabled": null,
    "update:hint": null,
    "update:icon": null,
    "update:name": null,
    "update:onClick": null,
    "update:template": null,
    "update:text": null,
    "update:visible": null,
  },
  props: {
    cssClass: String,
    disabled: [Boolean, Function] as PropType<Boolean | ((options: Object) => Boolean)>,
    hint: String,
    icon: String,
    name: String as PropType<"cancel" | "delete" | "edit" | "save" | "undelete">,
    onClick: Function as PropType<(e: ColumnButtonClickEvent) => void>,
    template: {},
    text: String,
    visible: [Boolean, Function] as PropType<Boolean | ((options: Object) => Boolean)>
  }
};

prepareConfigurationComponentConfig(DxButtonConfig);

const DxButton = defineComponent(DxButtonConfig);

(DxButton as any).$_optionName = "buttons";
(DxButton as any).$_isCollectionItem = true;

const DxChangeConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:data": null,
    "update:insertAfterKey": null,
    "update:insertBeforeKey": null,
    "update:type": null,
  },
  props: {
    data: {},
    insertAfterKey: {},
    insertBeforeKey: {},
    type: String as PropType<"insert" | "update" | "remove">
  }
};

prepareConfigurationComponentConfig(DxChangeConfig);

const DxChange = defineComponent(DxChangeConfig);

(DxChange as any).$_optionName = "changes";
(DxChange as any).$_isCollectionItem = true;

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

const DxCollisionConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:x": null,
    "update:y": null,
  },
  props: {
    x: String as PropType<"fit" | "flip" | "flipfit" | "none">,
    y: String as PropType<"fit" | "flip" | "flipfit" | "none">
  }
};

prepareConfigurationComponentConfig(DxCollisionConfig);

const DxCollision = defineComponent(DxCollisionConfig);

(DxCollision as any).$_optionName = "collision";

const DxColumnConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:alignment": null,
    "update:allowEditing": null,
    "update:allowExporting": null,
    "update:allowFiltering": null,
    "update:allowFixing": null,
    "update:allowGrouping": null,
    "update:allowHeaderFiltering": null,
    "update:allowHiding": null,
    "update:allowReordering": null,
    "update:allowResizing": null,
    "update:allowSearch": null,
    "update:allowSorting": null,
    "update:autoExpandGroup": null,
    "update:buttons": null,
    "update:calculateCellValue": null,
    "update:calculateDisplayValue": null,
    "update:calculateFilterExpression": null,
    "update:calculateGroupValue": null,
    "update:calculateSortValue": null,
    "update:caption": null,
    "update:cellTemplate": null,
    "update:columns": null,
    "update:cssClass": null,
    "update:customizeText": null,
    "update:dataField": null,
    "update:dataType": null,
    "update:editCellTemplate": null,
    "update:editorOptions": null,
    "update:encodeHtml": null,
    "update:falseText": null,
    "update:filterOperations": null,
    "update:filterType": null,
    "update:filterValue": null,
    "update:filterValues": null,
    "update:fixed": null,
    "update:fixedPosition": null,
    "update:format": null,
    "update:formItem": null,
    "update:groupCellTemplate": null,
    "update:groupIndex": null,
    "update:headerCellTemplate": null,
    "update:headerFilter": null,
    "update:hidingPriority": null,
    "update:isBand": null,
    "update:lookup": null,
    "update:minWidth": null,
    "update:name": null,
    "update:ownerBand": null,
    "update:renderAsync": null,
    "update:selectedFilterOperation": null,
    "update:setCellValue": null,
    "update:showEditorAlways": null,
    "update:showInColumnChooser": null,
    "update:showWhenGrouped": null,
    "update:sortIndex": null,
    "update:sortingMethod": null,
    "update:sortOrder": null,
    "update:trueText": null,
    "update:type": null,
    "update:validationRules": null,
    "update:visible": null,
    "update:visibleIndex": null,
    "update:width": null,
  },
  props: {
    alignment: String as PropType<"center" | "left" | "right">,
    allowEditing: Boolean,
    allowExporting: Boolean,
    allowFiltering: Boolean,
    allowFixing: Boolean,
    allowGrouping: Boolean,
    allowHeaderFiltering: Boolean,
    allowHiding: Boolean,
    allowReordering: Boolean,
    allowResizing: Boolean,
    allowSearch: Boolean,
    allowSorting: Boolean,
    autoExpandGroup: Boolean,
    buttons: Array as PropType<Array<Object> | Array<"cancel" | "delete" | "edit" | "save" | "undelete">>,
    calculateCellValue: Function as PropType<(rowData: Object) => any>,
    calculateDisplayValue: [Function, String] as PropType<((rowData: Object) => any) | string>,
    calculateFilterExpression: Function as PropType<(filterValue: any, selectedFilterOperation: string | any, target: string) => (string | Function | Array<any>)>,
    calculateGroupValue: [Function, String] as PropType<((rowData: Object) => any) | string>,
    calculateSortValue: [Function, String] as PropType<((rowData: Object) => any) | string>,
    caption: String,
    cellTemplate: {},
    columns: Array as PropType<Array<Object> | Array<string>>,
    cssClass: String,
    customizeText: Function as PropType<(cellInfo: Object) => string>,
    dataField: String,
    dataType: String as PropType<"string" | "number" | "date" | "boolean" | "object" | "datetime">,
    editCellTemplate: {},
    editorOptions: {},
    encodeHtml: Boolean,
    falseText: String,
    filterOperations: Array as PropType<Array<"=" | "<>" | "<" | "<=" | ">" | ">=" | "contains" | "endswith" | "isblank" | "isnotblank" | "notcontains" | "startswith" | "between" | "anyof" | "noneof"> | Array<string>>,
    filterType: String as PropType<"exclude" | "include">,
    filterValue: {},
    filterValues: Array as PropType<Array<any>>,
    fixed: Boolean,
    fixedPosition: String as PropType<"left" | "right" | "sticky">,
    format: [Object, Function, String] as PropType<Object | ((value: number | Date) => string) | ("billions" | "currency" | "day" | "decimal" | "exponential" | "fixedPoint" | "largeNumber" | "longDate" | "longTime" | "millions" | "millisecond" | "month" | "monthAndDay" | "monthAndYear" | "percent" | "quarter" | "quarterAndYear" | "shortDate" | "shortTime" | "thousands" | "trillions" | "year" | "dayOfWeek" | "hour" | "longDateLongTime" | "minute" | "second" | "shortDateShortTime")>,
    formItem: Object,
    groupCellTemplate: {},
    groupIndex: Number,
    headerCellTemplate: {},
    headerFilter: Object,
    hidingPriority: Number,
    isBand: Boolean,
    lookup: Object,
    minWidth: Number,
    name: String,
    ownerBand: Number,
    renderAsync: Boolean,
    selectedFilterOperation: String as PropType<"<" | "<=" | "<>" | "=" | ">" | ">=" | "between" | "contains" | "endswith" | "notcontains" | "startswith">,
    setCellValue: Function as PropType<(newData: Object, value: any, currentRowData: Object) => any>,
    showEditorAlways: Boolean,
    showInColumnChooser: Boolean,
    showWhenGrouped: Boolean,
    sortIndex: Number,
    sortingMethod: Function as PropType<(value1: any, value2: any) => number>,
    sortOrder: String as PropType<"asc" | "desc">,
    trueText: String,
    type: String as PropType<"adaptive" | "buttons" | "detailExpand" | "groupExpand" | "selection" | "drag">,
    validationRules: Array as PropType<Array<Object>>,
    visible: Boolean,
    visibleIndex: Number,
    width: [Number, String]
  }
};

prepareConfigurationComponentConfig(DxColumnConfig);

const DxColumn = defineComponent(DxColumnConfig);

(DxColumn as any).$_optionName = "columns";
(DxColumn as any).$_isCollectionItem = true;
(DxColumn as any).$_expectedChildren = {
  AsyncRule: { isCollectionItem: true, optionName: "validationRules" },
  button: { isCollectionItem: true, optionName: "buttons" },
  columnHeaderFilter: { isCollectionItem: false, optionName: "headerFilter" },
  columnLookup: { isCollectionItem: false, optionName: "lookup" },
  CompareRule: { isCollectionItem: true, optionName: "validationRules" },
  CustomRule: { isCollectionItem: true, optionName: "validationRules" },
  EmailRule: { isCollectionItem: true, optionName: "validationRules" },
  format: { isCollectionItem: false, optionName: "format" },
  formItem: { isCollectionItem: false, optionName: "formItem" },
  headerFilter: { isCollectionItem: false, optionName: "headerFilter" },
  lookup: { isCollectionItem: false, optionName: "lookup" },
  NumericRule: { isCollectionItem: true, optionName: "validationRules" },
  PatternRule: { isCollectionItem: true, optionName: "validationRules" },
  RangeRule: { isCollectionItem: true, optionName: "validationRules" },
  RequiredRule: { isCollectionItem: true, optionName: "validationRules" },
  StringLengthRule: { isCollectionItem: true, optionName: "validationRules" },
  validationRule: { isCollectionItem: true, optionName: "validationRules" }
};

const DxColumnChooserConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowSearch": null,
    "update:container": null,
    "update:emptyPanelText": null,
    "update:enabled": null,
    "update:height": null,
    "update:mode": null,
    "update:position": null,
    "update:search": null,
    "update:searchTimeout": null,
    "update:selection": null,
    "update:sortOrder": null,
    "update:title": null,
    "update:width": null,
  },
  props: {
    allowSearch: Boolean,
    container: {},
    emptyPanelText: String,
    enabled: Boolean,
    height: [Number, String],
    mode: String as PropType<"dragAndDrop" | "select">,
    position: Object,
    search: Object,
    searchTimeout: Number,
    selection: Object,
    sortOrder: String as PropType<"asc" | "desc">,
    title: String,
    width: [Number, String]
  }
};

prepareConfigurationComponentConfig(DxColumnChooserConfig);

const DxColumnChooser = defineComponent(DxColumnChooserConfig);

(DxColumnChooser as any).$_optionName = "columnChooser";
(DxColumnChooser as any).$_expectedChildren = {
  columnChooserSearch: { isCollectionItem: false, optionName: "search" },
  columnChooserSelection: { isCollectionItem: false, optionName: "selection" },
  position: { isCollectionItem: false, optionName: "position" },
  search: { isCollectionItem: false, optionName: "search" },
  selection: { isCollectionItem: false, optionName: "selection" }
};

const DxColumnChooserSearchConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:editorOptions": null,
    "update:enabled": null,
    "update:timeout": null,
  },
  props: {
    editorOptions: {},
    enabled: Boolean,
    timeout: Number
  }
};

prepareConfigurationComponentConfig(DxColumnChooserSearchConfig);

const DxColumnChooserSearch = defineComponent(DxColumnChooserSearchConfig);

(DxColumnChooserSearch as any).$_optionName = "search";

const DxColumnChooserSelectionConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowSelectAll": null,
    "update:recursive": null,
    "update:selectByClick": null,
  },
  props: {
    allowSelectAll: Boolean,
    recursive: Boolean,
    selectByClick: Boolean
  }
};

prepareConfigurationComponentConfig(DxColumnChooserSelectionConfig);

const DxColumnChooserSelection = defineComponent(DxColumnChooserSelectionConfig);

(DxColumnChooserSelection as any).$_optionName = "selection";

const DxColumnFixingConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:enabled": null,
    "update:icons": null,
    "update:texts": null,
  },
  props: {
    enabled: Boolean,
    icons: Object,
    texts: Object
  }
};

prepareConfigurationComponentConfig(DxColumnFixingConfig);

const DxColumnFixing = defineComponent(DxColumnFixingConfig);

(DxColumnFixing as any).$_optionName = "columnFixing";
(DxColumnFixing as any).$_expectedChildren = {
  columnFixingTexts: { isCollectionItem: false, optionName: "texts" },
  icons: { isCollectionItem: false, optionName: "icons" },
  texts: { isCollectionItem: false, optionName: "texts" }
};

const DxColumnFixingTextsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:fix": null,
    "update:leftPosition": null,
    "update:rightPosition": null,
    "update:stickPosition": null,
    "update:unfix": null,
  },
  props: {
    fix: String,
    leftPosition: String,
    rightPosition: String,
    stickPosition: String,
    unfix: String
  }
};

prepareConfigurationComponentConfig(DxColumnFixingTextsConfig);

const DxColumnFixingTexts = defineComponent(DxColumnFixingTextsConfig);

(DxColumnFixingTexts as any).$_optionName = "texts";

const DxColumnHeaderFilterConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowSearch": null,
    "update:allowSelectAll": null,
    "update:dataSource": null,
    "update:groupInterval": null,
    "update:height": null,
    "update:search": null,
    "update:searchMode": null,
    "update:width": null,
  },
  props: {
    allowSearch: Boolean,
    allowSelectAll: Boolean,
    dataSource: {},
    groupInterval: [Number, String] as PropType<number | ("day" | "hour" | "minute" | "month" | "quarter" | "second" | "year")>,
    height: [Number, String],
    search: Object,
    searchMode: String as PropType<"contains" | "startswith" | "equals">,
    width: [Number, String]
  }
};

prepareConfigurationComponentConfig(DxColumnHeaderFilterConfig);

const DxColumnHeaderFilter = defineComponent(DxColumnHeaderFilterConfig);

(DxColumnHeaderFilter as any).$_optionName = "headerFilter";
(DxColumnHeaderFilter as any).$_expectedChildren = {
  columnHeaderFilterSearch: { isCollectionItem: false, optionName: "search" },
  search: { isCollectionItem: false, optionName: "search" }
};

const DxColumnHeaderFilterSearchConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:editorOptions": null,
    "update:enabled": null,
    "update:mode": null,
    "update:searchExpr": null,
    "update:timeout": null,
  },
  props: {
    editorOptions: {},
    enabled: Boolean,
    mode: String as PropType<"contains" | "startswith" | "equals">,
    searchExpr: [Array, Function, String] as PropType<(Array<Function> | Array<string>) | Function | string>,
    timeout: Number
  }
};

prepareConfigurationComponentConfig(DxColumnHeaderFilterSearchConfig);

const DxColumnHeaderFilterSearch = defineComponent(DxColumnHeaderFilterSearchConfig);

(DxColumnHeaderFilterSearch as any).$_optionName = "search";

const DxColumnLookupConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowClearing": null,
    "update:calculateCellValue": null,
    "update:dataSource": null,
    "update:displayExpr": null,
    "update:valueExpr": null,
  },
  props: {
    allowClearing: Boolean,
    calculateCellValue: Function as PropType<(rowData: Object) => any>,
    dataSource: {},
    displayExpr: [Function, String] as PropType<((data: Object) => string) | string>,
    valueExpr: String
  }
};

prepareConfigurationComponentConfig(DxColumnLookupConfig);

const DxColumnLookup = defineComponent(DxColumnLookupConfig);

(DxColumnLookup as any).$_optionName = "lookup";

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

const DxCursorOffsetConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:x": null,
    "update:y": null,
  },
  props: {
    x: Number,
    y: Number
  }
};

prepareConfigurationComponentConfig(DxCursorOffsetConfig);

const DxCursorOffset = defineComponent(DxCursorOffsetConfig);

(DxCursorOffset as any).$_optionName = "cursorOffset";

const DxCustomOperationConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:calculateFilterExpression": null,
    "update:caption": null,
    "update:customizeText": null,
    "update:dataTypes": null,
    "update:editorTemplate": null,
    "update:hasValue": null,
    "update:icon": null,
    "update:name": null,
  },
  props: {
    calculateFilterExpression: Function as PropType<(filterValue: any, field: Object) => (string | Function | Array<any>)>,
    caption: String,
    customizeText: Function as PropType<(fieldInfo: Object) => string>,
    dataTypes: Array as PropType<Array<"string" | "number" | "date" | "boolean" | "object" | "datetime">>,
    editorTemplate: {},
    hasValue: Boolean,
    icon: String,
    name: String
  }
};

prepareConfigurationComponentConfig(DxCustomOperationConfig);

const DxCustomOperation = defineComponent(DxCustomOperationConfig);

(DxCustomOperation as any).$_optionName = "customOperations";
(DxCustomOperation as any).$_isCollectionItem = true;

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

const DxDataGridHeaderFilterConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowSearch": null,
    "update:allowSelectAll": null,
    "update:height": null,
    "update:search": null,
    "update:searchTimeout": null,
    "update:texts": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    allowSearch: Boolean,
    allowSelectAll: Boolean,
    height: [Number, String],
    search: Object,
    searchTimeout: Number,
    texts: Object,
    visible: Boolean,
    width: [Number, String]
  }
};

prepareConfigurationComponentConfig(DxDataGridHeaderFilterConfig);

const DxDataGridHeaderFilter = defineComponent(DxDataGridHeaderFilterConfig);

(DxDataGridHeaderFilter as any).$_optionName = "headerFilter";
(DxDataGridHeaderFilter as any).$_expectedChildren = {
  dataGridHeaderFilterSearch: { isCollectionItem: false, optionName: "search" },
  dataGridHeaderFilterTexts: { isCollectionItem: false, optionName: "texts" },
  search: { isCollectionItem: false, optionName: "search" },
  texts: { isCollectionItem: false, optionName: "texts" }
};

const DxDataGridHeaderFilterSearchConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:editorOptions": null,
    "update:enabled": null,
    "update:mode": null,
    "update:timeout": null,
  },
  props: {
    editorOptions: {},
    enabled: Boolean,
    mode: String as PropType<"contains" | "startswith" | "equals">,
    timeout: Number
  }
};

prepareConfigurationComponentConfig(DxDataGridHeaderFilterSearchConfig);

const DxDataGridHeaderFilterSearch = defineComponent(DxDataGridHeaderFilterSearchConfig);

(DxDataGridHeaderFilterSearch as any).$_optionName = "search";

const DxDataGridHeaderFilterTextsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:cancel": null,
    "update:emptyValue": null,
    "update:ok": null,
  },
  props: {
    cancel: String,
    emptyValue: String,
    ok: String
  }
};

prepareConfigurationComponentConfig(DxDataGridHeaderFilterTextsConfig);

const DxDataGridHeaderFilterTexts = defineComponent(DxDataGridHeaderFilterTextsConfig);

(DxDataGridHeaderFilterTexts as any).$_optionName = "texts";

const DxDataGridSelectionConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowSelectAll": null,
    "update:deferred": null,
    "update:mode": null,
    "update:selectAllMode": null,
    "update:sensitivity": null,
    "update:showCheckBoxesMode": null,
  },
  props: {
    allowSelectAll: Boolean,
    deferred: Boolean,
    mode: String as PropType<"single" | "multiple" | "none">,
    selectAllMode: String as PropType<"allPages" | "page">,
    sensitivity: String as PropType<"base" | "accent" | "case" | "variant">,
    showCheckBoxesMode: String as PropType<"always" | "none" | "onClick" | "onLongTap">
  }
};

prepareConfigurationComponentConfig(DxDataGridSelectionConfig);

const DxDataGridSelection = defineComponent(DxDataGridSelectionConfig);

(DxDataGridSelection as any).$_optionName = "selection";

const DxEditingConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowAdding": null,
    "update:allowDeleting": null,
    "update:allowUpdating": null,
    "update:changes": null,
    "update:confirmDelete": null,
    "update:editColumnName": null,
    "update:editRowKey": null,
    "update:form": null,
    "update:mode": null,
    "update:newRowPosition": null,
    "update:popup": null,
    "update:refreshMode": null,
    "update:selectTextOnEditStart": null,
    "update:startEditAction": null,
    "update:texts": null,
    "update:useIcons": null,
  },
  props: {
    allowAdding: Boolean,
    allowDeleting: [Boolean, Function] as PropType<Boolean | ((options: Object) => Boolean)>,
    allowUpdating: [Boolean, Function] as PropType<Boolean | ((options: Object) => Boolean)>,
    changes: Array as PropType<Array<Object>>,
    confirmDelete: Boolean,
    editColumnName: String,
    editRowKey: {},
    form: Object,
    mode: String as PropType<"batch" | "cell" | "row" | "form" | "popup">,
    newRowPosition: String as PropType<"first" | "last" | "pageBottom" | "pageTop" | "viewportBottom" | "viewportTop">,
    popup: Object,
    refreshMode: String as PropType<"full" | "reshape" | "repaint">,
    selectTextOnEditStart: Boolean,
    startEditAction: String as PropType<"click" | "dblClick">,
    texts: {},
    useIcons: Boolean
  }
};

prepareConfigurationComponentConfig(DxEditingConfig);

const DxEditing = defineComponent(DxEditingConfig);

(DxEditing as any).$_optionName = "editing";
(DxEditing as any).$_expectedChildren = {
  change: { isCollectionItem: true, optionName: "changes" },
  editingTexts: { isCollectionItem: false, optionName: "texts" },
  form: { isCollectionItem: false, optionName: "form" },
  popup: { isCollectionItem: false, optionName: "popup" },
  texts: { isCollectionItem: false, optionName: "texts" }
};

const DxEditingTextsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:addRow": null,
    "update:cancelAllChanges": null,
    "update:cancelRowChanges": null,
    "update:confirmDeleteMessage": null,
    "update:confirmDeleteTitle": null,
    "update:deleteRow": null,
    "update:editRow": null,
    "update:saveAllChanges": null,
    "update:saveRowChanges": null,
    "update:undeleteRow": null,
    "update:validationCancelChanges": null,
  },
  props: {
    addRow: String,
    cancelAllChanges: String,
    cancelRowChanges: String,
    confirmDeleteMessage: String,
    confirmDeleteTitle: String,
    deleteRow: String,
    editRow: String,
    saveAllChanges: String,
    saveRowChanges: String,
    undeleteRow: String,
    validationCancelChanges: String
  }
};

prepareConfigurationComponentConfig(DxEditingTextsConfig);

const DxEditingTexts = defineComponent(DxEditingTextsConfig);

(DxEditingTexts as any).$_optionName = "texts";

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

const DxExportConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowExportSelectedData": null,
    "update:enabled": null,
    "update:formats": null,
    "update:texts": null,
  },
  props: {
    allowExportSelectedData: Boolean,
    enabled: Boolean,
    formats: Array as PropType<Array<"pdf" | "xlsx"> | Array<string>>,
    texts: Object
  }
};

prepareConfigurationComponentConfig(DxExportConfig);

const DxExport = defineComponent(DxExportConfig);

(DxExport as any).$_optionName = "export";
(DxExport as any).$_expectedChildren = {
  exportTexts: { isCollectionItem: false, optionName: "texts" },
  texts: { isCollectionItem: false, optionName: "texts" }
};

const DxExportTextsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:exportAll": null,
    "update:exportSelectedRows": null,
    "update:exportTo": null,
  },
  props: {
    exportAll: String,
    exportSelectedRows: String,
    exportTo: String
  }
};

prepareConfigurationComponentConfig(DxExportTextsConfig);

const DxExportTexts = defineComponent(DxExportTextsConfig);

(DxExportTexts as any).$_optionName = "texts";

const DxFieldConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:calculateFilterExpression": null,
    "update:caption": null,
    "update:customizeText": null,
    "update:dataField": null,
    "update:dataType": null,
    "update:editorOptions": null,
    "update:editorTemplate": null,
    "update:falseText": null,
    "update:filterOperations": null,
    "update:format": null,
    "update:lookup": null,
    "update:name": null,
    "update:trueText": null,
  },
  props: {
    calculateFilterExpression: Function as PropType<(filterValue: any, selectedFilterOperation: string) => (string | Function | Array<any>)>,
    caption: String,
    customizeText: Function as PropType<(fieldInfo: Object) => string>,
    dataField: String,
    dataType: String as PropType<"string" | "number" | "date" | "boolean" | "object" | "datetime">,
    editorOptions: {},
    editorTemplate: {},
    falseText: String,
    filterOperations: Array as PropType<Array<"=" | "<>" | "<" | "<=" | ">" | ">=" | "contains" | "endswith" | "isblank" | "isnotblank" | "notcontains" | "startswith" | "between"> | Array<string>>,
    format: [Object, Function, String] as PropType<Object | ((value: number | Date) => string) | ("billions" | "currency" | "day" | "decimal" | "exponential" | "fixedPoint" | "largeNumber" | "longDate" | "longTime" | "millions" | "millisecond" | "month" | "monthAndDay" | "monthAndYear" | "percent" | "quarter" | "quarterAndYear" | "shortDate" | "shortTime" | "thousands" | "trillions" | "year" | "dayOfWeek" | "hour" | "longDateLongTime" | "minute" | "second" | "shortDateShortTime")>,
    lookup: Object,
    name: String,
    trueText: String
  }
};

prepareConfigurationComponentConfig(DxFieldConfig);

const DxField = defineComponent(DxFieldConfig);

(DxField as any).$_optionName = "fields";
(DxField as any).$_isCollectionItem = true;
(DxField as any).$_expectedChildren = {
  fieldLookup: { isCollectionItem: false, optionName: "lookup" },
  format: { isCollectionItem: false, optionName: "format" },
  lookup: { isCollectionItem: false, optionName: "lookup" }
};

const DxFieldLookupConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowClearing": null,
    "update:dataSource": null,
    "update:displayExpr": null,
    "update:valueExpr": null,
  },
  props: {
    allowClearing: Boolean,
    dataSource: [Array, Object] as PropType<Array<any> | Object>,
    displayExpr: [Function, String] as PropType<((data: Object) => string) | string>,
    valueExpr: [Function, String] as PropType<((data: Object) => (string | number | Boolean)) | string>
  }
};

prepareConfigurationComponentConfig(DxFieldLookupConfig);

const DxFieldLookup = defineComponent(DxFieldLookupConfig);

(DxFieldLookup as any).$_optionName = "lookup";

const DxFilterBuilderConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:allowHierarchicalFields": null,
    "update:bindingOptions": null,
    "update:customOperations": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:fields": null,
    "update:filterOperationDescriptions": null,
    "update:focusStateEnabled": null,
    "update:groupOperationDescriptions": null,
    "update:groupOperations": null,
    "update:height": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:maxGroupLevel": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onEditorPrepared": null,
    "update:onEditorPreparing": null,
    "update:onInitialized": null,
    "update:onOptionChanged": null,
    "update:onValueChanged": null,
    "update:rtlEnabled": null,
    "update:tabIndex": null,
    "update:value": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    accessKey: String,
    activeStateEnabled: Boolean,
    allowHierarchicalFields: Boolean,
    bindingOptions: Object,
    customOperations: Array as PropType<Array<Object>>,
    disabled: Boolean,
    elementAttr: Object,
    fields: Array as PropType<Array<Object>>,
    filterOperationDescriptions: Object,
    focusStateEnabled: Boolean,
    groupOperationDescriptions: Object,
    groupOperations: Array as PropType<Array<"and" | "or" | "notAnd" | "notOr">>,
    height: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    hint: String,
    hoverStateEnabled: Boolean,
    maxGroupLevel: Number,
    onContentReady: Function as PropType<(e: FilterBuilderContentReadyEvent) => void>,
    onDisposing: Function as PropType<(e: FilterBuilderDisposingEvent) => void>,
    onEditorPrepared: Function as PropType<(e: FilterBuilderEditorPreparedEvent) => void>,
    onEditorPreparing: Function as PropType<(e: FilterBuilderEditorPreparingEvent) => void>,
    onInitialized: Function as PropType<(e: FilterBuilderInitializedEvent) => void>,
    onOptionChanged: Function as PropType<(e: FilterBuilderOptionChangedEvent) => void>,
    onValueChanged: Function as PropType<(e: ValueChangedEvent) => void>,
    rtlEnabled: Boolean,
    tabIndex: Number,
    value: [Array, Function, String] as PropType<Array<any> | Function | string>,
    visible: Boolean,
    width: [Function, Number, String] as PropType<(() => (number | string)) | number | string>
  }
};

prepareConfigurationComponentConfig(DxFilterBuilderConfig);

const DxFilterBuilder = defineComponent(DxFilterBuilderConfig);

(DxFilterBuilder as any).$_optionName = "filterBuilder";
(DxFilterBuilder as any).$_expectedChildren = {
  customOperation: { isCollectionItem: true, optionName: "customOperations" },
  field: { isCollectionItem: true, optionName: "fields" },
  filterOperationDescriptions: { isCollectionItem: false, optionName: "filterOperationDescriptions" },
  groupOperationDescriptions: { isCollectionItem: false, optionName: "groupOperationDescriptions" }
};

const DxFilterBuilderPopupConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:animation": null,
    "update:bindingOptions": null,
    "update:closeOnOutsideClick": null,
    "update:container": null,
    "update:contentTemplate": null,
    "update:deferRendering": null,
    "update:disabled": null,
    "update:dragAndResizeArea": null,
    "update:dragEnabled": null,
    "update:dragOutsideBoundary": null,
    "update:enableBodyScroll": null,
    "update:focusStateEnabled": null,
    "update:fullScreen": null,
    "update:height": null,
    "update:hideOnOutsideClick": null,
    "update:hideOnParentScroll": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:maxHeight": null,
    "update:maxWidth": null,
    "update:minHeight": null,
    "update:minWidth": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onHidden": null,
    "update:onHiding": null,
    "update:onInitialized": null,
    "update:onOptionChanged": null,
    "update:onResize": null,
    "update:onResizeEnd": null,
    "update:onResizeStart": null,
    "update:onShowing": null,
    "update:onShown": null,
    "update:onTitleRendered": null,
    "update:position": null,
    "update:resizeEnabled": null,
    "update:restorePosition": null,
    "update:rtlEnabled": null,
    "update:shading": null,
    "update:shadingColor": null,
    "update:showCloseButton": null,
    "update:showTitle": null,
    "update:tabIndex": null,
    "update:title": null,
    "update:titleTemplate": null,
    "update:toolbarItems": null,
    "update:visible": null,
    "update:width": null,
    "update:wrapperAttr": null,
  },
  props: {
    accessKey: String,
    animation: Object,
    bindingOptions: Object,
    closeOnOutsideClick: [Boolean, Function] as PropType<Boolean | ((event: Object) => Boolean)>,
    container: {},
    contentTemplate: {},
    deferRendering: Boolean,
    disabled: Boolean,
    dragAndResizeArea: {},
    dragEnabled: Boolean,
    dragOutsideBoundary: Boolean,
    enableBodyScroll: Boolean,
    focusStateEnabled: Boolean,
    fullScreen: Boolean,
    height: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    hideOnOutsideClick: [Boolean, Function] as PropType<Boolean | ((event: Object) => Boolean)>,
    hideOnParentScroll: Boolean,
    hint: String,
    hoverStateEnabled: Boolean,
    maxHeight: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    maxWidth: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    minHeight: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    minWidth: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    onContentReady: Function as PropType<(e: Object) => void>,
    onDisposing: Function as PropType<(e: Object) => void>,
    onHidden: Function as PropType<(e: Object) => void>,
    onHiding: Function as PropType<(e: Object) => void>,
    onInitialized: Function as PropType<(e: Object) => void>,
    onOptionChanged: Function as PropType<(e: Object) => void>,
    onResize: Function as PropType<(e: Object) => void>,
    onResizeEnd: Function as PropType<(e: Object) => void>,
    onResizeStart: Function as PropType<(e: Object) => void>,
    onShowing: Function as PropType<(e: Object) => void>,
    onShown: Function as PropType<(e: Object) => void>,
    onTitleRendered: Function as PropType<(e: Object) => void>,
    position: [Function, Object, String] as PropType<(() => void) | Object | ("bottom" | "center" | "left" | "left bottom" | "left top" | "right" | "right bottom" | "right top" | "top")>,
    resizeEnabled: Boolean,
    restorePosition: Boolean,
    rtlEnabled: Boolean,
    shading: Boolean,
    shadingColor: String,
    showCloseButton: Boolean,
    showTitle: Boolean,
    tabIndex: Number,
    title: String,
    titleTemplate: {},
    toolbarItems: Array as PropType<Array<Object>>,
    visible: Boolean,
    width: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    wrapperAttr: {}
  }
};

prepareConfigurationComponentConfig(DxFilterBuilderPopupConfig);

const DxFilterBuilderPopup = defineComponent(DxFilterBuilderPopupConfig);

(DxFilterBuilderPopup as any).$_optionName = "filterBuilderPopup";

const DxFilterOperationDescriptionsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:between": null,
    "update:contains": null,
    "update:endsWith": null,
    "update:equal": null,
    "update:greaterThan": null,
    "update:greaterThanOrEqual": null,
    "update:isBlank": null,
    "update:isNotBlank": null,
    "update:lessThan": null,
    "update:lessThanOrEqual": null,
    "update:notContains": null,
    "update:notEqual": null,
    "update:startsWith": null,
  },
  props: {
    between: String,
    contains: String,
    endsWith: String,
    equal: String,
    greaterThan: String,
    greaterThanOrEqual: String,
    isBlank: String,
    isNotBlank: String,
    lessThan: String,
    lessThanOrEqual: String,
    notContains: String,
    notEqual: String,
    startsWith: String
  }
};

prepareConfigurationComponentConfig(DxFilterOperationDescriptionsConfig);

const DxFilterOperationDescriptions = defineComponent(DxFilterOperationDescriptionsConfig);

(DxFilterOperationDescriptions as any).$_optionName = "filterOperationDescriptions";

const DxFilterPanelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:customizeText": null,
    "update:filterEnabled": null,
    "update:texts": null,
    "update:visible": null,
  },
  props: {
    customizeText: Function as PropType<(e: Object) => string>,
    filterEnabled: Boolean,
    texts: Object,
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxFilterPanelConfig);

const DxFilterPanel = defineComponent(DxFilterPanelConfig);

(DxFilterPanel as any).$_optionName = "filterPanel";
(DxFilterPanel as any).$_expectedChildren = {
  filterPanelTexts: { isCollectionItem: false, optionName: "texts" },
  texts: { isCollectionItem: false, optionName: "texts" }
};

const DxFilterPanelTextsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:clearFilter": null,
    "update:createFilter": null,
    "update:filterEnabledHint": null,
  },
  props: {
    clearFilter: String,
    createFilter: String,
    filterEnabledHint: String
  }
};

prepareConfigurationComponentConfig(DxFilterPanelTextsConfig);

const DxFilterPanelTexts = defineComponent(DxFilterPanelTextsConfig);

(DxFilterPanelTexts as any).$_optionName = "texts";

const DxFilterRowConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:applyFilter": null,
    "update:applyFilterText": null,
    "update:betweenEndText": null,
    "update:betweenStartText": null,
    "update:operationDescriptions": null,
    "update:resetOperationText": null,
    "update:showAllText": null,
    "update:showOperationChooser": null,
    "update:visible": null,
  },
  props: {
    applyFilter: String as PropType<"auto" | "onClick">,
    applyFilterText: String,
    betweenEndText: String,
    betweenStartText: String,
    operationDescriptions: Object,
    resetOperationText: String,
    showAllText: String,
    showOperationChooser: Boolean,
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxFilterRowConfig);

const DxFilterRow = defineComponent(DxFilterRowConfig);

(DxFilterRow as any).$_optionName = "filterRow";
(DxFilterRow as any).$_expectedChildren = {
  operationDescriptions: { isCollectionItem: false, optionName: "operationDescriptions" }
};

const DxFormConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:alignItemLabels": null,
    "update:alignItemLabelsInAllGroups": null,
    "update:bindingOptions": null,
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
  props: {
    accessKey: String,
    activeStateEnabled: Boolean,
    alignItemLabels: Boolean,
    alignItemLabelsInAllGroups: Boolean,
    bindingOptions: Object,
    colCount: [Number, String] as PropType<number | "auto">,
    colCountByScreen: Object,
    customizeItem: Function as PropType<(item: Object) => void>,
    disabled: Boolean,
    elementAttr: Object,
    focusStateEnabled: Boolean,
    formData: {},
    height: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    hint: String,
    hoverStateEnabled: Boolean,
    isDirty: Boolean,
    items: Array as PropType<Array<Object>>,
    labelLocation: String as PropType<"left" | "right" | "top">,
    labelMode: String as PropType<"static" | "floating" | "hidden" | "outside">,
    minColWidth: Number,
    onContentReady: Function as PropType<(e: FormContentReadyEvent) => void>,
    onDisposing: Function as PropType<(e: FormDisposingEvent) => void>,
    onEditorEnterKey: Function as PropType<(e: EditorEnterKeyEvent) => void>,
    onFieldDataChanged: Function as PropType<(e: FieldDataChangedEvent) => void>,
    onInitialized: Function as PropType<(e: FormInitializedEvent) => void>,
    onOptionChanged: Function as PropType<(e: FormOptionChangedEvent) => void>,
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
  }
};

prepareConfigurationComponentConfig(DxFormConfig);

const DxForm = defineComponent(DxFormConfig);

(DxForm as any).$_optionName = "form";
(DxForm as any).$_expectedChildren = {
  colCountByScreen: { isCollectionItem: false, optionName: "colCountByScreen" }
};

const DxFormatConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:currency": null,
    "update:formatter": null,
    "update:parser": null,
    "update:precision": null,
    "update:type": null,
    "update:useCurrencyAccountingStyle": null,
  },
  props: {
    currency: String,
    formatter: Function as PropType<(value: number | Date) => string>,
    parser: Function as PropType<(value: string) => (number | Date)>,
    precision: Number,
    type: String as PropType<"billions" | "currency" | "day" | "decimal" | "exponential" | "fixedPoint" | "largeNumber" | "longDate" | "longTime" | "millions" | "millisecond" | "month" | "monthAndDay" | "monthAndYear" | "percent" | "quarter" | "quarterAndYear" | "shortDate" | "shortTime" | "thousands" | "trillions" | "year" | "dayOfWeek" | "hour" | "longDateLongTime" | "minute" | "second" | "shortDateShortTime">,
    useCurrencyAccountingStyle: Boolean
  }
};

prepareConfigurationComponentConfig(DxFormatConfig);

const DxFormat = defineComponent(DxFormatConfig);

(DxFormat as any).$_optionName = "format";

const DxFormItemConfig = {
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
    validationRules: Array as PropType<Array<Object>>,
    visible: Boolean,
    visibleIndex: Number
  }
};

prepareConfigurationComponentConfig(DxFormItemConfig);

const DxFormItem = defineComponent(DxFormItemConfig);

(DxFormItem as any).$_optionName = "formItem";
(DxFormItem as any).$_expectedChildren = {
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

const DxFromConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:left": null,
    "update:opacity": null,
    "update:position": null,
    "update:scale": null,
    "update:top": null,
  },
  props: {
    left: Number,
    opacity: Number,
    position: Object,
    scale: Number,
    top: Number
  }
};

prepareConfigurationComponentConfig(DxFromConfig);

const DxFrom = defineComponent(DxFromConfig);

(DxFrom as any).$_optionName = "from";
(DxFrom as any).$_expectedChildren = {
  position: { isCollectionItem: false, optionName: "position" }
};

const DxGroupingConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowCollapsing": null,
    "update:autoExpandAll": null,
    "update:contextMenuEnabled": null,
    "update:expandMode": null,
    "update:texts": null,
  },
  props: {
    allowCollapsing: Boolean,
    autoExpandAll: Boolean,
    contextMenuEnabled: Boolean,
    expandMode: String as PropType<"buttonClick" | "rowClick">,
    texts: Object
  }
};

prepareConfigurationComponentConfig(DxGroupingConfig);

const DxGrouping = defineComponent(DxGroupingConfig);

(DxGrouping as any).$_optionName = "grouping";
(DxGrouping as any).$_expectedChildren = {
  groupingTexts: { isCollectionItem: false, optionName: "texts" },
  texts: { isCollectionItem: false, optionName: "texts" }
};

const DxGroupingTextsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:groupByThisColumn": null,
    "update:groupContinuedMessage": null,
    "update:groupContinuesMessage": null,
    "update:ungroup": null,
    "update:ungroupAll": null,
  },
  props: {
    groupByThisColumn: String,
    groupContinuedMessage: String,
    groupContinuesMessage: String,
    ungroup: String,
    ungroupAll: String
  }
};

prepareConfigurationComponentConfig(DxGroupingTextsConfig);

const DxGroupingTexts = defineComponent(DxGroupingTextsConfig);

(DxGroupingTexts as any).$_optionName = "texts";

const DxGroupItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:alignByColumn": null,
    "update:column": null,
    "update:customizeText": null,
    "update:displayFormat": null,
    "update:name": null,
    "update:showInColumn": null,
    "update:showInGroupFooter": null,
    "update:skipEmptyValues": null,
    "update:summaryType": null,
    "update:valueFormat": null,
  },
  props: {
    alignByColumn: Boolean,
    column: String,
    customizeText: Function as PropType<(itemInfo: Object) => string>,
    displayFormat: String,
    name: String,
    showInColumn: String,
    showInGroupFooter: Boolean,
    skipEmptyValues: Boolean,
    summaryType: String as PropType<"avg" | "count" | "custom" | "max" | "min" | "sum">,
    valueFormat: [Object, Function, String] as PropType<Object | ((value: number | Date) => string) | ("billions" | "currency" | "day" | "decimal" | "exponential" | "fixedPoint" | "largeNumber" | "longDate" | "longTime" | "millions" | "millisecond" | "month" | "monthAndDay" | "monthAndYear" | "percent" | "quarter" | "quarterAndYear" | "shortDate" | "shortTime" | "thousands" | "trillions" | "year" | "dayOfWeek" | "hour" | "longDateLongTime" | "minute" | "second" | "shortDateShortTime")>
  }
};

prepareConfigurationComponentConfig(DxGroupItemConfig);

const DxGroupItem = defineComponent(DxGroupItemConfig);

(DxGroupItem as any).$_optionName = "groupItems";
(DxGroupItem as any).$_isCollectionItem = true;
(DxGroupItem as any).$_expectedChildren = {
  valueFormat: { isCollectionItem: false, optionName: "valueFormat" }
};

const DxGroupOperationDescriptionsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:and": null,
    "update:notAnd": null,
    "update:notOr": null,
    "update:or": null,
  },
  props: {
    and: String,
    notAnd: String,
    notOr: String,
    or: String
  }
};

prepareConfigurationComponentConfig(DxGroupOperationDescriptionsConfig);

const DxGroupOperationDescriptions = defineComponent(DxGroupOperationDescriptionsConfig);

(DxGroupOperationDescriptions as any).$_optionName = "groupOperationDescriptions";

const DxGroupPanelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowColumnDragging": null,
    "update:emptyPanelText": null,
    "update:visible": null,
  },
  props: {
    allowColumnDragging: Boolean,
    emptyPanelText: String,
    visible: [Boolean, String] as PropType<Boolean | "auto">
  }
};

prepareConfigurationComponentConfig(DxGroupPanelConfig);

const DxGroupPanel = defineComponent(DxGroupPanelConfig);

(DxGroupPanel as any).$_optionName = "groupPanel";

const DxHeaderFilterConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowSearch": null,
    "update:allowSelectAll": null,
    "update:dataSource": null,
    "update:groupInterval": null,
    "update:height": null,
    "update:search": null,
    "update:searchMode": null,
    "update:searchTimeout": null,
    "update:texts": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    allowSearch: Boolean,
    allowSelectAll: Boolean,
    dataSource: {},
    groupInterval: [Number, String] as PropType<number | ("day" | "hour" | "minute" | "month" | "quarter" | "second" | "year")>,
    height: [Number, String],
    search: Object,
    searchMode: String as PropType<"contains" | "startswith" | "equals">,
    searchTimeout: Number,
    texts: Object,
    visible: Boolean,
    width: [Number, String]
  }
};

prepareConfigurationComponentConfig(DxHeaderFilterConfig);

const DxHeaderFilter = defineComponent(DxHeaderFilterConfig);

(DxHeaderFilter as any).$_optionName = "headerFilter";

const DxHideConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:complete": null,
    "update:delay": null,
    "update:direction": null,
    "update:duration": null,
    "update:easing": null,
    "update:from": null,
    "update:staggerDelay": null,
    "update:start": null,
    "update:to": null,
    "update:type": null,
  },
  props: {
    complete: Function as PropType<($element: any, config: Object) => void>,
    delay: Number,
    direction: String as PropType<"bottom" | "left" | "right" | "top">,
    duration: Number,
    easing: String,
    from: Object,
    staggerDelay: Number,
    start: Function as PropType<($element: any, config: Object) => void>,
    to: Object,
    type: String as PropType<"css" | "fade" | "fadeIn" | "fadeOut" | "pop" | "slide" | "slideIn" | "slideOut">
  }
};

prepareConfigurationComponentConfig(DxHideConfig);

const DxHide = defineComponent(DxHideConfig);

(DxHide as any).$_optionName = "hide";
(DxHide as any).$_expectedChildren = {
  from: { isCollectionItem: false, optionName: "from" },
  to: { isCollectionItem: false, optionName: "to" }
};

const DxIconsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:fix": null,
    "update:leftPosition": null,
    "update:rightPosition": null,
    "update:stickyPosition": null,
    "update:unfix": null,
  },
  props: {
    fix: String,
    leftPosition: String,
    rightPosition: String,
    stickyPosition: String,
    unfix: String
  }
};

prepareConfigurationComponentConfig(DxIconsConfig);

const DxIcons = defineComponent(DxIconsConfig);

(DxIcons as any).$_optionName = "icons";

const DxItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:cssClass": null,
    "update:disabled": null,
    "update:html": null,
    "update:locateInMenu": null,
    "update:location": null,
    "update:menuItemTemplate": null,
    "update:name": null,
    "update:options": null,
    "update:showText": null,
    "update:template": null,
    "update:text": null,
    "update:visible": null,
    "update:widget": null,
  },
  props: {
    cssClass: String,
    disabled: Boolean,
    html: String,
    locateInMenu: String as PropType<"always" | "auto" | "never">,
    location: String as PropType<"after" | "before" | "center">,
    menuItemTemplate: {},
    name: String as PropType<"addRowButton" | "applyFilterButton" | "columnChooserButton" | "exportButton" | "groupPanel" | "revertButton" | "saveButton" | "searchPanel">,
    options: {},
    showText: String as PropType<"always" | "inMenu">,
    template: {},
    text: String,
    visible: Boolean,
    widget: String as PropType<"dxAutocomplete" | "dxButton" | "dxButtonGroup" | "dxCheckBox" | "dxDateBox" | "dxDropDownButton" | "dxMenu" | "dxSelectBox" | "dxSwitch" | "dxTabs" | "dxTextBox">
  }
};

prepareConfigurationComponentConfig(DxItemConfig);

const DxItem = defineComponent(DxItemConfig);

(DxItem as any).$_optionName = "items";
(DxItem as any).$_isCollectionItem = true;

const DxKeyboardNavigationConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:editOnKeyPress": null,
    "update:enabled": null,
    "update:enterKeyAction": null,
    "update:enterKeyDirection": null,
  },
  props: {
    editOnKeyPress: Boolean,
    enabled: Boolean,
    enterKeyAction: String as PropType<"startEdit" | "moveFocus">,
    enterKeyDirection: String as PropType<"none" | "column" | "row">
  }
};

prepareConfigurationComponentConfig(DxKeyboardNavigationConfig);

const DxKeyboardNavigation = defineComponent(DxKeyboardNavigationConfig);

(DxKeyboardNavigation as any).$_optionName = "keyboardNavigation";

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

const DxLoadPanelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:enabled": null,
    "update:height": null,
    "update:indicatorSrc": null,
    "update:shading": null,
    "update:shadingColor": null,
    "update:showIndicator": null,
    "update:showPane": null,
    "update:text": null,
    "update:width": null,
  },
  props: {
    enabled: [Boolean, String] as PropType<Boolean | "auto">,
    height: [Number, String],
    indicatorSrc: String,
    shading: Boolean,
    shadingColor: String,
    showIndicator: Boolean,
    showPane: Boolean,
    text: String,
    width: [Number, String]
  }
};

prepareConfigurationComponentConfig(DxLoadPanelConfig);

const DxLoadPanel = defineComponent(DxLoadPanelConfig);

(DxLoadPanel as any).$_optionName = "loadPanel";

const DxLookupConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowClearing": null,
    "update:calculateCellValue": null,
    "update:dataSource": null,
    "update:displayExpr": null,
    "update:valueExpr": null,
  },
  props: {
    allowClearing: Boolean,
    calculateCellValue: Function as PropType<(rowData: Object) => any>,
    dataSource: {},
    displayExpr: [Function, String] as PropType<((data: Object) => string) | string>,
    valueExpr: [String, Function] as PropType<string | ((data: Object) => (string | number | Boolean))>
  }
};

prepareConfigurationComponentConfig(DxLookupConfig);

const DxLookup = defineComponent(DxLookupConfig);

(DxLookup as any).$_optionName = "lookup";

const DxMasterDetailConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:autoExpandAll": null,
    "update:enabled": null,
    "update:template": null,
  },
  props: {
    autoExpandAll: Boolean,
    enabled: Boolean,
    template: {}
  }
};

prepareConfigurationComponentConfig(DxMasterDetailConfig);

const DxMasterDetail = defineComponent(DxMasterDetailConfig);

(DxMasterDetail as any).$_optionName = "masterDetail";

const DxMyConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:x": null,
    "update:y": null,
  },
  props: {
    x: String as PropType<"center" | "left" | "right">,
    y: String as PropType<"bottom" | "center" | "top">
  }
};

prepareConfigurationComponentConfig(DxMyConfig);

const DxMy = defineComponent(DxMyConfig);

(DxMy as any).$_optionName = "my";

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

const DxOffsetConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:x": null,
    "update:y": null,
  },
  props: {
    x: Number,
    y: Number
  }
};

prepareConfigurationComponentConfig(DxOffsetConfig);

const DxOffset = defineComponent(DxOffsetConfig);

(DxOffset as any).$_optionName = "offset";

const DxOperationDescriptionsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:between": null,
    "update:contains": null,
    "update:endsWith": null,
    "update:equal": null,
    "update:greaterThan": null,
    "update:greaterThanOrEqual": null,
    "update:lessThan": null,
    "update:lessThanOrEqual": null,
    "update:notContains": null,
    "update:notEqual": null,
    "update:startsWith": null,
  },
  props: {
    between: String,
    contains: String,
    endsWith: String,
    equal: String,
    greaterThan: String,
    greaterThanOrEqual: String,
    lessThan: String,
    lessThanOrEqual: String,
    notContains: String,
    notEqual: String,
    startsWith: String
  }
};

prepareConfigurationComponentConfig(DxOperationDescriptionsConfig);

const DxOperationDescriptions = defineComponent(DxOperationDescriptionsConfig);

(DxOperationDescriptions as any).$_optionName = "operationDescriptions";

const DxPagerConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowedPageSizes": null,
    "update:displayMode": null,
    "update:infoText": null,
    "update:label": null,
    "update:showInfo": null,
    "update:showNavigationButtons": null,
    "update:showPageSizeSelector": null,
    "update:visible": null,
  },
  props: {
    allowedPageSizes: [Array, String] as PropType<(Array<number> | Array<"all" | "auto">) | "auto">,
    displayMode: String as PropType<"adaptive" | "compact" | "full">,
    infoText: String,
    label: String,
    showInfo: Boolean,
    showNavigationButtons: Boolean,
    showPageSizeSelector: Boolean,
    visible: [Boolean, String] as PropType<Boolean | "auto">
  }
};

prepareConfigurationComponentConfig(DxPagerConfig);

const DxPager = defineComponent(DxPagerConfig);

(DxPager as any).$_optionName = "pager";

const DxPagingConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:enabled": null,
    "update:pageIndex": null,
    "update:pageSize": null,
  },
  props: {
    enabled: Boolean,
    pageIndex: Number,
    pageSize: Number
  }
};

prepareConfigurationComponentConfig(DxPagingConfig);

const DxPaging = defineComponent(DxPagingConfig);

(DxPaging as any).$_optionName = "paging";

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

const DxPopupConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:animation": null,
    "update:bindingOptions": null,
    "update:closeOnOutsideClick": null,
    "update:container": null,
    "update:contentTemplate": null,
    "update:deferRendering": null,
    "update:disabled": null,
    "update:dragAndResizeArea": null,
    "update:dragEnabled": null,
    "update:dragOutsideBoundary": null,
    "update:enableBodyScroll": null,
    "update:focusStateEnabled": null,
    "update:fullScreen": null,
    "update:height": null,
    "update:hideOnOutsideClick": null,
    "update:hideOnParentScroll": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:maxHeight": null,
    "update:maxWidth": null,
    "update:minHeight": null,
    "update:minWidth": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onHidden": null,
    "update:onHiding": null,
    "update:onInitialized": null,
    "update:onOptionChanged": null,
    "update:onResize": null,
    "update:onResizeEnd": null,
    "update:onResizeStart": null,
    "update:onShowing": null,
    "update:onShown": null,
    "update:onTitleRendered": null,
    "update:position": null,
    "update:resizeEnabled": null,
    "update:restorePosition": null,
    "update:rtlEnabled": null,
    "update:shading": null,
    "update:shadingColor": null,
    "update:showCloseButton": null,
    "update:showTitle": null,
    "update:tabIndex": null,
    "update:title": null,
    "update:titleTemplate": null,
    "update:toolbarItems": null,
    "update:visible": null,
    "update:width": null,
    "update:wrapperAttr": null,
  },
  props: {
    accessKey: String,
    animation: Object,
    bindingOptions: Object,
    closeOnOutsideClick: [Boolean, Function] as PropType<Boolean | ((event: Object) => Boolean)>,
    container: {},
    contentTemplate: {},
    deferRendering: Boolean,
    disabled: Boolean,
    dragAndResizeArea: {},
    dragEnabled: Boolean,
    dragOutsideBoundary: Boolean,
    enableBodyScroll: Boolean,
    focusStateEnabled: Boolean,
    fullScreen: Boolean,
    height: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    hideOnOutsideClick: [Boolean, Function] as PropType<Boolean | ((event: Object) => Boolean)>,
    hideOnParentScroll: Boolean,
    hint: String,
    hoverStateEnabled: Boolean,
    maxHeight: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    maxWidth: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    minHeight: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    minWidth: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    onContentReady: Function as PropType<(e: Object) => void>,
    onDisposing: Function as PropType<(e: Object) => void>,
    onHidden: Function as PropType<(e: Object) => void>,
    onHiding: Function as PropType<(e: Object) => void>,
    onInitialized: Function as PropType<(e: Object) => void>,
    onOptionChanged: Function as PropType<(e: Object) => void>,
    onResize: Function as PropType<(e: Object) => void>,
    onResizeEnd: Function as PropType<(e: Object) => void>,
    onResizeStart: Function as PropType<(e: Object) => void>,
    onShowing: Function as PropType<(e: Object) => void>,
    onShown: Function as PropType<(e: Object) => void>,
    onTitleRendered: Function as PropType<(e: Object) => void>,
    position: [Function, Object, String] as PropType<(() => void) | Object | ("bottom" | "center" | "left" | "left bottom" | "left top" | "right" | "right bottom" | "right top" | "top")>,
    resizeEnabled: Boolean,
    restorePosition: Boolean,
    rtlEnabled: Boolean,
    shading: Boolean,
    shadingColor: String,
    showCloseButton: Boolean,
    showTitle: Boolean,
    tabIndex: Number,
    title: String,
    titleTemplate: {},
    toolbarItems: Array as PropType<Array<Object>>,
    visible: Boolean,
    width: [Function, Number, String] as PropType<(() => (number | string)) | number | string>,
    wrapperAttr: {}
  }
};

prepareConfigurationComponentConfig(DxPopupConfig);

const DxPopup = defineComponent(DxPopupConfig);

(DxPopup as any).$_optionName = "popup";
(DxPopup as any).$_expectedChildren = {
  animation: { isCollectionItem: false, optionName: "animation" },
  position: { isCollectionItem: false, optionName: "position" },
  toolbarItem: { isCollectionItem: true, optionName: "toolbarItems" }
};

const DxPositionConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:at": null,
    "update:boundary": null,
    "update:boundaryOffset": null,
    "update:collision": null,
    "update:my": null,
    "update:of": null,
    "update:offset": null,
  },
  props: {
    at: [Object, String] as PropType<Object | ("bottom" | "center" | "left" | "left bottom" | "left top" | "right" | "right bottom" | "right top" | "top")>,
    boundary: {},
    boundaryOffset: [Object, String],
    collision: [Object, String] as PropType<Object | ("fit" | "fit flip" | "fit flipfit" | "fit none" | "flip" | "flip fit" | "flip none" | "flipfit" | "flipfit fit" | "flipfit none" | "none" | "none fit" | "none flip" | "none flipfit")>,
    my: [Object, String] as PropType<Object | ("bottom" | "center" | "left" | "left bottom" | "left top" | "right" | "right bottom" | "right top" | "top")>,
    of: {},
    offset: [Object, String]
  }
};

prepareConfigurationComponentConfig(DxPositionConfig);

const DxPosition = defineComponent(DxPositionConfig);

(DxPosition as any).$_optionName = "position";

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

const DxRemoteOperationsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:filtering": null,
    "update:grouping": null,
    "update:groupPaging": null,
    "update:paging": null,
    "update:sorting": null,
    "update:summary": null,
  },
  props: {
    filtering: Boolean,
    grouping: Boolean,
    groupPaging: Boolean,
    paging: Boolean,
    sorting: Boolean,
    summary: Boolean
  }
};

prepareConfigurationComponentConfig(DxRemoteOperationsConfig);

const DxRemoteOperations = defineComponent(DxRemoteOperationsConfig);

(DxRemoteOperations as any).$_optionName = "remoteOperations";

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

const DxRowDraggingConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowDropInsideItem": null,
    "update:allowReordering": null,
    "update:autoScroll": null,
    "update:boundary": null,
    "update:container": null,
    "update:cursorOffset": null,
    "update:data": null,
    "update:dragDirection": null,
    "update:dragTemplate": null,
    "update:dropFeedbackMode": null,
    "update:filter": null,
    "update:group": null,
    "update:handle": null,
    "update:onAdd": null,
    "update:onDragChange": null,
    "update:onDragEnd": null,
    "update:onDragMove": null,
    "update:onDragStart": null,
    "update:onRemove": null,
    "update:onReorder": null,
    "update:scrollSensitivity": null,
    "update:scrollSpeed": null,
    "update:showDragIcons": null,
  },
  props: {
    allowDropInsideItem: Boolean,
    allowReordering: Boolean,
    autoScroll: Boolean,
    boundary: {},
    container: {},
    cursorOffset: [Object, String],
    data: {},
    dragDirection: String as PropType<"both" | "horizontal" | "vertical">,
    dragTemplate: {},
    dropFeedbackMode: String as PropType<"push" | "indicate">,
    filter: String,
    group: String,
    handle: String,
    onAdd: Function as PropType<(e: Object) => void>,
    onDragChange: Function as PropType<(e: Object) => void>,
    onDragEnd: Function as PropType<(e: Object) => void>,
    onDragMove: Function as PropType<(e: Object) => void>,
    onDragStart: Function as PropType<(e: Object) => void>,
    onRemove: Function as PropType<(e: Object) => void>,
    onReorder: Function as PropType<(e: Object) => void>,
    scrollSensitivity: Number,
    scrollSpeed: Number,
    showDragIcons: Boolean
  }
};

prepareConfigurationComponentConfig(DxRowDraggingConfig);

const DxRowDragging = defineComponent(DxRowDraggingConfig);

(DxRowDragging as any).$_optionName = "rowDragging";
(DxRowDragging as any).$_expectedChildren = {
  cursorOffset: { isCollectionItem: false, optionName: "cursorOffset" }
};

const DxScrollingConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:columnRenderingMode": null,
    "update:mode": null,
    "update:preloadEnabled": null,
    "update:renderAsync": null,
    "update:rowRenderingMode": null,
    "update:scrollByContent": null,
    "update:scrollByThumb": null,
    "update:showScrollbar": null,
    "update:useNative": null,
  },
  props: {
    columnRenderingMode: String as PropType<"standard" | "virtual">,
    mode: String as PropType<"infinite" | "standard" | "virtual">,
    preloadEnabled: Boolean,
    renderAsync: Boolean,
    rowRenderingMode: String as PropType<"standard" | "virtual">,
    scrollByContent: Boolean,
    scrollByThumb: Boolean,
    showScrollbar: String as PropType<"always" | "never" | "onHover" | "onScroll">,
    useNative: [Boolean, String] as PropType<Boolean | "auto">
  }
};

prepareConfigurationComponentConfig(DxScrollingConfig);

const DxScrolling = defineComponent(DxScrollingConfig);

(DxScrolling as any).$_optionName = "scrolling";

const DxSearchConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:editorOptions": null,
    "update:enabled": null,
    "update:mode": null,
    "update:searchExpr": null,
    "update:timeout": null,
  },
  props: {
    editorOptions: {},
    enabled: Boolean,
    mode: String as PropType<"contains" | "startswith" | "equals">,
    searchExpr: [Array, Function, String] as PropType<(Array<Function> | Array<string>) | Function | string>,
    timeout: Number
  }
};

prepareConfigurationComponentConfig(DxSearchConfig);

const DxSearch = defineComponent(DxSearchConfig);

(DxSearch as any).$_optionName = "search";

const DxSearchPanelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:highlightCaseSensitive": null,
    "update:highlightSearchText": null,
    "update:placeholder": null,
    "update:searchVisibleColumnsOnly": null,
    "update:text": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    highlightCaseSensitive: Boolean,
    highlightSearchText: Boolean,
    placeholder: String,
    searchVisibleColumnsOnly: Boolean,
    text: String,
    visible: Boolean,
    width: [Number, String]
  }
};

prepareConfigurationComponentConfig(DxSearchPanelConfig);

const DxSearchPanel = defineComponent(DxSearchPanelConfig);

(DxSearchPanel as any).$_optionName = "searchPanel";

const DxSelectionConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowSelectAll": null,
    "update:deferred": null,
    "update:mode": null,
    "update:recursive": null,
    "update:selectAllMode": null,
    "update:selectByClick": null,
    "update:sensitivity": null,
    "update:showCheckBoxesMode": null,
  },
  props: {
    allowSelectAll: Boolean,
    deferred: Boolean,
    mode: String as PropType<"single" | "multiple" | "none">,
    recursive: Boolean,
    selectAllMode: String as PropType<"allPages" | "page">,
    selectByClick: Boolean,
    sensitivity: String as PropType<"base" | "accent" | "case" | "variant">,
    showCheckBoxesMode: String as PropType<"always" | "none" | "onClick" | "onLongTap">
  }
};

prepareConfigurationComponentConfig(DxSelectionConfig);

const DxSelection = defineComponent(DxSelectionConfig);

(DxSelection as any).$_optionName = "selection";

const DxShowConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:complete": null,
    "update:delay": null,
    "update:direction": null,
    "update:duration": null,
    "update:easing": null,
    "update:from": null,
    "update:staggerDelay": null,
    "update:start": null,
    "update:to": null,
    "update:type": null,
  },
  props: {
    complete: Function as PropType<($element: any, config: Object) => void>,
    delay: Number,
    direction: String as PropType<"bottom" | "left" | "right" | "top">,
    duration: Number,
    easing: String,
    from: Object,
    staggerDelay: Number,
    start: Function as PropType<($element: any, config: Object) => void>,
    to: Object,
    type: String as PropType<"css" | "fade" | "fadeIn" | "fadeOut" | "pop" | "slide" | "slideIn" | "slideOut">
  }
};

prepareConfigurationComponentConfig(DxShowConfig);

const DxShow = defineComponent(DxShowConfig);

(DxShow as any).$_optionName = "show";

const DxSortByGroupSummaryInfoConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:groupColumn": null,
    "update:sortOrder": null,
    "update:summaryItem": null,
  },
  props: {
    groupColumn: String,
    sortOrder: String as PropType<"asc" | "desc">,
    summaryItem: [Number, String]
  }
};

prepareConfigurationComponentConfig(DxSortByGroupSummaryInfoConfig);

const DxSortByGroupSummaryInfo = defineComponent(DxSortByGroupSummaryInfoConfig);

(DxSortByGroupSummaryInfo as any).$_optionName = "sortByGroupSummaryInfo";
(DxSortByGroupSummaryInfo as any).$_isCollectionItem = true;

const DxSortingConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:ascendingText": null,
    "update:clearText": null,
    "update:descendingText": null,
    "update:mode": null,
    "update:showSortIndexes": null,
  },
  props: {
    ascendingText: String,
    clearText: String,
    descendingText: String,
    mode: String as PropType<"single" | "multiple" | "none">,
    showSortIndexes: Boolean
  }
};

prepareConfigurationComponentConfig(DxSortingConfig);

const DxSorting = defineComponent(DxSortingConfig);

(DxSorting as any).$_optionName = "sorting";

const DxStateStoringConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:customLoad": null,
    "update:customSave": null,
    "update:enabled": null,
    "update:savingTimeout": null,
    "update:storageKey": null,
    "update:type": null,
  },
  props: {
    customLoad: Function as PropType<() => any>,
    customSave: Function as PropType<(gridState: Object) => void>,
    enabled: Boolean,
    savingTimeout: Number,
    storageKey: String,
    type: String as PropType<"custom" | "localStorage" | "sessionStorage">
  }
};

prepareConfigurationComponentConfig(DxStateStoringConfig);

const DxStateStoring = defineComponent(DxStateStoringConfig);

(DxStateStoring as any).$_optionName = "stateStoring";

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

const DxSummaryConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:calculateCustomSummary": null,
    "update:groupItems": null,
    "update:recalculateWhileEditing": null,
    "update:skipEmptyValues": null,
    "update:texts": null,
    "update:totalItems": null,
  },
  props: {
    calculateCustomSummary: Function as PropType<(options: Object) => void>,
    groupItems: Array as PropType<Array<Object>>,
    recalculateWhileEditing: Boolean,
    skipEmptyValues: Boolean,
    texts: Object,
    totalItems: Array as PropType<Array<Object>>
  }
};

prepareConfigurationComponentConfig(DxSummaryConfig);

const DxSummary = defineComponent(DxSummaryConfig);

(DxSummary as any).$_optionName = "summary";
(DxSummary as any).$_expectedChildren = {
  groupItem: { isCollectionItem: true, optionName: "groupItems" },
  summaryTexts: { isCollectionItem: false, optionName: "texts" },
  texts: { isCollectionItem: false, optionName: "texts" },
  totalItem: { isCollectionItem: true, optionName: "totalItems" }
};

const DxSummaryTextsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:avg": null,
    "update:avgOtherColumn": null,
    "update:count": null,
    "update:max": null,
    "update:maxOtherColumn": null,
    "update:min": null,
    "update:minOtherColumn": null,
    "update:sum": null,
    "update:sumOtherColumn": null,
  },
  props: {
    avg: String,
    avgOtherColumn: String,
    count: String,
    max: String,
    maxOtherColumn: String,
    min: String,
    minOtherColumn: String,
    sum: String,
    sumOtherColumn: String
  }
};

prepareConfigurationComponentConfig(DxSummaryTextsConfig);

const DxSummaryTexts = defineComponent(DxSummaryTextsConfig);

(DxSummaryTexts as any).$_optionName = "texts";

const DxTextsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:addRow": null,
    "update:avg": null,
    "update:avgOtherColumn": null,
    "update:cancel": null,
    "update:cancelAllChanges": null,
    "update:cancelRowChanges": null,
    "update:clearFilter": null,
    "update:confirmDeleteMessage": null,
    "update:confirmDeleteTitle": null,
    "update:count": null,
    "update:createFilter": null,
    "update:deleteRow": null,
    "update:editRow": null,
    "update:emptyValue": null,
    "update:exportAll": null,
    "update:exportSelectedRows": null,
    "update:exportTo": null,
    "update:filterEnabledHint": null,
    "update:fix": null,
    "update:groupByThisColumn": null,
    "update:groupContinuedMessage": null,
    "update:groupContinuesMessage": null,
    "update:leftPosition": null,
    "update:max": null,
    "update:maxOtherColumn": null,
    "update:min": null,
    "update:minOtherColumn": null,
    "update:ok": null,
    "update:rightPosition": null,
    "update:saveAllChanges": null,
    "update:saveRowChanges": null,
    "update:stickPosition": null,
    "update:sum": null,
    "update:sumOtherColumn": null,
    "update:undeleteRow": null,
    "update:unfix": null,
    "update:ungroup": null,
    "update:ungroupAll": null,
    "update:validationCancelChanges": null,
  },
  props: {
    addRow: String,
    avg: String,
    avgOtherColumn: String,
    cancel: String,
    cancelAllChanges: String,
    cancelRowChanges: String,
    clearFilter: String,
    confirmDeleteMessage: String,
    confirmDeleteTitle: String,
    count: String,
    createFilter: String,
    deleteRow: String,
    editRow: String,
    emptyValue: String,
    exportAll: String,
    exportSelectedRows: String,
    exportTo: String,
    filterEnabledHint: String,
    fix: String,
    groupByThisColumn: String,
    groupContinuedMessage: String,
    groupContinuesMessage: String,
    leftPosition: String,
    max: String,
    maxOtherColumn: String,
    min: String,
    minOtherColumn: String,
    ok: String,
    rightPosition: String,
    saveAllChanges: String,
    saveRowChanges: String,
    stickPosition: String,
    sum: String,
    sumOtherColumn: String,
    undeleteRow: String,
    unfix: String,
    ungroup: String,
    ungroupAll: String,
    validationCancelChanges: String
  }
};

prepareConfigurationComponentConfig(DxTextsConfig);

const DxTexts = defineComponent(DxTextsConfig);

(DxTexts as any).$_optionName = "texts";

const DxToConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:left": null,
    "update:opacity": null,
    "update:position": null,
    "update:scale": null,
    "update:top": null,
  },
  props: {
    left: Number,
    opacity: Number,
    position: Object,
    scale: Number,
    top: Number
  }
};

prepareConfigurationComponentConfig(DxToConfig);

const DxTo = defineComponent(DxToConfig);

(DxTo as any).$_optionName = "to";

const DxToolbarConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:disabled": null,
    "update:items": null,
    "update:visible": null,
  },
  props: {
    disabled: Boolean,
    items: Array as PropType<Array<Object> | Array<"addRowButton" | "applyFilterButton" | "columnChooserButton" | "exportButton" | "groupPanel" | "revertButton" | "saveButton" | "searchPanel">>,
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxToolbarConfig);

const DxToolbar = defineComponent(DxToolbarConfig);

(DxToolbar as any).$_optionName = "toolbar";
(DxToolbar as any).$_expectedChildren = {
  item: { isCollectionItem: true, optionName: "items" }
};

const DxToolbarItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:cssClass": null,
    "update:disabled": null,
    "update:html": null,
    "update:locateInMenu": null,
    "update:location": null,
    "update:menuItemTemplate": null,
    "update:options": null,
    "update:showText": null,
    "update:template": null,
    "update:text": null,
    "update:toolbar": null,
    "update:visible": null,
    "update:widget": null,
  },
  props: {
    cssClass: String,
    disabled: Boolean,
    html: String,
    locateInMenu: String as PropType<"always" | "auto" | "never">,
    location: String as PropType<"after" | "before" | "center">,
    menuItemTemplate: {},
    options: {},
    showText: String as PropType<"always" | "inMenu">,
    template: {},
    text: String,
    toolbar: String as PropType<"bottom" | "top">,
    visible: Boolean,
    widget: String as PropType<"dxAutocomplete" | "dxButton" | "dxButtonGroup" | "dxCheckBox" | "dxDateBox" | "dxDropDownButton" | "dxMenu" | "dxSelectBox" | "dxSwitch" | "dxTabs" | "dxTextBox">
  }
};

prepareConfigurationComponentConfig(DxToolbarItemConfig);

const DxToolbarItem = defineComponent(DxToolbarItemConfig);

(DxToolbarItem as any).$_optionName = "toolbarItems";
(DxToolbarItem as any).$_isCollectionItem = true;

const DxTotalItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:alignment": null,
    "update:column": null,
    "update:cssClass": null,
    "update:customizeText": null,
    "update:displayFormat": null,
    "update:name": null,
    "update:showInColumn": null,
    "update:skipEmptyValues": null,
    "update:summaryType": null,
    "update:valueFormat": null,
  },
  props: {
    alignment: String as PropType<"center" | "left" | "right">,
    column: String,
    cssClass: String,
    customizeText: Function as PropType<(itemInfo: Object) => string>,
    displayFormat: String,
    name: String,
    showInColumn: String,
    skipEmptyValues: Boolean,
    summaryType: String as PropType<"avg" | "count" | "custom" | "max" | "min" | "sum">,
    valueFormat: [Object, Function, String] as PropType<Object | ((value: number | Date) => string) | ("billions" | "currency" | "day" | "decimal" | "exponential" | "fixedPoint" | "largeNumber" | "longDate" | "longTime" | "millions" | "millisecond" | "month" | "monthAndDay" | "monthAndYear" | "percent" | "quarter" | "quarterAndYear" | "shortDate" | "shortTime" | "thousands" | "trillions" | "year" | "dayOfWeek" | "hour" | "longDateLongTime" | "minute" | "second" | "shortDateShortTime")>
  }
};

prepareConfigurationComponentConfig(DxTotalItemConfig);

const DxTotalItem = defineComponent(DxTotalItemConfig);

(DxTotalItem as any).$_optionName = "totalItems";
(DxTotalItem as any).$_isCollectionItem = true;
(DxTotalItem as any).$_expectedChildren = {
  valueFormat: { isCollectionItem: false, optionName: "valueFormat" }
};

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

const DxValueFormatConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:currency": null,
    "update:formatter": null,
    "update:parser": null,
    "update:precision": null,
    "update:type": null,
    "update:useCurrencyAccountingStyle": null,
  },
  props: {
    currency: String,
    formatter: Function as PropType<(value: number | Date) => string>,
    parser: Function as PropType<(value: string) => (number | Date)>,
    precision: Number,
    type: String as PropType<"billions" | "currency" | "day" | "decimal" | "exponential" | "fixedPoint" | "largeNumber" | "longDate" | "longTime" | "millions" | "millisecond" | "month" | "monthAndDay" | "monthAndYear" | "percent" | "quarter" | "quarterAndYear" | "shortDate" | "shortTime" | "thousands" | "trillions" | "year" | "dayOfWeek" | "hour" | "longDateLongTime" | "minute" | "second" | "shortDateShortTime">,
    useCurrencyAccountingStyle: Boolean
  }
};

prepareConfigurationComponentConfig(DxValueFormatConfig);

const DxValueFormat = defineComponent(DxValueFormatConfig);

(DxValueFormat as any).$_optionName = "valueFormat";

export default DxDataGrid;
export {
  DxDataGrid,
  DxAnimation,
  DxAsyncRule,
  DxAt,
  DxBoundaryOffset,
  DxButton,
  DxChange,
  DxColCountByScreen,
  DxCollision,
  DxColumn,
  DxColumnChooser,
  DxColumnChooserSearch,
  DxColumnChooserSelection,
  DxColumnFixing,
  DxColumnFixingTexts,
  DxColumnHeaderFilter,
  DxColumnHeaderFilterSearch,
  DxColumnLookup,
  DxCompareRule,
  DxCursorOffset,
  DxCustomOperation,
  DxCustomRule,
  DxDataGridHeaderFilter,
  DxDataGridHeaderFilterSearch,
  DxDataGridHeaderFilterTexts,
  DxDataGridSelection,
  DxEditing,
  DxEditingTexts,
  DxEmailRule,
  DxExport,
  DxExportTexts,
  DxField,
  DxFieldLookup,
  DxFilterBuilder,
  DxFilterBuilderPopup,
  DxFilterOperationDescriptions,
  DxFilterPanel,
  DxFilterPanelTexts,
  DxFilterRow,
  DxForm,
  DxFormat,
  DxFormItem,
  DxFrom,
  DxGrouping,
  DxGroupingTexts,
  DxGroupItem,
  DxGroupOperationDescriptions,
  DxGroupPanel,
  DxHeaderFilter,
  DxHide,
  DxIcons,
  DxItem,
  DxKeyboardNavigation,
  DxLabel,
  DxLoadPanel,
  DxLookup,
  DxMasterDetail,
  DxMy,
  DxNumericRule,
  DxOffset,
  DxOperationDescriptions,
  DxPager,
  DxPaging,
  DxPatternRule,
  DxPopup,
  DxPosition,
  DxRangeRule,
  DxRemoteOperations,
  DxRequiredRule,
  DxRowDragging,
  DxScrolling,
  DxSearch,
  DxSearchPanel,
  DxSelection,
  DxShow,
  DxSortByGroupSummaryInfo,
  DxSorting,
  DxStateStoring,
  DxStringLengthRule,
  DxSummary,
  DxSummaryTexts,
  DxTexts,
  DxTo,
  DxToolbar,
  DxToolbarItem,
  DxTotalItem,
  DxValidationRule,
  DxValueFormat
};
import type * as DxDataGridTypes from "devextreme/ui/data_grid_types";
export { DxDataGridTypes };
