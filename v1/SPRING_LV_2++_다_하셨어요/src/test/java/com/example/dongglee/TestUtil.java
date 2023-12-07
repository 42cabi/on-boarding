package com.example.dongglee;

import java.lang.reflect.Field;

public class TestUtil {
	public static void setEntityId(Object entity, Long id)  {
		try {
			Field idField = entity.getClass().getDeclaredField("id");
			idField.setAccessible(true);
			idField.set(entity, id);
		} catch (NoSuchFieldException | IllegalAccessException e) {
			e.printStackTrace();
			throw new RuntimeException("Entity의 id에 접근할 수 없거나, 필드 명이 id가 아닌 것 같습니다!");
		}
	}
}
