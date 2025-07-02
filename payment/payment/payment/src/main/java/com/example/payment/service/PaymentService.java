package com.example.payment.service;

import com.example.payment.data.Payment;
import com.example.payment.data.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> getPayment(){
        return paymentRepository.findAll();
    }

    public Payment getPaymentID (int id){
        Optional<Payment> payment = paymentRepository.findById(id);
        if(payment.isPresent()){
            return payment.get();
        }
        return null;
    }
    public Payment createPayment (Payment payment){
        return paymentRepository.save(payment);
    }
}
