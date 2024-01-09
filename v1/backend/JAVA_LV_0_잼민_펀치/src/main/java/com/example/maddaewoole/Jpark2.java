package com.example.maddaewoole;


import java.util.List;

public class Jpark2 {
	private List<String> str = List.of("'당신의 지각비, 회식비로 대체되었다'", "'코딩 그렇게 하는 거 아닌데'", "'오늘 저녁은 감탄계'");

	String prov(){
		int random_num = (int) ((Math.random()*10000)%3);
		return str.get(random_num);
	}

	public List<String> getStr() {
		return str;
	}
}
