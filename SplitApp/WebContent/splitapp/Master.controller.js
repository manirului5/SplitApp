sap.ui.controller("splitapp.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf splitapp.Master
*/
	onInit: function() {
       var oModel = new sap.ui.model.json.JSONModel();
       oModel.loadData("JsonFiles/MasterListItems.json");
       sap.ui.getCore().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf splitapp.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf splitapp.Master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf splitapp.Master
*/
//	onExit: function() {
//
//	}
	
	itemSelected:function(){
		var mySplitapp = sap.ui.getCore().byId("mySplitapp");
		var oList = sap.ui.getCore().byId("masterList");
		var selItem = oList.getSelectedItem();
		var selProp = selItem.getProperty("title");
		
		if(selProp == "Musics"){
			mySplitapp.toDetail("MusicpageId");
		}else if(selProp == "Pictures"){
			mySplitapp.toDetail("PicturespageId");
		}else if(selProp == "Videos"){
			mySplitapp.toDetail("VideospageId");
		}else if(selProp == "Miscellaneous"){
			mySplitapp.toDetail("MiscPageId");
		}
	}

});