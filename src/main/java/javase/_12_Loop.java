package javase;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

public class _12_Loop {
    public static void main(String[] args) {
        //kendisini tekrar eden işlemlerde döngü kullanalım
//        System.out.println(1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16);
        //başlangıç: int i=1;
        //bitiş    : i<=10;
        //artırmak: i++
        //artırmak: i+=1
        //artırmak: i=i+1  NOT: noktalı

        //for döngüsü
        for(int i=1; i<=10; i++ ){
            System.out.print(i+" ");
        }
        System.out.println("\n*****************************");

        //while
        int i=1;
        while(i<=10){
            System.out.print(i+" ");
            i++;
        }

        System.out.println("\n*****************************");

        //do-while
        int k=1;
        do{
            System.out.print(k+" ");
            k++;
        }while(k<=10);
    }
}
