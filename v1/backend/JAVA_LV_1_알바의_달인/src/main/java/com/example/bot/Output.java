package com.example.bot;

import java.text.NumberFormat;
import java.util.Locale;

public class Output {
    private static final String NON_ORDERED = "안 시키셨어요";

    public void printRemoveResult(Product product, boolean result) {
        if (!result) {
            System.out.println(productFormatter(product.getName()) + NON_ORDERED);
            return;
        }
        System.out.println("네");
    }

    public void printCountResult(Product product, int count) {
        if (count == 0) {
            System.out.println(productFormatter(product.getName()) + NON_ORDERED);
            return;
        }
        System.out.println(productFormatter(product.getName()) + count + "개요");
    }

    public void printCalculateResult(int price) {
        NumberFormat formatter = getKoreanFormat();
        System.out.println("네 " + price + "원이요");
    }

    public void printFindResult(Product product, boolean result) {
        if (result) {
            System.out.println(productFormatter(product.getName()) + "시키셨어요");
            return;
        }
        System.out.println(productFormatter(product.getName()) + NON_ORDERED);
    }

    private NumberFormat getKoreanFormat() {
        return NumberFormat.getInstance(Locale.KOREA);
    }

    private String productFormatter(String name) {
        return "<" + name + ">";
    }
}
