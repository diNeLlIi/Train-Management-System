package com.example.location.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, Integer>
{

    @Query("select l from Location l where l.location=?1 ")
    List<Location> findByLocation(String location);


}
