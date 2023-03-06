package org.wcci.mgflax.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wcci.mgflax.model.Friend;


public interface FriendRepository extends CrudRepository<Friend, Long> {
}

