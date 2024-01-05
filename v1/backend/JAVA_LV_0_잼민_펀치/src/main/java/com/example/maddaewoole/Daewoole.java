package com.example.maddaewoole;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

public class Daewoole {
    private static final int MIN_LIMIT = 80;
    private static final int MAX_LIMIT = 120;
    private int anger;
    private final int limit;
    private Map<String, Integer> provokeMap = new HashMap<>();

    public Daewoole(List<String> mentions) {
        anger = 0;
        limit = generateRandomNumberInRange(MIN_LIMIT, MAX_LIMIT);
        provokeMap = learnMentions(mentions);
    }

    private Map<String, Integer> learnMentions(List<String> mentions) {
        return null;
    }

    // 범위 내의 랜덤값 생성
    private int generateRandomNumberInRange(int min, int max) {
        Random random = new Random();
        return random.nextInt((max - min) + 1) + min;
    }

    public boolean isOverLimit() {
        return anger >= limit;
    }

    public int getAnger() {
        return anger;
    }
}
