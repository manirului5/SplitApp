sap.ui.controller("splitapp.playMusic", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf splitapp.playMusic
*/
	onInit: function() {
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf splitapp.playMusic
*/
	onBeforeRendering: function() {
		var page = sap.ui.getCore().byId("PMPageId");
		var ovarModel   = sap.ui.getCore().getModel("varModel");
		var oProperty   = ovarModel.getProperty("/imgSel"); 
		var oi18nModel  = sap.ui.getCore().getModel("i18nModel");
		var otitleTxt   = oi18nModel.getProperty(oProperty) ;
		page.setTitle(otitleTxt);
		
		var musicURL   = ovarModel.getProperty("/url");console.log(musicURL);
		var albumImage = ovarModel.getProperty("/imgSrc");//console.log(albumImage);//"Slides/" + oProperty + ".jpg";
		var songName   = ovarModel.getProperty("/title");
		
        var oPanel = new sap.m.Panel({
        	expanded:true,
        	expandAnimation:false
        });
        var Img = new sap.m.Image({
        	src :albumImage,
			width:"250px",
			height:"300px"
        });
       
        var htmlMarquee = new sap.ui.core.HTML({
        	content:
        		"<marquee>"+songName+"</marquee>"
        });
        var oFlexBox   = new sap.m.FlexBox({width:"100%"});
        var oVLayout_1 = new sap.ui.commons.layout.VerticalLayout();
        var oHLayout_1 = new sap.ui.commons.layout.HorizontalLayout(); 
        oFlexBox.addItem(oVLayout_1);
        oFlexBox.setAlignItems("Center");oFlexBox.setJustifyContent("Center");
        
        
        var artist = ovarModel.getProperty("/artist");artist = "Artist:" + artist;
        var gener  = ovarModel.getProperty("/gener"); gener  = "Gener:"  + gener;
        var album  = ovarModel.getProperty("/album"); album  = "Album:"  + album;
        var length = ovarModel.getProperty("/length");length = "Length:" + length;
        var size   = ovarModel.getProperty("/size");  size   = "Size:"   + size;
        var year   = ovarModel.getProperty("/year");  year   = "Year:"   + year;
        
        var oVLayout_2  = new sap.ui.commons.layout.VerticalLayout();
        var artist_txt  = new sap.m.Text({text:artist}); oVLayout_2.addContent(artist_txt);
        var gener_txt   = new sap.m.Text({text:gener});  oVLayout_2.addContent(gener_txt);
        var album_txt   = new sap.m.Text({text:album});  oVLayout_2.addContent(album_txt);
        var length_txt  = new sap.m.Text({text:length});  oVLayout_2.addContent(length_txt);
        var size_txt    = new sap.m.Text({text:size}); oVLayout_2.addContent(size_txt);
        var year_txt    = new sap.m.Text({text:year});   oVLayout_2.addContent(year_txt);
        var rating_txt  = new sap.m.Text({text:""});
      
         
        
		var htmlMusic = new sap.ui.core.HTML({
			
 			content:
 				"<audio controls style='width:200px'>"+
 				"<source src="+'"'+ musicURL+'"'+ "type='audio/mp3'>"+
 				"</audio>"
 		});
		var htmlLink = new sap.ui.core.HTML({
			
 			content:
 				"<a href='"+musicURL+"'"+"download>"+
 				"<img src='Slides/IconImage/download.png' width='60' height='40'/>"+
 				+"</a>"
 		});
		
		oHLayout_1.addContent(htmlMusic);
		oHLayout_1.addContent(htmlLink);
		 
 		oVLayout_1.addContent(Img);
 		oVLayout_1.addContent(oHLayout_1);
 		 
 		oPanel.addContent(htmlMarquee);
 		oPanel.addContent(oFlexBox);
 		page.addContent(oPanel);
 		page.addContent(oVLayout_2);
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf splitapp.playMusic
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf splitapp.playMusic
*/
//	onExit: function() {
//
//	}

});