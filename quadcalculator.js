function quadratic(a,b,c,d,e,f,g,h,i,j,k,m,l,n,t,v,o,p,q,r,s,u,w,x,x1,x2,z,y,y1,z2,z3,z1){
a=document.getElementById("demo1").value,
b=document.getElementById("demo2").value,
c=document.getElementById("demo3").value;
d=b*b;
e=4*a*c;
f=d-e;
g=2*a;
h=-b;
i=d-e;
if(d<e){alert("Square root of a negative is undefined");}
j=Math.sqrt(i);
k=h+j;
m=h-j;
l=k/g;
n=m/g;
t=l.toFixed(1);
v=n.toFixed(1);
o=document.getElementById("demo4").value;
p=document.getElementById("demo5").value;
q=o*p;
r=a*c;
s=o+p;
u=+c/p;
w=b+"/"+a;
x=c+"/"+a;
x1=c/a;
x2=x1.toFixed(1);
z=b+"²"+"/"+2*a+"²";
y=b*b;
y1=2*2*a*a;
z2=y/y1;
alert(z2);
z3=z2.toFixed(1);
z1=Number('-1');
alert(z1);
if(s!=b && q!=r){
alert("You either have entered incorrect last two values,please check them again or the expression cannot be factorised and so use the quadratic formula or complete the square");
alert("To complete the square work out as follows: "+a+"x²"+b+"x"+"+"+c+"=0"+".Divide through by "+a+" and this gives x²"+w+"x"+"+"+x+"=0"+".Now move "+x+" to the other side of the equal sign and this gives x²"+w+"x"+"="+z1*x2+".Now subtract ("+b+"/"+2*a+")²"+"  from both sides and this gives x²"+w+"x"+"-"+z+"="+z1*x2+z3+" and this gives "+"("+"x"+z1*b+"/"+2*a+")²"+"="+z1*x2+z3+". Now take the square root both side and this gives "+"x"+z1*b+"/"+2*a+"="+"±√"+"("+z1*x2+z3+")"+" and this gives "+"x"+"="+b+"/"+2*a+"±√"+"("+z1*x2+z3+")"+" and x"+"="+t+" or x="+v);
}
else{
alert("Your equation is "+a+"x²"+b+"x"+c+"=0 "+"and this gives "+
a+"x²"+o+"x"+p+"x"+c+"=0"+" factor out "+a+"x"+" and "+p+" and this gives "+a+"x"+"("+"x"+"+"+u+")"+p+"("+"x"+"+"+u+")"+"factor out "+"("+"x"+"+"+u+")"+" and this gives "+"("+a+"x"+"+"+p+")"+"("+"x"+"+"+u+")"+"=0 "+" and this gives x = "+t+" or x= "+v);
}
}
//code to alert user to input one number only
function alert1(){
o=document.getElementById("demo4").value;
if(o.length<=1){alert("Enter one number only e.g 12");}
}
function alert2(){
p=document.getElementById("demo5").value;
if(p.length<=1){alert("Enter one number only e.g 12");}
}
//code to teach factors and multiples
function prime(){
alert("A factor is a number that can divide another without leaving a remainder eg 3 is a factor of 6.");
alert("A number can have more than one factor eg 2,3,4,6 are all factors of 12.");
alert("A multiple is a number that can be divided by another without leaving a remainder eg 6 is a multiple of 3 ");
alert("A number can have more than one multiple eg 6,9,12,15,18,21 etc are all multiples of 3.");
alert("Two or more numbers can have common factors eg factors of 12 are 2,3,4,6 and factors of 18 are 2,3,6,9.It can be seen that 2,3 and 6 are common factors of 12 and 18.The most useful common factor is the Highest common factor(HCF) in this case 6.");
alert("Two or more numbers can have common multiples eg multiples of 2 are 4,6,8,10,12,14,16,18,20,22,24 etc and multiples of 3 are 6,9,12,15,18,21,24 etc.It can be seen that 6,12,18,24 are common multiples of 2 and 3.The most useful common multiple is the Lowest common multiple(LCM) in this case 6.");
}
//code to teach prime factors
function prime2(){
alert("A prime factor is a factor that has only itself and 1 as factors eg 5 is a prime factor of 10. 5 has only two factors ie itself and 1.All other numbers result in a remainder if they divide 5.");
alert(" Among the factors of a number there exists prime factors eg 2,3,4,6 are factors of 12 and among these 2 and 3 are prime factors.");
alert("Prime factors are useful in calculating the Highest common factor(HCF) and the Lowest common multiple(LCM) of a set of numbers.");
}
//code to teach Highest common factor
function hcf(){
alert("To find the HCF of a set of numbers express each number as a product of its prime factors.To do so divide each number by the first prime factor which does not leave a remainder.Divide the result succesively using this prime factor until it starts leaving a remainder and then move to the next prime factor.Do this until you get 1 as the result.");
alert("For example find the HCF of 56 and 42.First express each number  as a product of its prime factors.To express 52 first divide by 2. 2√56=28 next 2√28=14 next 2√14=7 next 7√7=1 hence 56=2×2×2×7.To express 42 also first divide by 2.That is 2√42=21 next 3√21=7 next 7√7=1 hence 42=2×3×7. Looking at the two  numbers 2 and 7 are the common factors hence HCF=2×7=14.");
}
//code to teach Lowest common multiple
function lcm(){
alert("To find the LCM of a set of numbers first express each number as a product of its prime factors."); alert("For example find the LCM of 18 and 24.Expressing 18 as a product of its prime factors: 2√18=9 next 3√9=3 next 3√3=1 hence 18=2×3×3.Expressing 24 as a product of its prime factors: 2√24=12 next 2√12=6 next 2√6=3 next 3√3=1 hence 24=2×2×2×3. Take each factor where it appears most ie take all the 2's in 24 and the 3's in 18 hence LCM=2×2×2×3×3=72.");
}
//code to teach approximation
function approx(){
alert("Numbers can be rounded off to the nearest whole number,certain number of decimal places and to a certain number of significant figures.");
alert("To round off look at the digit next to the one to be rounded off.If this digit is less than 5 the digit to be rounded off remains unchanged.If the digit is greater than or equal to 5 the digit to be rounded off increases by 1.");
alert("For example rounding off 6.471 to the nearest whole number. We are rounding off at 6 and so we look at 4 which is less than 5 hence 6 remains unchanged.Therefore 6.471=6(to the nearest whole number).");
alert("Rounding off 32.63 to the nearest whole number.We are rounding off at 2 hence we look at 6 which is greater than 5 hence 2 increases by 1.Therefore 32.63=33(to the nearest whole number.)");
alert("Rounding off 4.0561 to 1 decimal place.We are rounding off at 0 so we look at 5 which is greater than or equal to 5 hence zero increases by 1.Therefore 4.0561=4.1(to 1 dp)=4.06(to 2 dp)=4.056(to 3dp)");
alert("A significant figure is a figure with a value higher than zero.Zero becomes a significant figure when located between other figures after the decimal point.To count number of significant figures start from the first non zero number.");
alert("Writing 0.070603 to 5 significant figures. We start counting at 7.Hence 0.070603=0.070603(to 5 sf).We keep the first two zeros to keeo the value of the number as a decimal.");
alert("More examples. 0.070603=0.0706(to 3 sf)=0.071(to 2 sf)=0.07(to 1 sf)");
alert("More examples.45.2637=45.264(to 5 sf)=45.26(to 4 sf)=45.3(to 3 sf)=45(to 2 sf)=50(to 1 sf).");
}
//function to teach estimation
function est(){
alert("To estimate we round off to the nearest whole number.For example estimate 9.41×4.52×2.01.Round off each number to the nearest whole number ie 9×5×2=90.Hence 9.41×4.52×2.01 is approximately 9×5×2 is approximately 90.");
alert("More examples. Estimating (3.78×4.93)÷1.88=(4×5)÷2=10.");
alert("Estimating 2.02³√26.61=2³√27=8×3=24.");
}
//code to teach solving quadratic equations
function quad(){
alert("The general formula of quadratic equations is ax²+bx+c=0 where a is the coefficient of x²,b is the coefficient of x and c is a constant.");
alert("Quadratic equations can be solved by factorisation,completing the square and by the quadratic formula.");
alert("To solve 2x²+3x+1=0 by factorisation multiply 2 and 1(a and c) and this is 6.Now look for two numbers which when you add give you 3(b) and these are 2 and 1.Substitute these for 3 and we get 2x²+2x+1x+1=0.Notice that 2x+1x=3x.Now we factor out 2x and 1 and we get 2x(x+1)+1(x+1)=0.We factor out (x+1) and we get (x+1)(2x+1)=0 hence x+1=0 or 2x+1=0, x=-1 or 2x=-1, x=-1 or x=-0.5");
}
//code to teach number bases
function base(){
alert("Everyday numbers we use are in base 10 or denary system.The denary system has digits 0,1,2,3,4,5,6,7,8,9.");
alert("Other number base systems exist such as base 2,3,4,5,6,7,8,9.A number base system has digits one less than the base eg base 2 has digits 0-2,base 7 has digits 0-6 and so on.");
alert("Base 10 numbers can be expanded by their place values eg the number 43521 can be written as 40000+3000+500+20+1=4×10⁴+3×10³+5×10²+2×10¹+1×10°(1×1).This same principle is applicable to other base systems eg 43212(base 5)=4×5⁴+3×5³+2×5²+1×5¹+2×1.To expand a number to the powers of its base start with the last digit(the right-most) and multiply it by the base raised to power 0 in other words multiply by 1( this is unit),the next digit is multiplied by the base raised to power 1,the next multiplied by the base raised to the power 2 and so on.");
alert("To convert from other bases to base 10 expand the number to the powers of its base and add together eg Converting 23134(base 5) to base 10. 23134(base 5)=2×5⁴+3x5³+1×5²+3×5¹+4×1=1250+375+25+15+4=1669");
alert("More examples.Converting 456(base 7) to base 10.456(base 7)=4×7²+5×7¹+6×1=196+35+6=237.");
alert("To convert from base 10 to other bases divide the base 10 number and the resultants by the base you want to convert to writing the remainders eg converting 123 to base 5 do this: 5|123=24 rem 3,read this as 5 into 123 =24 remainder 3,next 5|24=4 rem 4, 5|4=0 rem 4.Now read the remainders from the right and you get 443 hence 123(base 10)=443(base 5).");
alert("More examples.To Convert 45 to base 2 do this: 2|45=22 rem 1, 2|22=11 rem 0, 2|11=5 rem 1, 2|5=2 rem 1, 2|1=0 rem 1.Now read remainders from the right and 45(base 10)=11101(base 2).");
alert("To convert from a non base 10 number to another non base 10 number first convert to base 10 and then to the other base eg to convert 101(base 2) to base three do this: Convert 101(base 2) to base 10 ie 1×2²+0×2¹+1×1=4+0+1=5(base 10),now convert to base 3 ie 3|5=1 rem 2, 3|1=0 rem 1, now read remainders from the right hence 101(base 2)=12(base 3).");
alert("More examples.To convert 432(base 5) to base 7 do this: First convert 432(base 5) to base 10 ie 4×5²+3×5¹+2×1=100+15+2=117(base 10),now convert to base 7 ie 7|117=16 rem 5, 7|16=2 rem 2, 7|2=0 rem 2, now read remainders from the right hence 432(base 5)=225(base 7).");
}
//code to teach number sequences
function seq(){
alert("A sequence is a set of numbers arranged in a particular order eg 2,4,6,8,10,.....In this sequence to get the next number add 2 to the previous number. If these numbers are given in no particular order eg 10,2,6,4,8 they no longer form a sequence.");
alert("A sequence can be defined by giving a connection between one term and the next.This connection can be given in words or as a formula eg The first term of a sequence is 2 and the next term is given by Un+1=2Un-1.Write down the next three terms of the sequence.Do this:U1=2, to get the next term we do something to U1. We insert U1 into the formula hence  U1+1=2×U1-1 this gives U2=2×2+1 this gives U2=4-1 and this gives U2=3.To get the next term we insert U2 into the formula ie U2+1=2×U2-1,this gives U3=2×3-1=6-1=5.To get the next term we insert U3 into the formula and this gives U3+1=2×U3-1 and this gives U4= 2×5-1=10-1=9 hence U1=2,U2=3,U3=5 and U4=9.");
alert("We can also relate a term to its position in the sequence eg The nth term of a sequence,Un, is given by Un=2ⁿ+1.Find the third and fourth terms.Do this: third term is term 3 hence n=3 and so U3=2³+1=8+1=9. Fourth term is term 4 so n=4 hence U4=2⁴+1=16+1=17.");
}