package inheritance;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Monster  extends Computer{
    private String monsterVGA;

    public Monster() {
    }

    public Monster(String computerName, String computerTrade, String monsterVGA) {
        super(computerName, computerTrade);
        this.monsterVGA = monsterVGA;
    }
}
