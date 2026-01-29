import java.util.Scanner;

public class Main {

    public static void main (String[]args){
        Scanner sc = new Scanner(System.in);

        // String name2 = sc.nextLine();
        // int age2 = sc.nextInt();
        
        // int age = 18;
        // double height = 1.78;
        // boolean isStudent = true;
        // char grade = 'A';
        // String name = "Alex";
        
        // System.out.println(age);
        // System.out.println(height);
        // System.out.println(isStudent);
        // System.out.println(grade);
        // System.out.println(name);
        // System.out.println(10/3);

        // System.out.print("Имя: ");
        // String name = sc.nextLine();

        // System.out.print("Возраст: ");
        // int age = sc.nextInt();
        // sc.nextLine();

        // System.out.print("Город: ");
        // String city = sc.nextLine();

        // System.out.println("----");
        // System.out.println("Имя: " + name);
        // System.out.println("Возраст: " + age);
        // System.out.println("Город: " + city);
        
        // boolean hasAccount = false;
        // boolean hasLogin = false;
        // while (true) {
        //     System.out.print("Что вы хотите сделать?\n1 — регистрация\n2 — войти\n3 — выйти\n");
        //     int cmd = sc.nextInt();
        //     sc.nextLine();
        //     switch (cmd) {
        //         case 1: 
        //             if (hasAccount == false){
        //                 System.out.print("Вы зарегестрировались. ");
        //                 hasAccount = true;
        //                 break;
        //             } else {
        //                 System.out.print("Вы уже зарегестрированы. ");
        //                 break;
        //             }
                    
        //         case 2:
        //             if(hasAccount == true){
        //                 if (hasLogin == false){
        //                     System.out.print("Вы вошли. ");
        //                     hasLogin = true;
        //                     break;
        //                 } else{
        //                     System.out.print("Вы уже вошли. ");
        //                     break;
        //                 }
        //             } else{
        //                 System.out.print("Сначала зарегестрируйтесь. ");
        //                 break;
        //             }
        //         case 3:
        //             if(hasLogin==true){
        //                 System.out.print("Вы вышли. ");
        //                 return;
        //             }else{
        //                 System.out.print("Вы итак не вошли. ");
        //                 break;
        //             }
        //         default:
        //             System.out.print("Ошибка. введите команду от 1 до 3:");
        //     }

        // }

        //1
        // System.out.print("Name: ");
        // String name = sc.nextLine().trim();
        // System.out.print("Surname: ");
        // String surname = sc.nextLine().trim();
        // System.out.print("Age: ");
        // int age = sc.nextInt();
        // sc.nextLine();
        // System.out.println("Name: " + name + "\nSurname: " + surname + "\nAge: " + age);

        //2
        // System.out.print("First: ");
        // int a = sc.nextInt();
        // sc.nextLine();
        // System.out.print("Second: ");
        // int b = sc.nextInt();
        // sc.nextLine();

        // System.out.printf("Sum: %d\nDifference: %d\nProduct: %d\nQuotient: %.2f",a+b,a-b,a*b,(double)a/b);

        //3
        // System.out.print("Radius: ");
        // double r = sc.nextDouble();
        // double C = 2*Math.PI*r;
        // double S = Math.PI*r*r; 
        // System.out.printf("C: %f\nS: %f",C,S);

        //4
        // System.out.print("Price: ");
        // double p = sc.nextDouble();
        // sc.nextLine();
        // System.out.print("Quantity: ");
        // int q = sc.nextInt();
        // sc.nextLine();
        // System.out.println("Total: " + p*q);

        //5
        // System.out.print(": ");
        // String str = sc.nextLine().trim();
        // System.out.println("Length: " + str.length() + "\nFirst symbol: " + str.charAt(0) + "\nLast symbol: " + str.charAt(str.length()-1));
    
        //6-1
        // System.out.print("Age: ");
        // int age = sc.nextInt();
        // sc.nextLine();
        // if(age>=18){
        //     System.out.println("OK");
        // }else{
        //     System.out.println("NO");
        // }

        //7-2
        // System.out.print("Number: ");
        // int num = sc.nextInt();
        // sc.nextLine();
        // if(num>0){
        //     System.out.println("Positive");
        // }else if(num<0){
        //     System.out.println("Negative");
        // }else{
        //     System.out.println("Zero");
        // }

        //8*3
        System.out.print("Number 1: ");
        int a = sc.nextInt();
        sc.nextLine();
        System.out.print("Number 2: ");
        int b = sc.nextInt();
        sc.nextLine();
        System.out.print("Number 3: ");
        int c = sc.nextInt();
        sc.nextLine();
        if(a>b && a>c){
            System.out.println("Max: " + a);
        }else if(b>a && b>c){
            System.out.println("Max: " + b);
        }else if(c>a && c>b){
            System.out.println("Max: " + c);
        }else{
            System.out.println("Some numbers are equal");
        }

    }
}