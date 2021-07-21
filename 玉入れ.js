//ステージ番号
let stageIndex=0;
//ボールをロックするためのboolian
let ballLock=true;
//ゴール判定を無くすためのboolian
let goalLock=false;
//ループで勝手に発射されないためのboolian
let loopLock=false;
//ゴール初期位置
let goalX= 630;
let goalY= 345;
//ボール初期位置
let ballY= 200;
let ballX= 300;
//ステージごとのボール初期位置
let ballIX=300;
let ballIY=200;


//thanks非表示
document.write('<img id="thanks" src="img/thanks.png">');
document.getElementById("thanks").style.display ="none";

//デスゾーン非表示
document.write('<img id="death" src="img/death.png">');
document.getElementById("death").style.display ="none";
//デスゾーンの座標
let deathX=200;
let deathY=365;
//デスゾーン2非表示
document.write('<img id="death2" src="img/death.png">');
document.getElementById("death2").style.display ="none";
//デスゾーン2の座標
let death2X=200;
let death2Y=265;
//デスゾーン3非表示
document.write('<img id="death3" src="img/death.png">');
document.getElementById("death3").style.display ="none";
//デスゾーン3の座標
let death3X=200;
let death3Y=365;
//デスゾーン4非表示
document.write('<img id="death4" src="img/death.png">');
document.getElementById("death4").style.display ="none";
//デスゾーン4の座標
let death4X=200;
let death4Y=365;
//デスゾーン5非表示
document.write('<img id="death5" src="img/death.png">');
document.getElementById("death5").style.display ="none";
//デスゾーン5の座標
let death5X=200;
let death5Y=365;
//デスゾーン6非表示
document.write('<img id="death6" src="img/death.png">');
document.getElementById("death6").style.display ="none";
//デスゾーン6の座標
let death6X=200;
let death6Y=365;
//デスゾーン7非表示
document.write('<img id="death7" src="img/death.png">');
document.getElementById("death7").style.display ="none";
//デスゾーン7の座標
let death7X=200;
let death7Y=365;
//デスゾーン8非表示
document.write('<img id="death8" src="img/death.png">');
document.getElementById("death8").style.display ="none";
//デスゾーン8の座標
let death8X=200;
let death8Y=365;
//デスゾーン9非表示
document.write('<img id="death9" src="img/death.png">');
document.getElementById("death9").style.display ="none";
//デスゾーン9の座標
let death9X=200;
let death9Y=365;
//デスゾーン10非表示
document.write('<img id="death10" src="img/death.png">');
document.getElementById("death10").style.display ="none";
//デスゾーン10の座標
let death10X=200;
let death10Y=365;

//長いデスゾーン非表示
document.write('<img id="longDeath" src="img/longdeath.png">');
document.getElementById("longDeath").style.display ="none";
//長いデスゾーンの座標
let longDeathX=500;
let longDeathY=315;
//長いデスゾーン2非表示
document.write('<img id="longDeath2" src="img/longdeath.png">');
document.getElementById("longDeath2").style.display ="none";
//長いデスゾーン2の座標
let longDeath2X=500;
let longDeath2Y=715;
//長いデスゾーン3非表示
document.write('<img id="longDeath3" src="img/longdeath.png">');
document.getElementById("longDeath3").style.display ="none";
//長いデスゾーン3の座標
let longDeath3X=500;
let longDeath3Y=-85;
//横デスゾーン非表示
document.write('<img id="yokoDeath" src="img/yokoDeath.png">');
document.getElementById("yokoDeath").style.display ="none";
//横デスゾーンの座標
let yokoDeathX=355;
let yokoDeathY=315;

