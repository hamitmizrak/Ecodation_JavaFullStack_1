package javase;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class _10_Date {
    public static void main(String[] args) {
        //DATE
        //Date depracated olmuştur yani günceline çalılabilirsiniz
        //System.currentTimeMillis() ==> 1 ocak 1970
        // System.out.println(new Date(System.currentTimeMillis()));  //2022 4 3 9:10:5 - 1970 0 0 00:00
        // System.out.println(System.currentTimeMillis());
        //Date : Her zaman var olan yıla 1900 eklemliyiz
        //aylarda sıfırdan başlar


        java.util.Date date = new Date();
        System.out.println(date);
        System.out.println(date.getMonth()); //0 başlar
        System.out.println(date.getYear()); //0 başlar
        System.out.println(date.getYear() + 1900); //Tarihe+1900 eklemeliyiz
        int dateMemoryNumber = 2022 - date.getYear();
        System.out.println(dateMemoryNumber);
        long times=System.currentTimeMillis(); //1 ocak 1970
        System.out.println("********************************************");
        date.setMonth(11); //0 başlar
        System.out.println(date.getMonth()); //0 başlar
        System.out.println("********************************************");

        Locale locale=new Locale("tr","TR");
        SimpleDateFormat simpleDateFormat=new SimpleDateFormat("dd-MMMM-yyyy HH:mm:ss",locale);
        Date date1=new Date();
        String turkishTime=simpleDateFormat.format(date1);
        System.out.println(turkishTime);
    }
}
