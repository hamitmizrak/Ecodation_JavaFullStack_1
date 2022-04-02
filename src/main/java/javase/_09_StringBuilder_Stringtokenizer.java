package javase;

import java.util.StringTokenizer;

public class _09_StringBuilder_Stringtokenizer {

    public static void main(String[] args) {

        //ÜRETTİM
        //servisler socket gelen datalar var ancak
        StringBuilder builder=new StringBuilder();
        builder.append("Html& ").append("Css` ").append("Js~ ").append("Javase+ ").append("Javaee& ").append("Javame- ");
        String change=builder.toString();
        System.out.println(change);
        System.out.println("******************");
        //TÜKETECEĞİM
        StringTokenizer tokenizer=new StringTokenizer(change,"&~ +-./*");
        while(tokenizer.hasMoreTokens()){
            String temp=tokenizer.nextToken().concat(".ecodation");
            System.out.println(temp);
        }


    }
}
