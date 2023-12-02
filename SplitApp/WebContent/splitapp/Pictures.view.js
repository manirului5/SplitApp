sap.ui.jsview("splitapp.Pictures", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitapp.Pictures
	*/ 
	getControllerName : function() {
		return "splitapp.Pictures";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitapp.Pictures
	*/ 
	createContent : function(oController) {
		var selImgsrc;
		var oPanel = new sap.m.Panel("panelId",{
			width:"100%",
			height:"auto",
	        backgroundDesign:"Transparent"
		});
		
//		Create the Carousel control
		var oCarousel = new sap.ui.commons.Carousel("myCarousal",{
			animationDuration:1000
		});
		oCarousel.setWidth("100%");
		oCarousel.setOrientation("horizontal");

		oCarousel.addContent(new sap.ui.commons.Image("IMG1", {
			src : "Images/img1.jpg",
			alt : "sample image",
			width : "100%",
			height : "100%",
			press:function(){
				console.log("1st Image Pressed");
			
				selImgsrc      = "Images/img1.jpg";
				var prevImg    = oPanel.getContent()[0].sId;
				var prevImgref = sap.ui.getCore().byId(prevImg);
				var previmgSrc = prevImgref.getSrc();
				
				if(prevImg !== ""){
					if(previmgSrc !== selImgsrc){
						$('#panelId').fadeOut(1500, function(){
							prevImgref.setSrc("Images/img1.jpg");
							$('#panelId').fadeIn(1500);
						});
					}
				}
			}
		}));

		oCarousel.addContent(new sap.ui.commons.Image("IMG2", {
			src : "Images/img2.jpg",
			alt : "sample image",
			width : "100%",
			height : "100%",
			press:function(){
				console.log("2nd Image Pressed");
			
				selImgsrc      = "Images/img2.jpg";
				var prevImg    = oPanel.getContent()[0].sId;
				var prevImgref = sap.ui.getCore().byId(prevImg);
				var previmgSrc = prevImgref.getSrc();
				
				if(prevImg !== ""){
					if(previmgSrc !== selImgsrc){
						$('#panelId').fadeOut(1500, function(){
							prevImgref.setSrc("Images/img2.jpg");
							$('#panelId').fadeIn(1500);
						});
					}
				}	
			}
		}));

		oCarousel.addContent(new sap.ui.commons.Image("IMG3", {
			src : "Images/img3.jpg",
			alt : "sample image",
			width : "100%",
			height : "100%",
			press:function(){
				console.log("3rd Image Pressed");
				
				selImgsrc      = "Images/img3.jpg";
				var prevImg    = oPanel.getContent()[0].sId;
				var prevImgref = sap.ui.getCore().byId(prevImg);
				var previmgSrc = prevImgref.getSrc();
				
				if(prevImg !== ""){
					if(previmgSrc !== selImgsrc){
						$('#panelId').fadeOut(1500, function(){
							prevImgref.setSrc("Images/img3.jpg");
							$('#panelId').fadeIn(1500);
						});
					}
				}	
			}
		}));

		oCarousel.addContent(new sap.ui.commons.Image("IMG4", {
			src : "Images/img4.jpg",
			alt : "sample image",
			width : "100%",
			height : "100%",
			press:function(){
				console.log("4th Image Pressed");
				
				selImgsrc      = "Images/img4.jpg";
				var prevImg    = oPanel.getContent()[0].sId;
				var prevImgref = sap.ui.getCore().byId(prevImg);
				var previmgSrc = prevImgref.getSrc();
				
				if(prevImg !== ""){
					if(previmgSrc !== selImgsrc){
						$('#panelId').fadeOut(1500, function(){
							prevImgref.setSrc("Images/img4.jpg");
							$('#panelId').fadeIn(1500);
						});
					}
				}	
			}
		}));

		oCarousel.addContent(new sap.ui.commons.Image("IMG5", {
			src : "Images/img5.jpg",
			alt : "sample image",
			width : "100%",
			height : "100%",
			press:function(){
				
				console.log("5th Image Pressed");
				
				selImgsrc      = "Images/img5.jpg";
				var prevImg    = oPanel.getContent()[0].sId;
				var prevImgref = sap.ui.getCore().byId(prevImg);
				var previmgSrc = prevImgref.getSrc();
				
				if(prevImg !== ""){
					if(previmgSrc !== selImgsrc){
						$('#panelId').fadeOut(1500, function(){
							prevImgref.setSrc("Images/img5.jpg");
							$('#panelId').fadeIn(1500);
						});
					}
				}	
			}
		}));

		oCarousel.addContent(new sap.ui.commons.Image("IMG6", {
			src : "Images/img6.jpg",
			alt : "sample image",
			width : "100%",
			height : "100%",
			press:function(){
				console.log("6th Image Pressed");
				
				selImgsrc      = "Images/img6.jpg";
				var prevImg    = oPanel.getContent()[0].sId;
				var prevImgref = sap.ui.getCore().byId(prevImg);
				var previmgSrc = prevImgref.getSrc();
				
				if(prevImg !== ""){
					if(previmgSrc !== selImgsrc){
						$('#panelId').fadeOut(1500, function(){
							prevImgref.setSrc("Images/img6.jpg");
							$('#panelId').fadeIn(1500);
						});
					}
				}	
			}
		}));
		
		//detail image
        
		var Image = new sap.m.Image("initImg",{
	        src : "",
	        width:"100%",
	        height:"100%"	  
        });
		
		oPanel.addContent(Image);
		
			
 		return new sap.m.Page({
			title: "Pictures Gallery",
			showNavButton:true,
			navButtonPress:function(){
				var mySplitapp = sap.ui.getCore().byId("mySplitapp");
				var oList = sap.ui.getCore().byId("masterList");
				oList.removeSelections(true);
				
				if(jQuery.device.is.desktop){
					mySplitapp.toDetail("introId");	
				}
				else if(jQuery.device.is.android_phone){
					mySplitapp.toDetail("masterId");
				}
			},
			content: [oCarousel,oPanel]
		});
	}

});