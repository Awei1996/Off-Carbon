// JavaScript Document

var EggValue = 0 ,OtamealValue = 0, BreadValue = 0;
var LBeefValue = 0, LChickenValue = 0, LPorkValue = 0, LFishValue = 0;
var LRiceValue = 0, LPastaValue = 0, LLambValue = 0, LTofuValue = 0, LPeaValue = 0;
var DBeefValue = 0, DChickenValue = 0, DPorkValue = 0, DFishValue = 0;
var DRiceValue = 0, DPastaValue = 0, DLambValue = 0, DTofuValue = 0, DPeaValue = 0;

var TotalValue = 0 ;

var EggControl = document.getElementsByClassName('Egg')[0];
var OtamealControl = document.getElementsByClassName('Otameal')[0];
var BreadControl = document.getElementsByClassName('Bread')[0];
var LBeefControl = document.getElementsByClassName('LBeef')[0];
var LChickenControl = document.getElementsByClassName('LChicken')[0];
var LPorkControl = document.getElementsByClassName('LPork')[0];
var LFishControl = document.getElementsByClassName('LFish')[0];
var LRiceControl = document.getElementsByClassName('LRice')[0];
var LPastaControl = document.getElementsByClassName('LPasta')[0];
var LLambControl = document.getElementsByClassName('LLamb')[0];
var LTofuControl = document.getElementsByClassName('LTofu')[0];
var LPeaControl = document.getElementsByClassName('LPea')[0];
var DBeefControl = document.getElementsByClassName('DBeef')[0];
var DChickenControl = document.getElementsByClassName('DChicken')[0];
var DPorkControl = document.getElementsByClassName('DPork')[0];
var DFishControl = document.getElementsByClassName('DFish')[0];
var DRiceControl = document.getElementsByClassName('DRice')[0];
var DPastaControl = document.getElementsByClassName('DPasta')[0];
var DLambControl = document.getElementsByClassName('DLamb')[0];
var DTofuControl = document.getElementsByClassName('DTofu')[0];
var DPeaControl = document.getElementsByClassName('DPea')[0];

var EvilControl = document.getElementsByClassName('Co2Evil')[0];
var NormalControl = document.getElementsByClassName('Co2Normal')[0];
var AngelControl = document.getElementsByClassName('Co2Angel')[0];

var CEggControl = document.getElementsByClassName('CEgg')[0];
var COtamealControl = document.getElementsByClassName('COtameal')[0];
var CBreadControl = document.getElementsByClassName('CBread')[0];
var BeefLControl = document.getElementsByClassName('BeefL')[0];
var ChickenLControl = document.getElementsByClassName('ChickenL')[0];
var PorkLControl = document.getElementsByClassName('PorkL')[0];
var FishLControl = document.getElementsByClassName('FishL')[0];
var RiceLControl = document.getElementsByClassName('RiceL')[0];
var PastaLControl = document.getElementsByClassName('PastaL')[0];
var LambLControl = document.getElementsByClassName('LambL')[0];
var TofuLControl = document.getElementsByClassName('TofuL')[0];
var PeaLControl = document.getElementsByClassName('PeaL')[0];

var BeefDControl = document.getElementsByClassName('BeefD')[0];
var ChickenDControl = document.getElementsByClassName('ChickenD')[0];
var PorkDControl = document.getElementsByClassName('PorkD')[0];
var FishDControl = document.getElementsByClassName('FishD')[0];
var RiceDControl = document.getElementsByClassName('RiceD')[0];
var PastaDControl = document.getElementsByClassName('PastaD')[0];
var LambDControl = document.getElementsByClassName('LambD')[0];
var TofuDControl = document.getElementsByClassName('TofuD')[0];
var PeaDControl = document.getElementsByClassName('PeaD')[0];


var CDessertControl = document.getElementsByClassName('CDessert')[0];
var CDrinkControl = document.getElementsByClassName('CDrink')[0];
var CAirConControl = document.getElementsByClassName('CAirCon')[0];
var CLightControl = document.getElementsByClassName('CLight')[0];
var CTranstControl = document.getElementsByClassName('CTrans')[0];

var ArrowControl = document.getElementsByClassName('ArrowDown')[0];









