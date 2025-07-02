package com.example.location.service;

import com.example.location.data.Location;
import com.example.location.data.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocationService {
    @Autowired
    private LocationRepository locationRepository;

    public List<Location> getLocation(){
        return locationRepository.findAll();
    }

    public Location getLocationID(int id){
        Optional<Location> location = locationRepository.findById(id);
        if(location.isPresent()){
            return location.get();
        }
        return null;
    }

    public Location createLocation(Location location){
        return locationRepository.save(location);
    }

    public Location updateLocation(Location location){
        return locationRepository.save(location);
    }

    public Location deleteLocation(int locID){
        Optional<Location> location = locationRepository.findById(locID);
        if(location.isPresent()){
            locationRepository.deleteById(locID);
            return location.get();
        }
        return null;
    }

    public List<Location> findByLocation(String location)
    {
        return locationRepository.findByLocation(location);
    }


}