//壁非表示
document.write('<img id="wall" src="img/wall.png">');
document.getElementById("wall").style.display ="none";
//壁の座標
let wallX=200;
let wallY=315;
//壁2非表示
document.write('<img id="wall2" src="img/wall.png">');
document.getElementById("wall2").style.display ="none";
//壁の座標
let wall2X=325;
let wall2Y=100;
//壁3非表示
document.write('<img id="wall3" src="img/wall.png">');
document.getElementById("wall3").style.display ="none";
//壁3の座標
let wall3X=425;
let wall3Y=500;
//壁4非表示
document.write('<img id="wall4" src="img/wall.png">');
document.getElementById("wall4").style.display ="none";
//壁4の座標
let wall4X=550;
let wall4Y=200;
//壁5非表示
document.write('<img id="wall5" src="img/wall.png">');
document.getElementById("wall5").style.display ="none";
//壁5の座標
let wall5X=600;
let wall5Y=400;

//モザイクを表示
document.write('<img id="white" src="img/white.png">');
document.write('<img id="white2" src="img/white.png">');
document.write('<img id="white3" src="img/white.png">');
document.write('<img id="white4" src="img/white.png">');
/*
const longDeath=()=>{
	if(stageIndex==2){
	document.getElementById( 'longDeath' ).style.top = longDeathY +"px";
	document.getElementById( 'longDeath' ).style.left = longDeathX +"px";
	}
}
setInterval(longDeath,1000/60);
*/

const titleDisplay=()=>{
	//タイトルを表示
document.write('<img id="title" src="img/title.png">');
/*
title.style.left =150+"px";
title.style.top =75+"px";
title.style.height =540+"px";
title.style.width =720+"px";
*/
/*
document.getElementById( 'title' ).style.top = 75 +"px";
    document.getElementById( 'title' ).style.left = 150 +"px";
document.getElementById( 'title' ).style.width = 720 +"px";
    document.getElementById( 'title' ).style.height = 540 +"px";
*/

//外枠を表示する
document.write('<img id="frame2" src="img/frame2.png">');
/*
document.getElementById("frame2").style.left =125+"px";
document.getElementById("frame2").style.top =50+"px";
document.getElementById("frame2").style.height =590+"px";
document.getElementById("frame2").style.width =770+"px";
*/
/*
document.getElementById( 'frame2' ).style.top = 50 +"px";
    document.getElementById( 'frame2' ).style.left = 125 +"px";
document.getElementById( 'frame2' ).style.width = 770 +"px";
    document.getElementById( 'frame2' ).style.height = 590 +"px";
*/

//内枠を表示する
document.write('<img id="frame" src="img/frame.png">');
/*
document.getElementById( 'frame' ).style.top = 75 +"px";
    document.getElementById( 'frame' ).style.left = 150 +"px";
document.getElementById( 'frame' ).style.width = 720 +"px";
    document.getElementById( 'frame' ).style.height = 540 +"px";
*/

//ゴールは非表示
document.write('<img id="goal" src="img/goal.png">');
document.getElementById("goal").style.display ="none";
//背景も非表示
document.write('<img id="background" src="img/background.png">');
document.getElementById("background").style.display ="none";
//クリア画面は非表示
document.write('<img id="stageClear" src="img/stageClear.png">');
document.getElementById("stageClear").style.display ="none";
//ゲームオーバーも非表示
document.write('<img id="gameOver" src="img/gameOver.png">');
document.getElementById("gameOver").style.display ="none";
//ボールも非表示
document.write('<img id="ball" src="img/ball.png">');
document.getElementById("ball").style.display ="none";
//スタートボタンを表示
document.write('<img id="startButton" src="img/startbutton.png">');
/*
document.getElementById( 'startButton' ).style.top = 380 +"px";
    document.getElementById( 'startButton' ).style.left = 385 +"px";
document.getElementById( 'startButton' ).style.width = 250 +"px";
    document.getElementById( 'startButton' ).style.height = 75 +"px";
*/

//遊び方ボタン表示
document.write('<img id="asobiButton" src="img/asobibutton.png">');
/*
document.getElementById( 'asobiButton' ).style.top = 400 +"px";
    document.getElementById( 'asobiButton' ).style.left = 385 +"px";
document.getElementById( 'asobiButton' ).style.width = 250 +"px";
    document.getElementById( 'asobiButton' ).style.height = 75 +"px";
*/

//遊び方は非表示
document.write('<img id="asobikata" src="img/asobikata.png">');
document.getElementById("asobikata").style.display ="none";
}

