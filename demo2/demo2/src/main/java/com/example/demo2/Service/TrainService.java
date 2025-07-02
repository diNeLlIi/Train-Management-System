package com.example.demo2.Service;

import com.example.demo2.Data.Train;
import com.example.demo2.Data.TrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrainService
{
    @Autowired
    private TrainRepository trainRepository;

    public List<Train> getTrains()
    {
        return  trainRepository.findAll();

    }

    public Train getTrainById(String number)
    {
        Optional<Train> train = trainRepository.findById(number);

        if(train.isPresent())
        {
            return  train.get();
        }
        return null;
    }


    public Train createTrain(Train train)
    {
        return trainRepository.save(train);
    }

    public Train updateeTrain(Train train)
    {


        return trainRepository.save(train);
    }
    public Train deleteTrain(String number)
    {
        Optional<Train> train = trainRepository.findById(number);
        if(train.isPresent())
        {
            trainRepository.deleteById(number);
            return train.get();
        }
        return null;
    }

    public List<Train> findUserByLocation(String location,String destination)
    {
        return trainRepository.findUserByLocation(location,destination);
    }

}
