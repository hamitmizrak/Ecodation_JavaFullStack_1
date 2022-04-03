package javase;


public class _14_TryCatch {
    public static void main(String[] args) {
//
        try {
            int i = 3 / 0;
            System.out.println(i);
        } catch (ArithmeticException exception) {
            exception.printStackTrace();
        } catch (Exception exception) {
            exception.printStackTrace();
        }

        System.out.println("Devam ediyorum");

    }
}