document.getElementsByClassName('Egg')[0].onclick = function() 
{	
	EggValue = EggValue+1;
	
	if(EggValue % 2 === 1){
		TotalValue =  TotalValue + 0.55;
		EggControl.style.backgroundColor = "#EE9933";
		EggControl.style.color = "#FFFFFF";		
		CEggControl.style.opacity = 1;
	}
	if(EggValue %2 === 0){
		TotalValue = TotalValue - 0.55 ;
		EggControl.style.backgroundColor = "#EEEEEE";
		EggControl.style.color = "#000000";
		CEggControl.style.opacity = 0.3;


	}
};
document.getElementsByClassName('Otameal')[0].onclick = function() 
{	
	OtamealValue = OtamealValue + 1;
	
	if(OtamealValue % 2 === 1){
		TotalValue =  TotalValue + 0.1;
		OtamealControl.style.backgroundColor = "#EE9933";
		OtamealControl.style.color = "#FFFFFF";
		COtamealControl.style.opacity = 1;

	}
	if(OtamealValue %2 === 0){
		TotalValue = TotalValue - 0.1 ;
		OtamealControl.style.backgroundColor = "#EEEEEE";
		OtamealControl.style.color = "#000000";
		COtamealControl.style.opacity = 0.3;


	}
	
};

document.getElementsByClassName('Bread')[0].onclick = function() 
{	
	
	BreadValue = BreadValue + 1;
	
	if(BreadValue % 2 === 1){
		TotalValue =  TotalValue + 0.06;
		BreadControl.style.backgroundColor = "#EE9933";
		BreadControl.style.color = "#FFFFFF";
		CBreadControl.style.opacity = 1;

	}
	if(BreadValue %2 === 0){
		TotalValue = TotalValue - 0.06 ;
		BreadControl.style.backgroundColor = "#EEEEEE";
		BreadControl.style.color = "#000000";
		CBreadControl.style.opacity = 0.3;


	}
	
};

document.getElementsByClassName('LBeef')[0].onclick = function() 
{	
	
	LBeefValue = LBeefValue + 1;
	
	if(LBeefValue % 2 === 1){
		TotalValue =  TotalValue + 7.73;
		LBeefControl.style.backgroundColor = "#EE9933";
		LBeefControl.style.color = "#FFFFFF";
		BeefLControl.style.opacity = 1;

	}
	if(LBeefValue %2 === 0){
		TotalValue = TotalValue - 7.73 ;
		LBeefControl.style.backgroundColor = "#EEEEEE";
		LBeefControl.style.color = "#000000";
		BeefLControl.style.opacity = 0.3;


	}	
};

document.getElementsByClassName('LChicken')[0].onclick = function() 
{	
	
	LChickenValue = LChickenValue + 1;
	
	if(LChickenValue % 2 === 1){
		TotalValue =  TotalValue + 1.36;
		LChickenControl.style.backgroundColor = "#EE9933";
		LChickenControl.style.color = "#FFFFFF";
		ChickenLControl.style.opacity = 1;
	}
	if(LChickenValue %2 === 0){
		TotalValue = TotalValue - 1.36 ;
		LChickenControl.style.backgroundColor = "#EEEEEE";
		LChickenControl.style.color = "#000000";
		ChickenLControl.style.opacity = 0.3;

	}		
};

document.getElementsByClassName('LPork')[0].onclick = function() 
{	
	
	LPorkValue = LPorkValue + 1;
	
	if(LPorkValue % 2 === 1){
		TotalValue =  TotalValue + 1.8;
		LPorkControl.style.backgroundColor = "#EE9933";
		LPorkControl.style.color = "#FFFFFF";
		PorkLControl.style.opacity = 1;
	}
	if(LPorkValue %2 === 0){
		TotalValue = TotalValue - 1.8 ;
		LPorkControl.style.backgroundColor = "#EEEEEE";
		LPorkControl.style.color = "#000000";
		PorkLControl.style.opacity = 0.3;

	}		
	
};
document.getElementsByClassName('LFish')[0].onclick = function() 
{	
	
	LFishValue = LFishValue + 1;
	
	if(LFishValue % 2 === 1){
		TotalValue =  TotalValue + 1.87;
		LFishControl.style.backgroundColor = "#EE9933";
		LFishControl.style.color = "#FFFFFF";
		FishLControl.style.opacity = 1;
	}
	if(LFishValue %2 === 0){
		TotalValue = TotalValue - 1.87 ;
		LFishControl.style.backgroundColor = "#EEEEEE";
		LFishControl.style.color = "#000000";
		FishLControl.style.opacity = 0.3;

	}		
	
};

