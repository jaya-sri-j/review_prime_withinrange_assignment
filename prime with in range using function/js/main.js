var range=parseInt(prompt("enter range :"));
function primerange(r)
{
for (i=1;i<=r;i++)
{
	bool=false;
	if (i==2)
	{
		bool=true;
	}
	else
	{
		var count=0;
		for (j=2;j<i;j++)
		{
			if (i%j!=0&&count==0)
			{
				bool=true;
			}
			else
			{
				count++;
			}
		}
	}
	if (bool)
	{
		document.write(i+" is prime")
	}
	else
	{
		document.write(i+" is not prime")
	}
}
}
primerange(range);