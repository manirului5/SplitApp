sap.ui.jsview("splitapp.playMusic", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitapp.playMusic
	*/ 
	getControllerName : function() {
		return "splitapp.playMusic";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitapp.playMusic
	*/ 
	createContent : function(oController) { 		
 		return new sap.m.Page("PMPageId",{
			title: "",
			showNavButton:true,
			navButtonPress : function() {
				this.destroyContent();
				var mySplitapp = sap.ui.getCore().byId("mySplitapp");
				mySplitapp.toDetail("musicDetId");
				var dmpage = sap.ui.getCore().byId("musicDetId");
				sap.ui.getCore().byId("dmpId").destroyContent();
				dmpage.getController().onBeforeRendering();
				dmpage.getController().onAfterRendering();
			},
			content: []
		});
	}

});