sap.ui.controller("splitapp.Musics", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf splitapp.Musics
*/
	onInit: function() {
      var oModel = new sap.ui.model.json.JSONModel({
    	 imgSel :"",
    	 title  :"",
    	 description:"",
    	 url    :"",
    	 artist :"",
    	 gener  :"",
    	 album  :"",
    	 lenth  :"",
    	 size   :"",
    	 year   :"",
    	 imgSrc :""
      });
      sap.ui.getCore().setModel(oModel,"varModel");
      
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf splitapp.Musics
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf splitapp.Musics
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf splitapp.Musics
*/
//	onExit: function() {
//
//	}
	
	
	//Rendering Hindi Albums
	renderAlbumHindi:function(oFlowLayout){
		var oController = sap.ui.getCore().byId("MusicpageId").getController();
		//Get Items to be Rendered
		$.getJSON('JsonFiles/MusicAlbums.json', function (json) {
			for (var key in json) {		
				if(key == "Hindi"){
					var items = json[key];
					for(var i=0; i<items.length; i++){
						var img = new sap.m.Image(items[i].id,{
							src : items[i].src_1,
							alt:items[i].src,
							width:"100%",
							height:"100%",
							tap:function(){
								oController.navigateDetail(this.getId());  
							}
						});
						oFlowLayout.addContent(img);
					}
					break;	
				}
			}
		});		
	},
	
	
	
	
	//Rendering Bengali Albums
	renderAlbumBeng:function(oFlowLayout){
		var oController = sap.ui.getCore().byId("MusicpageId").getController();
		//Get Items to be Rendered
		$.getJSON('JsonFiles/MusicAlbums.json', function (json) {
			for (var key in json) {		
				if(key == "Bengali"){
					var items = json[key];
					for(var i=0; i<items.length; i++){
						var img = new sap.m.Image(items[i].id,{
							src : items[i].src_1,
							alt:items[i].src,
							width:"100%",
							height:"100%",
							tap:function(){
								oController.navigateDetail(this.getId());  
							}
						});
						oFlowLayout.addContent(img);
					}
					break;	
				}
			}
		});	
	},
	
	
	//Rendering English Albums
	renderAlbumEng:function(oFlowLayout){
		var oController = sap.ui.getCore().byId("MusicpageId").getController();
		//Get Items to be Rendered
		$.getJSON('JsonFiles/MusicAlbums.json', function (json) {
			for (var key in json) {		
				if(key == "English"){
					var items = json[key];
					for(var i=0; i<items.length; i++){
						var img = new sap.m.Image(items[i].id,{
							src : items[i].src_1,
							alt:items[i].src,
							width:"100%",
							height:"100%",
							tap:function(){
								oController.navigateDetail(this.getId());  
							}
						});
						oFlowLayout.addContent(img);
					}
					break;	
				}
			}
		});	
	},

	
	//Handling Navigation on Selection an Album
	navigateDetail:function(oselImg){

		var imageSrc = sap.ui.getCore().byId(oselImg).getProperty("alt");//("src");
            imageSrc = imageSrc;
		var ovarModel   = sap.ui.getCore().getModel("varModel");
		var oProperty   = ovarModel.getProperty("/imgSel");
		ovarModel.setProperty("/imgSel",oselImg); 
		ovarModel.setProperty("/imgSrc",imageSrc); 
		var mySplitapp = sap.ui.getCore().byId("mySplitapp");
	        mySplitapp.toDetail("musicDetId");
	        
	        if(oProperty !== ""){
	        var page = sap.ui.getCore().byId("musicDetId");
	        if(page !== undefined){
	        	page.getController().onBeforeRendering();
	        	page.getController().onAfterRendering();
	        }
		}
	}	
});