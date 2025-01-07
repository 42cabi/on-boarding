package com.cabi.greetingCard.dto;

import java.util.Optional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

/**
 * 이미지 파일을 받기 위해 MultipartFile
 */
@AllArgsConstructor
@Getter
public class MessageRequestDto {

	private final String receiverName;
	private final String context;
	private final MultipartFile image;

	public Optional<MultipartFile> getImage() {
		return Optional.ofNullable(image);
	}
}
