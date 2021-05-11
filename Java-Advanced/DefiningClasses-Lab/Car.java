public class Car {
    private String brand;
    private String model;
    private int horsePower;

    public Car (String brand,String model,int horsePower){
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


}
