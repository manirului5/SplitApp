sap.ui.jsview("splitapp.Miscellaneous", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitapp.Miscellaneous
	*/ 
	getControllerName : function() {
		return "splitapp.Miscellaneous";
	},
    

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitapp.Miscellaneous
	*/ 
	createContent : function(oController) {
		var curYear = new Date().getFullYear();
		var oYearMonth = new sap.m.Text("YearTxt",{
			text:curYear
		});
		var oleftNavBtn = new sap.m.Button({
			icon:"sap-icon://navigation-left-arrow",
			press:function(){
				var newVal = Number(oYearMonth.getText()) - 1;
				oYearMonth.setText(newVal);
				if(new Date().getFullYear() !==newVal ){
					hBar.setSelectedKey("Jan");
					var bindProp = "/"+newVal+"_"+"Jan";
					oTable.bindRows(bindProp);
					initialPeriod.addContent(oTable);
				}else if(new Date().getFullYear()==newVal){
					var curMonth = oController.getCurrentMonth();
					hBar.setSelectedKey(curMonth);
					var bindProp = "/"+newVal+"_"+curMonth;
					oTable.bindRows(bindProp);
					CurrentPeriod.addContent(oTable);
				}
			}
		});
		var orightNavBtn = new sap.m.Button({
			icon:"sap-icon://navigation-right-arrow",
			press:function(){
				var newVal = Number(oYearMonth.getText()) + 1;
				oYearMonth.setText(newVal);
				if(new Date().getFullYear() !==newVal ){
					hBar.setSelectedKey("Jan");
					var bindProp = "/"+newVal+"_"+"Jan";
					oTable.bindRows(bindProp);
					initialPeriod.addContent(oTable);
				}else if(new Date().getFullYear()==newVal){
					var curMonth = oController.getCurrentMonth();
					hBar.setSelectedKey(curMonth);
					var bindProp = "/"+newVal+"_"+curMonth;
					oTable.bindRows(bindProp);
					CurrentPeriod.addContent(oTable);
				}
			}
		});
		var oFlexBox_3 = new sap.m.FlexBox({
			justifyContent:"End",
			alignItems:"End",
	        items:[orightNavBtn]
		});
		var oFlexBox_1 = new sap.m.FlexBox({
			justifyContent:"Start",
			alignItems:"Start",
	        items:[oleftNavBtn]
		});
		var oFlexBox_2 = new sap.m.FlexBox({
			width:"100%",
			justifyContent:"Center",
			alignItems:"Center",
	        items:[oYearMonth]
		});
		var oFlexBox = new sap.m.FlexBox({
			
	        items:[oFlexBox_1,oFlexBox_2,oFlexBox_3]
		});
		
		var oPanel = new sap.m.Panel({
			expanded : true,
			expandAnimation : false
		});
		
		var oTable = oController.createTable();
		var oTable_1 = oController.createTable();
		oPanel.addContent(oTable);
		
		var hBar = new sap.m.IconTabBar("IconTabId",{
			select:function(oEvent){
				var selMonth = oEvent.getParameters().selectedItem;
				var oyearTxt  = sap.ui.getCore().byId("YearTxt").getText();
				var ocurMonth = this.getSelectedKey();
				oyearTxt = "/"+oyearTxt+"_"+ocurMonth;
				if(ocurMonth=="Jan"){
					oTable_1.bindRows(oyearTxt);
					selMonth.addContent(oTable_1);	
				}else{
					oTable.bindRows(oyearTxt);
					selMonth.addContent(oTable);
				}
				
			}
		});
		
		var CurrentPeriod;
		var initialPeriod;
		$.getJSON('JsonFiles/YearMonth.json', function (json) {
			for (var key in json) {		
				if(key == "month"){
					var curMonth = oController.getCurrentMonth();
					var items = json[key];
					for(var i=0; i<items.length; i++){
						
						var oIcon = new sap.m.IconTabFilter(items[i].month,{
							design:"Vertical",
							text:items[i].month,
							key:items[i].month
						});
						if(items[i].month==curMonth){
							var oyearTxt  = sap.ui.getCore().byId("YearTxt").getText();
							var ocurMonth = oController.getCurrentMonth();
							oyearTxt = "/"+oyearTxt+"_"+ocurMonth;
									
							oTable.bindRows(oyearTxt);
							oIcon.addContent(oTable);
							CurrentPeriod=  oIcon;
						}
						if(items[i].month=="Jan"){
							initialPeriod = oIcon;
						}
						hBar.addItem(oIcon);
					}
					break;	
				}
			}
		});		
//		
		var curMonth = oController.getCurrentMonth();
		hBar.setSelectedKey(curMonth);
    
 		return new sap.m.Page({
			title: "Miscellaneous",
			showNavButton:true,
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
			content: [oFlexBox,hBar]
		});
	}

});