document.getElementsByClassName('LRice')[0].onclick = function() 
{	
	
	LRiceValue = LRiceValue + 1;
	
	if(LRiceValue % 2 === 1){
		TotalValue =  TotalValue + 0.33;
		LRiceControl.style.backgroundColor = "#EE9933";
		LRiceControl.style.color = "#FFFFFF";
		RiceLControl.style.opacity = 1;
	}
	if(LRiceValue %2 === 0){
		TotalValue = TotalValue - 0.33 ;
		LRiceControl.style.backgroundColor = "#EEEEEE";
		LRiceControl.style.color = "#000000";
		RiceLControl.style.opacity = 0.3;

	}		
	
};

document.getElementsByClassName('LPasta')[0].onclick = function() 
{	
	
	LPastaValue = LPastaValue + 1;
	
	if(LPastaValue % 2 === 1){
		TotalValue =  TotalValue + 0.12;
		LPastaControl.style.backgroundColor = "#EE9933";
		LPastaControl.style.color = "#FFFFFF";
		PastaLControl.style.opacity = 1;
	}
	if(LPastaValue %2 === 0){
		TotalValue = TotalValue - 0.12 ;
		LPastaControl.style.backgroundColor = "#EEEEEE";
		LPastaControl.style.color = "#000000";
		PastaLControl.style.opacity = 0.3;

	}		
	
};

document.getElementsByClassName('LLamb')[0].onclick = function() 
{	
	
	LLambValue = LLambValue + 1;
	
	if(LLambValue % 2 === 1){
		TotalValue =  TotalValue + 4.33;
		LLambControl.style.backgroundColor = "#EE9933";
		LLambControl.style.color = "#FFFFFF";
		LambLControl.style.opacity = 1;
	}
	if(LLambValue %2 === 0){
		TotalValue = TotalValue - 4.33 ;
		LLambControl.style.backgroundColor = "#EEEEEE";
		LLambControl.style.color = "#000000";
		LambLControl.style.opacity = 0.3;

	}		
	
};
document.getElementsByClassName('LTofu')[0].onclick = function() 
{	
	
	LTofuValue = LTofuValue + 1;
	
	if(LTofuValue % 2 === 1){
		TotalValue =  TotalValue + 0.16;
		LTofuControl.style.backgroundColor = "#EE9933";
		LTofuControl.style.color = "#FFFFFF";
		TofuLControl.style.opacity = 1;
	}
	if(LTofuValue %2 === 0){
		TotalValue = TotalValue - 0.16 ;
		LTofuControl.style.backgroundColor = "#EEEEEE";
		LTofuControl.style.color = "#000000";
		TofuLControl.style.opacity = 0.3;

	}		
	
};
document.getElementsByClassName('LPea')[0].onclick = function() 
{	
	
	LPeaValue = LPeaValue + 1;
	
	if(LPeaValue % 2 === 1){
		TotalValue =  TotalValue + 0.02;
		LPeaControl.style.backgroundColor = "#EE9933";
		LPeaControl.style.color = "#FFFFFF";
		PeaLControl.style.opacity = 1;
	}
	if(LPeaValue %2 === 0){
		TotalValue = TotalValue - 0.02 ;
		LPeaControl.style.backgroundColor = "#EEEEEE";
		LPeaControl.style.color = "#000000";
		PeaLControl.style.opacity = 0.3;

	}		
	
};

document.getElementsByClassName('DBeef')[0].onclick = function() 
{	
	
	DBeefValue = DBeefValue + 1;
	
	if(DBeefValue % 2 === 1){
		TotalValue =  TotalValue + 7.73;
		DBeefControl.style.backgroundColor = "#EE9933";
		DBeefControl.style.color = "#FFFFFF";
		BeefDControl.style.opacity = 1;
	}
	if(DBeefValue %2 === 0){
		TotalValue = TotalValue - 7.73 ;
		DBeefControl.style.backgroundColor = "#EEEEEE";
		DBeefControl.style.color = "#000000";
		BeefDControl.style.opacity = 0.3;

	}	
};

document.getElementsByClassName('DChicken')[0].onclick = function() 
{	
	
	DChickenValue = DChickenValue + 1;
	
	if(DChickenValue % 2 === 1){
		TotalValue =  TotalValue + 1.36;
		DChickenControl.style.backgroundColor = "#EE9933";
		DChickenControl.style.color = "#FFFFFF";
		ChickenDControl.style.opacity = 1;

	}
	if(DChickenValue %2 === 0){
		TotalValue = TotalValue - 1.36 ;
		DChickenControl.style.backgroundColor = "#EEEEEE";
		DChickenControl.style.color = "#000000";
		ChickenDControl.style.opacity = 0.3;

	}		
};