titleDisplay();
//スタート
const startGame=()=>{
	thanks.style.zIndex=10;
	stageIndex=1;
	loopLock=false;
	//タイトルを消す
	document.getElementById("title").style.display ="none";
	document.getElementById("startButton").style.display ="none";
	document.getElementById("asobiButton").style.display ="none";
	console.log('スタート！');
	//ステージ1を表示
	document.getElementById("goal").style.display ="block";
	document.getElementById("goal").style.top=goalY+"px"
	document.getElementById("goal").style.left=goalX+"px"
	document.getElementById("background").style.display ="block";
	document.getElementById("ball").style.display ="block";
	document.getElementById("ball").style.top=200+"px";
	document.getElementById("ball").style.left=300+"px";
	ballY= 200;
	ballX= 300;
	ballIX=300;
	ballIY=200;
	goalX= 630;
	goalY= 345;
}
document.getElementById("startButton").onclick = startGame;

//遊び方
const how=()=>{
	//タイトルを消す
	document.getElementById("title").style.display ="none";
	document.getElementById("startButton").style.display ="none";
	document.getElementById("asobiButton").style.display ="none";
	console.log('遊び方');
	ballLock=true;
	goalLock=true;
	//遊び方を表示
	document.getElementById("asobikata").style.display ="block";
}
document.getElementById("asobiButton").onclick = how;

//遊び方からタイトルへ
titleDisplay2=()=>{
	//遊び方を非表示
	document.getElementById("asobikata").style.display ="none";
	//タイトルを表示
	document.getElementById("title").style.display ="block";
	document.getElementById("startButton").style.display ="block";
	document.getElementById("asobiButton").style.display ="block";
	console.log('タイトルへ')
}
document.getElementById("asobikata").onclick = titleDisplay2;

//ゴール位置
/*こいつら前に置いた
let goalX= 630;
let goalY= 345;
*/
const setGoal=()=>{
	document.getElementById( 'goal' ).style.top = goalY +"px";
    document.getElementById( 'goal' ).style.left = goalX +"px";
}
setInterval(setGoal, 1000/60);

