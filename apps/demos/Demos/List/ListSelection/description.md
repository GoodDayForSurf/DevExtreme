There are three List item selection modes: *"single"*, *"multiple"*, and *"all"*.  To enable item selection, pass the mode name to the [selectionMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode) property. If you set this property to *"none"* (default setting), item selection is disabled. In this demo, you can try out all the selection modes. Use the drop-down Selection Mode menu to switch between modes.
<!--split-->

List items can display checkboxes or radio buttons. To show these controls, enable the [showSelectionControls](/Documentation/ApiReference/UI_Components/dxList/Configuration/#showSelectionControls) property. Otherwise, users can click or tap list items to select them. The **showSelectionControls** property should also be enabled when you use the *"all"* **selectionMode** to show the Select All checkbox.

When the List data is [paginated](/Documentation/Guide/UI_Components/List/Paging/), you can choose whether the Select All checkbox selects all items on all pages or only the items on the current page. To configure this functionality, set the [selectAllMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectAllMode) property to *"allPages"* or *"page"*. In this demo, you can use the drop-down Select All Mode menu to change the **selectAllMode** property at runtime.

To configure the initial selection or access the keys of selected items, use the [selectedItemKeys](/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectedItemKeys) array. This example shows the contents of this array in the Selected IDs section below the List.

You can also implement the [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxList/Configuration/#onSelectionChanged) event handler to perform an action when users select items.
