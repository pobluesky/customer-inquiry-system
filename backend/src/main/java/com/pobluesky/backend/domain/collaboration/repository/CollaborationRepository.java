package com.pobluesky.backend.domain.collaboration.repository;

import com.pobluesky.backend.domain.collaboration.entity.Collaboration;
import com.pobluesky.backend.domain.question.entity.Question;

import com.pobluesky.backend.domain.user.entity.Manager;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CollaborationRepository extends JpaRepository<Collaboration, Long> {

    @Query("SELECT c FROM Collaboration c WHERE c.colId = :collaborationId AND c.question = :question")
    Optional<Collaboration> findByIdAndQuestion(@Param("collaborationId") Long collaborationId, @Param("question") Question question);

    @Query("SELECT c FROM Collaboration c WHERE c.colRequestManager = :requestManager AND c.colResponseManager = :responseManager")
    Optional<Collaboration> findByRequestMananerAndResponseManager(Manager requestManager, Manager responseManager);

    @Query("select c "
        + "from Collaboration c "
        + "where c.colRequestManager = :reqManager and c.colResponseManager = :resManager "
        + "or c.colRequestManager = :reqManager and c.colResponseManager = :resManager")
    Optional<Collaboration> findByColRequestManagerAndColResponseManager(Manager reqManager, Manager resManager);
}
