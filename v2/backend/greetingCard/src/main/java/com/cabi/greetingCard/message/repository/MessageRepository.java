package com.cabi.greetingCard.message.repository;

import com.cabi.greetingCard.message.domain.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

	Page<Message> findAllByReceiverName(String receiverName, Pageable pageable);

	Page<Message> findAllBySenderName(String name, Pageable pageable);
}