//ボール初期位置
/*前に置いた
let ballY= 200;
let ballX= 300;
*/
//ステージごとの初期位置
/*こいつら前に置いた
let ballIX=300;
let ballIY=200;
*/
//ボール速度
let balldX= 5;
let balldY= 0;
//ボールを動かすのとゴール判定とゲームオーバーの関係
let ballReset2=true;
let goalState=false;
const ballShoot=()=>{
console.log('インターバル起動中')
	if(goalState==false&&gameOverState==false&&ballLock==false){
		/*if(ballReset2==true){
			balldY=0;
			ballReset2=false;
			console.log('ballReset2Y起動');
		}*/
/*
  //反射
	if(ballX==150||ballX==840){
	balldX*=-1;
}
  if(ballX<150){
	ballX=ballX-(ballX-150);
	balldX*=-1;
}
  if(ballX>840){
	ballX=ballX-(ballX-840);
	balldX*=-1;
}
  if(ballY==585){
	balldY*=-1;
}
  if(ballY>585){
	ballY=ballY-(ballY-585);
	balldY*=-1;
}
  if(ballY==75){
	balldY*=-1;
}
  if(ballY<75){
	ballY=ballY-(ballY-75);
	balldY*=-1;
}
*/
  //基本の速度と座標
if(goalState==false&&gameOverState==false&&ballLock==false){
	balldY+=0.5;
	ballY+=balldY;
	ballX+=balldX;
	console.log('ボールのXは' + ballX);
	console.log('ボールのYは'+ballY);
	console.log('ボールのdXは' + balldX);
	console.log('ボールのdYは'+balldY);
    document.getElementById( 'ball' ).style.top = ballY +"px";
    document.getElementById( 'ball' ).style.left = ballX +"px";
}	
}
else{
	clearInterval(ballShoot);
}
//ステージ3の動き
if(stageIndex==3){
	longDeathY+=-3;
	document.getElementById( 'longDeath' ).style.top = longDeathY +"px";
	document.getElementById( 'longDeath' ).style.left = longDeathX +"px";
	longDeath2Y+=-3;
	document.getElementById( 'longDeath2' ).style.top = longDeath2Y +"px";
	document.getElementById( 'longDeath2' ).style.left = longDeath2X +"px";
	longDeath3Y+=-3;
	document.getElementById( 'longDeath3' ).style.top = longDeath3Y +"px";
	document.getElementById( 'longDeath3' ).style.left = longDeath3X +"px";
	if(longDeathY<=-585){
		longDeathY=615;
	}
	if(longDeath2Y<=-585){
		longDeath2Y=615;
	}
	if(longDeath3Y<=-585){
		longDeath3Y=615;
	}
}
//ステージ4の動き
if(stageIndex==4){
	if(ballX-wallX>=0&&ballX-wallX<=50){
		if(ballY-wallY>=-30&&ballY-wallY<=50){
			ballX=ballX-(ballX-250);
			balldX*=-1;
		}
	}
}
//ステージ5の動き
if(stageIndex==5){
	if(ballX-wallX>=-30&&ballX-wallX<=50){
		if(ballY-wallY>=-30&&ballY-wallY<=50){
			ballY=ballY-(ballY-wallY+40);
			balldY*=-1;
		}
	}
	if(ballX-wall2X>=-30&&ballX-wall2X<=50){
		if(ballY-wall2Y>=-30&&ballY-wall2Y<=50){
			ballY=ballY-(ballY-wall2Y-50);
			balldY*=-1;
		}
	}
	if(ballX-wall3X>=-30&&ballX-wall3X<=50){
		if(ballY-wall3Y>=-30&&ballY-wall3Y<=50){
			ballY=ballY-(ballY-wall3Y+40);
			balldY*=-1;
		}
	}
	if(ballX-wall4X>=-30&&ballX-wall4X<=50){
		if(ballY-wall4Y>=-30&&ballY-wall4Y<=50){
			ballY=ballY-(ballY-wall4Y-50);
			balldY*=-1;
		}
	}
	if(ballX-wall5X>=-30&&ballX-wall5X<=50){
		if(ballY-wall5Y>=-30&&ballY-wall5Y<=50){
			ballY=ballY-(ballY-wall5Y+40);
			balldY*=-1;
		}
	}
}

}
//クリック座標取得
let clickX=0;
let clickY=0;
function Click(event){
	if(ballLock==true){
		 clickX=event.clientX;
    clickY=event.clientY;
    console.log(clickX);
    console.log(clickY);
	}
}

let click_frame = document.getElementById('background');
click_frame.addEventListener('click', Click);

//クリック状態と発射
let gameOverState=false;
let startBall= true;
let intervalLock=false;
const startshoot2=()=>{
	startBall=false;
	balldX=(clickX-(ballX+15))/20;
	balldY=(clickY-(ballY+15))/20;
	console.log(balldX);
	console.log(balldY);
	console.log('ボール以外が押された');
	console.log('ボールのdXは' + balldX);
	console.log('ボールのdYは'+balldY);
	console.log('スタートシュート2');
	goalLock=false;
	ballLock=false;
	if(intervalLock==false){
		setInterval(ballShoot, 1000/60);
		intervalLock=true;	
	}
}
startShoot=()=>{
	console.log('スタートシュート！')
	if(startBall==true&&gameOverState==false&&loopLock==false){
		if(clickX-ballX>=0&&clickX-ballX<=30){
			if(clickY-ballY>=0&&clickY-ballY<=30){
				console.log('ボールが押された');
			}else{
				startshoot2();
			}
		}else{
			startshoot2();
		}
	}
}
	document.getElementById("background").onclick = startShoot;


