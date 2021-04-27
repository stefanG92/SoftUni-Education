import java.util.function.Predicate;

public class PredicateClass {
    public static Predicate<String> startWithUpperCase =
            str -> str != null && !str.isEmpty() &&
                    Character.isUpperCase(str.charAt(0));
}
