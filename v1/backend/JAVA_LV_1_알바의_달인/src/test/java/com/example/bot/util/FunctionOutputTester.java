package com.example.bot.util;

import lombok.RequiredArgsConstructor;

import java.util.function.Consumer;

@RequiredArgsConstructor
public class FunctionOutputTester<I> {
	private final Consumer<I> function;
	private final OutputAssertions outputAssertions;

	public FunctionOutputTester<I> when(I input) {
		function.accept(input);
		return this;
	}

	public void then(String expectedOutput) {
		outputAssertions.assertOutput(expectedOutput);
	}
}
