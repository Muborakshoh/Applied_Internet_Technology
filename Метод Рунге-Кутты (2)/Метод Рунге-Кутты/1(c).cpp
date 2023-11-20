#include <iostream>
#include <math.h>
#include <fstream>
using namespace std;
double y_true(double x){
return exp(x);
}

double t_fictiv(double x){
return x;

}
void Calculate(double h, double t0 = 0.0, double T = 10.0 ){
ofstream out("out.txt");
 int i, j, l;
 double summ = 0.0, t, sum =0.0;

 double b[] = {35.0/384.0, 0, 500.0/1113.0, 125.0/192.0, -2187.0/6784.0, 11.0/84.0, 0};
 double c[] = {0, 1.0/5.0, 3.0/10.0, 4.0/5.0, 8.0/9.0, 1, 1};
double a[]={1.0/5.0,
            3.0/40.0, 9.0/40.0,
            44.0/45.0, -56.0/15.0, 32.0/9.0,
            19372.0/6561.0, -25360.0/2187.0, 64448.0/6561.0, -212.0/729.0,
            9017.0/3168.0, -355.0/33.0, 46732.0/5247.0, 49.0/176.0, -5103.0/18656.0,
            35.0/384.0, 0, 500.0/1113.0, 125.0/192.0, -2187.0/6784.0, 11.0/84.0};
 double y = 1.0, x=0.0;
 double k[7] ;

 int count_elem=0;
 for (i=1;i<=int(T/h);i++)
 {
       count_elem=0;
       //t = y;
     for ( j=0;j<7;j++)
     {


         for (l = 0, sum=y;l<j;l++){
              sum+=h*k[l]*a[count_elem];
              count_elem++;


         }
          //cout<<"sum="<<sum<<endl;

         k[j] =t_fictiv(sum) ;
      }

      x+=h;

      for (j =0, summ = 0.0; j<7;j++)
        summ+=b[j]*k[j];

        //cout<<summ<<endl;

      y  = y + h*summ;
      out<<x<<"\t"<<y<<"\t"<<y_true(x)<<endl;
 }



 cout<<"h="<<h<<": "<<fabs(y_true(T)-y)<<endl;
 //cout<<y_true(T)<<endl;
}



int main  (){

    //cout<<"f(x)=e^x+2^x"<<endl;
    Calculate(1.0);
    Calculate(0.1);
    Calculate(0.01);
return 0;
}

