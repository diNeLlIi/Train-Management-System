package com.example.payment.data;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name ="train_payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="payment_ID")
    private int paymentID;

    @Column(name ="user_ID")
    private int userID;

    @Column(name ="payment_Type")
    private String paymentType;

    @Column(name ="card_No")
    private int cardNo;

    @Column(name ="exp_Date")
    private Date expDate;

    @Column(name = "CVC")
    private int CVC;

    public int getPaymentID() {
        return paymentID;
    }

    public void setPaymentID(int paymentID) {
        this.paymentID = paymentID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public int getCardNo() {
        return cardNo;
    }

    public void setCardNo(int cardNo) {
        this.cardNo = cardNo;
    }

    public Date getExpDate() {
        return expDate;
    }

    public void setExpDate(Date expDate) {
        this.expDate = expDate;
    }

    public int getCVC() {
        return CVC;
    }

    public void setCVC(int CVC) {
        this.CVC = CVC;
    }
}
