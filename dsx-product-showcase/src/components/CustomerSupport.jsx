import React, { useState } from "react";
import {
  Card,
  Text,
  ChatInput,
  Note,
  Button,
  MdClose,
  MdSupportAgent,
  StandaloneIcon,
} from "@dsx/react";

const CustomerSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "agent",
      text: "Hello! How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate agent response after a short delay
    setTimeout(() => {
      const agentResponses = [
        "I'd be happy to help with that!",
        "Let me check that for you.",
        "Thanks for your question. Our team is looking into this.",
        "That's a great question. Here's what you need to know...",
        "I understand your concern. Let me suggest a solution.",
      ];

      const randomResponse =
        agentResponses[Math.floor(Math.random() * agentResponses.length)];

      const agentMessage = {
        id: messages.length + 2,
        sender: "agent",
        text: randomResponse,
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, agentMessage]);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  if (!isOpen) {
    return (
      <Button
        variant="primary"
        icon={MdSupportAgent}
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="sr-only">Chat with Support</span>
      </Button>
    );
  }

  return (
    <Card
      variant="shadow"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "350px",
        maxHeight: "500px",
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
      }}
    >
      {/* Chat Header */}
      <div
        style={{
          padding: "var(--size-300)",
          backgroundColor: "var(--color-primary-500)",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--size-200)",
          }}
        >
          <StandaloneIcon icon={MdSupportAgent} color="white" />
          <Text style={{ color: "white" }}>Customer Support</Text>
        </div>
        <Button
          variant="ui-control"
          icon={MdClose}
          onClick={toggleChat}
          style={{ color: "white" }}
        >
          <span className="sr-only">Close</span>
        </Button>
      </div>

      {/* Chat Messages */}
      <div
        style={{
          padding: "var(--size-300)",
          flexGrow: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "var(--size-300)",
          maxHeight: "350px",
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              alignSelf: message.sender === "user" ? "flex-end" : "flex-start",
              maxWidth: "80%",
            }}
          >
            <Note
              variant={message.sender === "user" ? "primary" : "info"}
              style={{
                margin: 0,
                padding: "var(--size-200) var(--size-300)",
              }}
            >
              <Text>{message.text}</Text>
              <Text
                variant="body-small"
                style={{
                  marginTop: "var(--size-100)",
                  opacity: 0.7,
                  textAlign: "right",
                }}
              >
                {formatTime(message.timestamp)}
              </Text>
            </Note>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div
        style={{
          padding: "var(--size-300)",
          borderTop: "1px solid var(--color-neutral-200)",
        }}
      >
        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSend={handleSend}
          placeholder="Type your message here..."
        />
      </div>
    </Card>
  );
};

export default CustomerSupport;