//ゴールの当たり判定と演出
const goal=()=>{
	if(ballX-goalX>=-8&&ballX-goalX<=28){
		if(ballY-goalY>=-8&&ballY-goalY<=28){
			if(goalState==false&&goalLock==false){
			console.log('ゴールした');
			ballLock=true;
			clearInterval(ballShoot);
			clearInterval(goal);
			goalState=true;
			goalLock=true;
			stageClear.style.display ="block";
			ball.style.display="none";
			longDeath.style.display="none";
			longDeath2.style.display="none";
			longDeath3.style.display="none";
			wall.style.display="none";
			wall2.style.display="none";
			death.style.display="none";
			death2.style.display="none";
			death3.style.display="none";
			death4.style.display="none";
			yokoDeath.style.display="none";
			stageClear.style.zIndex = 15;
			background.style.zIndex=14;
		}
		}	
}
}
setInterval(goal, 1000/60);

//ゲームオーバー
//let gameOverState=false;は前に書いた

const gameOverSet=()=>{
	gameOver.style.display ="block";
	console.log('ゲームオーバー');
	gameOverState=true;
	ball.style.display="none";
	longDeath.style.display="none";
	longDeath2.style.display="none";
	longDeath3.style.display="none";
	wall2.style.display="none";
	death3.style.display="none";
	death4.style.display="none";
	clearInterval(ballShoot);
	clearInterval(game_over);
	ballLock=true;
	balldX=0;
	balldY=0;
}

const game_over=()=>{
	if(gameOverState==false){
		if(ballX<=150||ballX>=840||ballY<=75||ballY>=585){
	gameOverSet();
}
//ステージ2ゲームオーバー
if(stageIndex==2){
	if(ballX-longDeathX>=-30&&ballX-longDeathX<=50){
	if(ballY-longDeathY>=-30&&ballY-longDeathY<=300){
	gameOverSet();
	}
}
}
//ステージ3ゲームオーバー
if(stageIndex==3){
	if(ballX-longDeathX>=-30&&ballX-longDeathX<=50){
	if(ballY-longDeathY>=-30&&ballY-longDeathY<=300){
	gameOverSet();
}
	}
	
	if(ballX-longDeath2X>=-30&&ballX-longDeath2X<=50){
	if(ballY-longDeath2Y>=-30&&ballY-longDeath2Y<=300){
	gameOverSet();
}
	}
	
if(ballX-longDeath3X>=-30&&ballX-longDeath3X<=50){
	if(ballY-longDeath3Y>=-30&&ballY-longDeath3Y<=300){
	gameOverSet();
}
	}
}

//ステージ4ゲームオーバー
if(stageIndex==4){
	if(ballX-deathX>=-30&&ballX-deathX<=50){
		if(ballY-deathY>=-15&&ballY-deathY<=35){
			gameOverSet();
		}
	}
	if(ballX-death2X>=-30&&ballX-death2X<=50){
		if(ballY-death2Y>=-15&&ballY-death2Y<=35){
			gameOverSet();
		}
	}
	if(ballX-longDeathX>=-30&&ballX-longDeathX<=50){
	if(ballY-longDeathY>=-30&&ballY-longDeathY<=300){
	gameOverSet();
}
	}
	if(ballX-yokoDeathX>=-30&&ballX-yokoDeathX<=150){
		if(ballY-yokoDeathY>=-30&&ballY-yokoDeathY<=50){
			gameOverSet();
		}
	}
}
//ステージ5ゲームオーバー
if(stageIndex==5){
	if(ballX-deathX>=-15&&ballX-deathX<=35){
		if(ballY-deathY>=-30&&ballY-deathY<=50){
			gameOverSet();
		}
	}
	if(ballX-death2X>=-15&&ballX-death2X<=35){
		if(ballY-death2Y>=-30&&ballY-death2Y<=50){
			gameOverSet();
		}
	}
	if(ballX-death3X>=-15&&ballX-death3X<=35){
		if(ballY-death3Y>=-30&&ballY-death3Y<=50){
			gameOverSet();
		}
	}
	if(ballX-death4X>=-15&&ballX-death4X<=35){
		if(ballY-death4Y>=-30&&ballY-death4Y<=50){
			gameOverSet();
		}
	}
	if(ballX-death5X>=-15&&ballX-death5X<=35){
		if(ballY-death5Y>=-30&&ballY-death5Y<=50){
			gameOverSet();
		}
	}
	if(ballX-death6X>=-15&&ballX-death6X<=35){
		if(ballY-death6Y>=-30&&ballY-death6Y<=50){
			gameOverSet();
		}
	}
	if(ballX-death7X>=-15&&ballX-death7X<=35){
		if(ballY-death7Y>=-30&&ballY-death7Y<=50){
			gameOverSet();
		}
	}
	if(ballX-death8X>=-15&&ballX-death8X<=35){
		if(ballY-death8Y>=-30&&ballY-death8Y<=50){
			gameOverSet();
		}
	}
	if(ballX-death9X>=-15&&ballX-death9X<=35){
		if(ballY-death9Y>=-30&&ballY-death9Y<=50){
			gameOverSet();
		}
	}
	if(ballX-death10X>=-15&&ballX-death10X<=35){
		if(ballY-death10Y>=-30&&ballY-death10Y<=50){
			gameOverSet();
		}
	}
}

}
}
setInterval(game_over, 1000/60);

