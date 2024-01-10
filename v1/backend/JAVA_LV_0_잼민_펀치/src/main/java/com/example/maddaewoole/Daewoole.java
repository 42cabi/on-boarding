package com.example.maddaewoole;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Daewoole {
	public int now_anger = 0;
	public int anger_threshold;
	public Map<String, Integer> anger_map = new HashMap<>();

	public int getAnger_threshold() {
		return anger_threshold;
	}
	Daewoole(List<String> str){
		anger_threshold = (int) ((Math.random() * 40) + 80);
		anger_map.put(str.get(0), (int)(Math.random() * 10000) % 20);
		anger_map.put(str.get(1), (int)(Math.random() * 20) + 10);
		anger_map.put(str.get(2), (int)(Math.random() * 20) + 30);
	}
	int beProvinced(String str){
		return anger_map.get(str);
	}
}