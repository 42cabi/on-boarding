package com.example.bot.util;

import lombok.RequiredArgsConstructor;

import java.io.OutputStream;

import static org.assertj.core.api.Assertions.assertThat;

@RequiredArgsConstructor
public class OutputAssertions {

	private final OutputStream outputStream;

	public void assertOutput(String expectedOutput) {
		String output = outputStream.toString().trim();
		assertThat(output).isEqualTo(expectedOutput);
	}
}
