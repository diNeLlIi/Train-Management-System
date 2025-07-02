package com.example.demo2.Data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TrainRepository extends JpaRepository<Train,String>
{

    @Query("select u from Train u where u.location=?1 and u.destination=?2")
    List<Train> findUserByLocation(String location, String destination);
}