//クリックでリトライ
const retry=()=>{
if(gameOverState==true&&startBall==false){
	gameOver.style.display ="none";
	ball.style.display="block";
	if(stageIndex==2||stageIndex==4){
		longDeath.style.display="block";
	}
	if(stageIndex==3){
		longDeath.style.display="block";
		longDeath2.style.display="block";
		longDeath3.style.display="block";
	}
	if(stageIndex==4){
		longDeath.style.display="block";
	}
	if(stageIndex==5){
		wall2.style.display="block";
		death3.style.display="block";
		death4.style.display="block";
	}
	clearInterval(game_over);
	ballX=ballIX;
	ballY=ballIY;
	document.getElementById( 'ball' ).style.top = ballY +"px";
    document.getElementById( 'ball' ).style.left = ballX +"px";
	console.log('ボールのXは' + ballX);
	console.log('ボールのYは'+ballY);
	console.log('ボールのdXは' + balldX);
	console.log('ボールのdYは'+balldY);
    console.log('リトライする');
    ballReset2=true;
    gameOverState=false;
    startBall=true;
    balldX=0;
	balldY=0;
 }
}
	document.body.onclick = retry;

const ballReset=()=>{
	if(ballLock==true){
		balldX=0;
		balldY=0;
	}
}

setInterval(ballReset, 1000/60);

