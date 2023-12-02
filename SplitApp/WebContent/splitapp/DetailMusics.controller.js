sap.ui.controller("splitapp.DetailMusics", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf splitapp.HindiMusics
*/
	onInit: function() {
     var oModel = new sap.ui.model.resource.ResourceModel({
    	bundleUrl:"i18n/i18n.properties",
    	bundleLocale:"en"
     });
     sap.ui.getCore().setModel(oModel,"i18nModel");
    
     var omusicModel = new sap.ui.model.json.JSONModel("JsonFiles/MusicDetails.json");
     sap.ui.getCore().setModel(omusicModel,"MusicModel");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf splitapp.HindiMusics
*/
	onBeforeRendering: function() {
		var ovarModel   = sap.ui.getCore().getModel("varModel");
		var oProperty   = ovarModel.getProperty("/imgSel"); 
		var page        = sap.ui.getCore().byId("dmpId");
		var oController = sap.ui.getCore().byId("musicDetId").getController();
		var omusicModel=sap.ui.getCore().getModel("MusicModel");
		
		 var oList = new sap.m.List({
				id:"",
				mode:sap.m.ListMode.SingleSelectMaster,
				select:function (){
					var selItem  = oList.getSelectedItem();
					var selIndex = oList.indexOfItem(selItem);
					var url      = selProperty[selIndex].url;
					var title    = selProperty[selIndex].name;
					var artist   = selProperty[selIndex].artist;
					var gener    = selProperty[selIndex].gener;
					var album    = selProperty[selIndex].album;
					var length   = selProperty[selIndex].length;
					var size     = selProperty[selIndex].size;
					var year     = selProperty[selIndex].year;
					
					ovarModel.setProperty("/url",url);
					ovarModel.setProperty("/title",title);
					ovarModel.setProperty("/artist",artist);
					ovarModel.setProperty("/gener",gener);
					ovarModel.setProperty("/album",album);
					ovarModel.setProperty("/length",length);
					ovarModel.setProperty("/size",size);
					ovarModel.setProperty("/year",year);
					
					var mySplitapp = sap.ui.getCore().byId("mySplitapp");
					mySplitapp.toDetail("playMusicId");
					
					sap.ui.getCore().byId("PMPageId").destroyContent();
					sap.ui.getCore().byId("playMusicId").getController().onBeforeRendering();
					
				}
			});
		    oList.setModel(omusicModel);
			
			var oItemTemplate = new sap.m.StandardListItem({
				id:"",
				title:"{name}",
				info:"",
				description:"",
				type:sap.m.ListType.Navigation
			});
			var selProperty = oController.BindListItems(oProperty, oList,oItemTemplate);
		    page.addContent(oList);
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf splitapp.HindiMusics
*/
	onAfterRendering: function() {
		var page = sap.ui.getCore().byId("dmpId");
		var ovarModel   = sap.ui.getCore().getModel("varModel");
		var oProperty   = ovarModel.getProperty("/imgSel"); 
		var oi18nModel  = sap.ui.getCore().getModel("i18nModel");
		var otitleTxt   = oi18nModel.getProperty(oProperty) ;
		page.setTitle(otitleTxt);
	},
	BindListItems:function(oProperty,oList,oItemTemplate){
		var property_str = "/"+oProperty;
		oList.bindAggregation("items",property_str,oItemTemplate );
		return oList.getModel().getProperty(property_str);
	},
	

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf splitapp.HindiMusics
*/
	onExit: function() {
           
	}

});