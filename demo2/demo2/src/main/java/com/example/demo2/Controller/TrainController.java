package com.example.demo2.Controller;

import com.example.demo2.Data.Train;
import com.example.demo2.Service.TrainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class TrainController
{
    @Autowired
    private TrainService trainService;

    @GetMapping(path ="/trains")
    public List<Train> findAllTrains()
    {
        return trainService.getTrains();
    }



    @GetMapping(path ="/trains/{number}")
    public Train findTrainById(@PathVariable String number)
    {
        return trainService.getTrainById( number);
    }

    @PostMapping(path = "/trains")
    public Train createTrain(@RequestBody Train train)
    {

        return trainService.createTrain(train);
    }

    @PutMapping(path = "/trains")
    public Train updateTrain(@RequestBody Train train)
    {
        return  trainService.updateeTrain(train);

    }

    @DeleteMapping(path = "/trains/{number}")
    public Train deleteById(@PathVariable String number)
    {
        return trainService.deleteTrain(number);
    }

    @GetMapping(path ="/trains",params = "location")
    public List<Train> findTrainsByname(@RequestParam String location,String destination)
    {
        return trainService.findUserByLocation(location,destination);
    }

}