//次のステージに進むのとラストシーン
const nextStage=()=>{
	if(goalState==true){
		if(stageIndex<=5){
			goalState=false;
		stageClear.style.display ="none";
		stageIndex+=1;
		console.log('次へ');
		console.log('ステージ番号は'+stageIndex);
		stageChange();
		startBall=true;
		stageClear.style.zIndex = 14;
		background.style.zIndex=15;
		}
		if(stageIndex==6){
			stageClear.style.display ="none";
			death5.style.display ="none";
			death6.style.display ="none";
			death7.style.display ="none";
			death8.style.display ="none";
			death9.style.display ="none";
			death10.style.display ="none";
			wall3.style.display ="none";
			wall4.style.display ="none";
			wall5.style.display ="none";
			thanks.style.zIndex=16;
			ballLock=true;
			goalLock=true;
			document.getElementById( 'goal' ).style.display = "none";
			thanks.style.display="block";
		}
		}
}
const stageChange=()=>{
	//ステージ2
	if(stageIndex==2){
		ballX=400;
		ballY=500;
		ballIX=400;
		ballIY=500;
		goalX=800;
		goalY=495;
		ball.style.display="block";
		document.getElementById( 'ball' ).style.top = ballY +"px";
		document.getElementById( 'ball' ).style.left = ballX +"px";
		longDeath.style.display="block";
		document.getElementById( 'longDeath' ).style.top = longDeathY +"px";
		document.getElementById( 'longDeath' ).style.left = longDeathX +"px";
		console.log('ステージ2');
		console.log('ボールのXは' + ballX);
	console.log('ボールのYは'+ballY);
	}
	//ステージ3
	if(stageIndex==3){
		ballX=300;
		ballY=500;
		ballIX=300;
		ballIY=500;
		goalX=800;
		goalY=495;
		longDeathX=500;
		longDeathY=315;
		longDeath2X=500;
		longDeath2Y=715;
		longDeath3X=500;
		longDeath3Y=-85;
		ball.style.display="block";
		document.getElementById( 'ball' ).style.top = ballY +"px";
		document.getElementById( 'ball' ).style.left = ballX +"px";
		longDeath.style.display="block";
		longDeath2.style.display="block";
		longDeath3.style.display="block";
		document.getElementById( 'longDeath' ).style.top = longDeathY +"px";
		document.getElementById( 'longDeath' ).style.left = longDeathX +"px";
		document.getElementById( 'longDeath2' ).style.top = longDeath2Y +"px";
		document.getElementById( 'longDeath2' ).style.left = longDeath2X +"px";
		document.getElementById( 'longDeath3' ).style.top = longDeath3Y +"px";
		document.getElementById( 'longDeath3' ).style.left = longDeath3X +"px";
		console.log('ステージ3');
	}
	//ステージ4
	if(stageIndex==4){
		ballX=400;
		ballY=500;
		ballIX=400;
		ballIY=500;
		goalX=800;
		goalY=495;
		longDeathY=315;
		deathX=200;
		deathY=365;
		death2X=200;
		death2Y=265;
		wallX=200;
		wallY=315;
		ball.style.display="block";
		document.getElementById( 'ball' ).style.top = ballY +"px";
		document.getElementById( 'ball' ).style.left = ballX +"px";
		longDeath.style.display="block";
		document.getElementById( 'longDeath' ).style.top = longDeathY +"px";
		document.getElementById( 'longDeath' ).style.left = longDeathX +"px";
		yokoDeath.style.display="block";
		document.getElementById( 'yokoDeath' ).style.top = yokoDeathY +"px";
		document.getElementById( 'yokoDeath' ).style.left = yokoDeathX +"px";
		wall.style.display="block";
		document.getElementById( 'wall' ).style.top = wallY +"px";
		document.getElementById( 'wall' ).style.left = wallX +"px";
		death.style.display="block";
		document.getElementById( 'death' ).style.top = deathY +"px";
		document.getElementById( 'death' ).style.left = deathX +"px";
		death2.style.display="block";
		document.getElementById( 'death2' ).style.top = death2Y +"px";
		document.getElementById( 'death2' ).style.left = death2X +"px";
		console.log('ステージ4');
	}
	//ステージ5
	if(stageIndex==5){
		ballX=200;
		ballY=100;
		ballIX=200;
		ballIY=100;
		goalX=675;
		goalY=200;
		wallX=250;
		wallY=275;
		deathX=wallX-50;
		deathY=wallY;
		death2X=wallX+50;
		death2Y=wallY;
		death3X=wall2X-50;
		death3Y=wall2Y;
		death4X=wall2X+50;
		death4Y=wall2Y;
		death5X=wall3X-50;
		death5Y=wall3Y;
		death6X=wall3X+50;
		death6Y=wall3Y;
		death7X=wall4X-50;
		death7Y=wall4Y;
		death8X=wall4X+50;
		death8Y=wall4Y;
		death9X=wall5X-50;
		death9Y=wall5Y;
		death10X=wall5X+50;
		death10Y=wall5Y;
		ball.style.display="block";
		document.getElementById( 'ball' ).style.top = ballY +"px";
		document.getElementById( 'ball' ).style.left = ballX +"px";
		wall.style.display="block";
		document.getElementById( 'wall' ).style.top = wallY +"px";
		document.getElementById( 'wall' ).style.left = wallX +"px";
		wall2.style.display="block";
		document.getElementById( 'wall2' ).style.top = wall2Y +"px";
		document.getElementById( 'wall2' ).style.left = wall2X +"px";
		wall3.style.display="block";
		document.getElementById( 'wall3' ).style.top = wall3Y +"px";
		document.getElementById( 'wall3' ).style.left = wall3X +"px";
		wall4.style.display="block";
		document.getElementById( 'wall4' ).style.top = wall4Y +"px";
		document.getElementById( 'wall4' ).style.left = wall4X +"px";
		wall5.style.display="block";
		document.getElementById( 'wall5' ).style.top = wall5Y +"px";
		document.getElementById( 'wall5' ).style.left = wall5X +"px";
		death.style.display="block";
		document.getElementById( 'death' ).style.top = deathY +"px";
		document.getElementById( 'death' ).style.left = deathX +"px";
		death2.style.display="block";
		document.getElementById( 'death2' ).style.top = death2Y +"px";
		document.getElementById( 'death2' ).style.left = death2X +"px";
		death3.style.display="block";
		document.getElementById( 'death3' ).style.top = death3Y +"px";
		document.getElementById( 'death3' ).style.left = death3X +"px";
		death4.style.display="block";
		document.getElementById( 'death4' ).style.top = death4Y +"px";
		document.getElementById( 'death4' ).style.left = death4X +"px";
		death5.style.display="block";
		document.getElementById( 'death5' ).style.top = death5Y +"px";
		document.getElementById( 'death5' ).style.left = death5X +"px";
		death6.style.display="block";
		document.getElementById( 'death6' ).style.top = death6Y +"px";
		document.getElementById( 'death6' ).style.left = death6X +"px";
		death7.style.display="block";
		document.getElementById( 'death7' ).style.top = death7Y +"px";
		document.getElementById( 'death7' ).style.left = death7X +"px";
		death8.style.display="block";
		document.getElementById( 'death8' ).style.top = death8Y +"px";
		document.getElementById( 'death8' ).style.left = death8X +"px";
		death9.style.display="block";
		document.getElementById( 'death9' ).style.top = death9Y +"px";
		document.getElementById( 'death9' ).style.left = death9X +"px";
		death10.style.display="block";
		document.getElementById( 'death10' ).style.top = death10Y +"px";
		document.getElementById( 'death10' ).style.left = death10X +"px";
	}
}

document.getElementById("stageClear").onclick = nextStage;
//ラスト→タイトル
const backTitle=()=>{
	thanks.style.display="none";
	title.style.display="block";
	startButton.style.display="block";
	asobiButton.style.display="block";
	console.log('クリアしてタイトルへ')
	ballLock=true;
	loopLock=true;
	background.style.zIndex=13;
	title.style.zIndex=14;
	startButton.style.zIndex = 15;
	asobiButton.style.zIndex= 15;
	asobikata.style.zIndex= 15;
}	

document.getElementById("thanks").onclick = backTitle;