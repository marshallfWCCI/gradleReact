package org.wcci.mgflax.restControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.wcci.mgflax.model.Friend;
import org.wcci.mgflax.repositories.FriendRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/friends")
public class FriendController {
    private final FriendRepository friendRepository;

    public FriendController(final @Autowired FriendRepository friendRepository) {
        this.friendRepository = friendRepository;
    }

    @GetMapping
    public Iterable<Friend> list() {
        return friendRepository.findAll();
    }

    @PostMapping
    public Friend add(@RequestBody final Friend friend) {
        return friendRepository.save(friend);
    }
}