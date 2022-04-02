package javase;

public class _08_StringBuilder {
    public static void main(String[] args) {
        //String Birleştirmek
        String data1="Java JavaScript ";
        String data2="Jsp Servler";
        String plus=(data1+data2);
        System.out.println(plus);

        //concat
        String data3="Java JavaScript ".concat("Jsp Servler");
        System.out.println(data3);

        //servisler socket gelen datalar var ancak
        StringBuilder builder=new StringBuilder();
        builder.append(data1).append("Jsp Servler");
        String change=builder.toString();
        System.out.println(change);

        //StringBuffer: Daha güvenli anca StringBuilder'e göre daha yavaş
        StringBuffer buffer=new StringBuffer();
        buffer.append("Java JavaScript ").append("Jsp Servler");
        String change2=builder.toString();
        System.out.println(change2);

    }
}
