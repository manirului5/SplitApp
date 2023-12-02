sap.ui.controller("splitapp.Miscellaneous", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf splitapp.Miscellaneous
*/
	onInit: function() {
     
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf splitapp.Miscellaneous
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf splitapp.Miscellaneous
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf splitapp.Miscellaneous
*/
//	onExit: function() {
//
//	}
	getCurrentMonth:function(){
		var curMonth = new Date().getMonth()+1;
		if(curMonth == 1){
			return "Jan";
		}else if(curMonth == 2){
			return "Feb";
		}else if(curMonth == 3){
			return "Mar";
		}else if(curMonth == 4){
			return "Apr";
		}else if(curMonth == 5){
			return "May";
		}else if(curMonth == 6){
			return "Jun";
		}else if(curMonth == 7){
			return "Jul";
		}else if(curMonth == 8){
			return "Aug";
		}else if(curMonth == 9){
			return "Sep";
		}else if(curMonth == 10){
			return "Oct";
		}else if(curMonth == 11){
			return "Nov";
		}else if(curMonth == 12){
			return "Dec";
		}
	},
	
	createTable:function(){
		//Table
		var oTable = new sap.ui.table.Table({
			width:"100%",
			title:"Monthly Expense Report",
			align:"Center"
		});
		
		var oModel = new sap.ui.model.json.JSONModel("JsonFiles/Rent.json");
		oTable.setModel(oModel);
		
		var oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text:"Item",textAlign:"Center"}),
			hAlign:"Center",
			template:new sap.m.Text({
				text:"{item}"
			})
		});
		oTable.addColumn(oColumn);
		
		var oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text:"Manirul",textAlign:"Center"}),
			hAlign:"Center",
			template:new sap.m.Text({
				text:"{mani}"
			})
		});
		oTable.addColumn(oColumn);
		
		oColumn = new sap.ui.table.Column({
			label:new sap.ui.commons.Label({text:"Abhi",textAlign:"Center"}),
			hAlign:"Center",
			template:new sap.m.Text({
				text:"{abhi}"
			})
		});
		oTable.addColumn(oColumn);
		
		oColumn = new sap.ui.table.Column({
			label:new sap.ui.commons.Label({text:"Manas",textAlign:"Center"}),
			hAlign:"Center",
			template:new sap.m.Text({
				text:"{manas}"
			})
		});
		oTable.addColumn(oColumn);
		
		oColumn = new sap.ui.table.Column({
			label:new sap.ui.commons.Label({text:"Line Sum",textAlign:"Center"}),
			hAlign:"Center",
			template:new sap.m.Text({
				text:"{tot}"
			})
		});
		oTable.addColumn(oColumn);
		
//		oColumn = new sap.ui.table.Column({
//			name:"Gas",
//			label:new sap.ui.commons.Label({text:"Gas",textAlign:"Center"}),
//			hAlign:"Center",
//			template:new sap.m.Text({
//				text:"{gas}"
//			})
//		});
//		oTable.addColumn(oColumn);
//		
//		oColumn = new sap.ui.table.Column({
//			name:"Cooking",
//			label:new sap.ui.commons.Label({text:"Cooking",textAlign:"Center"}),
//			hAlign:"Center",
//			template:new sap.m.Text({
//				text:"{cook}"
//			})
//		});
//		oColumn.set
//		oTable.addColumn(oColumn);
//		
//		oColumn = new sap.ui.table.Column({
//			name:"Marketting",
//			label:new sap.ui.commons.Label({text:"Marketting",textAlign:"Center"}),
//			hAlign:"Center",
//			template:new sap.m.Text({
//				text:"{market}"
//			})
//		});
//		oTable.addColumn(oColumn);
//		
		return oTable;
	}

});