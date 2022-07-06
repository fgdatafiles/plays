var maxDDYears;var DateDropDown=function(type,local){maxDDYears=100;var arr=type.split(":");var DD="<div name='datedropdown'>";for(var i=0;i<arr.length;i++){switch(arr[i]){case "M":case "m":DD+=this.createMonth();break;case "Y":case "y":DD+=this.createYear();break;case "D":case "d":DD+=this.createDay();break;}}
DD+="</div>";$(DD).appendTo(local);}
DateDropDown.prototype={months:["January","February","March","April","May","June","July","August","September","October","November","December"],createMonth:function(){var tempStr="<select id='Month' class='date_dropdown'>";for(var i=0;i<this.months.length;i++)
{tempStr+="<option value='"+i+"'>"+this.months[i]+"</option>";}
tempStr+="</select>";return tempStr;},createDay:function(){var tempStr="<select id='Day' class='date_dropdown'>";for(var i=1;i<=31;i++)
{tempStr+="<option value='"+i+"'>"+i+"</option>";}
tempStr+="</select>";return tempStr;},createYear:function(){var tempStr="<select id='Year' class='date_dropdown'>";var thisYear=new Date().getFullYear();for(var i=0;i<maxDDYears;i++)
{tempStr+="<option value='"+(thisYear-i)+"'>"+(thisYear-i)+"</option>";}
tempStr+="</select>";return tempStr;}};