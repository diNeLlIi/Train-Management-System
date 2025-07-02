package com.example.payment.controller;

import com.example.payment.data.Payment;
import com.example.payment.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
//@CrossOrigin("http://localhost:3000")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @GetMapping(path = "/payments")
    public List<Payment> findAllService(){
        return paymentService.getPayment();
    }

    @GetMapping(path = "/payments/{id}")
    public Payment findPaymentById(@PathVariable int id){
        return paymentService.getPaymentID(id);
    }

    @PostMapping(path = "/payments")
    public Payment createPayment(@RequestBody Payment payment){
        return paymentService.createPayment(payment);
    }
}
