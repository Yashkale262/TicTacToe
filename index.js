var i=0,win=0;
var Line=document.querySelector('.line');

document.querySelector('.startGame').addEventListener("click",function()
{
  p1=document.querySelector('.p1').value;
  p2=document.querySelector('.p2').value;
  document.querySelector('.playerNames').style.display="none";
  document.querySelector('.game').style.display="inline-block";
  document.querySelector('h3').innerHTML=p1+"'s chance!";
  document.querySelector('h3').style.visibility="visible";
})

for(var j=0;j<9;j++)
{
    document.querySelectorAll('.game button')[j].addEventListener("click",function()
    {
      if(i<9&&win==0&&this.classList[1]=='notMarked')
      {
       if(i%2==0)
       {
         var xo='X';
       }
       else{
         var xo='O';
       }
       this.innerHTML=xo;
       this.classList.remove("notMarked");
       this.classList.add("Marked");

       i++;
       if(i%2==0)
       {
         document.querySelector('h3').innerHTML=p1+"'s chance!";
       }
       else{
         document.querySelector('h3').innerHTML=p2+"'s chance!";
       }

       var winner=checkIfWon();

      if(winner==1)
       {
         document.querySelector('h3').innerHTML=p1+" won the Game!";
         document.querySelector('h3').style.visibility="visible";
         win=1;
       }
       if(winner==2)
        {
          document.querySelector('h3').innerHTML=p2+" won the Game!";
          document.querySelector('h3').style.visibility="visible";
          win=1;
        }


       if(i==9&&win==0)
       {
         document.querySelector('h3').innerHTML="Draw";
         document.querySelector('h3').style.visibility="visible";

       }


    }
    });
}


function checkIfWon()
{
  //Checking Horizontal rows
  for(var k=0;k<3;k++)
  {
    var first=document.querySelectorAll('.game button')[3*k];
    var second=document.querySelectorAll('.game button')[3*k+1];
    var third=document.querySelectorAll('.game button')[3*k+2];

    if(first.classList[1]=="Marked"&&second.classList[1]=="Marked"&&third.classList[1]=="Marked")
    {

      if(first.innerHTML==second.innerHTML&&first.innerHTML==third.innerHTML)
      {
        Line.style.top=k*155+75+'px';
        Line.style.visibility="visible";
        if(first.innerHTML=='X')
        {
          return 1;
        }
        return 2;
      }
    }
  }

  //Checking Vertical columns
  for(var l=0;l<3;l++)
  {
    var first=document.querySelectorAll('.game button')[l];
    var second=document.querySelectorAll('.game button')[3+l];
    var third=document.querySelectorAll('.game button')[6+l];

    if(first.classList[1]=="Marked"&&second.classList[1]=="Marked"&&third.classList[1]=="Marked")
    {
      if(first.innerHTML==second.innerHTML&&first.innerHTML==third.innerHTML)
      {
        Line.style.left=l*155-150+"px";
        Line.style.transform="rotate(90deg)";
        Line.style.visibility="visible";
        if(first.innerHTML=='X')
        {
          return 1;
        }
        return 2;
      }
    }
  }
  //Checking diagonals
  for(var d=1;d<3;d++)
  {
    var first=document.querySelectorAll('.game button')[4];
    var second=document.querySelectorAll('.game button')[4+2*d];
    var third=document.querySelectorAll('.game button')[4-2*d];

    if(first.classList[1]=="Marked"&&second.classList[1]=="Marked"&&third.classList[1]=="Marked")
    {
      if(first.innerHTML==second.innerHTML&&first.innerHTML==third.innerHTML)
      {
        Line.style.visibility="visible";
        if(d==1)
        {
          Line.style.transform="rotate(-45deg) scale(1.4,1)";
        }
        if(d==2)
        {
          Line.style.transform="rotate(45deg) scale(1.4,1)";
        }

        if(first.innerHTML=='X')
        {
          return 1;
        }
        return 2;
      }
    }
  }
  return 0;
}
