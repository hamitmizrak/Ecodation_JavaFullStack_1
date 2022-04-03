package javase;

public class _08_String_isNumber_isCharacter {

    public static void main(String[] args) {
        char isSymbol='%';

        if(Character.isDigit(isSymbol)){
            System.out.println("Sayıdır");
        }else if(Character.isLetter(isSymbol)){
            System.out.println("Harftir");
        }else{
            System.out.println("Özel Bir simgedir");
        }
    }
}
