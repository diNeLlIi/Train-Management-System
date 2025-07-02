package com.example.booking.data;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="tickets1")
public class Tickets
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ticket_id")
    private int ticketId;

    @Column(name="customer_id")
    private int customerId;

    @Column(name="train_id")
    private String trainId;

    @Column(name="arrival_time")
    private Double arrivalTime;

    @Column(name="departure_time")
    private Double departureTime;

    @Column(name="location")
    private String location;

    @Column(name="destination")
    private String destination;

    @Column(name="date")
    private Date date;

    @Column(name="passengers")
    private int passengers;

    @Column(name="price")
    private Double price;






    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getTrainId() {
        return trainId;
    }

    public void setTrainId(String trainId) {
        this.trainId = trainId;
    }

    public Double getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Double arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public Double getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(Double departureTime) {
        this.departureTime = departureTime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getPassengers() {
        return passengers;
    }

    public void setPassengers(int passengers) {
        this.passengers = passengers;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public int getTicketId() {
        return ticketId;
    }

    public void setTicketId(int ticketId) {
        this.ticketId = ticketId;
    }


}
