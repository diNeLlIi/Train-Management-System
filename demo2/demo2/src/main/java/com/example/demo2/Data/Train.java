package com.example.demo2.Data;

import jakarta.persistence.*;

@Entity
@Table(name="trains1")
public class Train {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="number")
    private String  number;


    @Column(name ="train_name")
    private  String  trainName;

    @Column(name="arrival_time")
    private Double arrivalTime;

    @Column(name="departure_time")
    private Double departureTime;


    @Column(name ="total_coach")
    private int totalCoach;


    @Column(name ="seat_coach")
    private int seatCoach;

    @Column(name ="location")
    private String  location;

    @Column(name ="destination")
    private String  destination;


    @Column(name ="price")
    private double price;



    public Double getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(Double departureTime) {
        this.departureTime = departureTime;
    }

    public Double getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Double arrivalTime) {
        this.arrivalTime = arrivalTime;
    }





    public int getSeatCoach() {
        return seatCoach;
    }

    public void setSeatCoach(int seatCoach) {
        this.seatCoach = seatCoach;
    }



    public String getTrainName() {
        return trainName;
    }

    public void setTrainName(String trainName) {
        this.trainName = trainName;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }



    public int getTotalCoach() {
        return totalCoach;
    }








}
