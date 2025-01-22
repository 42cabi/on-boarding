package com.cabi.greetingCard.user.repository;

import com.cabi.greetingCard.user.domain.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 개사기 기능 JpaRepository다! 네이밍만으로 함수를 만들어준다는데, 이거 왜 되는거지?
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	boolean existsByName(String name);

	Optional<User> findByName(String name);

	List<User> findAllByNameStartingWithOrderByName(String input);
}
