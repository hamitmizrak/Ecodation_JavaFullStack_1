package inheritance;

public class MainClass {
    public static void main(String[] args) {
        Computer computer=new Computer();
        Msi msi=new Msi();

        Monster monster=new Monster();
        monster.setMonsterVGA("125VGA");
        monster.setComputerName("Bilgisayar adı44");
        monster.setComputerTrade("monster");
        System.out.println(monster.getComputerName()+ " "+monster.getComputerTrade()+" "+monster.getMonsterVGA());

    }
}
