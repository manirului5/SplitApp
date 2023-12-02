sap.ui.jsview("splitapp.splitApp", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitapp.splitApp
	*/ 
	getControllerName : function() {
		return "splitapp.splitApp";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitapp.splitApp
	*/ 
	createContent : function(oController) {
				
		oCarousel_s = new sap.m.Carousel("carousel_1",{
			height:"100%",
			width:"100%",
			loop:true,
			pages:[
                   new sap.m.Image({
                	   src : "Slides/STK.jpg",
                	   width:"100%",
                	   height:"100%"
                	  
                   }),
                   new sap.m.Image({
                	   src : "Slides/MRYNR.jpg",
                	   width:"100%",
                	   height:"100%"
                   }),
                   new sap.m.Image({
                	   src : "Slides/TMSHA.jpg",
                	   width:"100%",
                	   height:"100%"
                   }),
                   new sap.m.Image({
                	   src : "Slides/SNMRE.jpg",
                	   width:"100%",
                	   height:"100%"
                   }),
                   new sap.m.Image({
                	   src : "Slides/TWMR.jpg",
                	   width:"100%",
                	   height:"100%"
                   })
			],
			pageChanged:function(oEvent) {
				//oCarousel_s.next();
                setTimeout(function() { oCarousel_s.next(); },3000);
            }
		});
	     setTimeout(function() { oCarousel_s.next(); }, 3000);
	     
//	     oToolbar = new sap.m.Toolbar({
//	    	 press:function(){
//	    		 
//	    	 }
//	     });
//	     oButton = new sap.m.Button({
//	    	icon:"sap-icon://menu2" 
//	     });
//	     oToolbar.addContent(oButton);
	     
	 
		var page =  new sap.m.Page("pageId",{
			title: "Entertainment",
//			icon:"sap-icon://menu2",
//			subHeader:[oToolbar],
			content: [oCarousel_s]
		});
		//page.addStyleClass("sapUiTinyMargin");
		return page;
	}

});