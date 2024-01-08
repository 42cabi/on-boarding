package com.example.bot;

import java.util.Objects;

public class Product {
    private static final int UNIT = 1000;
    private final String name;
    private final int price;

    public Product(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public static Product from(String name) {
        int price = name.length() * UNIT;
        if (price == 0) {
            throw new IllegalArgumentException("장난하나..");
        }
        return new Product(name, price);
    }

    public String getName() {
        return name;
    }

    public int getPrice() {
        return price;
    }

    /**
     * name을 기준으로 equal을 결정합니다.
     */
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Product product = (Product) o;
        return Objects.equals(getName(), product.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getName());
    }
}
