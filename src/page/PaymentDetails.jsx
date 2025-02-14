import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import PaymentDetailsForm from '../form/PaymentDetailsForm';

const PaymentDetails = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col my-3">
        <h1 className="text-3xl font-semibold">Payment Details</h1>
        {true ? (
          <Card>
            <CardHeader>
              <CardTitle>HDFC BANK</CardTitle>

              <CardDescription>
                <span>A/C NO: </span>
                <span>45*************542</span>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex">
                <p>A/C Holder :</p>
                <p>Surendra Kumar</p>
              </div>
              <div className="flex">
                <p>IFSC :</p>
                <span> HDGGF58455</span>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Dialog>
            <DialogTrigger className="h-10 px-4  rounded-2xl bg-slate-900 text-white text-sm">
              Add Payment Details
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add your Account Details</DialogTitle>
                <PaymentDetailsForm />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}

export default PaymentDetails