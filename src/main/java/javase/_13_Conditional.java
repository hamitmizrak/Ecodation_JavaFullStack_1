package javase;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

public class _13_Conditional {
    public static void main(String[] args) {
       //ORTAK
        Locale locale = new Locale("tr", "TR");
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MMMM-yyyy HH:mm:ss", locale);

        //DATE
        Date date1 = new Date();
        String turkishTime = simpleDateFormat.format(date1);
        System.out.println(turkishTime);

        //CALENDAR
        Calendar calendar = Calendar.getInstance(locale);
        String turkishTime2 = simpleDateFormat.format(calendar.getTime());
        System.out.println(turkishTime2);
    }
}
