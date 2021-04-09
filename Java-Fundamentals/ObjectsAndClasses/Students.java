import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Students {
    static class Student {
        String firstName;
        String lastName;
        double grade;

        public Student(String firstName, String lastName, double grade) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.grade = grade;
        }

        public String getFirstName() {
            return firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public double getGrade() {
            return grade;
        }


        public String studentInfo() {
            return String.format("%s %s: %.2f", getFirstName(), getLastName(), getGrade());
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        List<Student> students = new ArrayList<>();



        for (int i = 0; i < n; i++) {
            String[] date = scanner.nextLine().split(" ");
            String firstName = date[0];
            String lastName = date[1];
            double grade = Double.parseDouble(date[2]);

            Student student = new Student(firstName,lastName,grade);
            students.add(student);


        }


        students.stream().sorted((s1,s2) -> Double.compare(s2.getGrade(), s1.getGrade()))
                .forEach(student -> System.out.println(student.studentInfo()));
    }
}
