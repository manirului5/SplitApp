sap.ui.jsview("splitapp.DetailMusics", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitapp.HindiMusics
	*/ 
	getControllerName : function() {
		return "splitapp.DetailMusics";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitapp.HindiMusics
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page("dmpId",{
			title: "",
			showNavButton : true,
			navButtonPress : function() {
				var mySplitapp = sap.ui.getCore().byId("mySplitapp");
				mySplitapp.toDetail("MusicpageId");
				this.destroyContent();
			},
			content: [
			
			
			]
		});
	}

});