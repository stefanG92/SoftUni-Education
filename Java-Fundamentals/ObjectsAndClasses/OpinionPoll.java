
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class OpinionPoll {
    static class Person {
        String name;
        int age;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        public String getName() {
            return name;
        }

        public int getAge() {
            return age;
        }

        public String personPrint() {
            return String.format("%s - %d", getName(), getAge());
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        List<Person> personInfo = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            String[] date = scanner.nextLine().split(" ");
            String name = date[0];
            int age = Integer.parseInt(date[1]);

            Person person = new Person(name,age );
            personInfo.add(person);

        }

        personInfo.stream().filter(person -> person.getAge() > 30)
                .sorted((p1,p2) -> p1.getName().compareTo(p2.getName()))
                .forEach(person -> System.out.println(person.personPrint()));

    }


}
