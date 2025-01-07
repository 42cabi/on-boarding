package com.cabi.greetingCard.mapper;

import static org.mapstruct.NullValueMappingStrategy.RETURN_DEFAULT;

import com.cabi.greetingCard.dto.MessageResponseDto;
import com.cabi.greetingCard.message.domain.Message;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring",
		nullValueMappingStrategy = RETURN_DEFAULT,
		nullValueMapMappingStrategy = RETURN_DEFAULT,
		nullValueIterableMappingStrategy = RETURN_DEFAULT)

public interface MessageMapper {

	MessageResponseDto toMessageResponseDto(Message message, boolean isMine);
}
