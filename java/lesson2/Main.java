import java.util.Random;
import java.util.Scanner;

public class Main {
   
        static void showMenu(){
            System.out.println("\n===Console Hub===");
            System.out.println("1) Показать героя");
            System.out.println("2) Тренировка");
            System.out.println("3) Бой");
            System.out.println("4) Отдых");
            System.out.println("5) Магазин");
            System.out.println("6) Выход");
            System.out.print("Выбор: ");
        }
        static void showHero(int hp, int energy, int power, int coins){
            System.out.println("HP: " + hp);
            System.out.println("Energy: " + energy);
            System.out.println("Power: " + power);
            System.out.println("Coins: " + coins);
        }
        static int[] workOut(int energy, int power) {
            energy -= 10;
            power += 10;
            System.out.println("Energy: " + energy);
            System.out.println("Power: " + power);
            return new int[]{energy, power};
        }
        static int[] fight(Scanner sc, int hp, int energy, int power){
            int hpM = 100;

            System.out.println("HP Монстра: " + hpM);
            while (hp>0 && hpM>0) {
                System.out.println("HP: " + hp);
                System.out.println("Energy: " + energy);
                System.out.println("Power: " + power);
                System.out.println("С какой силой ударить?:");
                int hit = sc.nextInt();
                if(hit <= 0){
                    System.out.println("Ошибка. Сила не может быть меньше 0.");
                } else if (hit>power/2) {
                    System.out.println("Ты не можешь бить так сильно.");        
                } else {
                    if (energy < hit) {
                        System.out.println("Недостаточно энергии!");
                    } else{
                        hpM -= hit;
                        energy -= hit/2;
                        System.out.println("Отлично! Ты ударил: " + hit);
                        System.out.println("HP Монстра: " + hpM);
                    }
                }
                if(hpM<=0){
                    hpM = 0;
                    break;
                }
                Random random = new Random();
                int damage = random.nextInt(80) + 1;
                hp -= damage;
                System.out.println("Монстр ударил с силой " + damage);
                if(hp<=0){
                    hp = 0;
                    break;
                }
            }
            System.out.println("Бой окончен.");
            System.out.println("HP: " + hp);
            System.out.println("Energy: " + energy);
            return new int[]{hp, energy};
        }
        static int[] relax(int hp,int energy) {
            hp += 10;
            energy += 5;
            System.out.println("HP: " + hp);
            System.out.println("Energy: " + energy);
            return new int[]{hp,energy};
        }
        // static shop(int coins) {
        //     System.out.println(coins);
        // }

        public static void main(String[] args){
            Scanner sc = new Scanner(System.in);
            int hp = 100;
            int energy = 100;
            int power = 20;
            int coins = 200;
            boolean running = true;
            int[] result;

            while(running){
                showMenu();
                int choice = sc.nextInt();
                switch(choice){
                    case 1:
                        showHero(hp, energy, power, coins); 
                        break;
                    case 2:
                        result = workOut(energy, power);
                        energy = result[0];
                        power = result[1];
                        break;                    
                    case 3: 
                        result = fight(sc, hp, energy, power); 
                        hp = result[0];
                        energy = result[1];
                        break;
                    case 4: 
                        result = relax(hp, energy); 
                        hp = result[0];
                        energy = result[1];
                        break;
                    case 6:
                        running = false; 
                        break;
                    default:
                        System.out.println("Нет такого запроса");
                        break;
                }
            }
        }
    }