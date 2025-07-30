import React, { useState } from "react";
import {
  Card,
  Text,
  Button,
  Note,
  MdShoppingCart,
  MdPayment,
  MdLocalShipping,
  MdCheck,
} from "@dsx/react";

const CheckoutProgress = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    {
      id: 1,
      title: "Cart",
      icon: MdShoppingCart,
      description: "Review your items",
    },
    {
      id: 2,
      title: "Payment",
      icon: MdPayment,
      description: "Choose payment method",
    },
    {
      id: 3,
      title: "Shipping",
      icon: MdLocalShipping,
      description: "Select shipping options",
    },
    {
      id: 4,
      title: "Confirmation",
      icon: MdCheck,
      description: "Complete your order",
    },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepId) => {
    // Only allow clicking on completed steps or the next available step
    if (stepId <= currentStep || stepId === currentStep + 1) {
      setCurrentStep(stepId);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <Text
              variant="headline-4"
              style={{ marginBottom: "var(--size-300)" }}
            >
              Your Cart
            </Text>
            <div style={{ marginBottom: "var(--size-400)" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "var(--size-300)",
                  borderBottom: "1px solid var(--color-neutral-200)",
                }}
              >
                <Text>Premium Headphones</Text>
                <Text>$249.99</Text>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "var(--size-300)",
                  borderBottom: "1px solid var(--color-neutral-200)",
                }}
              >
                <Text>Wireless Speaker</Text>
                <Text>$129.99</Text>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "var(--size-300)",
                  fontWeight: "bold",
                }}
              >
                <Text>Total</Text>
                <Text>$379.98</Text>
              </div>
            </div>
            <Note variant="info" title="Promo Available">
              Use code SUMMER20 for 20% off your order!
            </Note>
          </div>
        );
      case 2:
        return (
          <div>
            <Text
              variant="headline-4"
              style={{ marginBottom: "var(--size-300)" }}
            >
              Payment Method
            </Text>
            <div style={{ marginBottom: "var(--size-400)" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--size-300)",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-200)",
                  }}
                >
                  <input type="radio" name="payment" defaultChecked />
                  <Text>Credit Card</Text>
                </label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-200)",
                  }}
                >
                  <input type="radio" name="payment" />
                  <Text>PayPal</Text>
                </label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-200)",
                  }}
                >
                  <input type="radio" name="payment" />
                  <Text>Bank Transfer</Text>
                </label>
              </div>
            </div>
            <Note variant="success" title="Secure Payment">
              All payment information is encrypted and secure.
            </Note>
          </div>
        );
      case 3:
        return (
          <div>
            <Text
              variant="headline-4"
              style={{ marginBottom: "var(--size-300)" }}
            >
              Shipping Options
            </Text>
            <div style={{ marginBottom: "var(--size-400)" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--size-300)",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-200)",
                  }}
                >
                  <input type="radio" name="shipping" defaultChecked />
                  <div>
                    <Text>Standard Shipping</Text>
                    <Text variant="body-small">3-5 business days - Free</Text>
                  </div>
                </label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-200)",
                  }}
                >
                  <input type="radio" name="shipping" />
                  <div>
                    <Text>Express Shipping</Text>
                    <Text variant="body-small">1-2 business days - $9.99</Text>
                  </div>
                </label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-200)",
                  }}
                >
                  <input type="radio" name="shipping" />
                  <div>
                    <Text>Next Day Delivery</Text>
                    <Text variant="body-small">Next business day - $19.99</Text>
                  </div>
                </label>
              </div>
            </div>
            <Note variant="warning" title="Note">
              Next day delivery orders must be placed before 2pm.
            </Note>
          </div>
        );
      case 4:
        return (
          <div>
            <Text
              variant="headline-4"
              style={{ marginBottom: "var(--size-300)" }}
            >
              Order Confirmation
            </Text>
            <div style={{ marginBottom: "var(--size-400)" }}>
              <Text>Your order has been placed successfully!</Text>
              <Text style={{ marginTop: "var(--size-300)" }}>
                Order #: <strong>DSX-12345</strong>
              </Text>
              <Text>
                Estimated delivery: <strong>August 5, 2025</strong>
              </Text>
            </div>
            <Note variant="success" title="Thank You!">
              A confirmation email has been sent to your email address.
            </Note>
          </div>
        );
      default:
        return null;
    }
  };

  // Create a custom progress steps component instead of using ProgressSteps
  const renderProgressSteps = () => {
    return (
      <div style={{ marginBottom: "var(--size-500)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Progress bar */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              left: "0",
              right: "0",
              height: "4px",
              backgroundColor: "var(--color-neutral-200)",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "24px",
              left: "0",
              width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
              height: "4px",
              backgroundColor: "var(--color-primary-500)",
              zIndex: 1,
              transition: "width 0.3s ease",
            }}
          />

          {/* Steps */}
          {steps.map((step) => {
            const isCompleted = currentStep > step.id;
            const isCurrent = currentStep === step.id;
            const isPending = currentStep < step.id;

            return (
              <div
                key={step.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 2,
                  cursor: isCompleted || isCurrent ? "pointer" : "default",
                }}
                onClick={() => handleStepClick(step.id)}
              >
                {/* Step circle */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: isCompleted
                      ? "var(--color-success-500)"
                      : isCurrent
                      ? "var(--color-primary-500)"
                      : "var(--color-neutral-200)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color:
                      isCompleted || isCurrent
                        ? "white"
                        : "var(--color-neutral-600)",
                    marginBottom: "var(--size-200)",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  {isCompleted ? (
                    <MdCheck size={24} />
                  ) : (
                    <step.icon size={24} />
                  )}
                </div>

                {/* Step title */}
                <Text
                  variant="label"
                  style={{
                    color:
                      isCompleted || isCurrent
                        ? "var(--color-neutral-900)"
                        : "var(--color-neutral-600)",
                    fontWeight: isCurrent ? "bold" : "normal",
                    textAlign: "center",
                  }}
                >
                  {step.title}
                </Text>

                {/* Step description */}
                <Text
                  variant="body-small"
                  style={{
                    color: "var(--color-neutral-600)",
                    textAlign: "center",
                    maxWidth: "120px",
                  }}
                >
                  {step.description}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="checkout-progress">
      <Text variant="headline-3" style={{ marginBottom: "var(--size-400)" }}>
        Checkout Process
      </Text>

      <Card variant="shadow">
        <div style={{ padding: "var(--size-400)" }}>
          {renderProgressSteps()}

          <div style={{ margin: "var(--size-500) 0" }}>
            {renderStepContent()}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "var(--size-400)",
            }}
          >
            <Button
              variant="secondary"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={currentStep === totalSteps}
            >
              {currentStep === totalSteps - 1 ? "Complete Order" : "Next"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CheckoutProgress;
