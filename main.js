var canvas =document.getElementById("myCanvas");
var c = canvas.getContext('2d');


c.strokeStyle = '#28d1fa';
c.lineWidth = 12;
c.lineCap = 'round';
c.shadowBlur = '15';
c.shadowColor = '#28d1fa';

function degToRad(degree){
  var factor = Math.PI/180;
  return degree*factor;
}

function renderTime(){
  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();
  var newSeconds = seconds+(milliseconds/1000);
  var newHours = hours + (minutes/60);
  var newMinutes = minutes + (seconds/60)
  //console.log(hours, minutes, seconds, newSeconds);
  //render background
  
  c.clearRect(0,0,500,500);
  
  var gradient = c.createRadialGradient(250,250,5,250,200,280);
  gradient.addColorStop(0,'#09303a');
  gradient.addColorStop(1, 'black');
  c.fillStyle = gradient;
  c.fillRect(0,0,500,500);
  
  //render ticks
  c.setLineDash([.5,99]);
  c.lineCap = 'butt';
  c.lineWidth = 60;
  c.beginPath();
  c.arc(250, 250, 190, degToRad(270), degToRad(269));
  c.stroke();
  
  c.font = "18px Arial";
  c.fillStyle = "#28d1fa";
  c.fillText("12", 240, 25);
  c.fillText("3", 475, 256);
  c.fillText("6", 244, 488);
  c.fillText("9", 15, 256);
  
  c.setLineDash([]);
  c.lineCap = 'round';
  c.lineWidth = 12;
  //render hours
  c.beginPath();
  c.arc(250,250,200,degToRad(270),degToRad((newHours*30)-90));
  c.stroke();
  
  //render minutes
  c.beginPath();
  c.arc(250,250,170,degToRad(270),degToRad((newMinutes*6)-90));
  c.stroke();
  
  //render seconds
	c.beginPath();
  c.arc(250,250,140,degToRad(270),degToRad((newSeconds*6)-90));
  c.stroke();

  //render date & time
  c.font = '24px Arial';
  c.fillStyle = 'black';
  c.fillText(today, 160, 250);
  
  c.font = '20px Arial';
  c.fillStyle = '#28d1fa';
  c.fillText(time, 200, 280);
  
  //var dataURL = canvas.toDataURL();
  //document.getElementById('myImage').src = dataURL;
}


setInterval(renderTime, 60);

		