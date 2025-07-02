package com.example.booking.contoller;

import com.example.booking.Service.TicketsService;
import com.example.booking.data.Tickets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class TicketsController
{
    @Autowired
    private TicketsService ticketsService;

    @GetMapping(path ="/tickets")
    public List<Tickets> findAllTickets()
    {
        return ticketsService.getTickets();
    }


    @GetMapping(path ="/tickets/{ticketId}")
    public Tickets findTicketsById(@PathVariable int ticketId)
    {
        return ticketsService.getTicketsById(ticketId);
    }

    @PostMapping(path = "/tickets")
    public Tickets bookTickets(@RequestBody Tickets tickets)
    {

        return ticketsService.bookTickets(tickets);
    }

    @PutMapping(path = "/tickets")
    public Tickets updateTickets(@RequestBody Tickets tickets)
    {
        return  ticketsService.updateeTickets(tickets);

    }

    @DeleteMapping(path = "/tickets/{ticketId}")
    public Tickets deleteById(@PathVariable int ticketId)
    {
        return ticketsService.deleteTickets(ticketId);
    }




}
