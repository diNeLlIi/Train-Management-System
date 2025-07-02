package com.example.location.data;

import jakarta.persistence.*;

@Entity
@Table(name = "destination1")
public class Location {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "locID")
    private int locID;

    @Column(name = "location")
    private String location;

    @Column(name = "description")
    private String description;

    public String getMilestones() {
        return milestones;
    }

    public void setMilestones(String milestones) {
        this.milestones = milestones;
    }

    @Column(name = "milestones")
    private String milestones;



    public int getLocID() {
        return locID;
    }

    public void setLocID(int locID) {
        this.locID = locID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
