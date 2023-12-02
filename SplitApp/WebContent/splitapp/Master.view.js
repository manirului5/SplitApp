sap.ui.jsview("splitapp.Master", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitapp.Master
	*/ 
	getControllerName : function() {
		return "splitapp.Master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitapp.Master
	*/ 
	createContent : function(oController) {
		var oList = new sap.m.List({
			id:"masterList",
			mode:sap.m.ListMode.SingleSelectMaster,
			select:function (){
				oController.itemSelected();
			}
		});
		
		var oItemTemplate = new sap.m.StandardListItem({
			id:"sList",
			title:"{item}",
			type:sap.m.ListType.Navigation
		});
		oList.bindAggregation("items","/MasterItems",oItemTemplate );
 		return new sap.m.Page({
			title: "Menu",
			content: [oList]
		});
	}

});