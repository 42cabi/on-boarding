package com.cabi.greetingCard.message.domain;

import com.cabi.greetingCard.exception.ExceptionStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "MESSAGE")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Message {

	private static final Integer MAX_LENGTH = 42;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;

	@Column(name = "SENDER_NAME", nullable = false)
	private String senderName;

	@Column(name = "RECEIVER_NAME", nullable = false)
	private String receiverName;

	@Column(name = "CONTEXT", nullable = false)
	private String context;

	@Column(name = "IMAGE_URL")
	private String imageUrl;

	@Column(name = "CREATED", nullable = false)
	private LocalDateTime created;

	protected Message(String senderName, String receiverName, String context, String imageUrl,
			LocalDateTime now) {
		this.senderName = senderName;
		this.receiverName = receiverName;
		this.context = context;
		this.imageUrl = imageUrl;
		this.created = now;
	}

	public static Message of(String senderName, String receiverName, String context,
			String imageUrl,
			LocalDateTime now) {
		Message message = new Message(senderName, receiverName, context, imageUrl, now);
		if (!message.isValid()) {
			throw ExceptionStatus.INVALID_FORMAT_MESSAGE.asGreetingException();
		}
		return message;
	}

	private boolean isValid() {
		if (this.context.length() > MAX_LENGTH || this.context.isBlank()) {
			return false;
		}

		String extension = imageUrl.substring(imageUrl.lastIndexOf('.') + 1);
		List<String> allowedExtensions = Arrays.asList("jpg", "jpeg", "png");

		return !allowedExtensions.contains(extension);
	}

	public void updateContext(String context) {
	}
}
