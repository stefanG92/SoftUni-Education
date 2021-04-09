
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class BigFactorial {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Student st1 = new Student("Stefan","Georgiev",5.75);

st1.setFirstName("Dragan");
        System.out.println(st1.getFirstName());
        System.out.println(st1.getLastName());
        System.out.println(st1.getAverageGrade());

        System.out.println();

        Student st2 = new Student("Peter","Petrov",4.20);

        System.out.println(st2.firstName);
        System.out.println(st2.lastName);
        System.out.println(st2.averageGrade);


    }

    static class Student {
        String firstName;
        String lastName;
        double averageGrade;

        Student(String fName, String lName, double averageScore) {

            firstName = fName;
            lastName = lName;
            averageGrade = averageScore;

        }

        public String getFirstName() {
            return firstName;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public double getAverageGrade() {
            return averageGrade;
        }

        public void setAverageGrade(double averageGrade) {
            this.averageGrade = averageGrade;
        }
    }
}
