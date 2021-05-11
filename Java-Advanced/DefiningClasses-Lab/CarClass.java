public class CarClass {
    private String brand;
    private String model;
    private int horsePower;

    public CarClass(String brand) {
        this(brand, "unknown", -1);
    }

    public CarClass(String brand, String model, int horsePower) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public int getHorsePower() {
        return horsePower;
    }

    @Override
    public String toString() {
        return String.format("The car is: %s %s - %d HP.",getBrand(),getModel(),getHorsePower());
    }
}
