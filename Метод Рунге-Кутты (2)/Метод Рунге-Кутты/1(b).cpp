#include <iostream>
#include <math.h>
#include <fstream>
using namespace std;
double y_true(double x){
return sin(x)+(x*x)/2.0;
}

double t_fictiv(double x){
return cos(x)+x;

}
void Calculate(double h, double t0 = 0.0, double T = 10.0 ){
ofstream out("out.txt");
 int i, j;
 double summ = 0.0, t;

 double b[] = {35.0/384.0, 0, 500.0/1113.0, 125.0/192.0, -2187.0/6784.0, 11.0/84.0, 0};
 double c[] = {0, 1.0/5.0, 3.0/10.0, 4.0/5.0, 8.0/9.0, 1, 1};
 double y = 0.0, x=0.0;
 double k[7];
 for (i=1;i<=int(T/h);i++)
 {
       t = x;
     for ( j=0;j<7;j++)
     {

         k[j] = t_fictiv(t);
         t = x + c[j+1]*h;
      }

      x+=h;
      //x = t0;
      for (j =0, summ = 0.0; j<7;j++)
        summ+=b[j]*k[j];

      y  = y + h*summ;
      out<<x<<"\t"<<y<<"\t"<<y_true(x)<<endl;
 }

 cout<<"h="<<h<<": "<<fabs(y_true(T)-y)<<endl;
}



int main  (){

    cout<<"f(x)=sin(x)+x"<<endl;
    Calculate(1.0);
    Calculate(0.1);
    Calculate(0.01);
}

