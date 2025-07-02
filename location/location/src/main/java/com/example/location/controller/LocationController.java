package com.example.location.controller;

import com.example.location.data.Location;
import com.example.location.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping(path = "/locations")
    public List<Location> findAllService(){
        return locationService.getLocation();
    }

    @GetMapping(path = "/locations/{id}")
    public Location findLocationById(@PathVariable int id){
        return locationService.getLocationID(id);
    }

    @PostMapping(path = "/locations")
    public Location createLocation(@RequestBody Location location){
        return locationService.createLocation(location);
    }

    @PutMapping(path = "/locations")
    public Location updateLocation(@RequestBody Location location){
        return locationService.updateLocation(location);
    }

    @DeleteMapping(path = "/locations/{locationID}")
    public Location deleteById(@PathVariable int locationID){
        return locationService.deleteLocation(locationID);
    }

    @GetMapping(path ="/locations",params = "location")
    public List<Location> findByLocation(@RequestParam String location)
    {
        return locationService.findByLocation(location);
    }



}
