package com.example.booking.Service;

import com.example.booking.data.Tickets;
import com.example.booking.data.TicketsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketsService
{
    @Autowired
    private TicketsRepository ticketsRepository;

    public List<Tickets> getTickets()
    {
        return  ticketsRepository.findAll();

    }


    public Tickets getTicketsById(int ticketId)
    {
        Optional<Tickets> tickets = ticketsRepository.findById(ticketId);

        if(tickets.isPresent())
        {
            return  tickets.get();
        }
        return null;
    }

    public Tickets bookTickets(Tickets tickets)
    {
        return ticketsRepository.save(tickets);
    }

    public Tickets updateeTickets(Tickets tickets)
    {
        return ticketsRepository.save(tickets);
    }


    public Tickets deleteTickets(int ticketId)
    {
        Optional<Tickets> tickets = ticketsRepository.findById(ticketId);
        if(tickets.isPresent())
        {
            ticketsRepository.deleteById(ticketId);
            return tickets.get();
        }
        return null;
    }




}