document.getElementsByClassName('DPork')[0].onclick = function() 
{	
	
	DPorkValue = DPorkValue + 1;
	
	if(DPorkValue % 2 === 1){
		TotalValue =  TotalValue + 1.8;
		DPorkControl.style.backgroundColor = "#EE9933";
		DPorkControl.style.color = "#FFFFFF";
		PorkDControl.style.opacity = 1;
	}
	if(DPorkValue %2 === 0){
		TotalValue = TotalValue - 1.8 ;
		DPorkControl.style.backgroundColor = "#EEEEEE";
		DPorkControl.style.color = "#000000";
		PorkDControl.style.opacity = 0.3;

	}		
	
};
document.getElementsByClassName('DFish')[0].onclick = function() 
{	
	
	DFishValue = DFishValue + 1;
	
	if(DFishValue % 2 === 1){
		TotalValue =  TotalValue + 1.87;
		DFishControl.style.backgroundColor = "#EE9933";
		DFishControl.style.color = "#FFFFFF";
		FishDControl.style.opacity = 1;
	}
	if(DFishValue %2 === 0){
		TotalValue = TotalValue - 1.87 ;
		DFishControl.style.backgroundColor = "#EEEEEE";
		DFishControl.style.color = "#000000";
		FishDControl.style.opacity = 0.3;


	}		
	
};

document.getElementsByClassName('DRice')[0].onclick = function() 
{	
	
	DRiceValue = DRiceValue + 1;
	
	if(DRiceValue % 2 === 1){
		TotalValue =  TotalValue + 0.33;
		DRiceControl.style.backgroundColor = "#EE9933";
		DRiceControl.style.color = "#FFFFFF";
		RiceDControl.style.opacity = 1;
	}
	if(DRiceValue %2 === 0){
		TotalValue = TotalValue - 0.33 ;
		DRiceControl.style.backgroundColor = "#EEEEEE";
		DRiceControl.style.color = "#000000";
		RiceDControl.style.opacity = 0.3;

	}		
	
};

document.getElementsByClassName('DPasta')[0].onclick = function() 
{	
	
	DPastaValue = DPastaValue + 1;
	
	if(DPastaValue % 2 === 1){
		TotalValue =  TotalValue + 0.12;
		DPastaControl.style.backgroundColor = "#EE9933";
		DPastaControl.style.color = "#FFFFFF";
		PastaDControl.style.opacity = 1;
	}
	if(DPastaValue %2 === 0){
		TotalValue = TotalValue - 0.12 ;
		DPastaControl.style.backgroundColor = "#EEEEEE";
		DPastaControl.style.color = "#000000";
		PastaDControl.style.opacity = 0.3;

	}		
	
};

