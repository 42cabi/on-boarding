package com.cabi.greetingCard.user.repository;

import com.cabi.greetingCard.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 개사기 기능 JpaRepository다! 네이밍만으로 함수를 만들어준다는데, 이거 왜 되는거지?
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
