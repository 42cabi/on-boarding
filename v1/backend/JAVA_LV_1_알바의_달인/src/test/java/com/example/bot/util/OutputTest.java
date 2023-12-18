package com.example.bot.util;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

public abstract class OutputTest {

	private final PrintStream originalOut = System.out;
	private final ByteArrayOutputStream outputCaptor = new ByteArrayOutputStream();
	public OutputAssertions outputAssertions;

	@BeforeEach
	public void setUp() {
		System.setOut(new PrintStream(outputCaptor));
		outputAssertions = new OutputAssertions(outputCaptor);
	}

	@AfterEach
	public void tearDown() {
		System.setOut(originalOut);
	}
}