document.getElementsByClassName('DLamb')[0].onclick = function() 
{	
	
	DLambValue = DLambValue + 1;
	
	if(DLambValue % 2 === 1){
		TotalValue =  TotalValue + 4.33;
		DLambControl.style.backgroundColor = "#EE9933";
		DLambControl.style.color = "#FFFFFF";
		LambDControl.style.opacity = 1;
	}
	if(DLambValue %2 === 0){
		TotalValue = TotalValue - 4.33 ;
		DLambControl.style.backgroundColor = "#EEEEEE";
		DLambControl.style.color = "#000000";
		LambDControl.style.opacity = 0.3;

	}		
	
};
document.getElementsByClassName('DTofu')[0].onclick = function() 
{	
	
	DTofuValue = DTofuValue + 1;
	
	if(DTofuValue % 2 === 1){
		TotalValue =  TotalValue + 0.16;
		DTofuControl.style.backgroundColor = "#EE9933";
		DTofuControl.style.color = "#FFFFFF";
		TofuDControl.style.opacity = 1;
	}
	if(DTofuValue %2 === 0){
		TotalValue = TotalValue - 0.16 ;
		DTofuControl.style.backgroundColor = "#EEEEEE";
		DTofuControl.style.color = "#000000";
		TofuDControl.style.opacity = 0.3;

	}		
	
};
document.getElementsByClassName('DPea')[0].onclick = function() 
{	
	
	DPeaValue = DPeaValue + 1;
	
	if(DPeaValue % 2 === 1){
		TotalValue =  TotalValue + 0.02;
		DPeaControl.style.backgroundColor = "#EE9933";
		DPeaControl.style.color = "#FFFFFF";
		PeaDControl.style.opacity = 1;
	}
	if(DPeaValue %2 === 0){
		TotalValue = TotalValue - 0.02 ;
		DPeaControl.style.backgroundColor = "#EEEEEE";
		DPeaControl.style.color = "#000000";
		PeaDControl.style.opacity = 0.3;

	}		
	
};
document.getElementsByClassName('WantToEat')[0].onclick = function() 
{
	var DessertChoosen = document.getElementById("Sweet").value;
	if(DessertChoosen === "奶酪"){
		CDessertControl.classList.add('Cheese');
		CDessertControl.classList.remove('Banana');
		CDessertControl.classList.remove('Tomato');
		CDessertControl.classList.remove('Choco');
		CDessertControl.style.opacity = 1;

		

	}
	if(DessertChoosen === "香蕉"){
		CDessertControl.classList.remove('Cheese');
		CDessertControl.classList.add('Banana');
		CDessertControl.classList.remove('Tomato');
		CDessertControl.classList.remove('Choco');
		CDessertControl.style.opacity = 1;

	}
	if(DessertChoosen === "番茄"){
		CDessertControl.classList.remove('Cheese');
		CDessertControl.classList.remove('Banana');
		CDessertControl.classList.add('Tomato');
		CDessertControl.classList.remove('Choco');
		CDessertControl.style.opacity = 1;

	}
	if(DessertChoosen === "巧克力"){
		CDessertControl.classList.remove('Cheese');
		CDessertControl.classList.remove('Banana');
		CDessertControl.classList.remove('Tomato');
		CDessertControl.classList.add('Choco');
		CDessertControl.style.opacity = 1;

	}
	if(DessertChoosen === "請選擇你的點心"){
		CDessertControl.classList.remove('Cheese');
		CDessertControl.classList.remove('Banana');
		CDessertControl.classList.remove('Tomato');
		CDessertControl.classList.remove('Choco');
		CDessertControl.style.opacity = 1;
	}
};
document.getElementsByClassName('WantToDrink')[0].onclick = function() {
	var WaterChoosen = document.getElementById("Water").value;
	
	if(WaterChoosen === "豆漿"){
		CDrinkControl.classList.add('Soya');
		CDrinkControl.classList.remove('Coffee');
		CDrinkControl.classList.remove('Beer');
		CDrinkControl.classList.remove('Tea');
		CDrinkControl.classList.remove('Milk');
		CDrinkControl.style.opacity = 1;

	}
	if(WaterChoosen === "咖啡"){
		CDrinkControl.classList.remove('Soya');
		CDrinkControl.classList.add('Coffee');
		CDrinkControl.classList.remove('Beer');
		CDrinkControl.classList.remove('Tea');
		CDrinkControl.classList.remove('Milk');	
		CDrinkControl.style.opacity = 1;
	}

	if(WaterChoosen === "啤酒"){
		CDrinkControl.classList.remove('Soya');
		CDrinkControl.classList.remove('Coffee');
		CDrinkControl.classList.add('Beer');
		CDrinkControl.classList.remove('Tea');
		CDrinkControl.classList.remove('Milk');
		CDrinkControl.style.opacity = 1;
	}
	
	if(WaterChoosen === "茶"){
		CDrinkControl.classList.remove('Soya');
		CDrinkControl.classList.remove('Coffee');
		CDrinkControl.classList.remove('Beer');
		CDrinkControl.classList.add('Tea');
		CDrinkControl.classList.remove('Milk');		
		CDrinkControl.style.opacity = 1;
	}
	
	if(WaterChoosen === "牛奶"){
		CDrinkControl.classList.remove('Soya');
		CDrinkControl.classList.remove('Coffee');
		CDrinkControl.classList.remove('Beer');
		CDrinkControl.classList.remove('Tea');
		CDrinkControl.classList.add('Milk');
		CDrinkControl.style.opacity = 1;
	}
	if(WaterChoosen === "請選擇你的飲料"){
		CDrinkControl.classList.remove('Soya');
		CDrinkControl.classList.remove('Coffee');
		CDrinkControl.classList.remove('Beer');
		CDrinkControl.classList.remove('Tea');
		CDrinkControl.classList.remove('Milk');
		CDrinkControl.style.opacity = 1;
	}
	
	
};

