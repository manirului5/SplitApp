sap.ui.controller("splitapp.Videos", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf splitapp.Videos
*/
	onInit: function() {
		var oModel = new sap.ui.model.resource.ResourceModel({
	    	bundleUrl:"i18n/i18n.properties",
	    	bundleLocale:"en"
	     });
	     sap.ui.getCore().setModel(oModel,"i18nModel_2");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf splitapp.Videos
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf splitapp.Videos
*/
	onAfterRendering: function() {
		$('#panel_1Id').hide();
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf splitapp.Videos
*/
//	onExit: function() {
//
//	}

	RenderVideoContent:function(oFlowLayout){
		var oController = sap.ui.getCore().byId("VideospageId").getController();
		$.getJSON('JsonFiles/Videos.json', function (json) {
			for (var key in json) {		
				if(key == "videos"){
					var items = json[key];
					for(var i=0; i<items.length; i++){
						var img = new sap.m.Image(items[i].id,{
							src : items[i].src,
							width:"100%",
							height:"100%",
							alt   :items[i].vlink,
							tap:function(){	
								oController.PlayVideo(this.getAlt(),this.getId());  
							}
						});
						oFlowLayout.addContent(img);
					}
					break;	
				}
			}
		});	
	},
	PlayVideo:function(oselVideo, videoId){
		var oPanel_1 = sap.ui.getCore().byId("panel_1Id");
		var oi18nModel  = sap.ui.getCore().getModel("i18nModel_2");
		
		var contentId = sap.ui.getCore().byId("videoId");
		if(contentId !== undefined){
		    contentId.destroy();
		    contentId = sap.ui.getCore().byId("txtId");contentId.destroy();
		    contentId = sap.ui.getCore().byId("downLinkId");contentId.destroy();
		    contentId = sap.ui.getCore().byId("fbId");contentId.destroy();
		}
		    
			var otitleTxt   = oi18nModel.getProperty(videoId);
			var oFB = new sap.m.FlexBox("fbId",{justifyContent:"End"});
			var oTitle   = new sap.m.Text("txtId",{text:otitleTxt});
			var oLayout = new sap.ui.commons.layout.ResponsiveFlowLayout();
			
			var nowPlaying = "Now Palying: " + otitleTxt;
			var htmlMarquee = new sap.ui.core.HTML({
	        	content:
	        		"<marquee style='width:100%'>"+nowPlaying+"</marquee>"
	        });
			var htmlVideo = new sap.ui.core.HTML("videoId",{
				content:
					"<video style='width:100%;height:100%' controls autoplay>"+ 
					"<source src='"+oselVideo+"' type='video/mp4'>"+
					"</video>"
			});
			var htmlDwnLink = new sap.ui.core.HTML("downLinkId",{
				content:
					"<a href='"+oselVideo+"'"+"download>"+
					"<img src='Slides/IconImage/videoDownload.gif' height='25'/>"+
					+"</a>"
			});
			//oFB.addItem(htmlMarquee);
			oFB.addItem(htmlDwnLink);
			//oLayout.addContent(htmlMarquee);
			//oLayout.addContent(oFB);
			oPanel_1.addContent(oFB);
			oPanel_1.addContent(htmlVideo);
			oPanel_1.addContent(oTitle);
		
	}
	
	
});