package com.example.maddaewoole;

import java.util.List;
import java.util.Random;

public class Jpark2 {
    private final List<String> mentions = List.of("당신의 지각비, 회식비로 대체되었다", "코딩 그렇게 하는거 아닌데", "오늘 저녁은 감탄계");

    public String provoke() {
        int randomIdx = generateRandomNumberByMentionCount();
        
        return mentions.get(randomIdx);
    }

    private int generateRandomNumberByMentionCount() {
        int range = mentions.size();

        Random random = new Random();
        return random.nextInt(range);
    }

    public List<String> getMentions() {
        return mentions;
    }
}