document.getElementsByClassName('WantToUse')[0].onclick = function() {
	var AirChoosen = document.getElementById("Cool").value;
	
	if(AirChoosen === "使用定頻冷氣3小時"){
		CAirConControl.classList.add('Old3');
		CAirConControl.classList.remove('Old8');
		CAirConControl.classList.remove('New8');
		CAirConControl.style.opacity = 1;

	}
	if(AirChoosen === "使用定頻冷氣8小時"){
		CAirConControl.classList.remove('Old3');
		CAirConControl.classList.add('Old8');
		CAirConControl.classList.remove('New8');
		CAirConControl.style.opacity = 1;
		
	}

	if(AirChoosen === "使用變頻冷氣8小時"){
		CAirConControl.classList.remove('Old3');
		CAirConControl.classList.remove('Old8');
		CAirConControl.classList.add('New8');
		CAirConControl.style.opacity = 1;
		
	}
	
	
	
	
	if(AirChoosen === "請選擇你的冷氣"){
		CAirConControl.classList.remove('Old3');
		CAirConControl.classList.remove('Old8');
		CAirConControl.classList.remove('New8');
		CAirConControl.style.opacity = 1;
		
	}
	
	
};
document.getElementsByClassName('WantToTurn')[0].onclick = function() {
	var LightChoosen = document.getElementById("TurnOn").value;
	
	if(LightChoosen === "傳統白熾燈泡"){
		CLightControl.classList.add('OldLight');
		CLightControl.classList.remove('LowLight');
		CLightControl.classList.remove('LEDLight');
		CLightControl.style.opacity = 1;

	}
	if(LightChoosen === "省電燈泡"){
		CLightControl.classList.remove('OldLight');
		CLightControl.classList.add('LowLight');
		CLightControl.classList.remove('LEDLight');
		CLightControl.style.opacity = 1;
		
	}

	if(LightChoosen === "LED燈泡"){
		CLightControl.classList.remove('OldLight');
		CLightControl.classList.remove('LowLight');
		CLightControl.classList.add('LEDLight');
		CLightControl.style.opacity = 1;
		
	}
	
	
	if(LightChoosen === "請選擇你的燈泡"){
		CLightControl.classList.remove('OldLight');
		CLightControl.classList.remove('LowLight');
		CLightControl.classList.remove('LEDLight');
		CLightControl.style.opacity = 1;
	}
	
	
};

document.getElementsByClassName('WantToGo')[0].onclick = function() {
	var TransChoosen = document.getElementById("GoGo").value;
	
	if(TransChoosen === "開車"){
		CTranstControl.classList.add('Car');
		CTranstControl.classList.remove('Moto');
		CTranstControl.classList.remove('Plane');
		CTranstControl.classList.remove('Bus');
		CTranstControl.style.opacity = 1;


	}
	if(TransChoosen === "騎機車"){
		CTranstControl.classList.remove('Car');
		CTranstControl.classList.add('Moto');
		CTranstControl.classList.remove('Plane');
		CTranstControl.classList.remove('Bus');
		CTranstControl.style.opacity = 1;
		
	}

	if(TransChoosen === "搭飛機"){
		CTranstControl.classList.remove('Car');
		CTranstControl.classList.remove('Moto');
		CTranstControl.classList.add('Plane');
		CTranstControl.classList.remove('Bus');
		CTranstControl.style.opacity = 1;
		
	}
	if(TransChoosen === "搭公車"){
		CTranstControl.classList.remove('Car');
		CTranstControl.classList.remove('Moto');
		CTranstControl.classList.remove('Plane');
		CTranstControl.classList.add('Bus');
		CTranstControl.style.opacity = 1;
		
	}
	
	
	if(TransChoosen === "請選擇你的交通工具"){
		CTranstControl.classList.remove('Car');
		CTranstControl.classList.remove('Moto');
		CTranstControl.classList.remove('Plane');
		CTranstControl.classList.remove('Bus');
		CTranstControl.style.opacity = 1;
		
	}
	
	
};

