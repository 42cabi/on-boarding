package com.example.maddaewoole;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

public class Daewoole {
    private static final int MIN_LIMIT = 80;
    private static final int MAX_LIMIT = 120;
    private static final int ADD_MAX_POINT = 20;
    private static final int ADD_LAST_POINT = 10;
    private int anger;
    private final int limit;
    private Map<String, Integer> provokeMap = new HashMap<>();

    public Daewoole(List<String> mentions) {
        anger = 0;
        limit = generateRandomNumberInRange(MIN_LIMIT, MAX_LIMIT);
        learnMentions(mentions);
    }

    public void provoked(String mention) {
        int angerPoint = provokeMap.getOrDefault(mention, 0);

        addAngerPoint(angerPoint);
    }

    private void learnMentions(List<String> mentions) {
        int startPoint = 0;
        for (int i = 0; i < mentions.size(); i++) {
            String mention = mentions.get(i);

            provokeMap.put(mention, generateRandomNumberInRange(startPoint, startPoint + ADD_MAX_POINT));
            if (i == mentions.size() - 1) {
                startPoint += ADD_MAX_POINT;
            }
            startPoint += ADD_LAST_POINT;
        }
    }

    // 범위 내의 랜덤값 생성
    private int generateRandomNumberInRange(int min, int max) {
        Random random = new Random();

        return random.nextInt((max - min) + 1) + min;
    }

    public boolean isOverLimit() {
        return anger >= limit;
    }

    private void addAngerPoint(int point) {
        anger += point;
    }

    public int getAnger() {
        return anger;
    }
}
