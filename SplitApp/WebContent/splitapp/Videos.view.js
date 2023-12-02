sap.ui.jsview("splitapp.Videos", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitapp.Videos
	*/ 
	getControllerName : function() {
		return "splitapp.Videos";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitapp.Videos
	*/ 
	createContent : function(oController) {
		
		var oPanel_1 = new sap.m.Panel("panel_1Id",{
			expanded:false
		});
		
		
		var oPanel_2 = new sap.m.Panel({
			expanded:true
		});
		var oFlowLayout = new sap.ui.commons.layout.ResponsiveFlowLayout();
		oController.RenderVideoContent(oFlowLayout);
		oPanel_2.addContent(oFlowLayout);
		
 		return new sap.m.Page({
			title: "My Videos",
			showNavButton:true,
			navButtonPress:function(){
				var mySplitapp = sap.ui.getCore().byId("mySplitapp");
				var oList = sap.ui.getCore().byId("masterList");
				if(sap.ui.getCore().byId("videoId") !== undefined){
					sap.ui.getCore().byId("videoId").destroy();
					sap.ui.getCore().byId("fbId").destroy();
					sap.ui.getCore().byId("txtId").destroy();
				}
				oList.removeSelections(true);
				if(jQuery.device.is.desktop){
					mySplitapp.toDetail("introId");	
				}
				else if(jQuery.device.is.android_phone){
					mySplitapp.toDetail("masterId");
				}
				
			},
			content: [oPanel_1, oPanel_2]
		});
	}

});