document.getElementsByClassName('SendOut')[0].onclick = function() 
{	
	location.href = "#view2";
	var DessertChoosen = document.getElementById("Sweet").value;

	var DessertCreate = 0;
	if(DessertChoosen === "奶酪"){
		DessertCreate = 0.96;
		CDessertControl.classList.remove('Cheese');

	}
	if(DessertChoosen === "香蕉"){
		DessertCreate = 0.07;
		CDessertControl.classList.remove('Banana');

	}
	if(DessertChoosen === "番茄"){
		DessertCreate = 0.16;
		CDessertControl.classList.remove('Tomato');

	}
	if(DessertChoosen === "巧克力"){
		DessertCreate = 1.48;
		CDessertControl.classList.remove('Choco');

	}
	if(DessertChoosen === "請選擇你的點心"){
		DessertCreate = 0;

	}
	
	var WaterChoosen = document.getElementById("Water").value;
	var WaterCreate = 0;
	if(WaterChoosen === "豆漿"){
		WaterCreate = 0.19;
		CDrinkControl.classList.remove('Soya');

	}
	if(WaterChoosen === "咖啡"){
		WaterCreate = 0.42;
		CDrinkControl.classList.remove('Coffee');

	}
	if(WaterChoosen === "啤酒"){
		WaterCreate = 0.67;
		CDrinkControl.classList.remove('Beer');

	}
	if(WaterChoosen === "茶"){
		WaterCreate = 0.04;
		CDrinkControl.classList.remove('Tea');

	}
	if(WaterChoosen === "牛奶"){
		WaterCreate = 0.62;
		CDrinkControl.classList.remove('Milk');

	}
	if(WaterChoosen === "請選擇你的飲料"){
		WaterCreate = 0;

	}
	
	var AirConChoosen = document.getElementById("Cool").value;
	var AirConCreate = 0;
	if(AirConChoosen === "使用定頻冷氣3小時"){
		AirConCreate = 0.19;
	}
	if(AirConChoosen === "使用定頻冷氣8小時"){
		AirConCreate = 0.42;
	}
	if(AirConChoosen === "使用變頻冷器8小時"){
		AirConCreate = 0.67;
	}
	
	if(WaterChoosen === "請選擇你的冷氣"){
		AirConCreate = 0;

	}
	
	var LightChoosen = document.getElementById("TurnOn").value;
	var LightCreate = 0;
	if(LightChoosen === "傳統白熾燈泡"){
		LightCreate = 0.27;
	}
	if(LightChoosen === "省電燈泡"){
		LightCreate = 0.186;
	}
	if(LightChoosen === "LED燈泡"){
		LightCreate = 0.126;
	}
	
	if(LightChoosen === "請選擇你的燈泡"){
		LightCreate = 0;

	}
	
	var TransChoosen = document.getElementById("GoGo").value;
	var TransCreate = 0;
	if(TransChoosen === "騎機車"){
		TransCreate = 1.5;
	}
	if(TransChoosen === "搭飛機"){
		TransCreate = 1.09;
	}
	if(TransChoosen === "搭公車"){
		TransCreate = 0.55;
	}
	if(TransChoosen === "開車"){
		TransCreate = 1.65;
	}
	if(TransChoosen === "請選擇你的交通工具"){
		TransCreate = 0;

	}


	TotalValue = TotalValue + DessertCreate + WaterCreate + AirConCreate + LightCreate + TransCreate;
	var MonthTotal = TotalValue*30;
	
	if(navigator.userAgent.match(/Android|iPhone/i)) {
		document.getElementById("result").innerHTML = '您每天製造了 ' +'<br/>'+ TotalValue.toFixed(2) + 'Kg CO2'+'<br/>'+'您每月製造了 '+'<br/>'+ MonthTotal.toFixed(2) + 'Kg CO2' ;
    
	}
	else{
		document.getElementById("result").innerHTML = '您每天製造了 ' + TotalValue.toFixed(2) + 'Kg CO2'+'<br/>'+'您每月製造了 '+ MonthTotal.toFixed(2) + 'Kg CO2' ;
	}

	EggValue = 0;
	EggControl.style.backgroundColor = "#EEEEEE";
	EggControl.style.color = "#000000";
	
	OtamealValue = 0;
	OtamealControl.style.backgroundColor = "#EEEEEE";
	OtamealControl.style.color = "#000000";

	BreadValue = 0;
	BreadControl.style.backgroundColor = "#EEEEEE";
	BreadControl.style.color = "#000000";
	
	LBeefValue = 0;
	LBeefControl.style.backgroundColor = "#EEEEEE";
	LBeefControl.style.color = "#000000";
	
	LChickenValue = 0;
	LChickenControl.style.backgroundColor = "#EEEEEE";
	LChickenControl.style.color = "#000000";
	
	LPorkValue = 0;
	LPorkControl.style.backgroundColor = "#EEEEEE";
	LPorkControl.style.color = "#000000";
	
	LFishValue = 0;
	LFishControl.style.backgroundColor = "#EEEEEE";
	LFishControl.style.color = "#000000";
	
	LRiceValue = 0;
	LRiceControl.style.backgroundColor = "#EEEEEE";
	LRiceControl.style.color = "#000000";
	
	LPastaValue = 0;
	LPastaControl.style.backgroundColor = "#EEEEEE";
	LPastaControl.style.color = "#000000";
	
	LLambValue = 0;
	LLambControl.style.backgroundColor = "#EEEEEE";
	LLambControl.style.color = "#000000";
	
	LTofuValue = 0;
	LTofuControl.style.backgroundColor = "#EEEEEE";
	LTofuControl.style.color = "#000000";
	
	LPeaValue = 0;
	LPeaControl.style.backgroundColor = "#EEEEEE";
	LPeaControl.style.color = "#000000";
	
	DBeefValue = 0;
	DBeefControl.style.backgroundColor = "#EEEEEE";
	DBeefControl.style.color = "#000000";
	
	DChickenValue = 0;
	DChickenControl.style.backgroundColor = "#EEEEEE";
	DChickenControl.style.color = "#000000";
	
	DPorkValue = 0;
	DPorkControl.style.backgroundColor = "#EEEEEE";
	DPorkControl.style.color = "#000000";
	
	DFishValue = 0;
	DFishControl.style.backgroundColor = "#EEEEEE";
	DFishControl.style.color = "#000000";
	
	DRiceValue = 0;
	DRiceControl.style.backgroundColor = "#EEEEEE";
	DRiceControl.style.color = "#000000";
	
	DPastaValue = 0;
	DPastaControl.style.backgroundColor = "#EEEEEE";
	DPastaControl.style.color = "#000000";
	
	DLambValue = 0;
	DLambControl.style.backgroundColor = "#EEEEEE";
	DLambControl.style.color = "#000000";
	
	DTofuValue = 0;
	DTofuControl.style.backgroundColor = "#EEEEEE";
	DTofuControl.style.color = "#000000";
	
	DPeaValue = 0;
	DPeaControl.style.backgroundColor = "#EEEEEE";
	DPeaControl.style.color = "#000000";
	
	CEggControl.style.opacity = 0.3;
	CBreadControl.style.opacity = 0.3;
	COtamealControl.style.opacity = 0.3;
	BeefLControl.style.opacity = 0.3;
	ChickenLControl.style.opacity = 0.3;
	PorkLControl.style.opacity = 0.3;
	FishLControl.style.opacity = 0.3;
	RiceLControl.style.opacity = 0.3;
	PastaLControl.style.opacity = 0.3;
	LambLControl.style.opacity = 0.3;
	TofuLControl.style.opacity = 0.3;
	PeaLControl.style.opacity = 0.3;
	
	BeefDControl.style.opacity = 0.3;
	ChickenDControl.style.opacity = 0.3;
	PorkDControl.style.opacity = 0.3;
	FishDControl.style.opacity = 0.3;
	RiceDControl.style.opacity = 0.3;
	PastaDControl.style.opacity = 0.3;
	LambDControl.style.opacity = 0.3;
	TofuDControl.style.opacity = 0.3;
	PeaDControl.style.opacity = 0.3;
	
	CDessertControl.style.opacity = 0.3;
	CDrinkControl.style.opacity = 0.3;
	CAirConControl.style.opacity = 0.3;
	CLightControl.style.opacity = 0.3;
	CTranstControl.style.opacity = 0.3;







	
	if(TotalValue >= 18){
		EvilControl.style.zIndex = 11;
		EvilControl.style.opacity = 1;

		
		NormalControl.style.zIndex = 9;
		NormalControl.style.opacity = 0;
		
		AngelControl.style.zIndex = 9;
		AngelControl.style.opacity = 0;


	}
	if(TotalValue < 18 && TotalValue >= 10){
		
		EvilControl.style.zIndex = 9;
		EvilControl.style.opacity = 0;

		
		NormalControl.style.zIndex = 11;
		NormalControl.style.opacity = 1;
		
		AngelControl.style.zIndex = 9;
		AngelControl.style.opacity = 0;
		

	}	

	if(TotalValue < 10){
		
		EvilControl.style.zIndex = 9;
		EvilControl.style.opacity = 0;

		NormalControl.style.zIndex = 9;
		NormalControl.style.opacity = 0;

		AngelControl.style.zIndex = 11;
		AngelControl.style.opacity = 1;


	}
	
	TotalValue = 0;
	ArrowControl.classList.add('open');
	

};
	
	