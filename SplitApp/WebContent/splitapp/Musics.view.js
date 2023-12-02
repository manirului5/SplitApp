sap.ui.jsview("splitapp.Musics", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitapp.Musics
	*/ 
	getControllerName : function() {
		return "splitapp.Musics";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitapp.Musics
	*/ 
	
	createContent : function(oController) {
		//Tabs for albums
		var oIcon_b = new sap.m.IconTabFilter({
			design:"Vertical",
			text:"Bengali Albums",
			key:"BENG"
		});
		var oIcon_h = new sap.m.IconTabFilter({
			design:"Vertical",
			text:"Hindi Albums",
			key:"HIND"
		});
		var oIcon_e = new sap.m.IconTabFilter({
			design:"Vertical",
			text:"English Albums",
			key:"ENG"
		});
		
		//Creating Icon Tab Bar
		var hBar = new sap.m.IconTabBar("barId", {
			items:[oIcon_b, oIcon_h, oIcon_e],
			select:function(){
				var selKey = hBar.getSelectedKey();
				if(selKey == 'BENG'){
					//oFlowLayout = new sap.ui.commons.layout.ResponsiveFlowLayout({});
					//.destroyContent();
//					oController.renderAlbumBeng(oFlowLayout);
//					oPanel_b.addContent(oFlowLayout);
//					oIcon_b.addContent(oPanel_b);
				}else if(selKey == 'HIND'){
					//oFlowLayout = new sap.ui.commons.layout.ResponsiveFlowLayout({});
					//oPanel.destroyContent();
//					oController.renderAlbumHindi(oFlowLayout);
//					oPanel_h.addContent(oFlowLayout);
//					oIcon_h.addContent(oPanel_h);
				}else if(selKey == 'ENG'){
					//oFlowLayout = new sap.ui.commons.layout.ResponsiveFlowLayout({});
					//oPanel.destroyContent();
//					oController.renderAlbumEng(oFlowLayout);
//					oPanel_e.addContent(oFlowLayout);
//					oIcon_e.addContent(oPanel_e);
				}
			}
		});
		
		
		var oSpace = new sap.ui.commons.layout.AbsoluteLayout({width:"90px",height:"2px"});
		var oPanel_b = new sap.m.Panel({
			expanded:true,
        	expandAnimation:false
		});
		var oFlowLayout_b = new sap.ui.commons.layout.ResponsiveFlowLayout({});
		oController.renderAlbumBeng(oFlowLayout_b);
		oPanel_b.addContent(oFlowLayout_b);
		oIcon_b.addContent(oPanel_b);
		
		var oPanel_h = new sap.m.Panel({
			expanded:true,
        	expandAnimation:false
		});
		var oFlowLayout_h = new sap.ui.commons.layout.ResponsiveFlowLayout({});
		oController.renderAlbumHindi(oFlowLayout_h);
		oPanel_h.addContent(oFlowLayout_h);
		oIcon_h.addContent(oPanel_h);
		
		var oPanel_e = new sap.m.Panel({
			expanded:true,
        	expandAnimation:false
		});
		var oFlowLayout_e = new sap.ui.commons.layout.ResponsiveFlowLayout({});
		oController.renderAlbumEng(oFlowLayout_e);
		oPanel_e.addContent(oFlowLayout_e);
		oIcon_e.addContent(oPanel_e);
		//creating Flow Layout for Hindi Album
		
		
		
		return new sap.m.Page({
			title : "Musics",
			showNavButton : true,
			navButtonPress : function() {
				var mySplitapp = sap.ui.getCore().byId("mySplitapp");
				var oList = sap.ui.getCore().byId("masterList");
				oList.removeSelections(true);
				if (jQuery.device.is.desktop) {
					mySplitapp.toDetail("introId");
				} else if (jQuery.device.is.android_phone) {
					mySplitapp.toDetail("masterId");
				}
			},
			content : [ hBar ]
		});
	}

});