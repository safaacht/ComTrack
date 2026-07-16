package com.comtrack.repository;

import com.comtrack.entity.User;
import com.comtrack.entity.Role;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import  org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
    List<User> findByRole(Role role);
    
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
}
