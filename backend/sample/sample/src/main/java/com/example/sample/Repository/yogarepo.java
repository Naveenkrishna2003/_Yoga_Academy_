package com.example.sample.Repository;

// package com.example.sample.partyrepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// import com.example.sample.Entity.eventadd;
import com.example.sample.Entity.yogaentity;
@Repository
public interface yogarepo extends JpaRepository<yogaentity, Integer>
{

}